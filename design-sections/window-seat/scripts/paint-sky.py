"""Paints the view out of the airplane window: a sunset over a sea of clouds,
with Mt. Hood's snow cone breaking through. Writes the sharp plate and the
fogged plate the glass shader mixes between.

Run:  python3 scripts/paint-sky.py   (needs numpy and Pillow)
"""
import numpy as np
from PIL import Image, ImageFilter

W, H = 2400, 1500
rng = np.random.default_rng(7)
yy, xx = np.mgrid[0:H, 0:W].astype(np.float32)
u, v = xx / W, yy / H


def fbm(w, h, octaves=6, base=4, seed=0, persistence=0.5):
    """fractal value noise in 0..1"""
    r = np.random.default_rng(seed)
    out = np.zeros((h, w), np.float32)
    amp, total = 1.0, 0.0
    for o in range(octaves):
        n = base * 2 ** o
        g = r.random((n + 1, int(n * w / h) + 2)).astype(np.float32)
        img = Image.fromarray((g * 255).astype(np.uint8)).resize((w, h), Image.BICUBIC)
        out += amp * np.asarray(img, np.float32) / 255
        total += amp
        amp *= persistence
    return out / total


def mix(a, b, t):
    t = np.clip(t, 0, 1)[..., None]
    return a * (1 - t) + b * t


def sstep(a, b, x):
    t = np.clip((x - a) / (b - a), 0, 1)
    return t * t * (3 - 2 * t)


C = lambda h: np.array([int(h[i:i + 2], 16) for i in (1, 3, 5)], np.float32)

# ---- sky: deep navy overhead into violet, rose and a low coral band
sky = mix(C('#0B1B4F'), C('#3B2E78'), sstep(0.0, 0.30, v))
sky = mix(sky, C('#A0518A'), sstep(0.22, 0.42, v))
sky = mix(sky, C('#E8798A'), sstep(0.36, 0.48, v))
sky = mix(sky, C('#F49A78'), sstep(0.44, 0.53, v))
sun_x, sun_y = 0.80, 0.42
d = np.sqrt(((u - sun_x) * W / H) ** 2 + (v - sun_y) ** 2)
sky = mix(sky, C('#FFC9A6'), np.exp(-d * 5.5) * 0.85)          # glow around the sun
sky = mix(sky, C('#FFF1E4'), sstep(0.035, 0.022, d))            # the sun disc
streak = fbm(W, H, 5, 3, seed=3)
wisps = sstep(0.55, 0.75, streak) * sstep(0.12, 0.28, v) * sstep(0.46, 0.34, v)
sky = mix(sky, C('#F3A7B3'), wisps * 0.45)                       # high pink cirrus

def noise1d(x, freq, seed):
    r = np.random.default_rng(seed)
    pts = r.random(int(freq) + 3).astype(np.float32) - 0.5
    return np.interp(x * freq, np.arange(len(pts)), pts)


def ridge1d(x, seed, octaves=6, f0=6):
    out, amp = np.zeros_like(x), 1.0
    for o in range(octaves):
        out += amp * noise1d(x, f0 * 2 ** o, seed + o)
        amp *= 0.55
    return out


def fbm_aniso(w, h, sx, sy, octaves=5, seed=0):
    r = np.random.default_rng(seed)
    out, amp, tot = np.zeros((h, w), np.float32), 1.0, 0.0
    for o in range(octaves):
        g = r.random((int(sy * 2 ** o) + 2, int(sx * 2 ** o) + 2)).astype(np.float32)
        out += amp * np.asarray(Image.fromarray((g * 255).astype(np.uint8)).resize((w, h), Image.BICUBIC), np.float32) / 255
        tot += amp
        amp *= 0.5
    return out / tot


ux = np.linspace(0, 1, W, dtype=np.float32)

