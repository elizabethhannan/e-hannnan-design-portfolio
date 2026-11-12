import os
OUT=__import__('os').path.join(__import__('os').path.dirname(__file__), '../../artifacts/e-hannan-design-portfolio/public/sections/heronway')
PAGES=[('index.html','Home'),('where-we-fly.html','Where we fly'),('rewards.html','Rewards')]

import sys; sys.path.insert(0, __import__('os').path.dirname(__file__))
import art
_UID=[0]
def uid(p='hw'):
    _UID[0]+=1; return f'{p}{_UID[0]}'
SCENE_FOR={'Halifax':'harbour','Banff':'mountain','Montréal':'city','Austin':'city-warm','Seattle':'forest','Cancún':'beach','Victoria':'garden','Montego Bay':'beach-plum'}
def media(name):
    return art.SCENES[SCENE_FOR[name]](uid('d'), None)

DEST=[('Halifax','Harbour walks and lobster rolls.','From 8,000 points','harbour','--teal','canada'),
 ('Banff','Turquoise lakes, quiet trails.','From $189','mountain','--forest','canada'),
 ('Montréal','Bagels at dawn, jazz at midnight.','From $129','city','--plum','canada'),
 ('Austin','Live music and brisket.','From $99','city','--chocolate','us'),
 ('Seattle','Ferries, coffee and the Sound.','From $119','forest','--teal','us'),
 ('Cancún','Reef snorkelling, slow sunsets.','From 12,000 points','beach','--royal','sun'),
 ('Victoria','Gardens, tea and sea air.','From $149','garden','--forest','canada'),
 ('Montego Bay','Warm water, long lunches.','From 14,500 points','beach','--plum','sun')]

def card(d, region=True, i=0):
    n,p,price,k,acc,reg=d
    r=f' data-region="{reg}"' if region else ''
    return f'<a class="hw-card hw-reveal" style="--i:{i%4}" href="#"{r}><div class="hw-card-media"><div>{media(n)}</div></div><div class="hw-card-body"><h3>{n}</h3><p>{p}</p><span class="hw-card-price">{price}</span></div></a>'

def HERO(tone): return art.hero_layers(uid('h'), tone)

def shell(fname, title, desc, body):
    links=''.join(f'<li><a href="{f}" data-page{" aria-current=&quot;page&quot;" if f==fname else ""}>{t}</a></li>' for f,t in PAGES).replace('&quot;','"')
    flinks=''.join(f'<li><a href="{f}" data-page>{t}</a></li>' for f,t in PAGES)
    return f'''<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<meta name="robots" content="noindex, nofollow, noarchive, nosnippet, noimageindex, noai, noimageai" />
<meta name="theme-color" content="#13294B" />
<title>{title} · Heronway</title>
<meta name="description" content="{desc}" />
<link rel="icon" href="assets/heronway-mark.svg" />
<link rel="stylesheet" href="tokens.css" />
<link rel="stylesheet" href="bundle.css" />
<link rel="stylesheet" href="site.css" />
</head>
<body>
<a class="skip" href="#main">Skip to content</a>
<nav class="hw-nav hw-sticky site-nav" aria-label="Main">
  <a href="index.html" data-page aria-label="Heronway home"><img src="assets/heronway-wordmark-reversed.svg" alt="Heronway" /></a>
  <ul>{links}</ul>
  <div class="nav-tools">
    <button type="button" class="theme-btn" data-theme-toggle aria-pressed="false" aria-label="Switch to Night flight theme"><svg class="sun" viewBox="0 0 24 24"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M2 12h2M20 12h2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></svg><svg class="moon" viewBox="0 0 24 24"><path d="M20 14.5A8 8 0 1 1 9.5 4a6.5 6.5 0 0 0 10.5 10.5z"/></svg></button>
    <a class="hw-btn hw-btn-on-navy" href="rewards.html" data-page>Join Rewards</a>
  </div>
  <span class="hw-progress" aria-hidden="true"></span>
</nav>
<main id="main">
{body}
</main>
<footer class="site-foot">
  <div class="wrap">
    <div class="cols">
      <div><img src="assets/heronway-wordmark-reversed.svg" alt="Heronway" style="height:34px" /><p class="body-s" style="max-width:300px;margin-top:var(--space-4)">Elevated economy, unhurried hospitality. A window or an aisle on every flight.</p></div>
      <div><h3>Fly</h3><ul>{flinks}</ul></div>
      <div><h3>Travel info</h3><ul><li><a href="#">Bags</a></li><li><a href="#">Check-in</a></li><li><a href="#">Accessibility</a></li></ul></div>
      <div><h3>Company</h3><ul><li><a href="#">Sustainability</a></li><li><a href="#">Careers</a></li><li><a href="#">Contact</a></li></ul></div>
    </div>
    <p class="fine">Heronway is a fictional airline, designed by Elizabeth Hannan as a hospitality design concept. Fares, routes and figures are illustrative.</p>
  </div>
</footer>
<div class="page-wipe" aria-hidden="true"><img src="assets/heronway-mark.svg" alt="" /></div>
<script src="bundle.js"></script>
<script src="site.js"></script>
</body>
</html>
'''

