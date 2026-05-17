// Nottara — institutional website / sections (8–12).

// 8) SEGURANÇA
function Seguranca() {
  const pillars = [
    { icon: 'shield', t: 'LGPD',                 d: 'Tratamento de dados conforme a Lei Geral de Proteção de Dados. Direito de acesso, retificação e exclusão garantidos.' },
    { icon: 'gavel',  t: 'CFP nº 001/2009',      d: 'Prontuário eletrônico em conformidade com a resolução do Conselho Federal de Psicologia.' },
    { icon: 'lock',   t: 'Criptografia',         d: 'Dados criptografados em trânsito (TLS 1.3) e em repouso (AES-256). Chaves rotacionadas trimestralmente.' },
    { icon: 'server', t: 'Servidores no Brasil', d: 'Infraestrutura AWS sa-east-1 (São Paulo). Seus dados nunca saem do território nacional.' },
  ];
  return (
    <section id="security" style={{ padding: '110px 28px', background: N.graphite, color: N.off, fontFamily: N.sans, position: 'relative', overflow: 'hidden' }}>
      <WaveBackdrop opacity={0.05} color={N.amberLight}/>
      <div style={{ position: 'relative', maxWidth: 1240, margin: '0 auto' }}>
        <H2 light eyebrow="Segurança e conformidade" title="Construído para o padrão clínico brasileiro" sub="Infraestrutura, criptografia e protocolos pensados desde o primeiro dia para o sigilo profissional do psicólogo."/>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 18, marginTop: 56 }}>
          {pillars.map(p => (
            <div key={p.t} style={{ background: 'rgba(247,245,240,.05)', border: '1px solid rgba(247,245,240,.1)', borderRadius: 18, padding: 26, backdropFilter: 'blur(8px)' }}>
              <div style={{ width: 44, height: 44, borderRadius: 12, background: 'rgba(239,159,39,.18)', color: N.amber, display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Icon name={p.icon} size={22} color={N.amber}/></div>
              <h3 style={{ fontFamily: N.serif, fontSize: 24, fontWeight: 400, color: N.off, margin: '18px 0 8px', letterSpacing: '-0.01em' }}>{p.t}</h3>
              <p style={{ margin: 0, color: 'rgba(247,245,240,.7)', fontSize: 14, lineHeight: 1.6 }}>{p.d}</p>
            </div>
          ))}
        </div>
        <div style={{ padding: '24px 28px', background: 'rgba(239,159,39,.08)', border: `1px solid rgba(239,159,39,.25)`, borderRadius: 14, display: 'flex', alignItems: 'center', gap: 16, maxWidth: 880, margin: '48px auto 0' }}>
          <Icon name="database" size={26} color={N.amber}/>
          <div style={{ fontSize: 15, color: N.off, lineHeight: 1.5 }}>
            <strong style={{ color: N.amberLight }}>Áudios deletados automaticamente após o processamento.</strong> Nunca armazenamos conteúdo de sessões em servidores.
          </div>
        </div>

      </div>
    </section>
  );
}

