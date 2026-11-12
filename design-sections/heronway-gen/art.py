"""Heronway illustration set: layered flat-vector scenes with atmospheric depth.
Every gradient id is prefixed with a uid so many SVGs can share one HTML page."""

def _grad(uid, name, stops, vertical=True):
    x2, y2 = ('0', '1') if vertical else ('1', '0')
    s = ''.join(f'<stop offset="{o}" stop-color="{c}"{f" stop-opacity=\"{a}\"" if a is not None else ""}/>' for o, c, a in stops)
    return f'<linearGradient id="{uid}-{name}" x1="0" y1="0" x2="{x2}" y2="{y2}">{s}</linearGradient>'

def _glow(uid, name, color, op=0.9):
    return (f'<radialGradient id="{uid}-{name}"><stop offset="0" stop-color="{color}" stop-opacity="{op}"/>'
            f'<stop offset=".45" stop-color="{color}" stop-opacity="{op*0.35}"/><stop offset="1" stop-color="{color}" stop-opacity="0"/></radialGradient>')

def _grain(uid):
    return (f'<filter id="{uid}-grain" x="0" y="0" width="100%" height="100%"><feTurbulence type="fractalNoise" baseFrequency=".9" numOctaves="2" stitchTiles="stitch"/>'
            f'<feColorMatrix values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 .07 0"/><feComposite in2="SourceGraphic" operator="in"/></filter>')

def _svg(uid, w, h, defs, body, label=None):
    a = f'role="img" aria-label="{label}"' if label else 'aria-hidden="true"'
    return (f'<svg viewBox="0 0 {w} {h}" preserveAspectRatio="xMidYMid slice" {a} xmlns="http://www.w3.org/2000/svg">'
            f'<defs>{defs}{_grain(uid)}</defs>{body}<rect width="{w}" height="{h}" filter="url(#{uid}-grain)" fill="#000"/></svg>')

def _clouds(x, y, s, fill, op):
    return (f'<g fill="{fill}" opacity="{op}"><ellipse cx="{x}" cy="{y}" rx="{34*s}" ry="{9*s}"/><ellipse cx="{x-14*s}" cy="{y-6*s}" rx="{14*s}" ry="{9*s}"/>'
            f'<ellipse cx="{x+6*s}" cy="{y-9*s}" rx="{17*s}" ry="{11*s}"/></g>')

def _pines(y, xs, h, fill):
    return ''.join(f'<path d="M{x} {y} l{h*0.28:.1f} 0 l-{h*0.12:.1f} -{h*0.32:.1f} l{h*0.08:.1f} 0 l-{h*0.12:.1f} -{h*0.3:.1f} l{h*0.06:.1f} 0 L{x+h*0.14:.1f} {y-h:.1f} L{x+h*0.06-h*0.06:.1f} {y-h*0.62:.1f} l{h*0.06:.1f} 0 l-{h*0.12:.1f} {h*0.3:.1f} l{h*0.08:.1f} 0Z" fill="{fill}"/>' for x in xs)