def booking(fid, dest_val='', dest_code=''):
    dv=f' value="{dest_val}" data-code="{dest_code}"' if dest_val else ''
    return f'''<form class="hw-book" aria-label="Book a flight" data-booked="{fid}">
      <div class="hw-tabs" role="tablist" aria-label="Trip type" style="justify-self:start">
        <span class="hw-tabs-ind" aria-hidden="true"></span>
        <button type="button" class="hw-tab" role="tab" aria-selected="true">Round trip</button>
        <button type="button" class="hw-tab" role="tab" aria-selected="false">One way</button>
        <button type="button" class="hw-tab" role="tab" aria-selected="false">Pay with points</button>
      </div>
      <div class="hw-book-row">
        <label class="hw-field"><span>From</span><input class="hw-input" data-airport placeholder="City or airport" value="Phoenix (PHX)" data-code="PHX"><div class="hw-pop" role="listbox"></div></label>
        <button type="button" class="hw-swap" aria-label="Swap origin and destination">⇄</button>
        <label class="hw-field"><span>To</span><input class="hw-input" data-airport placeholder="City or airport"{dv}><div class="hw-pop" role="listbox"></div></label>
        <div class="hw-field"><span>Dates</span><button type="button" class="hw-input" data-dates aria-haspopup="dialog"></button><div class="hw-pop" role="dialog" aria-label="Choose dates"></div></div>
        <div class="hw-field"><span>Travellers</span><button type="button" class="hw-input" data-pax aria-haspopup="dialog">1 traveller</button>
          <div class="hw-pop" role="dialog" aria-label="Travellers" style="min-width:240px">
            <div class="hw-step" data-min="1"><div>Adults<small>16+</small></div><div class="hw-step-ctrl"><button type="button" aria-label="Fewer adults">−</button><output>1</output><button type="button" aria-label="More adults">+</button></div></div>
            <div class="hw-step"><div>Children<small>2–15</small></div><div class="hw-step-ctrl"><button type="button" aria-label="Fewer children">−</button><output>0</output><button type="button" aria-label="More children">+</button></div></div>
            <div class="hw-step"><div>Infants<small>Under 2, on lap</small></div><div class="hw-step-ctrl"><button type="button" aria-label="Fewer infants">−</button><output>0</output><button type="button" aria-label="More infants">+</button></div></div>
          </div>
        </div>
        <button class="hw-btn hw-btn-primary" type="submit">Search <span class="hw-arrow" aria-hidden="true">→</span></button>
      </div>
    </form>'''

