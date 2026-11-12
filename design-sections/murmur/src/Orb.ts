import * as THREE from 'three'

/* The voice orb: an icosphere pushed around by 3D simplex noise. Loudness
   swells it, "thinking" twists it, "speaking" makes it pulse on each word.
   Colour is a three-stop palette lit by a fresnel rim. */

const NOISE = `
vec3 mod289(vec3 x){return x-floor(x*(1./289.))*289.;}
vec4 mod289(vec4 x){return x-floor(x*(1./289.))*289.;}
vec4 permute(vec4 x){return mod289(((x*34.)+1.)*x);}
vec4 taylorInvSqrt(vec4 r){return 1.79284291400159-.85373472095314*r;}
float snoise(vec3 v){
  const vec2 C=vec2(1./6.,1./3.);const vec4 D=vec4(0.,.5,1.,2.);
  vec3 i=floor(v+dot(v,C.yyy));vec3 x0=v-i+dot(i,C.xxx);
  vec3 g=step(x0.yzx,x0.xyz);vec3 l=1.-g;vec3 i1=min(g.xyz,l.zxy);vec3 i2=max(g.xyz,l.zxy);
  vec3 x1=x0-i1+C.xxx;vec3 x2=x0-i2+C.yyy;vec3 x3=x0-D.yyy;
  i=mod289(i);
  vec4 p=permute(permute(permute(i.z+vec4(0.,i1.z,i2.z,1.))+i.y+vec4(0.,i1.y,i2.y,1.))+i.x+vec4(0.,i1.x,i2.x,1.));
  float n_=.142857142857;vec3 ns=n_*D.wyz-D.xzx;
  vec4 j=p-49.*floor(p*ns.z*ns.z);vec4 x_=floor(j*ns.z);vec4 y_=floor(j-7.*x_);
  vec4 x=x_*ns.x+ns.yyyy;vec4 y=y_*ns.x+ns.yyyy;vec4 h=1.-abs(x)-abs(y);
  vec4 b0=vec4(x.xy,y.xy);vec4 b1=vec4(x.zw,y.zw);
  vec4 s0=floor(b0)*2.+1.;vec4 s1=floor(b1)*2.+1.;vec4 sh=-step(h,vec4(0.));
  vec4 a0=b0.xzyw+s0.xzyw*sh.xxyy;vec4 a1=b1.xzyw+s1.xzyw*sh.zzww;
  vec3 p0=vec3(a0.xy,h.x);vec3 p1=vec3(a0.zw,h.y);vec3 p2=vec3(a1.xy,h.z);vec3 p3=vec3(a1.zw,h.w);
  vec4 norm=taylorInvSqrt(vec4(dot(p0,p0),dot(p1,p1),dot(p2,p2),dot(p3,p3)));
  p0*=norm.x;p1*=norm.y;p2*=norm.z;p3*=norm.w;
  vec4 m=max(.6-vec4(dot(x0,x0),dot(x1,x1),dot(x2,x2),dot(x3,x3)),0.);m=m*m;
  return 42.*dot(m*m,vec4(dot(p0,x0),dot(p1,x1),dot(p2,x2),dot(p3,x3)));
}`

const VERT = `
uniform float uTime; uniform float uAmp; uniform float uFreq; uniform float uTwist;
varying vec3 vN; varying vec3 vView; varying float vD; varying vec3 vP;
${NOISE}
float field(vec3 p){
  return snoise(p * uFreq + vec3(0.0, uTime * 0.5, uTime * 0.2)) + 0.3 * snoise(p * uFreq * 2.1 - uTime * 0.35);
}
vec3 shape(vec3 p){
  float a = uTwist * p.y * 2.0;
  p.xz = mat2(cos(a), -sin(a), sin(a), cos(a)) * p.xz;
  return p * (1.0 + field(p) * uAmp);
}
void main(){
  vec3 n = normalize(position);
  // displaced normal from two nearby points on the surface
  vec3 t = normalize(cross(n, abs(n.y) < 0.99 ? vec3(0.0, 1.0, 0.0) : vec3(1.0, 0.0, 0.0)));
  vec3 b = cross(n, t);
  float e = 0.012;
  vec3 p0 = shape(n);
  vec3 p1 = shape(normalize(n + t * e));
  vec3 p2 = shape(normalize(n + b * e));
  vec3 dn = normalize(cross(p1 - p0, p2 - p0));
  vD = field(n);
  vP = n;
  vec4 mv = modelViewMatrix * vec4(p0, 1.0);
  vN = normalize(normalMatrix * dn);
  vView = normalize(-mv.xyz);
  gl_Position = projectionMatrix * mv;
}`

const FRAG = `
uniform vec3 uA; uniform vec3 uB; uniform vec3 uC; uniform float uGlow; uniform float uTime;
varying vec3 vN; varying vec3 vView; varying float vD; varying vec3 vP;
void main(){
  vec3 N = normalize(vN);
  float ndv = max(dot(N, vView), 0.0);
  float f = pow(1.0 - ndv, 2.6);
  // colour flows across the surface, like oil on water
  float band = 0.5 + 0.5 * sin(vP.y * 2.4 + vD * 1.6 + uTime * 0.8);
  vec3 base = mix(uA, uB, band);
  vec3 col = base * (0.08 + 0.42 * pow(ndv, 1.8));
  col += uA * 0.35 * smoothstep(0.2, 1.2, vD);
  // soft key light from the top left and a crisp specular
  vec3 L = normalize(vec3(-0.5, 0.8, 0.6));
  vec3 H = normalize(L + vView);
  col += uC * pow(max(dot(N, H), 0.0), 60.0) * 0.9;
  col += base * max(dot(N, L), 0.0) * 0.25;
  // rim glow, brighter when there is sound
  col += mix(uB, uC, 0.4) * f * (1.5 + uGlow * 1.4);
  gl_FragColor = vec4(col, 1.0);
}`

