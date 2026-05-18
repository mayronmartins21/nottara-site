// Nottara — Signup flow (cadastro.html)
// Integrado com Supabase Auth + tabela profiles

const SUPABASE_URL = 'https://gkkscbhpfavcgvubrbxi.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imdra3NjYmhwZmF2Y2d2dWJyYnhpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzY5ODE3MjgsImV4cCI6MjA5MjU1NzcyOH0.gVnzXibnqzIU13OsxxMvhQN7tkiY_cN11zAUzsWnV38';

// ── Supabase helpers ──
const supabaseHeaders = {
  'Content-Type': 'application/json',
  'apikey': SUPABASE_ANON_KEY,
  'Authorization': `Bearer ${SUPABASE_ANON_KEY}`,
};

async function signUpUser(email, password) {
  const res = await fetch(`${SUPABASE_URL}/auth/v1/signup`, {
    method: 'POST',
    headers: supabaseHeaders,
    body: JSON.stringify({ email, password }),
  });
  return res.json();
}

async function insertProfile(userId, data) {
  const res = await fetch(`${SUPABASE_URL}/rest/v1/profiles`, {
    method: 'POST',
    headers: { ...supabaseHeaders, 'Prefer': 'return=minimal' },
    body: JSON.stringify({
      id: userId,
      email: data.email,
      nome_completo: data.nome,
      cpf: data.cpf.replace(/\D/g, ''),
      crp: data.crp,
      uf_crp: data.estado,
      abordagem: data.especialidade || null,
      status: 'pendente',
    }),
  });
  return res;
}

const ESTADOS_BR = [
  ['AC', 'Acre'], ['AL', 'Alagoas'], ['AP', 'Amapá'], ['AM', 'Amazonas'],
  ['BA', 'Bahia'], ['CE', 'Ceará'], ['DF', 'Distrito Federal'], ['ES', 'Espírito Santo'],
  ['GO', 'Goiás'], ['MA', 'Maranhão'], ['MT', 'Mato Grosso'], ['MS', 'Mato Grosso do Sul'],
  ['MG', 'Minas Gerais'], ['PA', 'Pará'], ['PB', 'Paraíba'], ['PR', 'Paraná'],
  ['PE', 'Pernambuco'], ['PI', 'Piauí'], ['RJ', 'Rio de Janeiro'], ['RN', 'Rio Grande do Norte'],
  ['RS', 'Rio Grande do Sul'], ['RO', 'Rondônia'], ['RR', 'Roraima'], ['SC', 'Santa Catarina'],
  ['SP', 'São Paulo'], ['SE', 'Sergipe'], ['TO', 'Tocantins'],
];

// ── Helpers ──
const maskCpf = (s) => {
  const d = String(s || '').replace(/\D/g, '').slice(0, 11);
  let out = d;
  if (d.length > 3)  out = d.slice(0,3) + '.' + d.slice(3);
  if (d.length > 6)  out = d.slice(0,3) + '.' + d.slice(3,6) + '.' + d.slice(6);
  if (d.length > 9)  out = d.slice(0,3) + '.' + d.slice(3,6) + '.' + d.slice(6,9) + '-' + d.slice(9);
  return out;
};
const isEmail = (s) => /^\S+@\S+\.\S+$/.test(String(s || '').trim());

// ── Form primitives ──
const fieldWrap = { display: 'flex', flexDirection: 'column', gap: 6 };
const labelStyle = { fontSize: 13, fontWeight: 600, color: N.graphite, letterSpacing: '-0.005em' };
const inputBaseStyle = {
  fontFamily: N.sans,
  fontSize: 15,
  padding: '13px 14px',
  border: `1.5px solid ${N.ink100}`,
  borderRadius: 12,
  background: '#fff',
  color: N.graphite,
  outline: 'none',
  width: '100%',
  boxSizing: 'border-box',
  transition: 'border-color .15s ease, box-shadow .15s ease',
};
const errorStyle = { fontSize: 12, color: '#B5462E', marginTop: 2 };