def booked(fid, conf='HW7Q2K', note=None):
    note = note or f'Confirmation {conf} is on its way to your inbox.'
    return f'''<div class="booked-wrap" id="{fid}">
    <div class="hw-booked" role="status" aria-live="polite">
      <svg class="hw-check" viewBox="0 0 88 88" aria-hidden="true"><circle cx="44" cy="44" r="40"/><path d="M26 45 L39 58 L63 32"/></svg>
      <h3>You're booked</h3>
      <p>{note}</p>
      <div class="hw-pass">
        <div><b>PHX</b><small>Phoenix · 8:05</small></div>
        <svg width="64" height="20" viewBox="0 0 64 20" aria-label="to"><path d="M2 10 H54" stroke="var(--line)" stroke-width="2" stroke-dasharray="4 4"/><path d="M50 4 L62 10 L50 16Z" fill="var(--royal)"/></svg>
        <div><b data-to-code>YHZ</b><small><span data-to-city>Halifax</span> · 17:40</small></div>
        <img class="hw-mascot-heron" src="assets/hollis-heron.svg" alt="">
      </div>
      <p class="body-s" style="color:var(--ink-muted);margin-top:var(--space-4)">Demo only. No real booking is made.</p>
    </div>
  </div>'''

def scene(line, fox_first=False):
    return f'''<section class="sec"><div class="wrap">
  <div class="hw-scene" role="img" aria-label="Hollis the heron lands beside Juni the fox, who waves hello">
    <div class="hw-scene-ground"></div>
    <img class="hw-heron-land" src="assets/hollis-heron.svg" alt="">
    <span class="hw-fox-paw"></span>
    <img class="hw-fox-wave" src="assets/juni-fox.svg" alt="">
    <span class="hw-bubble">{line}</span>
  </div>
</div></section>'''

FAQ=[('Which seats are free?','Every seat is a window or an aisle, and standard seats are free at check-in. Glide members and up choose at booking.'),
('How much can I bring on board?','One carry-on and one personal item on every fare. Your first checked bag is free from Soar.'),
('Can I change my flight?','Changes are free up to 24 hours before departure. Soar and Summit members can make same-day changes.'),
('Do you fly to Halifax nonstop?','Yes. Phoenix to Halifax runs four times a week, and Seattle to Halifax three times a week.')]
def faq(items):
    return '<div class="hw-acc">'+''.join(f'<details{" open" if i==0 else ""}><summary>{q}</summary><div class="hw-acc-body"><div>{a}</div></div></details>' for i,(q,a) in enumerate(items))+'</div>'

