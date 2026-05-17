// Mobile app screens — visual recreations only.

function NTScreenHome({ onOpenPatient, onRecord, onAddPatient }) {
  return (
    <div style={{ paddingBottom: 110, fontFamily: NT.sans, padding: '0 16px' }}>
      {/* Greeting hero — graphite rounded card */}
      <div style={{ background: NT.graphite, color: NT.off, borderRadius: 24, padding: '18px 20px', display: 'flex', alignItems: 'center', gap: 12 }}>
        <NTMark size={28} primary="#fff" secondary={NT.amberLight}/>
        <div style={{ flex: 1 }}>
          <div style={{ fontSize: 13, color: NT.amber, fontWeight: 500 }}>Boa noite,</div>
          <div style={{ fontFamily: NT.serif, fontSize: 28, lineHeight: 1.05, color: NT.off, marginTop: 2, fontWeight: 400 }}>Mayrico <span style={{ fontFamily: NT.sans }}>👋</span></div>
        </div>
        <div style={{ width: 44, height: 44, borderRadius: 999, background: NT.amber, color: NT.graphite, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: 14 }}>MA</div>
      </div>

      {/* Sessões hoje — graphite stat card */}
      <div style={{ background: NT.graphite, color: NT.off, borderRadius: 20, padding: '22px 22px 26px', marginTop: 16, position: 'relative' }}>
        <div style={{ fontSize: 12, letterSpacing: '.12em', textTransform: 'uppercase', fontWeight: 700, color: NT.amber }}>Sessões hoje</div>
        <div style={{ fontFamily: NT.serif, fontSize: 56, lineHeight: 1, color: NT.off, marginTop: 6, fontWeight: 400 }}>0</div>
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: 18, opacity: .55 }}>
          <NTIcon name="calendar" size={42} color={NT.ink300}/>
        </div>
        <div style={{ textAlign: 'center', color: NT.ink400, fontSize: 13, marginTop: 12 }}>Ainda não há sessões agendadas para hoje</div>
      </div>

      {/* Three small stat tiles */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 10, marginTop: 12 }}>
        {[
          { n: '0', l: 'Pacientes' },
          { n: '0', l: 'Sessões' },
          { n: '0h', l: 'Horas\nclínicas' },
        ].map(s => (
          <div key={s.l} style={{ background: '#fff', borderRadius: 14, padding: '14px 14px 16px' }}>
            <div style={{ fontFamily: NT.sans, fontSize: 28, fontWeight: 700, color: NT.graphite, lineHeight: 1 }}>{s.n}</div>
            <div style={{ fontSize: 13, color: NT.ink500, marginTop: 8, whiteSpace: 'pre-line', lineHeight: 1.25 }}>{s.l}</div>
          </div>
        ))}
      </div>

      {/* Empty state — patients */}
      <div style={{ background: '#fff', borderRadius: 18, padding: '28px 20px', marginTop: 14, textAlign: 'center' }}>
        <div style={{ display: 'flex', justifyContent: 'center', color: NT.ink400 }}>
          <NTIcon name="users" size={36} color={NT.ink400}/>
        </div>
        <div style={{ fontWeight: 700, color: NT.graphite, fontSize: 17, marginTop: 14 }}>Nenhum paciente ainda</div>
        <div style={{ color: NT.ink500, fontSize: 14, marginTop: 6, lineHeight: 1.45 }}>Adicione seu primeiro paciente na aba Pacientes</div>
        <button onClick={onAddPatient} style={{ all: 'unset', cursor: 'pointer', display: 'inline-block', marginTop: 18, padding: '14px 36px', borderRadius: 14, background: NT.amber, color: NT.graphite, fontWeight: 700, fontSize: 15 }}>Adicionar paciente</button>
      </div>
    </div>
  );
}