# ---------------------------------------------------------------- destinations
def harbour(uid, label):
    d = (_grad(uid, 'sky', [(0, '#2f4e86', None), (.55, '#c99ab0', None), (1, '#f4c7a6', None)]) + _glow(uid, 'sun', '#ffe2c4') +
         _grad(uid, 'sea', [(0, '#7e8fb8', None), (1, '#24365e', None)]))
    b = (f'<rect width="320" height="200" fill="url(#{uid}-sky)"/><circle cx="214" cy="104" r="70" fill="url(#{uid}-sun)"/><circle cx="214" cy="104" r="15" fill="#fff1e2"/>'
         + _clouds(84, 46, 1.2, '#f7dbe2', .55) + _clouds(262, 34, .8, '#f7dbe2', .4) +
         '<path d="M0 118 Q60 100 120 112 T240 106 T320 110 V130 H0Z" fill="#6f6f9a" opacity=".55"/>'
         '<path d="M0 124 Q70 112 140 122 T320 118 V132 H0Z" fill="#4a557f" opacity=".8"/>'
         f'<rect y="128" width="320" height="72" fill="url(#{uid}-sea)"/>'
         '<g stroke="#ffe2c4" stroke-linecap="round" opacity=".7"><path d="M196 138h36M204 146h22M190 154h44M208 162h14M200 172h30" stroke-width="2"/></g>'
         '<g stroke="#c9d3ee" stroke-linecap="round" opacity=".35"><path d="M24 150h40M90 164h28M260 158h36M40 182h52M250 186h40" stroke-width="1.5"/></g>'
         # lighthouse on rocks
         '<path d="M38 130 Q52 116 78 122 Q96 120 104 130Z" fill="#1d2747"/>'
         '<path d="M62 122 L66 74 L76 74 L80 122Z" fill="#f3f1ec"/><path d="M63.2 108 L78.8 108 L79.4 116 L62.6 116Z M64.4 92 L77.6 92 L78.2 100 L63.8 100Z" fill="#b4471f"/>'
         '<rect x="64" y="66" width="14" height="9" rx="2" fill="#1d2747"/><path d="M62 66 L71 58 L80 66Z" fill="#b4471f"/><circle cx="71" cy="70" r="2.6" fill="#ffe7a8"/>'
         '<path d="M71 70 L0 54 L0 78Z" fill="#fff5dc" opacity=".14"/>'
         # boats
         '<path d="M150 138 h22 l-3 5 h-16Z M160 138 V122 l9 14Z" fill="#1d2747"/><path d="M270 142 h14 l-2 3 h-10Z M276 142 v-10 l6 9Z" fill="#1d2747" opacity=".8"/>')
    return _svg(uid, 320, 200, d, b, label)

def mountain(uid, label, lake='#5fc0ba'):
    d = (_grad(uid, 'sky', [(0, '#9cc4e4', None), (1, '#e9f1f5', None)]) + _grad(uid, 'far', [(0, '#a7bcd6', None), (1, '#c9d7e6', None)]) +
         _grad(uid, 'mid', [(0, '#5d7896', None), (1, '#7e97b0', None)]) + _grad(uid, 'lake', [(0, lake, None), (1, '#1f6f78', None)]))
    b = (f'<rect width="320" height="200" fill="url(#{uid}-sky)"/>' + _clouds(60, 36, 1.1, '#fff', .8) + _clouds(250, 28, .9, '#fff', .7) +
         f'<path d="M0 118 L48 74 L80 96 L130 44 L178 92 L214 66 L262 104 L320 70 V130 H0Z" fill="url(#{uid}-far)"/>'
         '<path d="M130 44 L144 58 L136 60 L128 70 L120 60 L114 62Z M214 66 L224 76 L216 78 L206 74Z" fill="#fff" opacity=".9"/>'
         f'<path d="M0 132 L56 92 L96 120 L150 70 L196 116 L240 90 L320 128 V140 H0Z" fill="url(#{uid}-mid)"/>'
         '<path d="M150 70 L196 116 L170 112Z M56 92 L96 120 L74 118Z" fill="#3e5873" opacity=".55"/>'
         '<path d="M150 70 L162 82 L154 84 L146 92 L140 82Z" fill="#fff"/>'
         + _pines(142, [0, 14, 26, 44, 60, 230, 246, 262, 280, 298, 312], 30, '#24423a') +
         f'<rect y="140" width="320" height="60" fill="url(#{uid}-lake)"/>'
         '<path d="M0 140 L56 160 L96 146 L150 176 L196 150 L240 164 L320 142Z" fill="#3e8f93" opacity=".35"/>'
         '<g stroke="#e9f6f4" stroke-linecap="round" opacity=".5"><path d="M30 156h30M120 168h40M210 160h24M250 182h44M70 188h30" stroke-width="1.6"/></g>'
         '<path d="M132 176 h40 l-4 6 h-32Z" fill="#b4471f"/><path d="M150 176 l2 -12 l3 12" stroke="#1d2747" stroke-width="1.5" fill="none"/>')
    return _svg(uid, 320, 200, d, b, label)

