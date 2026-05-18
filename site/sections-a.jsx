// Nottara — institutional website / sections (1–7).

// 1) NAVBAR
function Nav({ onLogin }) {
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const links = [
    ['Como funciona', '#how'],
    ['Funcionalidades', '#features'],
    ['Segurança', '#security'],
    ['FAQ', '#faq'],
  ];

  React.useEffect(() => {
    if (!drawerOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const onKey = (e) => { if (e.key === 'Escape') setDrawerOpen(false); };
    window.addEventListener('keydown', onKey);
    return () => { document.body.style.overflow = prev; window.removeEventListener('keydown', onKey); };
  }, [drawerOpen]);

  const goToLink = (e, href) => {
    e.preventDefault();
    setDrawerOpen(false);
    // Smooth scroll to the target (closing the drawer first keeps the
    // body scroll lock from interfering with the anchor jump).
    setTimeout(() => {
      const el = document.querySelector(href);
      if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 60, behavior: 'smooth' });
    }, 50);
  };

  return (
    <header style={{ position: 'sticky', top: 0, zIndex: 50, background: 'rgba(247,245,240,.85)', backdropFilter: 'blur(14px)', borderBottom: `1px solid ${N.ink100}` }}>
      <div className="nt-nav-inner" style={{ maxWidth: 1240, margin: '0 auto', padding: '16px 28px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontFamily: N.sans, gap: 16 }}>
        <NLogo/>
        <nav className="nt-nav-links" style={{ display: 'flex', gap: 30, fontSize: 14, fontWeight: 500, color: N.ink700 }}>
          {links.map(([l, h]) => (<a key={l} href={h} style={{ color: 'inherit', textDecoration: 'none' }}>{l}</a>))}
        </nav>
        <div className="nt-nav-cta" style={{ display: 'flex', gap: 12, alignItems: 'center', fontSize: 14, fontWeight: 600 }}>
          <a className="nt-entrar" href="#" onClick={(e) => { e.preventDefault(); onLogin && onLogin(); }} style={{ color: N.graphite, textDecoration: 'none', cursor: 'pointer' }}>Entrar</a>
          <a className="nt-nav-cta-btn" href="cadastro.html" style={{ all: 'unset', cursor: 'pointer', padding: '11px 20px', borderRadius: 999, background: N.amber, color: N.graphite, boxShadow: '0 6px 16px -6px rgba(239,159,39,.55)', whiteSpace: 'nowrap' }}>Começar grátis</a>
          <button
            className="nt-hamburger"
            aria-label="Abrir menu"
            onClick={() => setDrawerOpen(true)}
            style={{
              alignItems: 'center', justifyContent: 'center',
              width: 40, height: 40, borderRadius: 10,
              border: `1px solid ${N.ink100}`, background: 'transparent', cursor: 'pointer',
              marginLeft: 4,
            }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={N.graphite} strokeWidth="2" strokeLinecap="round">
              <path d="M4 7h16M4 12h16M4 17h16"/>
            </svg>
          </button>
        </div>
      </div>

      {drawerOpen && ReactDOM.createPortal(
        <aside className="nt-drawer" role="dialog" aria-modal="true" aria-label="Menu de navegação">
          <div className="nt-drawer-top">
            <NLogo size={26}/>
            <button
              aria-label="Fechar menu"
              onClick={() => setDrawerOpen(false)}
              style={{ width: 40, height: 40, borderRadius: 999, border: 'none', background: 'rgba(26,26,24,.06)', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={N.graphite} strokeWidth="2.2" strokeLinecap="round"><path d="M6 6l12 12M6 18L18 6"/></svg>
            </button>
          </div>
          <nav className="nt-drawer-nav">
            {links.map(([l, h]) => (
              <a key={l} href={h} onClick={(e) => goToLink(e, h)}>{l}</a>
            ))}
          </nav>
          <div className="nt-drawer-cta">
            <a href="#" onClick={(e) => { e.preventDefault(); setDrawerOpen(false); onLogin && onLogin(); }} style={{ textAlign: 'center', padding: '14px 18px', borderRadius: 12, border: `1.5px solid ${N.graphite}`, color: N.graphite, fontWeight: 600, fontSize: 15, textDecoration: 'none' }}>Entrar</a>
            <a href="cadastro.html" style={{ textAlign: 'center', padding: '14px 18px', borderRadius: 12, background: N.amber, color: N.graphite, fontWeight: 700, fontSize: 15, textDecoration: 'none', boxShadow: '0 12px 28px -10px rgba(239,159,39,.55)' }}>Começar grátis</a>
          </div>
        </aside>,
        document.body
      )}
    </header>
  );
}

// 2) HERO
function Hero() {
  return (
    <section id="top" className="nt-hero" style={{ position: 'relative', padding: '72px 28px 96px', overflow: 'hidden', background: N.off, fontFamily: N.sans }}>
      <WaveBackdrop opacity={0.08}/>
      <div className="nt-hero-grid" style={{ position: 'relative', maxWidth: 1240, margin: '0 auto', display: 'grid', gridTemplateColumns: '1.1fr 1fr', gap: 72, alignItems: 'center' }}>
        <div className="nt-hero-text">
          <Pill>Conformidade LGPD · CFP · Servidores no Brasil</Pill>
          <h1 className="nt-hero-h1" style={{ fontFamily: N.serif, fontSize: 'clamp(48px, 6vw, 76px)', lineHeight: 1.0, letterSpacing: '-0.025em', margin: '24px 0 18px', color: N.graphite, fontWeight: 400, textWrap: 'balance' }}>
            O copiloto clínico do <em style={{ fontStyle: 'italic', color: N.amber }}>psicólogo</em> brasileiro
          </h1>
          <div className="nt-hero-sub-wrap" style={{ maxWidth: 560 }}>
            <p className="nt-hero-sub-1" style={{ fontSize: 22, color: N.ink700, lineHeight: 1.45, margin: 0, fontWeight: 600, letterSpacing: '-0.005em' }}>
              A escuta é sua. A documentação é nossa.
            </p>
            <p className="nt-hero-sub-2" style={{ fontSize: 19, color: N.ink500, lineHeight: 1.55, margin: '8px 0 0', fontWeight: 400 }}>
              O Nottara organiza suas notas clínicas para que você esteja inteiro em cada sessão — do início ao fim.
            </p>
          </div>
          <div className="nt-hero-buttons" style={{ display: 'flex', gap: 12, marginTop: 32, flexWrap: 'wrap' }}>
            <a href="cadastro.html" style={{ all: 'unset', cursor: 'pointer', padding: '15px 26px', borderRadius: 12, background: N.amber, color: N.graphite, fontWeight: 700, fontSize: 16, boxShadow: '0 12px 28px -10px rgba(239,159,39,.55)', textAlign: 'center' }}>Criar conta grátis</a>
            <a href="#how" style={{ all: 'unset', cursor: 'pointer', padding: '14px 24px', borderRadius: 12, border: `1.5px solid ${N.graphite}`, color: N.graphite, fontWeight: 600, fontSize: 16, textAlign: 'center' }}>Ver como funciona</a>
          </div>
          <div className="nt-hero-micro" style={{ marginTop: 24, display: 'flex', gap: 22, fontSize: 13, color: N.ink500, flexWrap: 'wrap' }}>
            <span>✓ Sem cartão</span><span>✓ Cancele quando quiser</span>
          </div>
        </div>

        {/* Hero phone mock — note generated */}
        <div className="nt-hero-phone-wrap" style={{ position: 'relative', minHeight: 620, display: 'flex', justifyContent: 'center' }}>
          <PhoneMock>
            <div style={{ padding: '52px 18px 18px', height: '100%', display: 'flex', flexDirection: 'column', fontFamily: N.sans }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, color: N.good, fontSize: 12, fontWeight: 600 }}><span style={{ width: 7, height: 7, borderRadius: 999, background: N.good }}/>Nota gerada</div>
                <div style={{ fontSize: 11, color: N.ink500 }}>14s</div>
              </div>
              <div style={{ marginTop: 10 }}>
                <div style={{ fontFamily: N.serif, fontSize: 22, color: N.graphite, lineHeight: 1.1 }}>Mariana Silva</div>
                <div style={{ fontSize: 12, color: N.ink500, marginTop: 2 }}>Sessão 12 · 50 min · 14/05</div>
              </div>
              <div style={{ marginTop: 14, display: 'flex', flexDirection: 'column', gap: 10 }}>
                {[
                  { k: 'Apresentação', v: 'Paciente chega com humor estável; relata melhora do sono após ajuste da rotina noturna.' },
                  { k: 'Temas', v: 'Ansiedade antecipatória; vínculo materno; retomada de práticas de regulação.' },
                  { k: 'Intervenções', v: 'Reforço da prática de respiração diafragmática; exposição imaginária.' },
                  { k: 'Plano', v: 'Manter registro de pensamentos. Próxima sessão em 7 dias.' },
                ].map((b, i) => (
                  <div key={i} style={{ background: '#fff', border: `1px solid ${N.ink100}`, borderRadius: 12, padding: 12 }}>
                    <div style={{ fontSize: 10, letterSpacing: '.1em', textTransform: 'uppercase', fontWeight: 700, color: N.amber }}>{b.k}</div>
                    <div style={{ fontSize: 12, color: N.graphite, lineHeight: 1.5, marginTop: 5 }}>{b.v}</div>
                  </div>
                ))}
              </div>
            </div>
          </PhoneMock>
        </div>
      </div>
    </section>
  );
}

// 3) CREDIBILITY BAR
function CredBar() {
  const items = ['Conformidade LGPD', 'Resolução CFP nº 001/2009', 'Dados criptografados', 'Servidores no Brasil', 'OpenAI Whisper + Claude AI'];
  return (
    <div className="nt-credbar" style={{ background: N.graphite, color: 'rgba(247,245,240,.78)', fontFamily: N.sans, padding: '18px 28px', fontSize: 13, fontWeight: 500 }}>
      <div style={{ maxWidth: 1240, margin: '0 auto', display: 'flex', flexWrap: 'wrap', gap: '10px 28px', justifyContent: 'center', alignItems: 'center' }}>
        {items.map((it, i) => (
          <React.Fragment key={it}>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}><span style={{ width: 5, height: 5, borderRadius: 999, background: N.amber }}/>{it}</span>
            {i < items.length - 1 && (<span className="nt-credbar-sep" style={{ opacity: .25 }}>·</span>)}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

// 3.5) O QUE É O NOTTARA — narrative bridge between Hero and Cenário
function OQueE() {
  return (
    <section className="nt-oquee" style={{ padding: '110px 28px 96px', background: N.off, fontFamily: N.sans, position: 'relative' }}>
      <div style={{ maxWidth: 1240, margin: '0 auto' }}>
        <div className="nt-oquee-grid" style={{ display: 'grid', gridTemplateColumns: '1.05fr 1fr', gap: 56, alignItems: 'stretch' }}>

          {/* BLOCO 1 — O que é */}
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', paddingRight: 8 }}>
            <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: '.14em', textTransform: 'uppercase', color: N.amber, marginBottom: 18 }}>O Nottara</div>
            <h2 style={{ fontFamily: N.serif, fontSize: 'clamp(32px, 3.8vw, 48px)', lineHeight: 1.08, letterSpacing: '-0.02em', margin: 0, color: N.graphite, fontWeight: 400, textWrap: 'balance' }}>
              Um app que faz o trabalho de anotações pelo psicólogo — para que ele faça apenas o dele.
            </h2>
            <p style={{ fontSize: 18, color: N.ink700, lineHeight: 1.6, margin: '24px 0 0', maxWidth: 540 }}>
              O Nottara escuta, transcreve e organiza automaticamente as notas clínicas de cada sessão. Apresentação, temas, intervenções, plano terapêutico — tudo estruturado e pronto, sem que você precise escrever uma linha sequer.
            </p>
          </div>

          {/* BLOCO 2 — Por que existe (propósito) */}
          <div className="nt-oquee-card" style={{ background: N.amberSoft, borderRadius: 24, padding: '44px 44px 42px', position: 'relative', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <div style={{ width: 44, height: 2, background: N.amber, marginBottom: 22, opacity: .9 }}/>
            <h3 style={{ fontFamily: N.serif, fontSize: 'clamp(24px, 2.3vw, 30px)', lineHeight: 1.2, letterSpacing: '-0.015em', margin: 0, color: N.graphite, fontWeight: 400, textWrap: 'balance' }}>
              Mas por que construímos o Nottara?
            </h3>
            <p style={{ fontSize: 16.5, color: N.ink700, lineHeight: 1.65, margin: '18px 0 0' }}>
              Porque acreditamos que psicólogos foram feitos para escutar pessoas — não para preencher formulários. E que cada minuto tomado pela burocracia é um minuto a menos de presença, de cuidado, de vida profissional com sentido. O Nottara existe para devolver esse tempo. E para que a profissão valha o que sempre valeu.
            </p>
          </div>
        </div>

        {/* BLOCO 3 — Transição narrativa para O Cenário */}
        <div className="nt-oquee-bridge" style={{ marginTop: 96, display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
          <div style={{ width: 1, height: 48, background: `linear-gradient(to bottom, transparent, ${N.amberLight})` }}/>
          <p style={{ fontFamily: N.sans, fontSize: 'clamp(20px, 1.9vw, 24px)', lineHeight: 1.45, color: N.graphite, fontWeight: 500, letterSpacing: '-0.005em', margin: '28px 0 0', maxWidth: 760, textWrap: 'balance' }}>
            E o cenário que nos move a fazer isso todos os dias é este:
          </p>
        </div>
      </div>
    </section>
  );
}

// 4) CENÁRIO — landscape of psychology in Brazil
function Cenario() {
  const stats = [
    {
      n: '9,3%',
      d: 'dos brasileiros vivem com transtornos de ansiedade — a maior prevalência do mundo',
      src: 'OMS · Organização Mundial da Saúde',
      url: 'https://fbh.com.br/brasil-e-o-pais-mais-ansioso-do-mundo-segundo-a-oms/',
    },
    {
      n: '472 mil',
      d: 'afastamentos do trabalho por saúde mental em 2024 — alta de 68% em um ano e recorde histórico no Brasil',
      src: 'Ministério da Previdência Social · Agência Brasil, 2025',
      url: 'https://agenciabrasil.ebc.com.br/saude/noticia/2025-03/afastamentos-por-transtornos-mentais-dobram-em-dez-anos-chegam-440-mil',
    },
    {
      n: '+400%',
      d: 'de aumento nos afastamentos por ansiedade desde 2014 — 141 mil casos só em 2024',
      src: 'Ministério da Previdência Social · Agência Brasil, 2025',
      url: 'https://agenciabrasil.ebc.com.br/saude/noticia/2025-03/afastamentos-por-transtornos-mentais-dobram-em-dez-anos-chegam-440-mil',
    },
    {
      n: '27,9 mi',
      d: 'de atendimentos psicológicos no SUS em 2023 — crescimento de 23% em relação ao ano anterior',
      src: 'CNN Brasil · Ministério da Saúde, 2024',
      url: 'https://www.cnnbrasil.com.br/nacional/sus-promoveu-quase-14-milhoes-de-atendimentos-psicologicos-em-2024/',
    },
    {
      n: '+96%',
      d: 'de aumento nos casos de burnout no Brasil entre 2014 e 2024 — um crescimento de quase o dobro em uma década',
      src: 'Brazilian Journal of Medicine and Health · RBMT, 2025',
      url: 'https://rbmt.org.br/details/3153/pt-BR/sindrome-de-burnout-no-brasil--2014-2024',
    },
    {
      n: 'Ansiedade',
      d: 'foi eleita pelos brasileiros a palavra que melhor representa 2024 — a primeira vez na história que uma condição de saúde mental ocupa esse lugar',
      src: 'Instituto IDEIA · CNN Brasil, 2024',
      url: 'https://www.cnnbrasil.com.br/saude/ansiedade-e-eleita-a-palavra-do-ano-no-brasil-segundo-pesquisa/',
    },
  ];

  const scrollRef = React.useRef(null);
  const [progress, setProgress] = React.useState(0);
  const [activeIdx, setActiveIdx] = React.useState(0);
  const drag = React.useRef({ active: false, startX: 0, startScroll: 0, moved: false });

  const updateProgress = React.useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    const p = max > 0 ? el.scrollLeft / max : 0;
    setProgress(p);
    // Compute active card by nearest snap point
    const cardW = el.firstChild ? el.firstChild.getBoundingClientRect().width + 18 : 1;
    setActiveIdx(Math.round(el.scrollLeft / cardW));
  }, []);

  React.useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    el.addEventListener('scroll', updateProgress, { passive: true });
    window.addEventListener('resize', updateProgress);
    updateProgress();
    return () => {
      el.removeEventListener('scroll', updateProgress);
      window.removeEventListener('resize', updateProgress);
    };
  }, [updateProgress]);

  const onMouseDown = (e) => {
    const el = scrollRef.current;
    if (!el) return;
    drag.current = { active: true, startX: e.pageX, startScroll: el.scrollLeft, moved: false };
    el.style.cursor = 'grabbing';
  };
  const onMouseMove = React.useCallback((e) => {
    if (!drag.current.active) return;
    const dx = e.pageX - drag.current.startX;
    if (Math.abs(dx) > 4) drag.current.moved = true;
    if (drag.current.moved) {
      e.preventDefault();
      scrollRef.current.scrollLeft = drag.current.startScroll - dx;
    }
  }, []);
  const onMouseUp = React.useCallback(() => {
    if (drag.current.active && scrollRef.current) {
      scrollRef.current.style.cursor = 'grab';
    }
    setTimeout(() => { drag.current.active = false; }, 0);
  }, []);
  React.useEffect(() => {
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);
    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
    };
  }, [onMouseMove, onMouseUp]);

  // Guard against clicks fired at the end of a drag
  const onLinkClickCapture = (e) => {
    if (drag.current.moved) { e.preventDefault(); e.stopPropagation(); }
  };

  return (
    <section style={{ padding: '96px 0 96px', background: '#fff', fontFamily: N.sans }}>
      <style>{`
        .cenario-track {
          display: flex; gap: 18px;
          overflow-x: auto; overflow-y: hidden;
          scroll-snap-type: x mandatory;
          padding: 8px 28px 8px;
          scrollbar-width: none;
          cursor: grab;
          -webkit-overflow-scrolling: touch;
          scroll-padding-left: 28px;
        }
        .cenario-track::-webkit-scrollbar { display: none; }
        .cenario-card {
          flex: 0 0 calc((100% - 56px - 36px) / 3);
          scroll-snap-align: start;
          min-height: 340px;
        }
        @media (max-width: 900px) {
          .cenario-card { flex: 0 0 66%; min-height: 320px; }
        }
        @media (max-width: 560px) {
          .cenario-card { flex: 0 0 78%; }
        }
      `}</style>

      <div style={{ maxWidth: 1240, margin: '0 auto', padding: '0 28px' }}>
        <H2 eyebrow="O cenário" title="O que os dados mostram" sub="A busca por cuidado psicológico cresceu de forma acelerada nos últimos anos. São mais pessoas pedindo ajuda, mais famílias impactadas, mais profissionais sendo demandados. A gente acompanha esse movimento de perto — e é por isso que o Nottara existe." maxWidth={820}/>
      </div>

      {/* Draggable carousel — 6 data cards */}
      <div style={{ maxWidth: 1240, margin: '40px auto 0' }}>
        <div
          ref={scrollRef}
          className="cenario-track"
          onMouseDown={onMouseDown}
        >
          {stats.map((s, i) => (
            <div key={i} className="cenario-card" style={{ background: N.amberSoft, borderRadius: 20, padding: '28px 26px 24px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <div style={{ fontFamily: N.serif, fontSize: 'clamp(44px, 4.6vw, 64px)', lineHeight: 1, letterSpacing: '-0.025em', color: N.graphite, fontWeight: 400 }}>{s.n}</div>
                <div style={{ fontSize: 15, color: N.ink700, lineHeight: 1.5, marginTop: 16 }}>{s.d}</div>
              </div>
              <a
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                onClickCapture={onLinkClickCapture}
                onDragStart={(e) => e.preventDefault()}
                style={{ marginTop: 22, display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 11.5, fontWeight: 700, letterSpacing: '.04em', color: N.amber, textDecoration: 'none', textTransform: 'uppercase', lineHeight: 1.4 }}
              >
                <span style={{ flex: 1 }}>{s.src}</span>
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: 1 }}>
                  <path d="M7 17L17 7"/><path d="M8 7h9v9"/>
                </svg>
              </a>
            </div>
          ))}
        </div>

        {/* Progress bar */}
        <div style={{ maxWidth: 1240, margin: '0 auto', padding: '24px 28px 0' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
            <div style={{ flex: 1, height: 3, borderRadius: 999, background: N.amberFog, position: 'relative', overflow: 'hidden' }}>
              <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: `${Math.max(18, progress * 82 + 18)}%`, background: N.amber, borderRadius: 999, transition: 'width .2s ease' }}/>
            </div>
            <div style={{ display: 'flex', gap: 6 }}>
              {stats.map((_, i) => (
                <span key={i} style={{ width: 6, height: 6, borderRadius: 999, background: i === activeIdx ? N.amber : N.amberSoft, transition: 'background .2s ease' }}/>
              ))}
            </div>
          </div>
          <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: '.08em', textTransform: 'uppercase', color: N.ink400, marginTop: 12 }}>Arraste para ver mais</div>
        </div>
      </div>

      <div style={{ maxWidth: 1240, margin: '0 auto', padding: '0 28px' }}>
        {/* Quote callout */}
        <div className="nt-cenario-callout" style={{ background: N.graphite, color: N.off, borderRadius: 24, padding: '48px 56px', marginTop: 56, position: 'relative', overflow: 'hidden' }}>
          <WaveBackdrop opacity={0.06} color={N.amberLight}/>
          <div style={{ position: 'relative', maxWidth: 880 }}>
            <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: '.14em', textTransform: 'uppercase', color: N.amberLight }}>Estudo em destaque</div>
            <p className="nt-cenario-quote" style={{ fontFamily: N.serif, fontSize: 32, lineHeight: 1.25, letterSpacing: '-0.015em', margin: '16px 0 0', fontWeight: 400, textWrap: 'balance', color: N.off, opacity: 1 }}>
              "A carga administrativa em consultórios privados consome, em média, 30% do tempo total dedicado ao paciente — tempo que poderia ser revertido em escuta e cuidado."
            </p>
            <div style={{ marginTop: 20, fontSize: 13, color: 'rgba(247,245,240,.6)' }}>Estudo APA · Brazilian Journal of Clinical Psychology, 2023</div>
          </div>
        </div>

        {/* Closing block — emotional bridge */}
        <div className="nt-cenario-closing" style={{ marginTop: 72, display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
          <div style={{ width: 56, height: 1, background: N.amberLight, opacity: .9 }}/>
          <p className="nt-cenario-closing-h" style={{ fontFamily: N.serif, fontSize: 'clamp(26px, 2.8vw, 36px)', lineHeight: 1.2, letterSpacing: '-0.015em', color: N.graphite, fontWeight: 400, margin: '32px 0 0', maxWidth: 820, textWrap: 'balance' }}>
            Por trás de cada número, há uma pessoa que precisou de ajuda.
          </p>
          <p className="nt-cenario-closing-p" style={{ fontFamily: N.sans, fontSize: 18, lineHeight: 1.6, color: 'rgba(26,26,24,.66)', margin: '18px 0 0', maxWidth: 760, textWrap: 'pretty' }}>
            Os profissionais que cuidam dessas pessoas merecem suporte para fazer o que só eles sabem fazer: escutar. O Nottara existe para estar ao lado do psicólogo nessa missão.
          </p>
        </div>
      </div>
    </section>
  );
}

// 5) PROBLEMA — pain points
function Problema() {
  return (
    <section className="nt-problema" style={{ padding: '96px 28px', background: N.off, fontFamily: N.sans }}>
      <div style={{ maxWidth: 1240, margin: '0 auto' }}>
        <div className="nt-problema-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'center' }}>
          <div>
            <H2 eyebrow="O problema" title="Cada sessão termina. A papelada não." sub="A escuta clínica é exigente. O depois — o registro, a organização, a conformidade — é onde a profissão se desgasta. Esse é o vão que o Nottara fecha."/>
          </div>
          <div style={{ position: 'relative' }}>
            <img className="nt-problema-img" src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=900&q=80" alt="Psicóloga em consultório" style={{ width: '100%', height: 380, objectFit: 'cover', borderRadius: 24, filter: 'saturate(.85) contrast(1.02)' }}/>
            <div className="nt-problema-badge" style={{ position: 'absolute', bottom: -20, right: -20, background: '#fff', borderRadius: 16, padding: '14px 18px', boxShadow: '0 24px 48px -16px rgba(26,26,24,.18)', display: 'flex', alignItems: 'center', gap: 12 }}>
              <div style={{ width: 38, height: 38, borderRadius: 999, background: N.amberSoft, color: N.amber, display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Icon name="clock" size={20} color={N.amber}/></div>
              <div>
                <div style={{ fontSize: 12, color: N.ink500 }}>Tempo médio por nota no Nottara</div>
                <div style={{ fontFamily: N.serif, fontSize: 22, color: N.graphite, lineHeight: 1 }}>14 segundos</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// 6) COMO FUNCIONA — 5-step timeline
function ComoFunciona() {
  const steps = [
    { t: 'Cadastre seus pacientes',  icon: 'people',  d: 'Crie o perfil de cada paciente com suas informações clínicas. Tudo organizado e acessível em um só lugar.' },
    { t: 'Transcreva suas sessões', icon: 'mic',     d: 'Nossa tecnologia de transcrição converte o áudio da sessão em texto automaticamente, com precisão para vocabulário clínico em português.' },
    { t: 'Gere notas e prontuários', icon: 'doc',     d: 'O Nottara estrutura automaticamente a nota nos campos clínicos: Apresentação, Temas, Intervenções e Plano.' },
    { t: 'Gerencie seus pacientes',  icon: 'users',   d: 'Histórico completo, evolução por sessão e plano terapêutico de cada paciente acessíveis a qualquer momento.' },
  ];
  return (
    <section id="how" className="nt-how" style={{ padding: '96px 28px', background: '#fff', fontFamily: N.sans, position: 'relative' }}>
      <div style={{ maxWidth: 1240, margin: '0 auto' }}>
        <H2 eyebrow="Como funciona" title="Da sessão à nota clínica, em poucos minutos" sub="Quatro passos. Um fluxo. Pensado para o ritmo do consultório."/>
        <div style={{ position: 'relative', marginTop: 64 }}>
          <div className="nt-how-line" style={{ position: 'absolute', top: 28, left: '6%', right: '6%', height: 2, background: `repeating-linear-gradient(to right, ${N.amberLight} 0 8px, transparent 8px 16px)` }}/>
          <ol className="nt-how-list" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 28, listStyle: 'none', padding: 0, margin: 0, position: 'relative' }}>
            {steps.map((s, i) => (
              <li key={s.t} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                <div style={{ width: 56, height: 56, borderRadius: 999, background: N.amber, color: N.graphite, display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 10px 24px -8px rgba(239,159,39,.5)', position: 'relative', zIndex: 2 }}>
                  <Icon name={s.icon} size={26} color={N.graphite}/>
                </div>
                <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '.1em', color: N.amber, marginTop: 18 }}>PASSO {i + 1}</div>
                <h3 className="nt-how-step-title" style={{ fontFamily: N.serif, fontSize: 26, fontWeight: 400, color: N.graphite, margin: '6px 0 10px', letterSpacing: '-0.01em' }}>{s.t}</h3>
                <p style={{ fontSize: 14, color: N.ink500, lineHeight: 1.55, margin: 0 }}>{s.d}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

// 7) FUNCIONALIDADES
function Funcionalidades() {
  const items = [
    { icon: 'mic', t: 'Gravação de sessões', b: 'Áudio capturado direto pelo app, com indicador visual e controle de pausa.' },
    { icon: 'sparkles', t: 'Transcrição automática', b: 'Tecnologia Whisper adaptada para reconhecimento de fala em vocabulário clínico em português brasileiro.' },
    { icon: 'doc', t: 'Documentação inteligente', b: 'Notas clínicas estruturadas em segundos, no modelo que você já usa. Edite, salve, exporte.' },
    { icon: 'users', t: 'Gestão completa de pacientes', b: 'Histórico, plano terapêutico, anamnese e evolução por sessão.' },
    { icon: 'calendar', t: 'Agenda de sessões', b: 'Visão semanal, lembretes e controle de presença sincronizados.' },
    { icon: 'signature', t: 'TCLE digital', b: 'Termo de consentimento LGPD enviado e assinado por e-mail.' },
  ];
  return (
    <section id="features" className="nt-features" style={{ padding: '96px 28px', background: N.off, fontFamily: N.sans }}>
      <div style={{ maxWidth: 1240, margin: '0 auto' }}>
        <H2 eyebrow="Funcionalidades" title="O que você precisa. Nada que você não usa." sub="Construído com psicólogos, refinado por psicólogos. Cada recurso resolve uma fricção real do consultório."/>
        <div className="nt-features-outer" style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 56, marginTop: 56, alignItems: 'start' }}>
          <div className="nt-features-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 18 }}>
            {items.map(it => (
              <div key={it.t} style={{ background: '#fff', border: `1px solid ${N.ink100}`, borderRadius: 18, padding: 24, boxShadow: '0 4px 12px -2px rgba(26,26,24,.04)' }}>
                <div style={{ width: 40, height: 40, borderRadius: 11, background: N.amberSoft, color: N.amber, display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Icon name={it.icon} size={20} color={N.amber}/></div>
                <h3 style={{ margin: '14px 0 6px', fontSize: 17, fontWeight: 700, color: N.graphite, letterSpacing: '-0.005em' }}>{it.t}</h3>
                <p style={{ margin: 0, color: N.ink500, fontSize: 14, lineHeight: 1.55 }}>{it.b}</p>
              </div>
            ))}
          </div>

          {/* Carousel of phone screens (static) */}
          <div className="nt-features-phones" style={{ display: 'flex', gap: 16, justifyContent: 'center' }}>
            <PhoneMock w={250} h={520}>
              <div style={{ padding: '46px 14px 14px', fontFamily: N.sans }}>
                <div style={{ fontSize: 11, color: N.amber, fontWeight: 700, letterSpacing: '.1em' }}>GRAVANDO · 12:43</div>
                <div style={{ fontFamily: N.serif, fontSize: 22, color: N.graphite, marginTop: 8 }}>Mariana S.</div>
                <div style={{ display: 'flex', justifyContent: 'center', marginTop: 38 }}>
                  <NMark size={64}/>
                </div>
                <div style={{ display: 'flex', gap: 2, alignItems: 'center', justifyContent: 'center', height: 50, marginTop: 32 }}>
                  {Array.from({length: 32}).map((_,i) => (<span key={i} style={{ display: 'block', width: 3, borderRadius: 2, background: i % 4 === 0 ? N.amber : N.amberLight, height: 6 + ((i*23)%34) }}/>))}
                </div>
                <div style={{ display: 'flex', justifyContent: 'center', marginTop: 28 }}>
                  <div style={{ width: 56, height: 56, borderRadius: 999, background: N.amber, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff' }}><Icon name="mic" size={22} color="#fff"/></div>
                </div>
              </div>
            </PhoneMock>
            <PhoneMock w={250} h={520}>
              <div style={{ padding: '46px 14px 14px', fontFamily: N.sans }}>
                <div style={{ fontSize: 11, color: N.ink500, fontWeight: 700, letterSpacing: '.1em' }}>PACIENTES</div>
                <div style={{ fontFamily: N.serif, fontSize: 24, color: N.graphite, marginTop: 4 }}>14 ativos</div>
                <div style={{ marginTop: 14, display: 'flex', flexDirection: 'column', gap: 8 }}>
                  {[['MS','Mariana Silva','Sessão 12 · hoje', N.amber],['RT','Ricardo Tavares','Sessão 4 · ontem', N.ink100],['JC','Júlia Costa','Sessão 8 · 12/05', N.ink100],['LB','Lucas Barros','Sessão 2 · 10/05', N.ink100]].map(([i,n,s,c],k)=>(
                    <div key={k} style={{ display: 'grid', gridTemplateColumns: '32px 1fr', gap: 10, alignItems: 'center', background: '#fff', border: `1px solid ${N.ink100}`, borderRadius: 11, padding: 9 }}>
                      <div style={{ width: 32, height: 32, borderRadius: 999, background: c, color: c === N.amber ? N.graphite : N.ink700, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 11, fontWeight: 700 }}>{i}</div>
                      <div>
                        <div style={{ fontSize: 12, fontWeight: 600, color: N.graphite }}>{n}</div>
                        <div style={{ fontSize: 10, color: N.ink500, marginTop: 1 }}>{s}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </PhoneMock>
          </div>
        </div>
      </div>
    </section>
  );
}

window.Nav = Nav; window.Hero = Hero; window.CredBar = CredBar;
window.OQueE = OQueE;
window.Cenario = Cenario; window.Problema = Problema;
window.ComoFunciona = ComoFunciona; window.Funcionalidades = Funcionalidades;