function NTScreenPatients({ onOpen }) {
  const list = [
    { name: 'Mariana Silva', sub: 'Sessão 12 · qua 14h', t: 'qua', am: true, i: 'MS' },
    { name: 'Ricardo Tavares', sub: 'Sessão 4 · qui 16h', t: 'qui', i: 'RT' },
    { name: 'Júlia Nascimento', sub: 'Primeira consulta · sex 9h', t: 'sex', i: 'JN' },
    { name: 'Bruno Almeida', sub: 'Sessão 22 · seg 11h', t: 'seg', i: 'BA' },
    { name: 'Camila Ribeiro', sub: 'Sessão 7 · ter 18h', t: 'ter', i: 'CR' },
    { name: 'Fernando Costa', sub: 'Sessão 2 · qua 10h', t: 'qua', i: 'FC' },
  ];
  return (
    <div style={{ paddingBottom: 110, fontFamily: NT.sans }}>
      <div style={{ padding: '8px 20px 16px' }}>
        <h1 style={{ fontFamily: NT.serif, fontSize: 32, letterSpacing: '-0.02em', margin: 0, color: NT.graphite, fontWeight: 400 }}>Pacientes</h1>
        <div style={{ display: 'flex', gap: 8, alignItems: 'center', marginTop: 14, padding: '10px 14px', background: '#fff', borderRadius: 12, border: `1px solid ${NT.ink100}` }}>
          <NTIcon name="search" size={18} color={NT.ink500}/>
          <span style={{ color: NT.ink400, fontSize: 14 }}>Buscar paciente</span>
        </div>
      </div>
      <div style={{ background: '#fff', margin: '0 20px', borderRadius: 16, border: `1px solid ${NT.ink100}`, overflow: 'hidden' }}>
        {list.map((p, i, arr) => (
          <div key={p.name} onClick={() => onOpen && onOpen(p.name)} style={{ display: 'grid', gridTemplateColumns: '44px 1fr auto', gap: 12, padding: '14px 16px', alignItems: 'center', borderBottom: i < arr.length-1 ? `1px solid ${NT.ink100}` : 'none', cursor: 'pointer' }}>
            <div style={{ width: 44, height: 44, borderRadius: 999, background: p.am ? NT.amber : NT.ink100, color: p.am ? NT.graphite : NT.ink700, fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 14 }}>{p.i}</div>
            <div>
              <div style={{ fontWeight: 600, color: NT.graphite, fontSize: 15 }}>{p.name}</div>
              <div style={{ color: NT.ink500, fontSize: 12, marginTop: 2 }}>{p.sub}</div>
            </div>
            <NTIcon name="chevron-right" size={18} color={NT.ink400}/>
          </div>
        ))}
      </div>
    </div>
  );
}

function NTScreenRecord({ onStop }) {
  // Persistent timer
  const [seconds, setSeconds] = React.useState(764);
  React.useEffect(() => { const id = setInterval(() => setSeconds(s => s+1), 1000); return () => clearInterval(id); }, []);
  const mm = String(Math.floor(seconds/60)).padStart(2,'0');
  const ss = String(seconds%60).padStart(2,'0');

  return (
    <div style={{ position: 'absolute', inset: 0, background: NT.graphite, color: NT.off, fontFamily: NT.sans, display: 'flex', flexDirection: 'column' }}>
      <NTStatusBar dark time="14:45"/>
      <div style={{ padding: '14px 24px 0', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span style={{ fontSize: 11, letterSpacing: '.1em', textTransform: 'uppercase', fontWeight: 700, color: NT.amberLight }}>Sessão · gravando</span>
        <span style={{ fontSize: 12, color: NT.ink300 }}>Mariana S.</span>
      </div>
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 24, padding: 24 }}>
        <NTMark size={120} primary="#fff" secondary={NT.amberLight}/>
        <div style={{ fontFamily: '"JetBrains Mono", ui-monospace, monospace', fontSize: 56, color: NT.off, letterSpacing: '-.02em' }}>{mm}:{ss}</div>
        {/* live waveform */}
        <div style={{ display: 'flex', gap: 4, alignItems: 'center', height: 64 }}>
          {Array.from({ length: 28 }).map((_, i) => (
            <span key={i} style={{ display: 'block', width: 3, borderRadius: 2, background: NT.amber, height: 8 + ((i*53)%48), animation: `ntpulse ${0.7 + (i%5)*0.1}s ease-in-out infinite alternate`, animationDelay: `${(i%7)*60}ms` }}/>
          ))}
        </div>
        <div style={{ fontSize: 13, color: NT.ink300, textAlign: 'center', maxWidth: 280, lineHeight: 1.55 }}>
          Os áudios são processados em servidores no Brasil e apagados após a transcrição.
        </div>
      </div>
      <div style={{ padding: '0 24px 36px', display: 'flex', justifyContent: 'center' }}>
        <button onClick={onStop} style={{ all: 'unset', cursor: 'pointer', display: 'inline-flex', gap: 10, alignItems: 'center', padding: '14px 26px', borderRadius: 999, background: NT.off, color: NT.graphite, fontWeight: 600, fontSize: 15 }}>
          <NTIcon name="stop" size={20}/> Encerrar sessão
        </button>
      </div>
      <style>{`@keyframes ntpulse { from { transform: scaleY(.5) } to { transform: scaleY(1.6) } }`}</style>
    </div>
  );
}