# ---------------- HOME
home=f'''<section class="hw-hero site-hero" aria-label="Fly Heronway">
  {HERO('navy')}
  <img class="hw-hero-layer hw-hero-scene hero-mascot" style="--i:3;inset:auto;right:12%;bottom:120px" data-depth="0.8" src="assets/hollis-heron.svg" alt="">
  <div class="hw-hero-copy">
    <p class="hw-eyebrow" style="--i:0">Fly Heronway</p>
    <h1 style="--i:1">Fly the long way round</h1>
    <p style="--i:2">Elevated economy to 40 cities. A window or an aisle on every flight, and no middle seats, ever.</p>
    <div class="btns" style="--i:3"><a class="hw-btn hw-btn-on-navy" href="#book">Find flights <span class="hw-arrow" aria-hidden="true">→</span></a><a class="hw-btn hw-btn-secondary btn-line" href="where-we-fly.html" data-page>See the route map</a></div>
  </div>
</section>

<div class="wrap book-lift" id="book">
  {booking('booked-home')}
  {booked('booked-home')}
</div>

<section class="sec"><div class="wrap">
  <div class="sec-head"><div><p class="eyebrow">Where to next</p><h2 class="heading-l">Fresh routes for slow travel</h2><p class="body-m">Cities worth the trip, at fares that leave room for dinner.</p></div><a class="hw-btn hw-btn-ghost" href="where-we-fly.html" data-page>All destinations <span class="hw-arrow" aria-hidden="true">→</span></a></div>
  <div class="dest-grid is-three">{''.join(card(d,False,i) for i,d in enumerate(DEST[:3]))}</div>
</div></section>

<section class="sec" id="experience" aria-label="The Heronway experience"><div class="wrap">
  <div class="sec-head"><div><p class="eyebrow">The Heronway experience</p><h2 class="heading-l">Economy, considered</h2></div></div>
  <div class="story-wrap"><div class="hw-story">
    <section class="hw-story-sec" data-bg="navy"><div><h2>A window or an aisle</h2><p>No middle seats, ever. Boarding front to back in calm, short groups.</p></div><div class="hw-story-art"><div class="hw-window">{art.window_view(uid('w'),'sky')}</div></div></section>
    <section class="hw-story-sec" data-bg="royal"><div><h2>Sitting comfortably</h2><p>Extra legroom rows and seatback power on every aircraft.</p></div><div class="hw-story-art"><div class="hw-window">{art.window_view(uid('w'),'seat')}</div></div></section>
    <section class="hw-story-sec" data-bg="plum"><div><h2>Tasty bites, local sips</h2><p>Snacks from regional bakers and drinks served in real glassware.</p></div><div class="hw-story-art"><div class="hw-window">{art.window_view(uid('w'),'dusk')}</div></div></section>
    <section class="hw-story-sec" data-bg="teal"><div><h2>Free, fast Wi-Fi</h2><p>Stream, message and work from gate to gate at no charge.</p></div><div class="hw-story-art"><div class="hw-window">{art.window_view(uid('w'),'night')}</div></div></section>
  </div></div>
</div></section>

<section class="sec band-sky"><div class="wrap split">
  <div>
    <p class="eyebrow" style="color:var(--plum);margin:0 0 var(--space-2)">Heronway Rewards</p>
    <h2 class="heading-l" style="margin:0">Fly. Earn. Repeat.</h2>
    <p class="body-l" style="color:var(--ink-muted)">Points on every dollar from your first flight. Spend them on any seat, any day, with no blackout dates.</p>
    <ul class="checks"><li>3 points per $1 on Heronway flights</li><li>Points never expire from Glide up</li><li>Mix points and dollars on any fare</li></ul>
    <a class="hw-btn hw-btn-primary" href="rewards.html" data-page>Explore Rewards <span class="hw-arrow" aria-hidden="true">→</span></a>
  </div>
  <div class="panel">
    <h3 class="heading-m" style="margin:0 0 var(--space-4)">What could you earn?</h3>
    <div class="hw-points">
      <label for="f1">Heronway flights <span data-for="f1"></span></label>
      <input class="hw-range" id="f1" type="range" min="0" max="1000" step="25" value="300" data-rate="3">
      <label for="d1">Dining &amp; groceries <span data-for="d1"></span></label>
      <input class="hw-range" id="d1" type="range" min="0" max="3000" step="50" value="800" data-rate="2">
      <label for="o1">Everything else <span data-for="o1"></span></label>
      <input class="hw-range" id="o1" type="range" min="0" max="3000" step="50" value="600" data-rate="1">
      <div><span class="hw-points-out">0</span> <small>points a year</small></div>
    </div>
  </div>
</div></section>

<section class="sec" aria-label="Sustainability"><div class="wrap">
  <div class="sec-head"><div><p class="eyebrow" style="color:var(--forest)">Lighter on the planet</p><h2 class="heading-l">Progress we can count</h2></div></div>
  <div class="hw-stats">
    <div class="hw-stat"><span class="hw-stat-num" data-to="23" data-suffix="%">0%</span><p>Less fuel per seat than our 2022 fleet</p><div class="hw-stat-bar"><i style="--pct:23%"></i></div></div>
    <div class="hw-stat"><span class="hw-stat-num is-teal" data-to="41" data-suffix="%">0%</span><p>Women in our pilot and engineering intake</p><div class="hw-stat-bar"><i style="--pct:41%;color:var(--teal)"></i></div></div>
    <div class="hw-stat"><span class="hw-stat-num is-plum" data-to="1.2" data-dec="1" data-suffix="M">0M</span><p>Meals shared with local food banks</p><div class="hw-stat-bar"><i style="--pct:80%;color:var(--plum)"></i></div></div>
  </div>
</div></section>

{scene('Welcome aboard!')}'''