def city(uid, label, warm=False, dome=True):
    sky = [(0, '#26365f', None), (.6, '#7a6aa6', None), (1, '#f0b49a', None)] if not warm else [(0, '#3a2f5a', None), (.55, '#b06a6a', None), (1, '#f4c08e', None)]
    d = (_grad(uid, 'sky', sky) + _glow(uid, 'sun', '#ffd9b8', .8) + _grad(uid, 'river', [(0, '#5a5f8a', None), (1, '#1b2340', None)]))
    lights = ''.join(f'<rect x="{x}" y="{y}" width="2.4" height="3" fill="#ffd9a0" opacity="{o}"/>' for x, y, o in
                     [(46, 92, .9), (52, 104, .7), (84, 78, .8), (90, 96, .9), (122, 108, .6), (160, 70, .9), (166, 86, .7), (204, 98, .8), (210, 112, .6), (252, 104, .9), (262, 116, .7), (282, 96, .8)])
    domeg = ('<path d="M226 96 Q240 70 254 96Z" fill="#2a2f55"/><rect x="238" y="62" width="4" height="12" fill="#2a2f55"/><rect x="222" y="96" width="36" height="34" fill="#2a2f55"/>' if dome else '')
    b = (f'<rect width="320" height="200" fill="url(#{uid}-sky)"/><circle cx="74" cy="118" r="80" fill="url(#{uid}-sun)"/>' + _clouds(250, 40, 1, '#f5cdd6', .35) +
         '<g fill="#5a5584" opacity=".6"><rect x="12" y="96" width="22" height="40"/><rect x="104" y="84" width="18" height="52"/><rect x="186" y="78" width="16" height="58"/><rect x="292" y="90" width="28" height="46"/></g>'
         '<g fill="#2a2f55"><rect x="30" y="86" width="30" height="50"/><rect x="66" y="60" width="32" height="76"/><rect x="74" y="50" width="16" height="12"/><rect x="102" y="100" width="34" height="36"/>'
         '<rect x="144" y="54" width="34" height="82"/><rect x="158" y="40" width="4" height="16"/><rect x="186" y="92" width="34" height="44"/><rect x="262" y="88" width="34" height="48"/></g>'
         + domeg + lights +
         '<path d="M0 134 H320 V138 H0Z" fill="#1b2340"/>'
         f'<rect y="138" width="320" height="62" fill="url(#{uid}-river)"/>'
         '<g fill="#2a2f55" opacity=".35"><rect x="30" y="140" width="30" height="26"/><rect x="66" y="140" width="32" height="40"/><rect x="144" y="140" width="34" height="44"/><rect x="262" y="140" width="34" height="24"/></g>'
         '<g stroke="#ffd9a0" stroke-linecap="round" opacity=".55"><path d="M84 150h8M160 156h10M206 148h6M252 160h8M50 170h6" stroke-width="1.6"/></g>'
         '<path d="M0 132 Q160 110 320 132" stroke="#c9b8e0" stroke-width="2" fill="none" opacity=".5"/>')
    return _svg(uid, 320, 200, d, b, label)

def beach(uid, label, sea='#2f9fb0'):
    d = (_grad(uid, 'sky', [(0, '#7cc2d8', None), (.7, '#f3d6c4', None), (1, '#f6c4a2', None)]) + _glow(uid, 'sun', '#fff1dc') +
         _grad(uid, 'sea', [(0, sea, None), (1, '#1d6a80', None)]) + _grad(uid, 'sand', [(0, '#efd9bd', None), (1, '#d9b994', None)]))
    b = (f'<rect width="320" height="200" fill="url(#{uid}-sky)"/><circle cx="236" cy="96" r="64" fill="url(#{uid}-sun)"/><circle cx="236" cy="96" r="16" fill="#fff6ea"/>'
         + _clouds(70, 40, 1.1, '#fff', .7) +
         '<path d="M0 108 Q40 100 70 106 L80 108Z" fill="#5c8f8f" opacity=".6"/>'
         f'<rect y="108" width="320" height="50" fill="url(#{uid}-sea)"/>'
         '<g stroke="#fff4e6" stroke-linecap="round" opacity=".7"><path d="M210 116h50M220 124h30M200 132h56" stroke-width="1.8"/></g>'
         '<path d="M0 150 Q80 138 160 148 T320 144 V160 H0Z" fill="#e9f6f4" opacity=".75"/>'
         f'<path d="M0 156 Q90 144 180 154 T320 150 V200 H0Z" fill="url(#{uid}-sand)"/>'
         # palm
         '<path d="M70 190 C68 160 72 130 92 104" stroke="#5b3a29" stroke-width="5" fill="none" stroke-linecap="round"/>'
         '<g fill="#2e6a3a"><path d="M92 104 C70 92 50 96 38 108 C58 100 74 102 92 106Z"/><path d="M92 104 C100 84 122 80 138 88 C118 88 104 94 94 106Z"/>'
         '<path d="M92 104 C82 84 66 76 52 78 C68 84 80 92 90 106Z"/><path d="M92 104 C112 100 128 108 136 122 C120 110 106 106 92 106Z"/><path d="M92 104 C96 120 92 136 84 146 C88 130 88 118 90 106Z"/></g>'
         # umbrella + towels
         '<path d="M196 182 L204 140" stroke="#4a2e22" stroke-width="2"/><path d="M178 148 Q204 120 232 140 Z" fill="#b4471f"/><path d="M190 140 Q204 124 216 134" stroke="#f3f1ec" stroke-width="5" fill="none" opacity=".7"/>'
         '<rect x="216" y="176" width="40" height="10" rx="3" fill="#2f4fd1" transform="rotate(-6 236 181)"/>')
    return _svg(uid, 320, 200, d, b, label)