function NTScreenNote({ onBack }) {
  return (
    <div style={{ paddingBottom: 110, fontFamily: NT.sans }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '8px 20px 4px' }}>
        <button onClick={onBack} style={{ all: 'unset', cursor: 'pointer', color: NT.ink700, padding: 4 }}>
          <NTIcon name="chevron-left" size={22}/>
        </button>
        <span style={{ fontSize: 13, fontWeight: 600, color: NT.ink700 }}>Pacientes</span>
      </div>
      <div style={{ padding: '4px 20px 0' }}>
        <h1 style={{ fontFamily: NT.serif, fontSize: 32, letterSpacing: '-0.02em', margin: 0, color: NT.graphite, fontWeight: 400 }}>Mariana Silva</h1>
        <div style={{ color: NT.ink500, fontSize: 13, marginTop: 4 }}>Sessão 12 · 50 min · 7 mai 2026</div>
      </div>

      {/* Status banner */}
      <div style={{ margin: '20px 20px 0', padding: '12px 14px', borderRadius: 12, background: NT.amberSoft, display: 'flex', alignItems: 'center', gap: 10 }}>
        <NTIcon name="check" size={18} color={NT.graphite}/>
        <div>
          <div style={{ fontSize: 13, fontWeight: 600, color: NT.graphite }}>Nota gerada</div>
          <div style={{ fontSize: 12, color: NT.ink700, marginTop: 1 }}>Revise antes de salvar no prontuário.</div>
        </div>
      </div>

      <NTSection title="Evolução · SOAP">
        <div style={{ background: '#fff', margin: '0 20px', borderRadius: 16, border: `1px solid ${NT.ink100}`, padding: 16 }}>
          {[
            { l: 'S — Subjetivo', b: 'Paciente relata melhora no sono após início da rotina noturna proposta. Ainda menciona ansiedade pontual no trabalho.' },
            { l: 'O — Objetivo', b: 'Afeto congruente. Discurso fluido. Sem alterações de juízo de realidade.' },
            { l: 'A — Avaliação', b: 'Episódio ansioso em remissão parcial. Boa adesão ao manejo comportamental.' },
            { l: 'P — Plano', b: 'Manter rotina noturna. Introduzir registro de pensamentos automáticos. Próxima sessão em 7 dias.' },
          ].map((row, i, arr) => (
            <div key={row.l} style={{ paddingBottom: 14, marginBottom: 14, borderBottom: i < arr.length-1 ? `1px solid ${NT.ink100}` : 'none' }}>
              <div style={{ fontSize: 11, letterSpacing: '.1em', textTransform: 'uppercase', fontWeight: 700, color: NT.amber }}>{row.l}</div>
              <div style={{ fontSize: 14, color: NT.graphite, marginTop: 6, lineHeight: 1.55 }}>{row.b}</div>
            </div>
          ))}
        </div>
      </NTSection>

      <div style={{ display: 'flex', gap: 10, padding: '24px 20px 0' }}>
        <NTCTA>Salvar no prontuário</NTCTA>
        <NTCTA secondary><NTIcon name="edit" size={16}/> Editar</NTCTA>
      </div>
    </div>
  );
}

window.NTScreenHome = NTScreenHome;
window.NTScreenPatients = NTScreenPatients;
window.NTScreenRecord = NTScreenRecord;
window.NTScreenNote = NTScreenNote;
