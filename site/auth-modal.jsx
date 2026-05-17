// Nottara — Auth UI: Login modal (institutional site) + SignupFlow (cadastro page)
// Depends on globals from parts.jsx: N, Icon, WaveBackdrop, NLogo, NMark.

// ── App Store / Google Play icon glyphs ──
function AppleGlyph({ size = 18, color = '#fff' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color} aria-hidden="true">
      <path d="M16.4 12.6c0-2.4 2-3.5 2.1-3.6-1.1-1.7-2.9-1.9-3.5-1.9-1.5-.2-2.9.9-3.6.9-.8 0-1.9-.9-3.1-.8-1.6 0-3.1.9-3.9 2.4-1.7 2.9-.4 7.2 1.2 9.5.8 1.2 1.7 2.4 3 2.4 1.2 0 1.6-.8 3.1-.8s1.9.8 3.1.7c1.3 0 2.1-1.2 2.9-2.3.6-.7 1-1.6 1.3-2.4-2.7-1-2.6-3-2.6-3.1zM14 5.4c.6-.8 1.1-1.9 1-2.9-1 .1-2.1.7-2.7 1.4-.6.6-1.2 1.7-1 2.7 1.1.1 2.2-.5 2.7-1.2z"/>
    </svg>
  );
}
function PlayGlyph({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true">
      <defs>
        <linearGradient id="pg1" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#FBC227"/><stop offset="1" stopColor="#EF9F27"/>
        </linearGradient>
        <linearGradient id="pg2" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#FAC775"/><stop offset="1" stopColor="#EF9F27"/>
        </linearGradient>
        <linearGradient id="pg3" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#F7F5F0"/><stop offset="1" stopColor="#FAC775"/>
        </linearGradient>
      </defs>
      <path d="M3.2 2.5c-.4.3-.7.8-.7 1.4v16.2c0 .6.3 1.1.7 1.4l9.3-9.3-9.3-9.7z" fill="url(#pg3)"/>
      <path d="M16.5 9l-3.2-1.9-9.3-5.4c-.2-.1-.5-.1-.7 0L12.5 11l4-2z" fill="url(#pg2)"/>
      <path d="M21.3 11.2l-4.8-2.2L13 12l3.5 3.4 4.8-2.8c.6-.4.6-1.2 0-1.4z" fill="url(#pg1)"/>
      <path d="M3.2 21.5c.2.1.5.1.7 0l12.6-7.3L13 12 3.2 21.5z" fill="#EF9F27"/>
    </svg>
  );
}

function AppButtons({ size = 'md' }) {
  const pad = size === 'sm' ? '11px 14px' : '14px 18px';
  const title = size === 'sm' ? 10 : 11;
  const main = size === 'sm' ? 14 : 15;
  const buttonStyle = {
    all: 'unset', cursor: 'pointer',
    display: 'flex', alignItems: 'center', gap: 12,
    padding: pad,
    borderRadius: 12,
    background: N.graphite,
    color: N.off,
    boxSizing: 'border-box',
    justifyContent: 'center',
    transition: 'transform .15s ease, box-shadow .15s ease',
  };
  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10, width: '100%' }}>
      <a href="#" style={buttonStyle} onClick={e => e.preventDefault()}>
        <AppleGlyph size={size === 'sm' ? 18 : 22}/>
        <div style={{ textAlign: 'left', lineHeight: 1.1 }}>
          <div style={{ fontSize: title, opacity: .7, letterSpacing: '.04em' }}>Baixar na</div>
          <div style={{ fontSize: main, fontWeight: 700, marginTop: 2 }}>App Store</div>
        </div>
      </a>
      <a href="#" style={buttonStyle} onClick={e => e.preventDefault()}>
        <PlayGlyph size={size === 'sm' ? 18 : 22}/>
        <div style={{ textAlign: 'left', lineHeight: 1.1 }}>
          <div style={{ fontSize: title, opacity: .7, letterSpacing: '.04em' }}>Baixar no</div>
          <div style={{ fontSize: main, fontWeight: 700, marginTop: 2 }}>Google Play</div>
        </div>
      </a>
    </div>
  );
}

// ── Login modal ──
function LoginModal({ open, onClose }) {
  React.useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const onKey = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener('keydown', onKey);
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      onClick={onClose}
      style={{
        position: 'fixed', inset: 0, zIndex: 100,
        background: 'rgba(26,26,24,.55)',
        backdropFilter: 'blur(6px)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        padding: 20,
        fontFamily: N.sans,
        animation: 'nt-fade-in .22s ease-out',
      }}
    >
      <div
        onClick={e => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="login-title"
        style={{
          position: 'relative',
          background: N.off,
          borderRadius: 28,
          padding: '52px 44px 40px',
          maxWidth: 520, width: '100%',
          boxShadow: '0 40px 80px -20px rgba(26,26,24,.4), 0 8px 24px -8px rgba(26,26,24,.2)',
          overflow: 'hidden',
          animation: 'nt-modal-in .28s cubic-bezier(.2,.7,.2,1)',
        }}
      >
        <WaveBackdrop opacity={0.08} color={N.amber}/>
        <button
          onClick={onClose}
          aria-label="Fechar"
          style={{
            position: 'absolute', top: 16, right: 16, zIndex: 3,
            width: 36, height: 36, borderRadius: 999,
            border: 'none', background: 'rgba(26,26,24,.06)', cursor: 'pointer',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            transition: 'background .15s ease',
          }}
          onMouseEnter={e => e.currentTarget.style.background = 'rgba(26,26,24,.12)'}
          onMouseLeave={e => e.currentTarget.style.background = 'rgba(26,26,24,.06)'}
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={N.graphite} strokeWidth="2.2" strokeLinecap="round">
            <path d="M6 6l12 12M6 18L18 6"/>
          </svg>
        </button>

        <div style={{ position: 'relative', textAlign: 'center' }}>
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 18 }}>
            <img
              src="assets/logo-icon-512.png"
              alt="Nottara"
              width="64"
              height="64"
              style={{ width: 64, height: 64, borderRadius: 16, display: 'block', boxShadow: '0 10px 24px -10px rgba(239,159,39,.6)' }}
            />
          </div>
          <h3 id="login-title" style={{ fontFamily: N.serif, fontSize: 'clamp(26px, 3.2vw, 32px)', color: N.graphite, fontWeight: 400, margin: 0, letterSpacing: '-0.015em', lineHeight: 1.15, textWrap: 'balance' }}>
            O acesso web está chegando
          </h3>
          <p style={{ fontSize: 16, color: N.ink700, lineHeight: 1.55, margin: '14px auto 28px', maxWidth: 420 }}>
            Por enquanto, o Nottara está disponível exclusivamente pelo aplicativo. Baixe agora e comece a usar — o módulo web será liberado em breve.
          </p>
          <AppButtons/>
          <div style={{ marginTop: 22, fontSize: 13, color: N.ink500 }}>
            Já tem conta? Entre pelo app.
          </div>
        </div>
      </div>
    </div>
  );
}

window.LoginModal = LoginModal;
window.AppButtons = AppButtons;
window.AppleGlyph = AppleGlyph;
window.PlayGlyph = PlayGlyph;
