// Nottara — institutional website / atomic parts (mark, icon, phone mock, primitives).
// Brand tokens come from ../colors_and_type.css.

const N = {
  amber: '#EF9F27',
  amberLight: '#FAC775',
  amberSoft: '#FAEEDA',
  amberFog: '#FBF6EB',
  graphite: '#1A1A18',
  off: '#F7F5F0',
  ink900: '#1A1A18', ink700: '#3A3A35', ink500: '#6E6B62',
  ink400: '#918D82', ink300: '#BDB7A8', ink200: '#D9D3C4', ink100: '#E8E3D8',
  good:  '#4F7A55',
  serif: "'DM Serif Display', Georgia, serif",
  sans:  "'Plus Jakarta Sans', -apple-system, system-ui, sans-serif",
  mono:  "'JetBrains Mono', ui-monospace, monospace",
};

// ── Brand mark — real Nottara logo PNG ──
function NMark({ size = 28, primary, secondary, single = false }) {
  // Note: primary/secondary props ignored — we use the real logo PNG.
  // The PNG has its native orange/cream waves. For dark-bg variants pass white via filter.
  const isDark = primary === '#fff' || primary === 'white';
  return (
    <img
      src="assets/logo-real-1024.png"
      alt="Nottara"
      width={size * 1.5}
      height={size}
      style={{ display: 'block', objectFit: 'contain', filter: isDark ? 'brightness(0) invert(1)' : 'none' }}
    />
  );
}

function NLogo({ light = false, size = 32 }) {
  return (
    <a href="#top" style={{ display: 'flex', alignItems: 'center', gap: 14, textDecoration: 'none' }}>
      <img src="assets/logo-wave.png" alt="" style={{ height: size * 1.4, width: 'auto', display: 'block' }}/>
      <span style={{ fontFamily: N.serif, fontSize: size * 1.2, color: light ? N.off : N.graphite, letterSpacing: '-0.01em', fontWeight: 400, lineHeight: 1 }}>Nottara</span>
    </a>
  );
}