def forest(uid, label):
    d = (_grad(uid, 'sky', [(0, '#a9c3cf', None), (1, '#e7ece6', None)]) + _grad(uid, 'water', [(0, '#7d9aa3', None), (1, '#2c4b55', None)]))
    b = (f'<rect width="320" height="200" fill="url(#{uid}-sky)"/>'
         '<path d="M150 98 L206 50 L262 98Z" fill="#d6e0e6"/><path d="M206 50 L218 62 L210 62 L204 70 L198 62 L192 64Z" fill="#fff"/>'
         + _pines(118, [0, 16, 34, 52, 70, 88, 106, 260, 278, 296, 312], 34, '#8ba49a') + '<rect y="116" width="320" height="10" fill="#8ba49a"/>'
         + _pines(132, [-6, 12, 30, 46, 62, 236, 254, 272, 290, 306], 46, '#4f6f62') + '<rect y="130" width="320" height="8" fill="#4f6f62"/>'
         f'<rect y="136" width="320" height="64" fill="url(#{uid}-water)"/>'
         '<g stroke="#e7ece6" stroke-linecap="round" opacity=".45"><path d="M60 150h30M150 160h44M240 152h30M110 180h50" stroke-width="1.6"/></g>'
         # ferry
         '<path d="M130 150 h64 l-6 9 h-52Z" fill="#f3f1ec"/><rect x="142" y="140" width="40" height="10" rx="2" fill="#f3f1ec"/><rect x="146" y="143" width="32" height="3" fill="#0b6b6b"/>'
         '<rect x="160" y="132" width="6" height="8" fill="#0b6b6b"/><path d="M130 159 h58" stroke="#2c4b55" stroke-width="2"/>'
         + _pines(200, [-10, 8, 26, 270, 290, 308], 70, '#1d3a33') + '<rect y="196" width="320" height="4" fill="#1d3a33"/>')
    return _svg(uid, 320, 200, d, b, label)