function TextField({ label, value, onChange, type = 'text', placeholder, error, autoFocus, autoComplete, inputMode }) {
  const [focused, setFocused] = React.useState(false);
  return (
    <div style={fieldWrap}>
      <label style={labelStyle}>{label}</label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        autoFocus={autoFocus}
        autoComplete={autoComplete}
        inputMode={inputMode}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        style={{
          ...inputBaseStyle,
          borderColor: error ? '#B5462E' : (focused ? N.amber : N.ink100),
          boxShadow: focused ? `0 0 0 4px ${error ? 'rgba(181,70,46,.12)' : 'rgba(239,159,39,.16)'}` : 'none',
        }}
      />
      {error && <div style={errorStyle}>{error}</div>}
    </div>
  );
}

function PasswordField({ label, value, onChange, placeholder, error, autoComplete }) {
  const [show, setShow] = React.useState(false);
  const [focused, setFocused] = React.useState(false);
  return (
    <div style={fieldWrap}>
      <label style={labelStyle}>{label}</label>
      <div style={{ position: 'relative' }}>
        <input
          type={show ? 'text' : 'password'}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          autoComplete={autoComplete}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          style={{
            ...inputBaseStyle,
            paddingRight: 46,
            borderColor: error ? '#B5462E' : (focused ? N.amber : N.ink100),
            boxShadow: focused ? `0 0 0 4px ${error ? 'rgba(181,70,46,.12)' : 'rgba(239,159,39,.16)'}` : 'none',
          }}
        />
        <button
          type="button"
          onClick={() => setShow(v => !v)}
          aria-label={show ? 'Ocultar senha' : 'Mostrar senha'}
          style={{
            position: 'absolute', top: '50%', right: 10, transform: 'translateY(-50%)',
            border: 'none', background: 'transparent', cursor: 'pointer',
            color: N.ink500, padding: 6, display: 'flex',
          }}
        >
          {show ? (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 3l18 18"/><path d="M10.6 6.3A10.7 10.7 0 0 1 12 6c5 0 9 4 10 6-.5.9-1.4 2.2-2.8 3.5"/><path d="M6.5 7.5C4.5 9 3 11 2 12c1 2 5 6 10 6 1.6 0 3-.4 4.3-1"/><path d="M9.9 9.9a3 3 0 0 0 4.2 4.2"/>
            </svg>
          ) : (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M2 12s4-6 10-6 10 6 10 6-4 6-10 6S2 12 2 12z"/><circle cx="12" cy="12" r="3"/>
            </svg>
          )}
        </button>
      </div>
      {error && <div style={errorStyle}>{error}</div>}
    </div>
  );
}

function SelectField({ label, value, onChange, options, placeholder, error }) {
  const [focused, setFocused] = React.useState(false);
  return (
    <div style={fieldWrap}>
      <label style={labelStyle}>{label}</label>
      <div style={{ position: 'relative' }}>
        <select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          style={{
            ...inputBaseStyle,
            appearance: 'none',
            WebkitAppearance: 'none',
            paddingRight: 40,
            color: value ? N.graphite : N.ink400,
            borderColor: error ? '#B5462E' : (focused ? N.amber : N.ink100),
            boxShadow: focused ? `0 0 0 4px ${error ? 'rgba(181,70,46,.12)' : 'rgba(239,159,39,.16)'}` : 'none',
          }}
        >
          <option value="" disabled>{placeholder || 'Selecione'}</option>
          {options.map(([v, l]) => (<option key={v} value={v}>{l}</option>))}
        </select>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={N.ink500} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
          style={{ position: 'absolute', right: 14, top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none' }}>
          <path d="M6 9l6 6 6-6"/>
        </svg>
      </div>
      {error && <div style={errorStyle}>{error}</div>}
    </div>
  );
}

function PrimaryButton({ children, onClick, type = 'button', disabled, loading }) {
  const [hover, setHover] = React.useState(false);
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        all: 'unset',
        cursor: (disabled || loading) ? 'not-allowed' : 'pointer',
        display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 8,
        padding: '15px 26px',
        borderRadius: 14,
        background: (disabled || loading) ? N.ink200 : N.amber,
        color: (disabled || loading) ? N.ink500 : N.graphite,
        fontWeight: 700, fontSize: 16, fontFamily: N.sans,
        boxShadow: (disabled || loading) ? 'none' : (hover ? '0 18px 36px -12px rgba(239,159,39,.6)' : '0 10px 24px -10px rgba(239,159,39,.5)'),
        transform: hover && !(disabled || loading) ? 'translateY(-1px)' : 'none',
        transition: 'transform .15s ease, box-shadow .15s ease, background .15s ease',
        width: '100%',
        textAlign: 'center',
        boxSizing: 'border-box',
      }}
    >
      {loading ? 'Aguarde...' : children}
    </button>
  );
}