# ---------------- WHERE WE FLY
wwf=f'''<section class="hw-hero site-hero is-short is-teal" aria-label="Where we fly">
  {HERO('teal')}
  <div class="hw-hero-copy">
    <p class="hw-eyebrow" style="--i:0">Where we fly</p>
    <h1 style="--i:1">Forty cities, one calm way there</h1>
    <p style="--i:2">Nonstop from our Phoenix and Seattle hubs across Canada, the US and the sun.</p>
  </div>
</section>

<section class="sec"><div class="wrap">
  <div class="sec-head"><div><p class="eyebrow">Route map</p><h2 class="heading-l">Pick an airport to see its routes</h2><p class="body-m">Hover or tab to a city. Hubs are larger and teal.</p></div></div>
  <div class="hw-map">
    <svg viewBox="0 0 800 400" role="group" aria-label="Heronway route map">
      <path class="hw-land" d="M60 70 C160 30 330 40 470 60 C590 40 700 70 760 120 C770 170 720 200 690 230 C650 250 610 240 590 270 C560 300 520 330 470 330 C420 340 360 320 300 330 C240 330 180 300 140 260 C100 220 50 170 60 70Z"/>
      <path class="hw-land" d="M420 350 C460 345 500 352 520 372 C490 388 440 386 420 370Z"/>
      <g fill="none">
        <path class="hw-route" data-from="PHX" data-to="SEA" d="M260 270 C230 180 170 140 150 110"/>
        <path class="hw-route" data-from="PHX" data-to="YYC" d="M260 270 C250 180 240 120 245 95"/>
        <path class="hw-route" data-from="PHX" data-to="YUL" d="M260 270 C380 140 520 110 610 120"/>
        <path class="hw-route" data-from="PHX" data-to="YHZ" d="M260 270 C420 110 600 80 700 135"/>
        <path class="hw-route" data-from="PHX" data-to="AUS" d="M260 270 C320 280 360 290 390 300"/>
        <path class="hw-route" data-from="PHX" data-to="CUN" d="M260 270 C340 340 420 360 470 362"/>
        <path class="hw-route" data-from="SEA" data-to="YHZ" d="M150 110 C350 20 560 40 700 135"/>
        <path class="hw-route" data-from="SEA" data-to="YYJ" d="M150 110 C130 100 112 96 98 98"/>
      </g>
      <g class="hw-apt is-hub" data-code="PHX" data-name="Phoenix (PHX)" data-info="Hub · 6 nonstop routes"><circle cx="260" cy="270"/></g>
      <g class="hw-apt is-hub" data-code="SEA" data-name="Seattle (SEA)" data-info="Hub · Nonstop to Halifax"><circle cx="150" cy="110"/></g>
      <g class="hw-apt" data-code="YYJ" data-name="Victoria (YYJ)" data-info="35m from Seattle"><circle cx="98" cy="98"/></g>
      <g class="hw-apt" data-code="YYC" data-name="Calgary (YYC)" data-info="2h 40m from Phoenix · for Banff"><circle cx="245" cy="95"/></g>
      <g class="hw-apt" data-code="YUL" data-name="Montréal (YUL)" data-info="4h 30m from Phoenix"><circle cx="610" cy="120"/></g>
      <g class="hw-apt" data-code="YHZ" data-name="Halifax (YHZ)" data-info="New route · from 8,000 points"><circle cx="700" cy="135"/></g>
      <g class="hw-apt" data-code="AUS" data-name="Austin (AUS)" data-info="2h 05m from Phoenix"><circle cx="390" cy="300"/></g>
      <g class="hw-apt" data-code="CUN" data-name="Cancún (CUN)" data-info="Seasonal · Dec to Apr"><circle cx="470" cy="362"/></g>
    </svg>
    <div class="hw-tip" role="status" aria-live="polite"></div>
  </div>
</div></section>

<section class="sec" style="padding-top:0"><div class="wrap">
  <div class="promo">
    <div><p class="eyebrow">New route</p><h2 class="heading-l">Phoenix to Halifax, nonstop</h2><p class="body-m">Desert to harbour in one calm hop, four times a week. From 8,000 points or $219.</p><a class="hw-btn hw-btn-on-navy" href="#book">Book this route <span class="hw-arrow" aria-hidden="true">→</span></a></div>
    <svg viewBox="0 0 600 160" width="100%" height="160" role="img" aria-label="Animated route from Phoenix to Halifax">
      <path class="hw-path" d="M40 130 C180 10 420 10 560 110"/>
      <circle cx="40" cy="130" r="6" fill="var(--on-navy)"/><circle cx="560" cy="110" r="6" fill="var(--teal)"/>
      <text x="40" y="154" font-size="13" font-weight="600" text-anchor="middle">PHX</text>
      <text x="560" y="134" font-size="13" font-weight="600" text-anchor="middle">YHZ</text>
      <g class="hw-plane" style="offset-path:path('M40 130 C180 10 420 10 560 110')"><path d="M-10 -3 L8 0 L-10 3 L-7 0Z M-2 0 L-6 -9 L-2 -9 L4 0 L-2 9 L-6 9Z" fill="var(--on-navy)"/></g>
    </svg>
  </div>
</div></section>

<section class="sec band-sky"><div class="wrap">
  <div class="sec-head"><div><p class="eyebrow">Destinations</p><h2 class="heading-l">Find your kind of trip</h2></div></div>
  <div class="hw-tabs tab-row" role="tablist" aria-label="Filter destinations" data-filter="dest-all">
    <span class="hw-tabs-ind" aria-hidden="true"></span>
    <button class="hw-tab" role="tab" aria-selected="true" data-value="all">All</button>
    <button class="hw-tab" role="tab" aria-selected="false" data-value="canada">Canada</button>
    <button class="hw-tab" role="tab" aria-selected="false" data-value="us">United States</button>
    <button class="hw-tab" role="tab" aria-selected="false" data-value="sun">Sun</button>
  </div>
  <div class="dest-grid" id="dest-all">{''.join(card(d,True,i) for i,d in enumerate(DEST))}</div>
</div></section>

<section class="sec" id="book"><div class="wrap">
  <div class="sec-head"><div><p class="eyebrow">Book</p><h2 class="heading-l">Ready when you are</h2></div></div>
  {booking('booked-wwf','Halifax (YHZ)','YHZ')}
  {booked('booked-wwf','HW3M8P')}
</div></section>

<section class="sec" style="padding-top:0"><div class="wrap faq">
  <div class="sec-head"><div><p class="eyebrow">Travel info</p><h2 class="heading-l">Before you fly</h2></div></div>
  {faq(FAQ)}
</div></section>

{scene('See you at the gate.')}'''

