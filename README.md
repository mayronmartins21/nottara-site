# Nottara Design System

> Copiloto clínico para psicólogos brasileiros. Sofisticação serena, confiança clínica.

Nottara is a clinical copilot built for Brazilian psychologists. The product is split into two surfaces:

1. **Mobile app (React Native)** — records therapy sessions, transcribes audio with AI, generates structured clinical notes (SOAP / DAP / Evolução), and manages patient records under LGPD compliance.
2. **Marketing website** — institutional site whose primary job is to convert visiting psychologists into registered trial users.

The brand voice is professional but warm: it speaks to clinicians who care deeply about ethics, privacy, and the therapeutic relationship. The visual language pairs a serious editorial typography (DM Serif Display) with a calm, modern UI face (Plus Jakarta Sans), warmed by an amber palette that nods to candlelight, ochre, and the warm tones of consulting-room interiors.

---

## Sources

This design system was built from a written brief — no codebase, Figma, or screenshots were attached.

- **Brand brief** (provided in chat): palette + type + logo concept + product description.
- **No codebase** was imported. Component implementations are reasonable defaults that match the brand and the React Native / web split.
- **No Figma file** was provided. Variables, components, and screens here are first-pass interpretations, ready for the team to refine against the real design source when it exists.

If a real codebase or Figma exists, re-attach it via the Import menu and the system can be hardened against it.

---

## Index

| File / folder | What it contains |
|---|---|
| `README.md` | This file. Brand context, content fundamentals, visual foundations. |
| `SKILL.md` | Agent Skill manifest — makes this folder usable as a Claude Code skill. |
| `colors_and_type.css` | All design tokens as CSS custom properties — colors, type scale, semantic roles, spacing, radii, shadows. |
| `assets/` | Logos, marks, icon set, brand textures. Drop real product screenshots here when available. |
| `fonts/` | Webfonts. Currently relies on Google Fonts CDN — see "Type" below for the substitution flag. |
| `preview/` | Self-contained design-system specimen cards (rendered in the Design System tab). |
| `ui_kits/app/` | React Native mobile app UI kit — components + click-through `index.html`. |
| `ui_kits/website/` | Marketing website UI kit — components + `index.html` simulating the homepage. |
| `slides/` | (Not built — no deck template was provided.) |

---

## Content fundamentals

**Language.** Primary copy is **Brazilian Portuguese**. English appears only in technical contexts (e.g. SOAP, LGPD acronyms expanded once). When mixing languages, never code-switch within a sentence.

**Person & address.** Use **você**, never *tu* or *o senhor / a senhora*. The product addresses the clinician as a respected peer, not a customer. Examples:

- ✅ "Grave a sessão. A gente cuida do resto."
- ✅ "Suas notas, prontas em minutos."
- ❌ "Grave sua sessão e nós cuidaremos do resto." (overly formal, distant)
- ❌ "Bora gravar?" (too casual, breaks clinical register)

**Tone.** Serious, calm, capable. Never playful, never marketing-shouty. Think of the cadence of a senior colleague reassuring you that the paperwork is handled. The brand respects the gravity of clinical work — copy should feel like it was written by someone who has sat in the therapist's chair.

**Casing.** Sentence case everywhere. **Never Title Case** in headings, buttons, or nav. Capitalize only proper nouns and the first word.

- ✅ "Comece um teste gratuito"
- ❌ "Comece Um Teste Gratuito"

**Sentence length.** Short. Headlines are 3–7 words. Body copy stays under ~22 words per sentence. Periods are welcome.

**Vocabulary signals.** Words that belong: *sessão, paciente, prontuário, evolução, sigilo, consentimento, conformidade, LGPD, transcrição, nota clínica, copiloto.* Words to avoid: *cliente* (we say *paciente*), *usuário* in marketing copy (we say *psicólogo* or *profissional*), *AI* in body copy (use *IA* or, better, describe what it does).

**Numbers & units.** Use Brazilian conventions — comma decimal, period thousands separator. Time is 24h ("14h30", "às 9h"). Currency is R$ with no space ("R$ 89/mês").

**Emoji.** **Never** in product UI or marketing copy. The brand is too serious for them. Unicode symbols are also avoided as decoration.

**Microcopy examples.**

| Surface | Copy |
|---|---|
| App empty state — patients | "Adicione seu primeiro paciente para começar." |
| App recording start | "Gravando. Pode falar à vontade." |
| App recording stop | "Sessão encerrada. Transcrevendo…" |
| Marketing hero (H1) | "O copiloto clínico do seu consultório." |
| Marketing hero (sub) | "Grave, transcreva e organize suas sessões com a IA que respeita o sigilo profissional." |
| CTA primary | "Comece grátis" |
| CTA secondary | "Ver como funciona" |
| Confirm destructive | "Excluir paciente?" / "Esta ação não pode ser desfeita." |
| LGPD reassurance | "Os áudios são processados em servidores no Brasil e apagados após a transcrição." |

**Errors.** Plain, calm, never blaming the user. "Não conseguimos salvar a nota agora. Tente de novo em alguns segundos." Never *"Erro 500"* in user-facing surfaces.

---

## Visual foundations

### Color

A warm-but-disciplined palette. Amber carries the brand and signals action; graphite handles type and structure; off-white is the canvas. The two amber tints (Light, Soft) are for backgrounds, highlights, and tinted surfaces — never for primary actions.

| Token | Hex | Use |
|---|---|---|
| `--amber` | `#EF9F27` | Primary brand. CTA buttons, the wave/tilde mark, focused states. |
| `--amber-light` | `#FAC775` | Hover/active tints, gentle highlights, secondary illustrations. |
| `--amber-soft` | `#FAEEDA` | Tinted surfaces, callout backgrounds, selection. |
| `--graphite` | `#1A1A18` | Primary type. Dark surfaces. Text on amber. |
| `--off-white` | `#F7F5F0` | App / page background. Warm neutral, never pure white. |