export type OrbState = 'idle' | 'listening' | 'thinking' | 'speaking'
export type Palette = [string, string, string]

export function createOrb(canvas: HTMLCanvasElement) {
  let renderer: THREE.WebGLRenderer
  try {
    renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true })
  } catch {
    return null
  }
  renderer.setClearColor(0x000000, 0)
  const scene = new THREE.Scene()
  const camera = new THREE.PerspectiveCamera(32, 1, 0.1, 50)
  camera.position.z = 5.2
  const uniforms = {
    uTime: { value: 0 },
    uAmp: { value: 0.12 },
    uFreq: { value: 1.3 },
    uTwist: { value: 0 },
    uGlow: { value: 0 },
    uA: { value: new THREE.Color('#ff3d7f') },
    uB: { value: new THREE.Color('#8a5cff') },
    uC: { value: new THREE.Color('#ffe1f0') },
  }
  const mat = new THREE.ShaderMaterial({ vertexShader: VERT, fragmentShader: FRAG, uniforms })
  const geo = new THREE.IcosahedronGeometry(1, 48)
  const mesh = new THREE.Mesh(geo, mat)
  scene.add(mesh)

  const resize = () => {
    const w = canvas.clientWidth, h = canvas.clientHeight
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2))
    renderer.setSize(w, h, false)
    camera.aspect = w / h
    camera.updateProjectionMatrix()
  }
  resize()
  const ro = new ResizeObserver(resize)
  ro.observe(canvas)

  const target = { level: 0, state: 'idle' as OrbState, pulse: 0, reduced: false }
  const sm = { level: 0, amp: 0.12, freq: 1.3, twist: 0, speed: 0.35, scale: 1 }
  const want = { a: new THREE.Color('#ff5f8f'), b: new THREE.Color('#ffb15c'), c: new THREE.Color('#ffe1f0') }
  const ptr = { x: 0, y: 0 }
  const move = (e: PointerEvent) => {
    ptr.x = e.clientX / window.innerWidth - 0.5
    ptr.y = e.clientY / window.innerHeight - 0.5
  }
  window.addEventListener('pointermove', move)

  let raf = 0
  let t = 0
  let prev = performance.now()
  const frame = (now: number) => {
    raf = requestAnimationFrame(frame)
    const dt = Math.min(0.05, (now - prev) / 1000)
    prev = now
    const k = 1 - Math.exp(-dt * 6)
    const s = target.state
    target.pulse *= Math.exp(-dt * 7)
    sm.level += (target.level - sm.level) * (1 - Math.exp(-dt * 14))
    const amp = s === 'listening' ? 0.09 + sm.level * 0.28 : s === 'speaking' ? 0.08 + target.pulse * 0.18 : s === 'thinking' ? 0.13 : 0.065
    const freq = s === 'thinking' ? 1.9 : s === 'listening' ? 1.3 + sm.level * 0.8 : 1.05
    const twist = s === 'thinking' ? 0.9 : 0
    const speed = s === 'thinking' ? 1.6 : s === 'listening' ? 0.9 : s === 'speaking' ? 0.7 : 0.35
    sm.amp += (amp - sm.amp) * k
    sm.freq += (freq - sm.freq) * k * 0.5
    sm.twist += (twist - sm.twist) * k * 0.6
    sm.speed += (speed - sm.speed) * k
    const scale = 1 + (s === 'listening' ? sm.level * 0.14 : 0) + target.pulse * 0.06
    sm.scale += (scale - sm.scale) * k
    if (!target.reduced) t += dt * sm.speed
    uniforms.uTime.value = t
    uniforms.uAmp.value = target.reduced ? 0.05 : sm.amp
    uniforms.uFreq.value = sm.freq
    uniforms.uTwist.value = Math.sin(t * 0.8) * sm.twist
    uniforms.uGlow.value = sm.level + target.pulse
    uniforms.uA.value.lerp(want.a, k * 0.5)
    uniforms.uB.value.lerp(want.b, k * 0.5)
    uniforms.uC.value.lerp(want.c, k * 0.5)
    mesh.scale.setScalar(sm.scale)
    mesh.rotation.y += dt * 0.15
    mesh.rotation.x += (ptr.y * 0.5 - mesh.rotation.x) * 0.04
    mesh.rotation.z += (-ptr.x * 0.4 - mesh.rotation.z) * 0.04
    renderer.render(scene, camera)
  }
  raf = requestAnimationFrame(frame)

  return {
    set level(v: number) { target.level = v },
    setState(s: OrbState) { target.state = s },
    setReduced(r: boolean) { target.reduced = r },
    pulse(v = 1) { target.pulse = Math.max(target.pulse, v) },
    setPalette(p: Palette) { want.a.set(p[0]); want.b.set(p[1]); want.c.set(p[2]) },
    dispose() {
      cancelAnimationFrame(raf)
      ro.disconnect()
      window.removeEventListener('pointermove', move)
      geo.dispose()
      mat.dispose()
      renderer.dispose()
    },
  }
}
export type Orb = NonNullable<ReturnType<typeof createOrb>>
