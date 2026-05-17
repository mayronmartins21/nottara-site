// Nottara marketing-website components — visual recreations.
// Brand tokens come from ../../colors_and_type.css.

const NW = {
  amber: '#EF9F27',
  amberLight: '#FAC775',
  amberSoft: '#FAEEDA',
  graphite: '#1A1A18',
  off: '#F7F5F0',
  ink900: '#1A1A18', ink700: '#3A3A35', ink500: '#6E6B62',
  ink300: '#BDB7A8', ink200: '#D9D3C4', ink100: '#E8E3D8', ink50: '#F1ECE0',
  serif: "'DM Serif Display', Georgia, serif",
  sans:  "'Plus Jakarta Sans', -apple-system, system-ui, sans-serif",
};

function NWMark({ size = 28, color = NW.amber }) {
  return (
    <svg width={size * 2} height={size} viewBox="0 0 64 32">
      <path d="M4 22 C 12 8, 20 8, 30 16 S 50 26, 60 14"
        fill="none" stroke={color} strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function NWLogo({ light }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
      <NWMark size={22} color={NW.amber}/>
      <span style={{ fontFamily: NW.serif, fontSize: 26, color: light ? NW.off : NW.graphite, letterSpacing: '-0.01em' }}>Nottara</span>
    </div>
  );
}

function NWNav({ light }) {
  const txt = light ? NW.off : NW.graphite;
  const sub = light ? 'rgba(247,245,240,.7)' : NW.ink500;
  return (
    <header style={{ position: 'sticky', top: 0, zIndex: 30, background: light ? 'transparent' : NW.off, borderBottom: light ? 'none' : `1px solid ${NW.ink100}` }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '20px 32px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontFamily: NW.sans }}>
        <NWLogo light={light}/>
        <nav style={{ display: 'flex', gap: 32, fontSize: 14, fontWeight: 500, color: sub }}>
          <a style={{ color: 'inherit', textDecoration: 'none' }}>Como funciona</a>
          <a style={{ color: 'inherit', textDecoration: 'none' }}>Conformidade</a>
          <a style={{ color: 'inherit', textDecoration: 'none' }}>Preços</a>
          <a style={{ color: 'inherit', textDecoration: 'none' }}>Para clínicas</a>
        </nav>
        <div style={{ display: 'flex', gap: 12, alignItems: 'center', fontSize: 14, fontWeight: 600 }}>
          <a style={{ color: txt, textDecoration: 'none' }}>Entrar</a>
          <button style={{ all: 'unset', cursor: 'pointer', padding: '10px 18px', borderRadius: 999, background: NW.amber, color: NW.graphite, boxShadow: '0 6px 16px -6px rgba(239,159,39,.6)' }}>Comece grátis</button>
        </div>
      </div>
    </header>
  );
}

function NWHero() {
  return (
    <section style={{ padding: '64px 32px 80px', maxWidth: 1200, margin: '0 auto', display: 'grid', gridTemplateColumns: '1.1fr 1fr', gap: 64, alignItems: 'center', fontFamily: NW.sans }}>
      <div>
        <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '6px 14px', borderRadius: 999, background: NW.amberSoft, fontSize: 12, fontWeight: 600, color: NW.graphite, letterSpacing: '.04em' }}>
          <span style={{ width: 6, height: 6, borderRadius: 999, background: NW.amber }}/> Conformidade LGPD
        </span>
        <h1 style={{ fontFamily: NW.serif, fontSize: 64, lineHeight: 1.02, letterSpacing: '-0.025em', margin: '20px 0 16px', color: NW.graphite, fontWeight: 400, textWrap: 'balance' }}>
          O copiloto clínico do<br/>seu <em style={{ fontStyle: 'italic' }}>consultório</em>.
        </h1>
        <p style={{ fontSize: 19, color: NW.ink700, lineHeight: 1.55, maxWidth: 520, margin: 0 }}>
          Grave, transcreva e organize suas sessões com a IA que respeita o sigilo profissional. Notas clínicas em minutos, prontuário em ordem.
        </p>
        <div style={{ display: 'flex', gap: 12, marginTop: 28 }}>
          <button style={{ all: 'unset', cursor: 'pointer', padding: '14px 24px', borderRadius: 999, background: NW.amber, color: NW.graphite, fontWeight: 600, fontSize: 15, boxShadow: '0 12px 28px -10px rgba(239,159,39,.55)' }}>Comece grátis · 14 dias</button>
          <button style={{ all: 'unset', cursor: 'pointer', padding: '13px 22px', borderRadius: 10, border: `1.5px solid ${NW.graphite}`, color: NW.graphite, fontWeight: 600, fontSize: 15 }}>Ver como funciona</button>
        </div>
        <div style={{ marginTop: 24, display: 'flex', gap: 24, fontSize: 13, color: NW.ink500 }}>
          <span>✓ Servidores no Brasil</span>
          <span>✓ Sem cartão de crédito</span>
          <span>✓ CFP-friendly</span>
        </div>
      </div>

      {/* Hero visual — phone mock with note */}
      <div style={{ position: 'relative', height: 540 }}>
        <div style={{ position: 'absolute', top: 20, right: 0, width: 340, height: 480, borderRadius: 36, background: NW.graphite, padding: 24, boxShadow: '0 40px 80px -20px rgba(26,26,24,.35)', color: NW.off, fontFamily: NW.sans }}>
          <div style={{ fontSize: 11, letterSpacing: '.1em', textTransform: 'uppercase', fontWeight: 700, color: NW.amberLight }}>Sessão · gravando</div>
          <div style={{ fontFamily: NW.serif, fontSize: 36, marginTop: 14 }}>Mariana S.</div>
          <div style={{ fontSize: 12, color: NW.ink300, marginTop: 4 }}>Sessão 12 · 50 min</div>
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: 36 }}>
            <NWMark size={88} color={NW.amber}/>
          </div>
          <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 44, textAlign: 'center', marginTop: 18 }}>12:43</div>
          <div style={{ display: 'flex', gap: 3, alignItems: 'center', justifyContent: 'center', height: 40, marginTop: 18 }}>
            {Array.from({length: 22}).map((_,i) => (<span key={i} style={{ display: 'block', width: 3, borderRadius: 2, background: NW.amber, height: 6 + ((i*53)%30) }}/>))}
          </div>
        </div>
        <div style={{ position: 'absolute', left: 0, bottom: 20, width: 320, padding: 20, background: '#fff', borderRadius: 16, boxShadow: '0 24px 48px -16px rgba(26,26,24,.18)', fontFamily: NW.sans }}>
          <div style={{ fontSize: 11, letterSpacing: '.1em', textTransform: 'uppercase', fontWeight: 700, color: NW.amber }}>P — Plano</div>
          <div style={{ fontSize: 14, color: NW.graphite, lineHeight: 1.55, marginTop: 8 }}>Manter rotina noturna. Introduzir registro de pensamentos automáticos. Próxima sessão em 7 dias.</div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginTop: 14 }}>
            <span style={{ width: 6, height: 6, borderRadius: 999, background: '#4F7A55' }}/>
            <span style={{ fontSize: 12, color: NW.ink500 }}>Gerado em 14s</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function NWFeatures() {
  const items = [
    { t: 'Grave em qualquer lugar', b: 'Capture o áudio direto do celular ou computador. Sem instalar nada extra.' },
    { t: 'Transcreva com precisão', b: 'IA treinada para o vocabulário clínico em português brasileiro.' },
    { t: 'Notas em SOAP, DAP ou Evolução', b: 'Escolha o formato. Edite. Salve no prontuário.' },
    { t: 'LGPD por design', b: 'Áudios processados no Brasil e apagados após a transcrição.' },
  ];
  return (
    <section style={{ padding: '80px 32px', background: NW.off, fontFamily: NW.sans }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <h2 style={{ fontFamily: NW.serif, fontSize: 44, letterSpacing: '-0.02em', margin: 0, color: NW.graphite, fontWeight: 400, maxWidth: 720, textWrap: 'balance' }}>Menos burocracia. Mais sessão.</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 24, marginTop: 40 }}>
          {items.map(it => (
            <div key={it.t} style={{ background: '#fff', border: `1px solid ${NW.ink100}`, borderRadius: 16, padding: 28, boxShadow: '0 4px 12px -2px rgba(26,26,24,.06)' }}>
              <div style={{ width: 36, height: 36, borderRadius: 999, background: NW.amberSoft, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <NWMark size={18}/>
              </div>
              <h3 style={{ margin: '16px 0 8px', fontSize: 20, fontWeight: 600, color: NW.graphite }}>{it.t}</h3>
              <p style={{ margin: 0, color: NW.ink500, fontSize: 15, lineHeight: 1.6 }}>{it.b}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function NWQuote() {
  return (
    <section style={{ padding: '80px 32px', background: NW.graphite, color: NW.off, fontFamily: NW.sans }}>
      <div style={{ maxWidth: 880, margin: '0 auto', textAlign: 'center' }}>
        <NWMark size={32} color={NW.amber}/>
        <p style={{ fontFamily: NW.serif, fontSize: 36, lineHeight: 1.2, letterSpacing: '-0.015em', margin: '24px 0 28px', color: NW.off, fontWeight: 400, textWrap: 'balance' }}>
          “Voltei a sair do consultório no horário. As notas da semana toda eram um peso — agora elas se escrevem entre uma sessão e outra.”
        </p>
        <div style={{ fontSize: 13, color: NW.amberLight, fontWeight: 600, letterSpacing: '.04em' }}>Dra. Helena Vasconcelos · Psicóloga clínica · Belo Horizonte</div>
      </div>
    </section>
  );
}

function NWPricing() {
  const tiers = [
    { name: 'Solo', price: 'R$ 89', sub: '/mês', items: ['Até 40 sessões/mês', 'Transcrição + nota clínica', 'Prontuário básico'], cta: 'Comece grátis', em: false },
    { name: 'Clínica', price: 'R$ 249', sub: '/mês', items: ['Sessões ilimitadas', 'Até 5 profissionais', 'Painel de equipe', 'Suporte prioritário'], cta: 'Falar com vendas', em: true },
  ];
  return (
    <section style={{ padding: '80px 32px', fontFamily: NW.sans }}>
      <div style={{ maxWidth: 1000, margin: '0 auto' }}>
        <h2 style={{ fontFamily: NW.serif, fontSize: 44, letterSpacing: '-0.02em', margin: 0, color: NW.graphite, fontWeight: 400, textAlign: 'center' }}>Preços diretos.</h2>
        <p style={{ fontSize: 16, color: NW.ink500, textAlign: 'center', margin: '12px 0 40px' }}>14 dias grátis. Sem cartão. Cancele quando quiser.</p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 20 }}>
          {tiers.map(t => (
            <div key={t.name} style={{ background: t.em ? NW.amberSoft : '#fff', border: `1px solid ${t.em ? 'transparent' : NW.ink100}`, borderRadius: 20, padding: 32, boxShadow: t.em ? '0 18px 40px -16px rgba(239,159,39,.45)' : '0 4px 12px -2px rgba(26,26,24,.06)' }}>
              <div style={{ fontSize: 12, letterSpacing: '.1em', textTransform: 'uppercase', fontWeight: 700, color: NW.ink500 }}>{t.name}</div>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: 6, marginTop: 14 }}>
                <span style={{ fontFamily: NW.serif, fontSize: 48, color: NW.graphite, letterSpacing: '-0.02em' }}>{t.price}</span>
                <span style={{ color: NW.ink500, fontSize: 14 }}>{t.sub}</span>
              </div>
              <ul style={{ listStyle: 'none', padding: 0, margin: '24px 0 28px', display: 'flex', flexDirection: 'column', gap: 10 }}>
                {t.items.map(i => (<li key={i} style={{ fontSize: 14, color: NW.ink700 }}>✓ {i}</li>))}
              </ul>
              <button style={{ all: 'unset', cursor: 'pointer', display: 'block', textAlign: 'center', padding: '12px 18px', borderRadius: 999, background: NW.amber, color: NW.graphite, fontWeight: 600, fontSize: 14 }}>{t.cta}</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function NWFooter() {
  return (
    <footer style={{ background: NW.graphite, color: NW.off, padding: '56px 32px 32px', fontFamily: NW.sans }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', display: 'grid', gridTemplateColumns: '1.5fr 1fr 1fr 1fr', gap: 32, alignItems: 'start' }}>
        <div>
          <NWLogo light/>
          <p style={{ color: 'rgba(247,245,240,.6)', fontSize: 13, lineHeight: 1.6, marginTop: 14, maxWidth: 280 }}>O copiloto clínico para psicólogos brasileiros. Servidores no Brasil. Conformidade LGPD.</p>
        </div>
        {[
          { h: 'Produto', l: ['Como funciona', 'Conformidade', 'Preços', 'Mudanças'] },
          { h: 'Empresa', l: ['Sobre', 'Imprensa', 'Contato', 'Vagas'] },
          { h: 'Legal', l: ['Privacidade', 'Termos', 'LGPD', 'Segurança'] },
        ].map(c => (
          <div key={c.h}>
            <div style={{ fontSize: 11, letterSpacing: '.1em', textTransform: 'uppercase', fontWeight: 700, color: NW.amberLight }}>{c.h}</div>
            <ul style={{ listStyle: 'none', padding: 0, margin: '14px 0 0', display: 'flex', flexDirection: 'column', gap: 8 }}>
              {c.l.map(i => (<li key={i} style={{ fontSize: 13, color: 'rgba(247,245,240,.7)' }}>{i}</li>))}
            </ul>
          </div>
        ))}
      </div>
      <div style={{ maxWidth: 1200, margin: '40px auto 0', paddingTop: 20, borderTop: '1px solid rgba(247,245,240,.1)', display: 'flex', justifyContent: 'space-between', fontSize: 12, color: 'rgba(247,245,240,.5)' }}>
        <span>© 2026 Nottara · Todos os direitos reservados</span>
        <span>Feito no Brasil</span>
      </div>
    </footer>
  );
}

window.NW = NW;
window.NWMark = NWMark; window.NWLogo = NWLogo; window.NWNav = NWNav;
window.NWHero = NWHero; window.NWFeatures = NWFeatures; window.NWQuote = NWQuote;
window.NWPricing = NWPricing; window.NWFooter = NWFooter;
