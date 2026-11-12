"""Cuts the chroma-green glass out of the cabin photo so the live sky shows
through, and records where each window sits.

Run:  python3 scripts/key-cabin.py path/to/cabin.png
Writes src/assets/cabin.webp (with alpha) and src/cabin-windows.json
(window boxes as fractions of the photo, left to right).
"""
import json
import sys

import numpy as np
from PIL import Image
from scipy import ndimage

src = sys.argv[1]
im = Image.open(src).convert('RGB')
a = np.asarray(im, np.float32)
r, g, b = a[..., 0], a[..., 1], a[..., 2]
green = g - np.maximum(r, b)                       # how strongly a pixel reads as key green


def sstep(e0, e1, x):
    t = np.clip((x - e0) / (e1 - e0), 0, 1)
    return t * t * (3 - 2 * t)


alpha = 1 - sstep(35, 95, green)
# despill: pull the green fringe on the bezel edges back to neutral
spill = np.clip(green, 0, None) * (alpha > 0.02)
a[..., 1] = np.where(spill > 0, g - spill * 0.9, g)

# windows = the large connected see-through regions
holes = alpha < 0.5
lab, n = ndimage.label(holes)
H, W = holes.shape
wins = []
for k, sl in enumerate(ndimage.find_objects(lab), start=1):
    ys, xs = sl
    area = (lab[sl] == k).sum()
    if area < W * H * 0.004:
        continue
    wins.append({'x': (xs.start + xs.stop) / 2 / W, 'y': (ys.start + ys.stop) / 2 / H,
                 'w': (xs.stop - xs.start) / W, 'h': (ys.stop - ys.start) / H})
    # fill the window fully (no stray specks of glass colour left inside)
    inner = ndimage.binary_fill_holes(lab[sl] == k)
    alpha[sl][inner] = np.minimum(alpha[sl][inner], 0.0 + alpha[sl][inner] * (alpha[sl][inner] > 0.5))
wins.sort(key=lambda o: o['x'])

out = np.dstack([np.clip(a, 0, 255), alpha * 255]).astype(np.uint8)
Image.fromarray(out, 'RGBA').save('src/assets/cabin.webp', 'WEBP', quality=88, method=6)
json.dump({'width': W, 'height': H, 'windows': wins}, open('src/cabin-windows.json', 'w'), indent=2)
print(f'{len(wins)} windows', [(round(o["x"], 3), round(o["y"], 3)) for o in wins])