# ---------------- REWARDS
REDEEM=[('Halifax','Harbour walks and lobster rolls.','5,000 points','harbour','--teal','x'),('Victoria','Gardens, tea and sea air.','8,000 points','garden','--forest','x'),('Banff','Turquoise lakes, quiet trails.','9,500 points','mountain','--forest','x'),('Montego Bay','Reef snorkelling, slow sunsets.','12,000 points','beach','--royal','x'),('Austin','Live music and brisket.','7,000 points','city','--chocolate','x'),('Seattle','Ferries, coffee and the Sound.','6,500 points','forest','--teal','x')]
rw=f'''<section class="hw-hero site-hero is-short is-plum" aria-label="Heronway Rewards">
  {HERO('plum')}
  <img class="hw-hero-layer hw-hero-scene hero-mascot" style="--i:3;inset:auto;right:12%;bottom:60px;width:140px" data-depth="0.8" src="assets/juni-fox.svg" alt="">
  <div class="hw-hero-copy">
    <p class="hw-eyebrow" style="--i:0">Heronway Rewards</p>
    <h1 style="--i:1">Fly. Earn. Repeat.</h1>
    <p style="--i:2">Points on every dollar from your first flight, and four tiers that make every trip a little easier.</p>
    <div class="btns" style="--i:3"><a class="hw-btn hw-btn-on-navy" href="#join">Join for free <span class="hw-arrow" aria-hidden="true">→</span></a></div>
  </div>
</section>

<section class="sec"><div class="wrap">
  <div class="sec-head"><div><p class="eyebrow" style="color:var(--plum)">Tiers</p><h2 class="heading-l">Four tiers, no fine-print maze</h2><p class="body-m">Click a tier to pin it. Hover a column to compare.</p></div>
  <div class="badges"><span class="hw-tier hw-tier-member">Member</span><span class="hw-tier hw-tier-glide">Glide</span><span class="hw-tier hw-tier-soar">Soar</span><span class="hw-tier hw-tier-summit">Summit</span></div></div>
  <div class="hw-tier-wrap">
  <table class="hw-tiers">
    <caption class="body-s" style="caption-side:bottom;padding:var(--space-3);color:var(--ink-muted);text-align:left">Qualifying spend per calendar year. Benefits are illustrative.</caption>
    <thead><tr><th scope="col">Benefit</th><th scope="col"><span class="hw-tier hw-tier-member">Member</span></th><th scope="col"><span class="hw-tier hw-tier-glide">Glide</span></th><th scope="col"><span class="hw-tier hw-tier-soar">Soar</span></th><th scope="col"><span class="hw-tier hw-tier-summit">Summit</span></th></tr></thead>
    <tbody>
      <tr><th scope="row">Qualifying spend</th><td>$0</td><td>$2,500</td><td>$5,000</td><td>$10,000</td></tr>
      <tr><th scope="row">Points per $1 on flights</th><td>3</td><td>4</td><td>6</td><td>8</td></tr>
      <tr><th scope="row">Free seat selection</th><td class="hw-no">—</td><td class="hw-yes">✓</td><td class="hw-yes">✓</td><td class="hw-yes">✓</td></tr>
      <tr><th scope="row">Free checked bag</th><td class="hw-no">—</td><td class="hw-no">—</td><td>1</td><td>2</td></tr>
      <tr><th scope="row">Priority boarding</th><td class="hw-no">—</td><td class="hw-yes">✓</td><td class="hw-yes">✓</td><td class="hw-yes">✓</td></tr>
      <tr><th scope="row">Same-day changes</th><td class="hw-no">—</td><td class="hw-no">—</td><td class="hw-yes">✓</td><td class="hw-yes">✓</td></tr>
      <tr><th scope="row">Lounge passes</th><td class="hw-no">—</td><td class="hw-no">—</td><td>2</td><td>6</td></tr>
      <tr><th scope="row">Guaranteed seat on sold-out flights</th><td class="hw-no">—</td><td class="hw-no">—</td><td class="hw-no">—</td><td class="hw-yes">✓</td></tr>
      <tr><th scope="row">Points never expire</th><td class="hw-no">—</td><td class="hw-yes">✓</td><td class="hw-yes">✓</td><td class="hw-yes">✓</td></tr>
    </tbody>
  </table>
  </div>
</div></section>

<section class="sec band-sky" id="join"><div class="wrap split">
  <div>
    <p class="eyebrow" style="color:var(--plum);margin:0 0 var(--space-2)">The Rewards card</p>
    <h2 class="heading-l" style="margin:0">Earn on every dollar</h2>
    <p class="body-l" style="color:var(--ink-muted)">Two cards, one simple promise: your everyday spending turns into the next trip. Click a card to see its benefits.</p>
    <div class="hw-flip-row" role="group" aria-label="Choose a Heronway Rewards card" style="margin-top:var(--space-6)">
      <button class="hw-flip" aria-label="Heronway Rewards Card. Show benefits"><span class="hw-flip-inner">
        <span class="hw-face hw-face-front"><span class="hw-chip"></span><span><h3>Heronway Rewards</h3><small>$0 annual fee · up to 3 pts per $1</small></span></span>
        <span class="hw-face hw-face-back"><h3>Rewards Card</h3><ul><li>3 points per $1 on Heronway</li><li>1 point per $1 everywhere else</li><li>Free seat selection</li></ul><small style="color:var(--royal)">Click to flip back</small></span>
      </span></button>
      <button class="hw-flip" aria-label="Heronway Summit Card. Show benefits"><span class="hw-flip-inner">
        <span class="hw-face hw-face-front is-plum"><span class="hw-chip"></span><span><h3>Heronway Summit</h3><small>$139 annual fee · up to 6 pts per $1</small></span></span>
        <span class="hw-face hw-face-back"><h3>Summit Card</h3><ul><li>6 points per $1 on Heronway</li><li>Free checked bag on every trip</li><li>Annual companion fare</li></ul><small style="color:var(--royal)">Click to flip back</small></span>
      </span></button>
    </div>
  </div>
  <div class="panel">
    <h3 class="heading-m" style="margin:0 0 var(--space-4)">Your year in points</h3>
    <div class="hw-points">
      <label for="f2">Heronway flights <span data-for="f2"></span></label>
      <input class="hw-range" id="f2" type="range" min="0" max="1000" step="25" value="450" data-rate="3">
      <label for="d2">Dining &amp; groceries <span data-for="d2"></span></label>
      <input class="hw-range" id="d2" type="range" min="0" max="3000" step="50" value="900" data-rate="2">
      <label for="o2">Everything else <span data-for="o2"></span></label>
      <input class="hw-range" id="o2" type="range" min="0" max="3000" step="50" value="700" data-rate="1">
      <div><span class="hw-points-out">0</span> <small>points a year</small></div>
    </div>
  </div>
</div></section>

<section class="sec"><div class="wrap">
  <div class="sec-head"><div><p class="eyebrow" style="color:var(--plum)">Redeem</p><h2 class="heading-l">Where your points can take you</h2><p class="body-m">Drag, swipe or use the arrows.</p></div>
  <button type="button" class="hw-btn hw-btn-primary" data-book-points="booked-rw">Book Halifax with points <span class="hw-arrow" aria-hidden="true">→</span></button></div>
  <div class="hw-carousel" aria-roledescription="carousel" aria-label="Redeem your points">
    <div class="hw-track" aria-label="Destinations">{''.join(card(d,False).replace(' hw-reveal','') for d in REDEEM)}</div>
    <div class="hw-car-ctrl"><button class="hw-car-btn" data-prev aria-label="Previous">←</button><div class="hw-dots"></div><button class="hw-car-btn" data-next aria-label="Next">→</button></div>
  </div>
  {booked('booked-rw','HW9R4T','Paid with 5,000 points. Confirmation HW9R4T is on its way to your inbox.')}
</div></section>

<section class="sec" style="padding-top:0"><div class="wrap faq">
  <div class="sec-head"><div><p class="eyebrow" style="color:var(--plum)">Questions</p><h2 class="heading-l">Rewards, plainly</h2></div></div>
  {faq([('How do I redeem points?','Choose “Pay with points” when you search. Mix points and dollars on any fare.'),('Do my points expire?','Not while you fly or earn at least once every 24 months, and never from Glide up.'),('Can I share points?','Pool points with up to five family members at no cost.')])}
</div></section>

{scene('Points look good on you.')}'''

for fn,(title,desc,body) in {'index.html':('Fly the long way round','Heronway: elevated economy, unhurried hospitality.',home),'where-we-fly.html':('Where we fly','Heronway route map and destinations.',wwf),'rewards.html':('Heronway Rewards','Heronway Rewards tiers, card and points.',rw)}.items():
    open(os.path.join(OUT,fn),'w').write(shell(fn,title,desc,body))
print('ok')
