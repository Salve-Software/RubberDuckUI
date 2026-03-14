# RubberDuckUI �

A minimal, dark-first React Native design system with a yellow duck accent.

---

## Requirements

- React Native >= 0.72
- react-native-svg >= 13.0.0 (required by Lucide icons)

---

## Installation
```bash
npm install rubber-duck-ui
```

---

## Font Setup

RubberDuckUI uses [Geist Sans](https://vercel.com/font) and [Geist Mono](https://vercel.com/font) as its default typefaces.

### 1. Download the font files

Download the `.ttf` files from [vercel.com/font](https://vercel.com/font) and place them in your project:
```
your-app/
└── assets/
    └── fonts/
        ├── Geist-Regular.ttf
        ├── Geist-Medium.ttf
        ├── Geist-SemiBold.ttf
        ├── Geist-Bold.ttf
        └── GeistMono-Regular.ttf
```

### 2. Configure react-native.config.js

Create or update `react-native.config.js` at the root of your project:
```js
module.exports = {
  assets: ['./assets/fonts'],
}
```

### 3. Link the fonts
```bash
npx react-native-asset
```

This will automatically copy the font files into the correct native directories for both Android and iOS.

---

## Usage

### Using components
```tsx
import { Button, Text } from 'rubber-duck-ui'

export function MyScreen() {
  return (
    <>
      <Text variant="heading1">Hello, world!</Text>
      <Button label="Get started" onPress={() => {}} />
    </>
  )
}
```

---

## Theming

RubberDuckUI ships with a dark theme by default, using yellow (`#FFD600`) as the accent color — inspired by the rubber duck, the developer's best debugging companion.

You can override any token by passing a partial theme object to `RubberDuckUI.configure()`:
```tsx
RubberDuckUI.configure({
  colors: {
    accent: '#E91E63',
    background: '#0D0D0D',
  },
})
```

To reset to the default duck theme:
```tsx
RubberDuckUI.reset()
```

---

## License

MIT