// ── Layout chrome ──
function SignupHeader() {
  return (
    <header style={{ position: 'relative', zIndex: 2, padding: '20px 28px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
      <NLogo size={28}/>
      <a href="Nottara Institucional.html" style={{ fontSize: 13, fontWeight: 500, color: N.ink500, textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 6 }}>
        <span style={{ fontSize: 16, lineHeight: 1 }}>←</span> Voltar ao site
      </a>
    </header>
  );
}

function ProgressBar({ step, total }) {
  const pct = (step / total) * 100;
  return (
    <div style={{ position: 'relative', zIndex: 2, padding: '0 28px', maxWidth: 720, margin: '0 auto', width: '100%', boxSizing: 'border-box' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10, fontSize: 12, fontWeight: 700, letterSpacing: '.1em', textTransform: 'uppercase', color: N.amber }}>
        <span>Passo {step} de {total}</span>
        <span style={{ color: N.ink400 }}>{Math.round(pct)}%</span>
      </div>
      <div style={{ height: 4, background: N.amberSoft, borderRadius: 999, overflow: 'hidden' }}>
        <div style={{ height: '100%', width: `${pct}%`, background: N.amber, borderRadius: 999, transition: 'width .35s cubic-bezier(.2,.7,.2,1)' }}/>
      </div>
    </div>
  );
}

function Card({ children }) {
  return (
    <div style={{
      position: 'relative', zIndex: 2,
      background: '#fff',
      borderRadius: 24,
      boxShadow: '0 24px 60px -20px rgba(26,26,24,.12), 0 4px 12px -2px rgba(26,26,24,.06)',
      padding: 'clamp(28px, 4vw, 44px)',
      maxWidth: 480, width: '100%',
      margin: '0 auto',
      boxSizing: 'border-box',
    }}>
      {children}
    </div>
  );
}

function StepTitle({ eyebrow, title, sub }) {
  return (
    <div style={{ marginBottom: 24 }}>
      {eyebrow && <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '.14em', textTransform: 'uppercase', color: N.amber, marginBottom: 10 }}>{eyebrow}</div>}
      <h1 style={{ fontFamily: N.serif, fontSize: 'clamp(28px, 3.4vw, 36px)', lineHeight: 1.1, letterSpacing: '-0.02em', margin: 0, color: N.graphite, fontWeight: 400, textWrap: 'balance' }}>{title}</h1>
      {sub && <p style={{ fontSize: 15.5, color: N.ink700, lineHeight: 1.55, margin: '10px 0 0' }}>{sub}</p>}
    </div>
  );
}

// ── Step 1: Dados de acesso ──
function Step1({ data, update, onNext }) {
  const [errors, setErrors] = React.useState({});

  const submit = (e) => {
    e.preventDefault();
    const errs = {};
    if (!data.nome.trim()) errs.nome = 'Informe seu nome completo.';
    if (!isEmail(data.email)) errs.email = 'E-mail inválido.';
    if (!data.senha || data.senha.length < 8) errs.senha = 'Mínimo de 8 caracteres.';
    if (!/[A-Z]/.test(data.senha)) errs.senha = 'Use ao menos uma letra maiúscula.';
    if (!/[0-9]/.test(data.senha)) errs.senha = 'Use ao menos um número.';
    if (data.confirma !== data.senha) errs.confirma = 'As senhas não coincidem.';
    setErrors(errs);
    if (Object.keys(errs).length === 0) onNext();
  };

  return (
    <Card>
      <StepTitle title="Criar sua conta" sub="Preencha seus dados para começar."/>
      <form onSubmit={submit} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        <TextField
          label="Nome completo"
          value={data.nome}
          onChange={(v) => update('nome', v)}
          placeholder="Como você assina os documentos"
          autoComplete="name"
          autoFocus
          error={errors.nome}
        />
        <TextField
          label="E-mail"
          type="email"
          value={data.email}
          onChange={(v) => update('email', v)}
          placeholder="seu@email.com.br"
          autoComplete="email"
          inputMode="email"
          error={errors.email}
        />
        <PasswordField
          label="Senha"
          value={data.senha}
          onChange={(v) => update('senha', v)}
          placeholder="Mínimo 8 caracteres, 1 maiúscula e 1 número"
          autoComplete="new-password"
          error={errors.senha}
        />
        <PasswordField
          label="Confirmar senha"
          value={data.confirma}
          onChange={(v) => update('confirma', v)}
          placeholder="Repita a senha"
          autoComplete="new-password"
          error={errors.confirma}
        />
        <div style={{ marginTop: 8 }}>
          <PrimaryButton type="submit">Continuar →</PrimaryButton>
        </div>
        <div style={{ textAlign: 'center', fontSize: 13, color: N.ink500, marginTop: 6 }}>
          Já tem conta?{' '}
          <a href="https://wa.me/5541999078905" target="_blank" rel="noopener noreferrer"
            style={{ color: N.graphite, textDecoration: 'none', borderBottom: `1px solid ${N.amber}`, fontWeight: 500 }}>
            Fale com a gente pelo WhatsApp.
          </a>
        </div>
      </form>
    </Card>
  );
}