def garden(uid, label):
    d = (_grad(uid, 'sky', [(0, '#9cc4e4', None), (1, '#f1e8dc', None)]) + _grad(uid, 'lawn', [(0, '#7aa36b', None), (1, '#4c7a46', None)]))
    flowers = ''.join(f'<circle cx="{x}" cy="{y}" r="{r}" fill="{c}"/>' for x, y, r, c in
                      [(20, 168, 3, '#bfa4ec'), (34, 172, 3.4, '#f2946a'), (48, 166, 3, '#f3f1ec'), (62, 172, 3.2, '#bfa4ec'), (76, 168, 3, '#f2946a'),
                       (244, 170, 3, '#f3f1ec'), (258, 166, 3.4, '#bfa4ec'), (272, 172, 3, '#f2946a'), (286, 168, 3.2, '#f3f1ec'), (300, 172, 3, '#bfa4ec')])
    b = (f'<rect width="320" height="200" fill="url(#{uid}-sky)"/>' + _clouds(70, 38, 1, '#fff', .8) +
         # domed hall (generic)
         '<g fill="#e9e1d2"><rect x="112" y="88" width="96" height="52"/><rect x="96" y="104" width="128" height="36"/><path d="M136 88 Q160 50 184 88Z"/></g>'
         '<path d="M136 88 Q160 50 184 88Z" fill="#7fb3a8"/><rect x="157" y="44" width="6" height="12" fill="#7fb3a8"/>'
         '<g fill="#b9ad98">' + ''.join(f'<rect x="{x}" y="112" width="6" height="20" rx="3"/>' for x in range(104, 220, 14)) + '</g>'
         f'<path d="M0 140 Q160 126 320 140 V200 H0Z" fill="url(#{uid}-lawn)"/>'
         '<path d="M160 140 L132 200 H188Z" fill="#e9e1d2" opacity=".85"/>'
         '<g fill="#2e6a3a"><ellipse cx="40" cy="160" rx="44" ry="10"/><ellipse cx="280" cy="160" rx="44" ry="10"/><circle cx="16" cy="124" r="22"/><circle cx="304" cy="122" r="24"/></g>'
         + flowers +
         '<g stroke="#1d2747" stroke-width="2"><path d="M110 196 V156 M210 196 V156"/></g><g fill="#ffe7a8"><circle cx="110" cy="154" r="4"/><circle cx="210" cy="154" r="4"/></g>')
    return _svg(uid, 320, 200, d, b, label)

# ---------------------------------------------------------------- hero art (3 parallax layers)
def hero_layers(uid, tone='navy'):
    far = {'navy': ('#2a4a7f', '#1d355f'), 'teal': ('#1f8a86', '#0e5f5e'), 'plum': ('#7a5aa8', '#4f3678')}[tone]
    glow = {'navy': '#cfe6f5', 'teal': '#e3f6f2', 'plum': '#f0dcf5'}[tone]
    defs1 = _glow(uid, 'moon', glow, .55)
    l1 = (f'<svg class="hw-hero-layer" data-depth="0.2" viewBox="0 0 1200 640" preserveAspectRatio="xMidYMid slice" aria-hidden="true"><defs>{defs1}</defs>'
          f'<circle cx="960" cy="170" r="230" fill="url(#{uid}-moon)"/>'
          + ''.join(f'<circle cx="{x}" cy="{y}" r="{r}" fill="#fff" opacity="{o}"/>' for x, y, r, o in [(700, 80, 1.4, .6), (780, 140, 1, .5), (1100, 60, 1.6, .7), (1140, 210, 1, .5), (860, 40, 1.2, .5), (620, 200, 1, .4)])
          + _clouds(820, 150, 3.6, '#cfe6f5', .16) + _clouds(1090, 260, 2.8, '#cfe6f5', .14) + _clouds(660, 320, 2.2, '#cfe6f5', .1) + '</svg>')
    defs2 = _grad(uid, 'r1', [(0, far[0], None), (1, far[1], None)]) + _grad(uid, 'r2', [(0, '#0b6b6b', None), (1, '#0a4f55', None)])
    l2 = (f'<svg class="hw-hero-layer hw-hero-scene" style="--i:1" data-depth="0.5" viewBox="0 0 1200 640" preserveAspectRatio="xMidYMid slice" aria-hidden="true"><defs>{defs2}</defs><g transform="translate(-90 -110) scale(1.08)">'
          f'<path d="M480 640 L620 470 L700 520 L820 380 L900 450 L1000 360 L1120 460 L1240 400 V640Z" fill="url(#{uid}-r1)" opacity=".9"/>'
          '<path d="M820 380 L842 404 L830 406 L818 420 L806 404Z M1000 360 L1018 380 L1008 382 L998 394 L988 380Z" fill="#e3eff8" opacity=".8"/>'
          f'<path d="M560 640 L700 540 L780 580 L900 480 L1000 560 L1100 500 L1240 580 V640Z" fill="url(#{uid}-r2)"/>'
          '<path d="M900 480 L1000 560 L940 556Z M700 540 L780 580 L736 578Z" fill="#06393d" opacity=".5"/><rect x="480" y="636" width="900" height="200" fill="url(#{uid}-r2)"/></g></svg>')
    l3 = (f'<svg class="hw-hero-layer hw-hero-scene" style="--i:2" data-depth="1" viewBox="0 0 1200 640" preserveAspectRatio="xMidYMid slice" aria-hidden="true">'
          + '<g transform="translate(0 -96)">' + _pines(640, [560, 590, 616, 640, 1040, 1068, 1096, 1124, 1150, 1178], 130, '#0c2f2c') +
          '<path d="M500 640 Q800 600 1240 624 V760 H500Z" fill="#0c2f2c"/></g>'
          '<path class="hw-path" d="M700 520 C800 300 960 200 1220 180" style="stroke:var(--sky)"/>'
          '<g class="hw-plane" style="offset-path:path(\'M700 520 C800 300 960 200 1220 180\')"><path d="M-16 -3.5 L14 -1 Q18 0 14 1 L-16 3.5 L-12 0Z M-3 -1 L-9 -13 L-4 -13 L7 -1Z M-3 1 L-9 13 L-4 13 L7 1Z M-15 -1 L-19 -6 L-16 -6 L-12 -1Z M-15 1 L-19 6 L-16 6 L-12 1Z" fill="var(--on-navy)"/></g></svg>')
    return l1 + '\n  ' + l2 + '\n  ' + l3

