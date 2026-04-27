# Tokens

All tokens are accessible via the `Tokens` class or reactively via `useTheme`.

```tsx
import { Tokens, useTheme } from 'rubber-duck-ui'

// Static access
Tokens.color({ key: 'accent' })

// Reactive inside components
const { colors } = useTheme()
```

---

## Colors

Color tokens adapt to the configured theme. Override any key via `RubberDuckUI.configure({ colors: {...} })`.

| Key | Description |
|---|---|
| `accent` | Primary brand color (default: `#FFD600`) |
| `accentLight` | Lighter accent variant |
| `accentDark` | Darker accent variant |
| `accentMuted` | Low-emphasis accent |
| `background` | App background |
| `surface` | Card / container surface |
| `surfaceRaised` | Elevated surface (modals, popovers) |
| `surfaceOverlay` | Scrim / overlay |
| `textPrimary` | Main body text |
| `textSecondary` | Supporting / caption text |
| `textDisabled` | Disabled state text |
| `textInverse` | Text on dark backgrounds |
| `borderSubtle` | Low-contrast border |
| `borderDefault` | Standard border |
| `borderStrong` | High-contrast border |
| `success` | Positive / success semantic |
| `error` | Negative / error semantic |
| `warning` | Warning semantic |
| `info` | Informational semantic |
| `white` | Pure white |
| `black` | Pure black |

---

## Spacing

```tsx
Tokens.spacer({ key: 'md' }) // 16
```

| Key | Value |
|---|---|
| `none` | 0 |
| `xxs` | 4 |
| `xs` | 8 |
| `sm` | 12 |
| `md` | 16 |
| `lg` | 24 |
| `xl` | 32 |
| `xxl` | 48 |
| `xxxl` | 64 |

---

## Border Radius

```tsx
Tokens.radii({ key: 'sm' }) // 8
```

| Key | Value |
|---|---|
| `none` | 0 |
| `xs` | 4 |
| `sm` | 8 |
| `md` | 12 |
| `lg` | 16 |
| `xl` | 24 |
| `full` | 9999 |

---

## Font Size

```tsx
Tokens.fontSize({ key: 'lg' }) // 16
```

| Key | Value |
|---|---|
| `xs` | 10 |
| `sm` | 12 |
| `md` | 14 |
| `lg` | 16 |
| `xl` | 20 |
| `xxl` | 24 |
| `xxxl` | 32 |
| `display` | 40 |

---

## Font Weight

```tsx
Tokens.fontWeight({ key: 'semibold' }) // '600'
```

| Key | Value |
|---|---|
| `light` | 300 |
| `regular` | 400 |
| `medium` | 500 |
| `semibold` | 600 |
| `bold` | 700 |

---

## Font Family

```tsx
Tokens.fontFamily({ key: 'sans', weight: 'medium' }) // 'Geist-Medium'
```

| Key | Weights available |
|---|---|
| `sans` | `light`, `regular`, `medium`, `semibold`, `bold` |
| `mono` | `regular` |