// ── Step 2: Dados profissionais + envio ao Supabase ──
function Step2({ data, update, onNext }) {
  const [errors, setErrors] = React.useState({});
  const [loading, setLoading] = React.useState(false);
  const [apiError, setApiError] = React.useState('');

  const submit = async (e) => {
    e.preventDefault();
    const errs = {};
    if (data.cpf.replace(/\D/g, '').length !== 11) errs.cpf = 'Informe um CPF válido.';
    if (!data.crp.trim()) errs.crp = 'Informe seu número de CRP.';
    if (!data.estado) errs.estado = 'Selecione o estado do CRP.';
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;

    setLoading(true);
    setApiError('');

    try {
      // 1. Criar usuário no Supabase Auth
      const authResult = await signUpUser(data.email, data.senha);

      if (authResult.error) {
        if (authResult.error.message?.includes('already registered')) {
          setApiError('Este e-mail já está cadastrado. Entre em contato pelo WhatsApp.');
        } else {
          setApiError(authResult.error.message || 'Erro ao criar conta. Tente novamente.');
        }
        setLoading(false);
        return;
      }

      const userId = authResult.user?.id;
      if (!userId) {
        setApiError('Erro inesperado. Tente novamente ou entre em contato.');
        setLoading(false);
        return;
      }

      // 2. Inserir perfil na tabela profiles
      const profileRes = await insertProfile(userId, data);
      if (!profileRes.ok) {
        setApiError('Erro ao salvar seus dados. Entre em contato pelo WhatsApp.');
        setLoading(false);
        return;
      }

      // 3. Sucesso — avançar para step 3
      onNext();
    } catch (err) {
      setApiError('Erro de conexão. Verifique sua internet e tente novamente.');
      setLoading(false);
    }
  };

  return (
    <Card>
      <StepTitle title="Seus dados profissionais" sub="O Nottara é exclusivo para psicólogos com CRP ativo."/>
      <form onSubmit={submit} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        <TextField
          label="CPF"
          value={data.cpf}
          onChange={(v) => update('cpf', maskCpf(v))}
          placeholder="000.000.000-00"
          inputMode="numeric"
          autoComplete="off"
          autoFocus
          error={errors.cpf}
        />
        <TextField
          label="Número do CRP"
          value={data.crp}
          onChange={(v) => update('crp', v)}
          placeholder="06/123456"
          error={errors.crp}
        />
        <SelectField
          label="Estado do CRP"
          value={data.estado}
          onChange={(v) => update('estado', v)}
          options={ESTADOS_BR}
          placeholder="Selecione o estado"
          error={errors.estado}
        />
        <TextField
          label="Especialidade principal (opcional)"
          value={data.especialidade}
          onChange={(v) => update('especialidade', v)}
          placeholder="Ex.: Terapia Cognitivo-Comportamental"
        />
        {apiError && (
          <div style={{ background: '#FEF2F0', border: '1px solid #F8C5BE', borderRadius: 10, padding: '12px 14px', fontSize: 13.5, color: '#B5462E', lineHeight: 1.5 }}>
            {apiError}
          </div>
        )}
        <div style={{ marginTop: 8 }}>
          <PrimaryButton type="submit" loading={loading}>
            {loading ? 'Enviando...' : 'Enviar solicitação →'}
          </PrimaryButton>
        </div>
        <div style={{ textAlign: 'center', fontSize: 12.5, color: N.ink500, lineHeight: 1.5, marginTop: 6 }}>
          Seus dados são protegidos pela LGPD e nunca serão compartilhados.
        </div>
      </form>
    </Card>
  );
}

