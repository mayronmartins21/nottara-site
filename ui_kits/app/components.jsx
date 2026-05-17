// Nottara mobile app components — pixel recreations of the React Native UI.
// Keep components small and visual; no real state machinery beyond click-thru navigation.
// Brand tokens come from ../../colors_and_type.css.

const NT = {
  amber: '#EF9F27',
  amberLight: '#FAC775',
  amberSoft: '#FAEEDA',
  graphite: '#1A1A18',
  off: '#F7F5F0',
  ink900: '#1A1A18',
  ink700: '#3A3A35',
  ink500: '#6E6B62',
  ink400: '#918D82',
  ink300: '#BDB7A8',
  ink200: '#D9D3C4',
  ink100: '#E8E3D8',
  ink50:  '#F1ECE0',
  serif:  "'DM Serif Display', Georgia, serif",
  sans:   "'Plus Jakarta Sans', -apple-system, system-ui, sans-serif",
};

// ─── Icon (inline SVG, stroke 1.5, currentColor) ─────────────
function NTIcon({ name, size = 22, color }) {
  const s = { width: size, height: size, color, strokeWidth: 1.5, fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round' };
  switch (name) {
    case 'mic': return (<svg viewBox="0 0 24 24" style={s}><rect x="9" y="2" width="6" height="13" rx="3"/><path d="M5 11a7 7 0 0 0 14 0"/><path d="M12 19v3"/></svg>);
    case 'plus': return (<svg viewBox="0 0 24 24" style={s}><path d="M12 5v14M5 12h14"/></svg>);
    case 'home': return (<svg viewBox="0 0 24 24" style={s}><path d="M3 11l9-8 9 8v9a2 2 0 0 1-2 2h-4v-7H9v7H5a2 2 0 0 1-2-2z"/></svg>);
    case 'users': return (<svg viewBox="0 0 24 24" style={s}><circle cx="9" cy="8" r="4"/><path d="M2 21a7 7 0 0 1 14 0"/><path d="M17 11a4 4 0 0 0 0-7"/><path d="M22 21a7 7 0 0 0-5-6.7"/></svg>);
    case 'calendar': return (<svg viewBox="0 0 24 24" style={s}><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M8 3v4M16 3v4M3 10h18"/></svg>);
    case 'settings': return (<svg viewBox="0 0 24 24" style={s}><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.8-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-1-1.5 1.7 1.7 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.8 1.7 1.7 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1a1.7 1.7 0 0 0 1.5-1 1.7 1.7 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.8.3h.1a1.7 1.7 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.8v.1a1.7 1.7 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1z"/></svg>);
    case 'chevron-right': return (<svg viewBox="0 0 24 24" style={s}><path d="M9 6l6 6-6 6"/></svg>);
    case 'chevron-left': return (<svg viewBox="0 0 24 24" style={s}><path d="M15 6l-6 6 6 6"/></svg>);
    case 'shield': return (<svg viewBox="0 0 24 24" style={s}><path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z"/><path d="M9 12l2 2 4-4"/></svg>);
    case 'search': return (<svg viewBox="0 0 24 24" style={s}><circle cx="11" cy="11" r="7"/><path d="M20 20l-3.5-3.5"/></svg>);
    case 'play': return (<svg viewBox="0 0 24 24" style={s}><path d="M6 4l14 8-14 8z"/></svg>);
    case 'pause': return (<svg viewBox="0 0 24 24" style={s}><rect x="6" y="4" width="4" height="16"/><rect x="14" y="4" width="4" height="16"/></svg>);
    case 'stop': return (<svg viewBox="0 0 24 24" style={s}><rect x="6" y="6" width="12" height="12" rx="2"/></svg>);
    case 'check': return (<svg viewBox="0 0 24 24" style={s}><path d="M5 13l4 4L19 7"/></svg>);
    case 'edit': return (<svg viewBox="0 0 24 24" style={s}><path d="M4 20h4l11-11-4-4L4 16z"/></svg>);
    case 'wave': return (<svg viewBox="0 0 24 24" style={s}><path d="M3 12c2-4 4-4 6 0s4 4 6 0 4-4 6 0"/></svg>);
    default: return null;
  }
}

// ─── Status bar (light/dark, time, indicators) ───────────────
function NTStatusBar({ dark = false, time = '14:32' }) {
  const c = dark ? NT.off : NT.graphite;
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', padding: '14px 28px 4px', position: 'relative', zIndex: 30, fontFamily: NT.sans, fontWeight: 600, fontSize: 15, color: c }}>
      <span>{time}</span>
      <div style={{ display: 'flex', gap: 6, alignItems: 'center' }}>
        <svg width="16" height="11" viewBox="0 0 16 11"><rect x="0" y="7" width="3" height="4" rx="1" fill={c}/><rect x="4.5" y="5" width="3" height="6" rx="1" fill={c}/><rect x="9" y="2.5" width="3" height="8.5" rx="1" fill={c}/><rect x="13.5" y="0" width="2.5" height="11" rx="1" fill={c} opacity=".5"/></svg>
        <svg width="22" height="11" viewBox="0 0 22 11"><rect x="0.5" y="0.5" width="18" height="10" rx="2.5" fill="none" stroke={c} strokeOpacity=".4"/><rect x="2" y="2" width="13" height="7" rx="1" fill={c}/><rect x="20" y="3.5" width="1.5" height="4" rx=".5" fill={c} opacity=".5"/></svg>
      </div>
    </div>
  );
}

// ─── Bottom tab bar ──────────────────────────────────────────
function NTTabBar({ active = 'home', onTab = () => {} }) {
  const tabs = [
    { id: 'home',     label: 'Início',    icon: 'home' },
    { id: 'schedule', label: 'Agenda',    icon: 'calendar' },
    { id: 'record',   label: '',          icon: 'mic',   hero: true },
    { id: 'patients', label: 'Pacientes', icon: 'users' },
    { id: 'profile',  label: 'Perfil',    icon: 'profile' },
  ];
  return (
    <div style={{ position: 'absolute', left: 0, right: 0, bottom: 0, paddingBottom: 22, paddingTop: 10, background: '#fff', borderTop: `1px solid ${NT.ink100}`, display: 'flex', justifyContent: 'space-around', alignItems: 'flex-end', zIndex: 20, fontFamily: NT.sans }}>
      {tabs.map(t => t.hero ? (
        <button key={t.id} onClick={() => onTab(t.id)} style={{ all: 'unset', cursor: 'pointer', width: 58, height: 58, borderRadius: 999, background: NT.amber, color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 8px 18px -6px rgba(239,159,39,.55)', marginTop: -28, border: '4px solid #fff' }}>
          <NTIcon name="mic" size={24} color="#fff"/>
        </button>
      ) : (
        <button key={t.id} onClick={() => onTab(t.id)} style={{ all: 'unset', cursor: 'pointer', display: 'flex', flexDirection: 'column', gap: 4, alignItems: 'center', color: active === t.id ? NT.amber : NT.ink500, fontSize: 12, fontWeight: 500, padding: '2px 8px' }}>
          <NTIcon name={t.icon === 'profile' ? 'users' : t.icon} size={22} color={active === t.id ? NT.amber : NT.ink500}/>
          <span>{t.label}</span>
        </button>
      ))}
    </div>
  );
}

// ─── Patient row ─────────────────────────────────────────────
function NTPatientRow({ name, sub, time, initials, accent, onClick }) {
  return (
    <button onClick={onClick} style={{ all: 'unset', cursor: 'pointer', display: 'grid', gridTemplateColumns: '44px 1fr auto', gap: 12, padding: '14px 20px', width: 'calc(100% - 40px)', alignItems: 'center', borderBottom: `1px solid ${NT.ink100}`, fontFamily: NT.sans }}>
      <div style={{ width: 44, height: 44, borderRadius: 999, background: accent ? NT.amber : NT.ink100, color: accent ? NT.graphite : NT.ink700, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: 14 }}>{initials}</div>
      <div>
        <div style={{ color: NT.graphite, fontWeight: 600, fontSize: 15 }}>{name}</div>
        <div style={{ color: NT.ink500, fontSize: 13, marginTop: 2 }}>{sub}</div>
      </div>
      <span style={{ color: NT.ink500, fontSize: 12, fontWeight: 600 }}>{time}</span>
    </button>
  );
}

// ─── Big amber CTA pill ──────────────────────────────────────
function NTCTA({ children, onClick, secondary }) {
  return (
    <button onClick={onClick} style={{ all: 'unset', cursor: 'pointer', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 8, padding: '14px 22px', borderRadius: 999, background: secondary ? 'transparent' : NT.amber, color: NT.graphite, border: secondary ? `1.5px solid ${NT.graphite}` : 'none', fontFamily: NT.sans, fontWeight: 600, fontSize: 15, boxShadow: secondary ? 'none' : '0 8px 20px -8px rgba(239,159,39,.55)' }}>
      {children}
    </button>
  );
}

// ─── Section header ──────────────────────────────────────────
function NTSection({ title, action, children }) {
  return (
    <div style={{ marginTop: 28 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', padding: '0 20px 10px' }}>
        <span style={{ fontSize: 11, letterSpacing: '.1em', textTransform: 'uppercase', fontWeight: 700, color: NT.ink500, fontFamily: NT.sans }}>{title}</span>
        {action && <span style={{ fontSize: 12, color: NT.ink700, fontWeight: 600, fontFamily: NT.sans }}>{action}</span>}
      </div>
      {children}
    </div>
  );
}

// ─── Brand mark (inline double-wave) ─────────────────────────
function NTMark({ size = 28, primary = NT.graphite, secondary = NT.amberLight, stacked = true }) {
  // Double wave that mirrors the app icon: top wave thicker, bottom wave thinner & offset.
  const w = size, h = stacked ? size * 0.6 : size * 0.45;
  return (
    <svg width={w} height={h} viewBox="0 0 100 60">
      {stacked && (
        <path d="M 12 44 C 22 38, 30 50, 42 44 S 64 38, 76 46 S 92 50, 96 42"
              fill="none" stroke={secondary} strokeWidth="5"
              strokeLinecap="round" strokeLinejoin="round"/>
      )}
      <path d="M 8 28 C 22 12, 30 38, 42 24 S 64 12, 76 26 S 92 36, 96 22"
            fill="none" stroke={primary} strokeWidth="7"
            strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

// ─── Brand mark inside amber rounded square (app icon style) ─
function NTBrandIcon({ size = 32 }) {
  const r = size * 0.22;
  return (
    <div style={{ width: size, height: size, borderRadius: r, background: NT.amber, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <NTMark size={size * 0.7} primary="#fff" secondary={NT.amberLight}/>
    </div>
  );
}

window.NT = NT;
window.NTIcon = NTIcon;
window.NTStatusBar = NTStatusBar;
window.NTTabBar = NTTabBar;
window.NTPatientRow = NTPatientRow;
window.NTCTA = NTCTA;
window.NTSection = NTSection;
window.NTMark = NTMark;
window.NTBrandIcon = NTBrandIcon;