# ---- Mt. Hood: a sharp summit with a long shoulder to the south-west
peak_x, peak_y, base_y = 0.36, 0.13, 0.64
half = np.abs(ux - peak_x)
reach = np.where(ux < peak_x, 0.25, 0.30)
prof = peak_y + (base_y - peak_y) * np.clip(half / reach, 0, 1) ** 0.78
prof -= 0.035 * np.exp(-((ux - (peak_x - 0.085)) / 0.035) ** 2)            # the shoulder
prof += ridge1d(ux, 11) * 0.03 * np.clip(half / 0.05, 0, 1)
top = prof[None, :]
mountain = sstep(top - 0.0015, top + 0.0015, v)
streaks = fbm_aniso(W, H, 60, 3, 5, seed=13)                                 # fall-line gullies
light_side = sstep(-0.01, 0.025, (u - peak_x) + (streaks - 0.5) * 0.05)
depth = (v - top) / (base_y - peak_y)
rock_amt = sstep(0.58, 0.72, streaks + depth * 0.45) * sstep(0.0, 0.05, depth)
snow = mix(C('#5F6AA8'), C('#FFD4D2'), light_side)                           # blue shade, alpenglow
snow = mix(snow, C('#FFF0EC'), light_side * sstep(0.12, 0.0, depth) * 0.6)
rock = mix(C('#25284A'), C('#7A4A62'), light_side)
face = mix(snow, rock, rock_amt * 0.85)
face = mix(face, face * 0.82, (1 - light_side) * sstep(0.0, 0.3, depth))
img = mix(sky, face, mountain)

# ---- the cloud sea: billowing domes, lit pink on top, violet underneath
def cloud_layer(img, top_base, amp, seed, light, dark, alpha):
    r = np.random.default_rng(seed)
    k = 60.0                                                      # smooth-max sharpness
    acc = np.zeros(W, np.float64)
    for n_d, lo, hi, gain in ((26, 0.04, 0.10, 1.0), (110, 0.008, 0.028, 0.55)):
        for _ in range(n_d):
            c, rad = r.random(), lo + r.random() * (hi - lo)
            dome = gain * rad * np.sqrt(np.clip(1 - ((ux - c) / rad) ** 2, 0, 1))
            acc += np.exp(k * dome)
    domes = (np.log(acc / acc.min()) / k).astype(np.float32)
    domes = np.convolve(domes, np.ones(9) / 9, mode='same')
    ytop = (top_base - domes * amp * W / H)[None, :]
    tex = fbm(W, H, 6, 8, seed=seed + 1)
    inside = v - ytop
    cover = sstep(-0.004, 0.01, inside + (tex - 0.5) * 0.01)
    shade_t = sstep(0.0, 0.2, inside * (0.7 + tex * 0.6) + (tex - 0.5) * 0.06)
    col = mix(light, dark, shade_t)
    col = mix(col, C('#FFE9DE'), np.exp(-np.abs(u - sun_x) * 3.5) * sstep(0.03, 0.0, inside) * 0.7)
    return mix(img, col, cover * alpha)

img = cloud_layer(img, 0.51, 0.8, 41, C('#FBC3BE'), C('#7C67A3'), 1.0)
img = cloud_layer(img, 0.64, 0.9, 61, C('#F2AFB8'), C('#5E4F8C'), 1.0)
img = cloud_layer(img, 0.80, 1.0, 81, C('#E9A2B4'), C('#4A3F7A'), 1.0)

img += (rng.random((H, W, 1)).astype(np.float32) - 0.5) * 3          # film grain
sharp = Image.fromarray(np.clip(img, 0, 255).astype(np.uint8))
sharp.save('src/assets/window-view.webp', 'WEBP', quality=82, method=6)

# the milky plate: soft, pale, a little cooler
fog = sharp.resize((W // 4, H // 4), Image.BICUBIC).filter(ImageFilter.GaussianBlur(9))
fog = Image.blend(fog, Image.new('RGB', fog.size, (226, 222, 232)), 0.38)
fog.save('src/assets/window-view-fog.webp', 'WEBP', quality=80)
print('painted', sharp.size, fog.size)
