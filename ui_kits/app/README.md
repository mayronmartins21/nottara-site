# Nottara — Mobile App UI Kit

Visual recreation of the Nottara React Native app. Components are React/JSX (cosmetic only — no real RN bindings).

## Files

- `index.html` — interactive showcase of the four core screens with a click-thru column.
- `components.jsx` — atoms: `NTIcon`, `NTStatusBar`, `NTTabBar`, `NTPatientRow`, `NTCTA`, `NTSection`, `NTMark`, plus the `NT.*` token object.
- `screens.jsx` — full screens: `NTScreenHome`, `NTScreenPatients`, `NTScreenRecord`, `NTScreenNote`.

## Screens covered

| Screen | What it shows |
|---|---|
| Início | Greeting, next-session card, weekly stats, notes-to-review |
| Pacientes | Searchable patient list |
| Gravando | Active recording — graphite background, brand wave, live levels, LGPD reassurance |
| Nota clínica | SOAP-format generated note + actions |

## Notes

- Components are cosmetic. Recording state is fake. Persisted state is not real.
- Brand mark is the tilde/wave in amber; reused at multiple sizes.
- The waveform animation on the recording screen is a brand signature — see `preview/recording.html` for the standalone specimen.