# ---------------------------------------------------------------- views through the story windows
def window_view(uid, kind):
    if kind == 'sky':
        d = _grad(uid, 's', [(0, '#5d7cc8', None), (1, '#f2c7b0', None)]); b = f'<rect width="100" height="160" fill="url(#{uid}-s)"/>' + _clouds(40, 110, 1.2, '#fff', .9) + _clouds(76, 128, .9, '#fff', .8) + '<path d="M0 140 Q50 128 100 140 V160 H0Z" fill="#fff" opacity=".9"/>'
    elif kind == 'seat':
        d = _grad(uid, 's', [(0, '#8fb7e6', None), (1, '#e3eff8', None)]); b = f'<rect width="100" height="160" fill="url(#{uid}-s)"/>' + _clouds(50, 60, 1.1, '#fff', .85) + '<path d="M0 120 L30 96 L56 112 L80 90 L100 104 V160 H0Z" fill="#6b86a6"/><path d="M0 134 L40 116 L70 130 L100 118 V160 H0Z" fill="#3e5873"/>'
    elif kind == 'dusk':
        d = _grad(uid, 's', [(0, '#3a2f6a', None), (.6, '#b0739a', None), (1, '#f4c08e', None)]); b = f'<rect width="100" height="160" fill="url(#{uid}-s)"/><circle cx="62" cy="112" r="12" fill="#ffe2c4"/>' + _clouds(36, 70, .9, '#f5cdd6', .5) + '<path d="M0 132 Q50 120 100 132 V160 H0Z" fill="#2a2f55"/>'
    else:  # night with wifi stars
        d = _grad(uid, 's', [(0, '#0b1a3a', None), (1, '#1f5f6b', None)]); b = f'<rect width="100" height="160" fill="url(#{uid}-s)"/>' + ''.join(f'<circle cx="{x}" cy="{y}" r="1" fill="#fff" opacity=".8"/>' for x, y in [(20, 30), (70, 22), (52, 58), (84, 76), (30, 90), (12, 60)]) + '<circle cx="70" cy="44" r="9" fill="#e3eff8"/><circle cx="74" cy="41" r="8" fill="#0b1a3a"/><path d="M0 140 Q50 126 100 140 V160 H0Z" fill="#0b3a40"/><g fill="#ffe7a8"><circle cx="30" cy="140" r="1.4"/><circle cx="44" cy="137" r="1.4"/><circle cx="60" cy="138" r="1.4"/></g>'
    return (f'<svg class="hw-window-view" viewBox="0 0 100 160" preserveAspectRatio="xMidYMid slice" aria-hidden="true"><defs>{d}</defs>{b}'
            '<path d="M8 6 Q18 4 22 16" stroke="#fff" stroke-width="3" stroke-linecap="round" fill="none" opacity=".35"/></svg>')

SCENES = {'harbour': harbour, 'mountain': mountain, 'city': city, 'city-warm': lambda u, l: city(u, l, warm=True, dome=False),
          'beach': beach, 'beach-plum': lambda u, l: beach(u, l, sea='#2f6fb0'), 'forest': forest, 'garden': garden}