Derived neutrals (graphite mixed with off-white) provide secondary text and dividers — see `colors_and_type.css` for the full ramp.

**Semantic colors.** Success/warning/error are restrained — desaturated greens and clay reds that sit comfortably alongside amber rather than fighting it. No bright red, no neon green.

**Color vibe of imagery.** Warm, slightly desaturated. Editorial photography (when used) leans toward natural daylight, indoor warmth, soft film grain. Avoid cold-blue stock photography. Avoid heavy filters. Black-and-white imagery is acceptable as accent, never as default.

### Type

- **DM Serif Display** for display + h1/h2 headlines. High-contrast serif, used at large sizes and tight line-height. Conveys editorial seriousness — the "clinical authority" of a book cover or medical journal masthead.
- **Plus Jakarta Sans** for everything else: subheadings, body, UI, micro. Geometric humanist sans with a friendly tail on the lowercase 'a' and 'g' — keeps the warmth at body sizes.

We never set DM Serif Display below 24px, and never set Plus Jakarta Sans above 32px (the serif takes over). H3 and below are always sans.

**Substitution flag.** Currently the system loads both faces from **Google Fonts**, which is the canonical source for both. If the team licenses different display weights, drop the `.woff2` files in `fonts/` and update `colors_and_type.css`.

### Spacing

A 4-pt baseline. Tokens go `--space-1` (4px) through `--space-12` (96px), with the most-used values being `--space-3` (12), `--space-4` (16), `--space-6` (24), `--space-8` (32). Section padding on web is generous — 96px+ vertical between major bands; mobile screen padding is 20px horizontal.

### Radii

Soft, never pillowy. Default card radius is **12px**. Buttons are **999px** (pill) for primary CTAs and **10px** for secondary/inline buttons. Inputs are **10px**. The pill CTA is a brand signature — it pairs with the curved tilde mark.

### Shadows / elevation

Two-layer warm shadows. Shadows take an amber-tinted black to keep the warm palette consistent (avoid grey shadows on a warm canvas — they read cold and cheap).

- `--shadow-sm` — `0 1px 2px rgba(26,26,24,.06)` — inputs at rest.
- `--shadow-md` — `0 4px 12px -2px rgba(26,26,24,.08), 0 2px 4px -1px rgba(26,26,24,.04)` — cards, dropdowns.
- `--shadow-lg` — `0 18px 40px -12px rgba(26,26,24,.18), 0 4px 8px -2px rgba(26,26,24,.06)` — modals, primary CTA hover.

No glassmorphism. No heavy inner shadows. Inner shadow is reserved for pressed/recessed inputs and is barely visible.

### Borders

`1px solid` neutrals. Default border is `--border-subtle` (`#E8E3D8`, off-white tinted darker). Strong borders only on focused inputs (amber, 1.5px). Never multi-color borders. Never gradient borders.

### Cards

- Background: `--off-white` on graphite pages, `#FFFFFF` on off-white pages — always one shade lighter than the surface they sit on.
- Border: 1px `--border-subtle`.
- Radius: 12px.
- Shadow: `--shadow-md` at rest, `--shadow-lg` on hover.
- Padding: 24px default; 16px for compact rows.

### Backgrounds

The canvas is **off-white**, not white. Full-bleed photography is used sparingly — a single hero image, never repeating image backgrounds. **No gradients** as decoration. The only "gradient" allowed is the protection scrim under text on photography (a soft graphite → transparent vertical fade).

Subtle textures are allowed: a faint grain overlay (~3% opacity) on hero sections. No patterns, no dots, no diagonal stripes.

### Animation

Calm and confident. No bounce. No spring. No celebratory confetti.

- Standard transition: `200ms cubic-bezier(0.2, 0, 0, 1)` (ease-out, slightly anticipatory).
- Page-level enter: `400ms` opacity + 8px Y translation.
- The waveform/tilde mark may animate gently on app open (a soft horizontal sweep, ~1.2s, once) — this is a brand signature.

### Hover states

- Primary button (amber bg): background darkens ~6% (`#DC8E1B`) and shadow strengthens to `--shadow-lg`.
- Secondary button (graphite outline): background fills with `--amber-soft`.
- Links: no underline at rest, underline on hover.
- Cards: shadow strengthens; no scale, no lift translate.

### Press / active states

- Primary button: scale `0.98`, no color change.
- Cards: scale `0.995`.
- Tappable list rows (mobile): background flashes `--amber-soft` for 120ms.

### Transparency / blur

Used sparingly. Bottom-sheet modals use a graphite scrim at 40% opacity (no blur — the brand prefers crisp). Sticky headers use solid off-white with a subtle bottom border, **not** a frosted blur.

### Layout rules

- **Web max content width**: 1200px. Hero text blocks max 720px.
- **Mobile**: 20px horizontal padding, 12px between row items.
- Respect a clear vertical rhythm — sections get `--space-12` separators.
- Sticky elements: top nav (web), bottom tab bar (app), action bar above keyboard.

---

## Iconography

See "Iconography" below for the source set used. Short version: **Lucide** is used as the icon system, scaled to match Plus Jakarta Sans body weight. Stroke 1.5px. Icons are **Graphite** by default; **Amber** when expressing brand action; **never multicolor**. No emoji anywhere in product UI.

The brand mark — a tilde / waveform — is custom and lives in `assets/logo-*.svg`. It is the only "illustration" the brand uses.