// ── Lucide-style stroke icons (1.75 weight) ──
function Icon({ name, size = 22, color = 'currentColor', strokeWidth = 1.75 }) {
  const s = { width: size, height: size, color, strokeWidth, fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', display: 'block' };
  switch (name) {
    case 'mic':       return (<svg viewBox="0 0 24 24" style={s}><rect x="9" y="2" width="6" height="13" rx="3"/><path d="M5 11a7 7 0 0 0 14 0"/><path d="M12 19v3"/></svg>);
    case 'sparkles':  return (<svg viewBox="0 0 24 24" style={s}><path d="M12 3l1.7 5L19 9.7l-5.3 1.6L12 16l-1.7-4.7L5 9.7 10.3 8z"/><path d="M19 17l.8 2 2 .8-2 .8-.8 2-.8-2-2-.8 2-.8z"/></svg>);
    case 'doc':       return (<svg viewBox="0 0 24 24" style={s}><path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z"/><path d="M14 3v5h5"/><path d="M9 13h6M9 17h4"/></svg>);
    case 'users':     return (<svg viewBox="0 0 24 24" style={s}><circle cx="9" cy="8" r="4"/><path d="M2 21a7 7 0 0 1 14 0"/><path d="M17 11a4 4 0 0 0 0-7"/><path d="M22 21a7 7 0 0 0-5-6.7"/></svg>);
    case 'shield':    return (<svg viewBox="0 0 24 24" style={s}><path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z"/><path d="M9 12l2 2 4-4"/></svg>);
    case 'lock':      return (<svg viewBox="0 0 24 24" style={s}><rect x="4" y="11" width="16" height="10" rx="2"/><path d="M8 11V7a4 4 0 0 1 8 0v4"/></svg>);
    case 'server':    return (<svg viewBox="0 0 24 24" style={s}><rect x="3" y="3" width="18" height="8" rx="2"/><rect x="3" y="13" width="18" height="8" rx="2"/><circle cx="7" cy="7" r=".5" fill="currentColor"/><circle cx="7" cy="17" r=".5" fill="currentColor"/></svg>);
    case 'gavel':     return (<svg viewBox="0 0 24 24" style={s}><path d="M14 13l-7.5 7.5a2 2 0 0 1-3-3L11 10"/><path d="M16 5l3 3"/><path d="M11 10l5-5 4 4-5 5z"/><path d="M3 21h12"/></svg>);
    case 'clock':     return (<svg viewBox="0 0 24 24" style={s}><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>);
    case 'brain':     return (<svg viewBox="0 0 24 24" style={s}><path d="M9 5a3 3 0 0 0-3 3 3 3 0 0 0-2 5 3 3 0 0 0 1 5 3 3 0 0 0 4 2v-15z"/><path d="M15 5a3 3 0 0 1 3 3 3 3 0 0 1 2 5 3 3 0 0 1-1 5 3 3 0 0 1-4 2v-15z"/></svg>);
    case 'people':    return (<svg viewBox="0 0 24 24" style={s}><circle cx="12" cy="8" r="4"/><path d="M3 21a9 9 0 0 1 18 0"/></svg>);
    case 'pen':       return (<svg viewBox="0 0 24 24" style={s}><path d="M3 21l4-1 12-12-3-3L4 17z"/><path d="M14 6l3 3"/></svg>);
    case 'check':     return (<svg viewBox="0 0 24 24" style={s}><path d="M5 13l4 4L19 7"/></svg>);
    case 'plus':      return (<svg viewBox="0 0 24 24" style={s}><path d="M12 5v14M5 12h14"/></svg>);
    case 'minus':     return (<svg viewBox="0 0 24 24" style={s}><path d="M5 12h14"/></svg>);
    case 'wave':      return (<svg viewBox="0 0 24 24" style={s}><path d="M3 12c2-4 4-4 6 0s4 4 6 0 4-4 6 0"/></svg>);
    case 'arrow-right': return (<svg viewBox="0 0 24 24" style={s}><path d="M5 12h14M13 6l6 6-6 6"/></svg>);
    case 'menu':      return (<svg viewBox="0 0 24 24" style={s}><path d="M4 6h16M4 12h16M4 18h16"/></svg>);
    case 'whatsapp':  return (<svg viewBox="0 0 24 24" style={s}><path d="M3 21l1.7-5A8.5 8.5 0 1 1 8 19.6z"/><path d="M9 10c.4 1 1.2 2.5 2 3.3.8.8 2.3 1.6 3.3 2"/></svg>);
    case 'calendar':  return (<svg viewBox="0 0 24 24" style={s}><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M8 3v4M16 3v4M3 10h18"/></svg>);
    case 'signature': return (<svg viewBox="0 0 24 24" style={s}><path d="M3 17c2 0 3-2 4-5s2-5 4-5 2 8 4 8 3-3 6-3"/><path d="M3 21h18"/></svg>);
    case 'database':  return (<svg viewBox="0 0 24 24" style={s}><ellipse cx="12" cy="5" rx="8" ry="3"/><path d="M4 5v6c0 1.7 3.6 3 8 3s8-1.3 8-3V5"/><path d="M4 11v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6"/></svg>);
    default: return null;
  }
}

// ── Backdrop wave pattern (decorative, animated, seamless loop) ──
function WaveBackdrop({ opacity = 0.07, color = N.amber }) {
  // Paths are designed to be perfectly tileable in a 1200-unit viewBox:
  // each path starts and ends at the same Y baseline with matching tangents,
  // so two side-by-side tiles connect with no visible seam. The wave-layer
  // wrapper is 200% wide and animates translateX(-50%) → exactly one tile.
  const pathsA = [
    // Top wave  — baseline y=110
    'M 0 110 C 200 80, 400 140, 600 110 C 800 80, 1000 140, 1200 110',
    // Mid-lower wave — baseline y=350
    'M 0 350 C 200 320, 400 380, 600 350 C 800 320, 1000 380, 1200 350',
  ];
  const pathsB = [
    // Mid-upper wave — baseline y=230 (phase flipped)
    'M 0 230 C 200 260, 400 200, 600 230 C 800 260, 1000 200, 1200 230',
    // Bottom wave   — baseline y=470 (phase flipped)
    'M 0 470 C 200 500, 400 440, 600 470 C 800 500, 1000 440, 1200 470',
  ];
  const renderTile = (xOffset, paths) => (
    <g transform={`translate(${xOffset} 0)`} stroke={color} strokeWidth="2" fill="none" strokeLinecap="round">
      {paths.map((d, i) => (<path key={i} d={d}/>))}
    </g>
  );
  return (
    <div aria-hidden="true" style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none', zIndex: 0 }}>
      <div className="wave-layer wave-layer-a" style={{ opacity }}>
        <svg viewBox="0 0 2400 600" preserveAspectRatio="none" style={{ width: '100%', height: '100%', display: 'block' }}>
          {renderTile(0, pathsA)}
          {renderTile(1200, pathsA)}
        </svg>
      </div>
      <div className="wave-layer wave-layer-b" style={{ opacity: opacity * 0.78 }}>
        <svg viewBox="0 0 2400 600" preserveAspectRatio="none" style={{ width: '100%', height: '100%', display: 'block' }}>
          {renderTile(0, pathsB)}
          {renderTile(1200, pathsB)}
        </svg>
      </div>
    </div>
  );
}

// ── Phone-shaped mockup container ──
function PhoneMock({ children, scale = 1, w = 320, h = 660 }) {
  return (
    <div style={{ width: w, height: h, transform: `scale(${scale})`, transformOrigin: 'top center', borderRadius: 44, background: '#0c0c0b', padding: 6, boxShadow: '0 30px 60px -20px rgba(26,26,24,.35), 0 0 0 1px rgba(0,0,0,.04)', position: 'relative' }}>
      <div style={{ position: 'absolute', top: 14, left: '50%', transform: 'translateX(-50%)', width: 100, height: 26, background: '#000', borderRadius: 18, zIndex: 5 }}/>
      <div style={{ width: '100%', height: '100%', borderRadius: 38, overflow: 'hidden', background: N.off, position: 'relative' }}>{children}</div>
    </div>
  );
}

// ── Pill / tag ──
function Pill({ children, color = N.amber }) {
  return (
    <span className="nt-pill" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '7px 14px', borderRadius: 999, background: N.amberSoft, fontSize: 12, fontWeight: 600, color: N.graphite, letterSpacing: '.02em', fontFamily: N.sans, maxWidth: '100%' }}>
      <span style={{ width: 6, height: 6, borderRadius: 999, background: color }}/>{children}
    </span>
  );
}

// ── Section heading ──
function H2({ eyebrow, title, sub, light = false, align = 'left', maxWidth = 760 }) {
  const fg = light ? N.off : N.graphite;
  const fg2 = light ? 'rgba(247,245,240,.7)' : N.ink500;
  const eb = light ? N.amberLight : N.amber;
  return (
    <div style={{ textAlign: align, maxWidth, margin: align === 'center' ? '0 auto' : 0 }}>
      {eyebrow && (<div style={{ fontSize: 12, fontWeight: 700, letterSpacing: '.14em', textTransform: 'uppercase', color: eb, fontFamily: N.sans, marginBottom: 18 }}>{eyebrow}</div>)}
      <h2 className="nt-h2-title" style={{ fontFamily: N.serif, fontSize: 'clamp(34px, 4.4vw, 56px)', lineHeight: 1.04, letterSpacing: '-0.02em', margin: 0, color: fg, fontWeight: 400, textWrap: 'balance' }}>{title}</h2>
      {sub && (<p style={{ fontSize: 18, color: fg2, lineHeight: 1.55, margin: '20px 0 0', fontFamily: N.sans }}>{sub}</p>)}
    </div>
  );
}

window.N = N;
window.NMark = NMark; window.NLogo = NLogo;
window.Icon = Icon; window.WaveBackdrop = WaveBackdrop; window.PhoneMock = PhoneMock;
window.Pill = Pill; window.H2 = H2;