// 9) DEPOIMENTOS — placeholder
function Depoimentos() {
  return (
    <section style={{ padding: '96px 28px', background: '#fff', fontFamily: N.sans }}>
      <div style={{ maxWidth: 1240, margin: '0 auto' }}>
        <H2 eyebrow="Depoimentos" title="O que psicólogos dizem sobre o Nottara" align="center" maxWidth={720}/>
        <div style={{ textAlign: 'center', fontSize: 12, fontWeight: 700, letterSpacing: '.12em', textTransform: 'uppercase', color: N.amber, marginTop: 18 }}>[Depoimentos a preencher com psicólogos reais]</div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20, marginTop: 40 }}>
          {[1,2,3].map(i => (
            <div key={i} style={{ background: N.off, borderRadius: 20, padding: 28, display: 'flex', flexDirection: 'column', gap: 18, border: `1px dashed ${N.ink200}` }}>
              <Icon name="wave" size={28} color={N.amber}/>
              <p style={{ fontFamily: N.serif, fontSize: 21, lineHeight: 1.35, color: N.ink400, margin: 0, fontWeight: 400, letterSpacing: '-0.005em', flex: 1, fontStyle: 'italic' }}>"Depoimento real a ser coletado com psicólogo participante."</p>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginTop: 8 }}>
                <div style={{ width: 48, height: 48, borderRadius: 999, background: N.ink100, display: 'flex', alignItems: 'center', justifyContent: 'center', color: N.ink400 }}>
                  <Icon name="users" size={20} color={N.ink400}/>
                </div>
                <div>
                  <div style={{ fontSize: 14, fontWeight: 700, color: N.ink500 }}>Nome do psicólogo</div>
                  <div style={{ fontSize: 12, color: N.ink400, marginTop: 2 }}>CRP · Cidade</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// 10) FAQ
function FAQ() {
  const qs = [
    ['Preciso ter CRP ativo para me cadastrar?',                   'Sim. O Nottara é uma ferramenta exclusiva para psicólogos com registro ativo no Conselho Regional de Psicologia. Validamos o CRP no momento do cadastro.'],
    ['Meus dados e os dados dos meus pacientes são seguros?',      'Sim. Todos os dados são criptografados em trânsito (TLS 1.3) e em repouso (AES-256), armazenados em servidores AWS no Brasil (sa-east-1). Áudios são deletados imediatamente após o processamento.'],
    ['O app funciona sem internet?',                               'A gravação funciona offline. A transcrição e a geração das notas exigem conexão para processamento. Os dados sincronizam automaticamente quando a conexão volta.'],
    ['O paciente precisa baixar algum aplicativo?',                'Não. O paciente recebe o TCLE por e-mail e assina diretamente no navegador. Não há necessidade de cadastro ou instalação.'],
    ['Posso usar em tablet ou só no celular?',                     'O Nottara funciona em iOS e Android — celulares e tablets. Em breve teremos uma versão web complementar para uso em desktop.'],
    ['Como funciona o TCLE digital?',                              'Você envia o termo por e-mail diretamente do app. O paciente lê, assina digitalmente e o documento fica arquivado no histórico do paciente, com carimbo de tempo e hash de validação.'],
  ];
  const [open, setOpen] = React.useState(0);
  return (
    <section id="faq" style={{ padding: '96px 28px', background: '#fff', fontFamily: N.sans }}>
      <div style={{ maxWidth: 880, margin: '0 auto' }}>
        <H2 eyebrow="FAQ" title="Dúvidas frequentes" align="center"/>
        <div style={{ marginTop: 48, display: 'flex', flexDirection: 'column', gap: 8 }}>
          {qs.map(([q, a], i) => (
            <div key={q} style={{ background: N.off, borderRadius: 14, overflow: 'hidden', border: `1px solid ${N.ink100}` }}>
              <button onClick={() => setOpen(open === i ? -1 : i)} style={{ all: 'unset', cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px 24px', width: 'calc(100% - 48px)', fontWeight: 700, fontSize: 16, color: N.graphite }}>
                <span>{q}</span>
                <Icon name={open === i ? 'minus' : 'plus'} size={20} color={N.amber}/>
              </button>
              {open === i && (<div style={{ padding: '0 24px 22px', fontSize: 15, color: N.ink700, lineHeight: 1.6 }}>{a}</div>)}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// 11) CTA FINAL
function CTAFinal() {
  const avatars = [
    { bg: '#C58A5E', i: 'AM' },
    { bg: '#7D5FA1', i: 'JR' },
    { bg: '#4F7A55', i: 'CS' },
    { bg: '#B85C5C', i: 'PL' },
    { bg: '#3D6A8A', i: 'MV' },
  ];
  return (
    <section id="cta" style={{ padding: '110px 28px', background: N.amber, color: N.graphite, fontFamily: N.sans, position: 'relative', overflow: 'hidden' }}>
      <WaveBackdrop opacity={0.12} color={N.graphite}/>
      <div style={{ position: 'relative', maxWidth: 920, margin: '0 auto', textAlign: 'center' }}>
        <h2 style={{ fontFamily: N.serif, fontSize: 'clamp(44px, 6vw, 72px)', lineHeight: 1.02, letterSpacing: '-0.025em', margin: '0 auto 18px', color: N.graphite, fontWeight: 400, maxWidth: 780, textWrap: 'balance' }}>
          Comece hoje.<br/>14 dias grátis.
        </h2>
        <p style={{ fontSize: 19, color: 'rgba(26,26,24,.78)', margin: '0 auto', maxWidth: 560, lineHeight: 1.5 }}>Sem cartão de crédito. Cancele quando quiser.</p>
        <form
          style={{ display: 'flex', gap: 8, maxWidth: 520, margin: '36px auto 0', background: '#fff', borderRadius: 14, padding: 6, boxShadow: '0 18px 40px -16px rgba(26,26,24,.25)' }}
          onSubmit={e => {
            e.preventDefault();
            const email = new FormData(e.currentTarget).get('email') || '';
            const q = email ? '?email=' + encodeURIComponent(email) : '';
            window.location.href = 'cadastro.html' + q;
          }}
        >
          <input name="email" type="email" placeholder="seu@email.com.br" style={{ flex: 1, border: 'none', outline: 'none', padding: '14px 18px', fontSize: 16, fontFamily: N.sans, background: 'transparent', color: N.graphite }}/>
          <button style={{ all: 'unset', cursor: 'pointer', padding: '14px 22px', borderRadius: 10, background: N.graphite, color: N.off, fontWeight: 700, fontSize: 15 }}>Criar conta grátis</button>
        </form>
        <div style={{ marginTop: 28, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 14, flexWrap: 'wrap' }}>
          <div style={{ display: 'flex' }}>
            {avatars.map((a, i) => (
              <div key={i} style={{ width: 30, height: 30, borderRadius: 999, background: a.bg, color: '#fff', fontSize: 11, fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center', border: `2px solid ${N.amber}`, marginLeft: i === 0 ? 0 : -8, fontFamily: N.sans, letterSpacing: '.02em' }}>{a.i}</div>
            ))}
          </div>
          <div style={{ fontSize: 14, color: 'rgba(26,26,24,.78)', fontWeight: 500 }}>
            Já são <strong style={{ color: N.graphite, fontWeight: 700 }}>2.840 psicólogos</strong> usando o Nottara
          </div>
        </div>
      </div>
    </section>
  );
}

// 12) FOOTER
function Footer() {
  return (
    <footer style={{ background: N.graphite, color: N.off, padding: '64px 28px 32px', fontFamily: N.sans }}>
      <div style={{ maxWidth: 1240, margin: '0 auto', display: 'grid', gridTemplateColumns: '1.6fr 1fr 1fr 1fr', gap: 40, alignItems: 'start' }}>
        <div>
          <NLogo light/>
          <p style={{ fontFamily: N.serif, fontSize: 22, color: N.amberLight, fontWeight: 400, marginTop: 18, letterSpacing: '-0.005em' }}>Escuta. Registra. Cuida.</p>
          <p style={{ color: 'rgba(247,245,240,.6)', fontSize: 13, lineHeight: 1.6, marginTop: 14, maxWidth: 320 }}>O copiloto clínico para psicólogos brasileiros.</p>
          <a href="https://wa.me/5541999078905" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, marginTop: 18, padding: '10px 16px', borderRadius: 999, background: 'rgba(247,245,240,.08)', color: N.off, textDecoration: 'none', fontSize: 13, fontWeight: 600 }}>
            <Icon name="whatsapp" size={18} color={N.amber}/> Suporte via WhatsApp
          </a>
        </div>
        {[
          { h: 'Produto',   l: [
            ['Como funciona', '#how'],
            ['Funcionalidades', '#features'],
            ['Segurança', '#security'],
            ['FAQ', '#faq'],
          ] },
          { h: 'Empresa',   l: [
            ['Sobre', 'pages/sobre.html'],
            ['Imprensa', 'pages/imprensa.html'],
            ['Contato', 'mailto:contato@nottara.com.br'],
            ['consentimento.nottara.com.br', 'https://consentimento.nottara.com.br', true],
          ] },
          { h: 'Legal',     l: [
            ['Política de Privacidade', 'pages/privacidade.html'],
            ['Termos de Uso', 'pages/termos.html'],
            ['LGPD', 'pages/lgpd.html'],
            ['Cookies', 'pages/cookies.html'],
          ] },
        ].map(c => (
          <div key={c.h}>
            <div style={{ fontSize: 11, letterSpacing: '.14em', textTransform: 'uppercase', fontWeight: 700, color: N.amberLight }}>{c.h}</div>
            <ul style={{ listStyle: 'none', padding: 0, margin: '16px 0 0', display: 'flex', flexDirection: 'column', gap: 10 }}>
              {c.l.map(([label, href, ext]) => (
                <li key={label}>
                  <a
                    href={href}
                    {...(ext ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                    style={{ fontSize: 13, color: 'rgba(247,245,240,.7)', textDecoration: 'none' }}
                  >{label}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div style={{ maxWidth: 1240, margin: '48px auto 0', paddingTop: 22, borderTop: '1px solid rgba(247,245,240,.1)', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12, fontSize: 12, color: 'rgba(247,245,240,.5)' }}>
        <span>© 2026 Nottara · CNPJ 53.408.235/0001-83</span>
        <span>Feito no Brasil · Servidores em São Paulo</span>
      </div>
    </footer>
  );
}

window.Seguranca = Seguranca; window.Depoimentos = Depoimentos;
window.FAQ = FAQ; window.CTAFinal = CTAFinal; window.Footer = Footer;
