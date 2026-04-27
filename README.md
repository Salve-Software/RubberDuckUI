# RubberDuckUI

A minimal, dark-first React Native design system built for internal use. Ships with a yellow duck accent, Geist typography, and a token-based theming system.

---

## Requirements

Peer dependencies that must be installed in the consuming app:

```
react >= 19
react-native >= 0.83
lottie-react-native
react-content-loader
react-native-mask-input >= 1.2.0
react-native-reanimated >= 4.0.0
react-native-svg
```

---

## Font Setup

RubberDuckUI uses [Geist Sans](https://vercel.com/font) and [Geist Mono](https://vercel.com/font).

**1. Download the `.ttf` files** and place them in your app:

```
your-app/
└── assets/
    └── fonts/
        ├── Geist-Light.ttf
        ├── Geist-Regular.ttf
        ├── Geist-Medium.ttf
        ├── Geist-SemiBold.ttf
        ├── Geist-Bold.ttf
        └── GeistMono-Regular.ttf
```

**2. Add to `react-native.config.js`:**

```js
module.exports = {
  assets: ['./assets/fonts'],
}
```

**3. Link the assets:**

```bash
npx react-native-asset
```

---

## Configuration

Initialize the design system once at the root of your app (e.g. `App.tsx`):

```tsx
import { RubberDuckUI } from 'rubber-duck-ui'

RubberDuckUI.configure({
  darkMode: true,
  colors: {
    accent: '#FFD600',
  },
})
```

To reset to defaults:

```tsx
RubberDuckUI.reset()
```

---

## Components

**Atoms** — primitivos isolados, sem composição de outros componentes da lib:

| Component | Description |
|---|---|
| `Text` | Styled text with size, weight, color and alignment props |
| `Icon` | Lucide icon renderer with token-based sizing and color |
| `Loading` | Lottie-powered animated spinner |

**Molecules** — combinam atoms para formar elementos de UI completos:

| Component | Description |
|---|---|
| `Avatar` | User avatar with image or initials fallback and skeleton state |
| `CheckBox` | Animated checkbox with optional title and subtitle |
| `RadioButton` | Animated radio button with optional title and subtitle |
| `SimpleText` | Single-line text input with animated focus state |
| `MultilineText` | Multi-line textarea with animated focus state |
| `NumberField` | Numeric input with optional right-side unit label |
| `MoneyField` | Currency input with configurable symbol, separators and precision |

Full props reference → [docs/components.md](./docs/components.md)

---

## Tokens

The `Tokens` class gives direct access to all design tokens:

```tsx
import { Tokens } from 'rubber-duck-ui'

Tokens.color({ key: 'accent' })
Tokens.spacer({ key: 'md' })
Tokens.radii({ key: 'sm' })
Tokens.fontSize({ key: 'lg' })
Tokens.fontWeight({ key: 'semibold' })
Tokens.fontFamily({ key: 'sans', weight: 'medium' })
```

To access theme colors reactively inside components, use the `useTheme` hook:

```tsx
import { useTheme } from 'rubber-duck-ui'

const { colors } = useTheme()
```

Full token reference → [docs/tokens.md](./docs/tokens.md)

---

## License

MIT