// ── Step 3: Confirmação ──
function Step3() {
  return (
    <div style={{ position: 'relative', zIndex: 2, maxWidth: 560, margin: '0 auto', width: '100%', boxSizing: 'border-box' }}>
      <Card>
        <div style={{ textAlign: 'center' }}>
          <div style={{ width: 88, height: 88, borderRadius: 999, background: N.amberSoft, display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 22px', boxShadow: '0 16px 36px -12px rgba(239,159,39,.45)' }}>
            <div style={{ width: 64, height: 64, borderRadius: 999, background: N.amber, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Icon name="check" size={36} color={N.graphite} strokeWidth={2.4}/>
            </div>
          </div>
          <h1 style={{ fontFamily: N.serif, fontSize: 'clamp(28px, 3.6vw, 36px)', lineHeight: 1.1, letterSpacing: '-0.02em', margin: 0, color: N.graphite, fontWeight: 400, textWrap: 'balance' }}>
            Solicitação recebida!
          </h1>
          <p style={{ fontSize: 16, color: N.ink700, lineHeight: 1.6, margin: '14px auto 0', maxWidth: 440 }}>
            Nossa equipe vai analisar seu cadastro e verificar seu CRP junto ao CFP. Você receberá um e-mail de confirmação em até 48 horas úteis.
          </p>
        </div>

        <div style={{ height: 1, background: N.ink100, margin: '32px 0' }}/>

        <div style={{ background: N.amberSoft, borderRadius: 18, padding: '24px 22px' }}>
          <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '.14em', textTransform: 'uppercase', color: N.amber, marginBottom: 8 }}>Enquanto isso</div>
          <h3 style={{ fontFamily: N.serif, fontSize: 22, lineHeight: 1.2, letterSpacing: '-0.015em', margin: 0, color: N.graphite, fontWeight: 400 }}>
            Baixe o app
          </h3>
          <p style={{ fontSize: 14.5, color: N.ink700, lineHeight: 1.55, margin: '8px 0 18px' }}>
            Assim que sua conta for aprovada, você já pode entrar direto pelo aplicativo. Baixe agora e tenha tudo pronto.
          </p>
          <AppButtons/>
        </div>

        <div style={{ textAlign: 'center', fontSize: 13, color: N.ink500, marginTop: 22, lineHeight: 1.5 }}>
          Dúvidas?{' '}
          <a href="https://wa.me/5541999078905" target="_blank" rel="noopener noreferrer"
            style={{ color: N.graphite, textDecoration: 'none', borderBottom: `1px solid ${N.amber}`, fontWeight: 500 }}>
            Fale com a gente pelo WhatsApp
          </a>
        </div>
      </Card>
    </div>
  );
}

// ── Fluxo principal ──
function SignupFlow() {
  const [step, setStep] = React.useState(1);
  const [data, setData] = React.useState({
    nome: '', email: '', senha: '', confirma: '',
    cpf: '', crp: '', estado: '', especialidade: '',
  });

  // Pré-preencher e-mail via ?email= na URL
  React.useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const email = params.get('email');
    if (email) setData(d => ({ ...d, email }));
  }, []);

  // Scroll para o topo ao mudar de step
  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [step]);

  const update = (k, v) => setData(d => ({ ...d, [k]: v }));

  return (
    <div style={{ minHeight: '100vh', position: 'relative', background: N.off, fontFamily: N.sans, overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
        <WaveBackdrop opacity={0.07} color={N.amber}/>
      </div>

      <SignupHeader/>
      <ProgressBar step={step} total={3}/>

      <main style={{ flex: 1, display: 'flex', alignItems: 'flex-start', justifyContent: 'center', padding: '32px 20px 72px' }}>
        <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
          {step === 1 && <Step1 data={data} update={update} onNext={() => setStep(2)}/>}
          {step === 2 && <Step2 data={data} update={update} onNext={() => setStep(3)}/>}
          {step === 3 && <Step3/>}
        </div>
      </main>
    </div>
  );
}

window.SignupFlow = SignupFlow;