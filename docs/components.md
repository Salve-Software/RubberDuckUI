# Components

## Text

Renders styled text using typography tokens.

```tsx
import { Text } from 'rubber-duck-ui'

<Text size="lg" weight="semibold" color="textPrimary">Hello</Text>
```

| Prop | Type | Default |
|---|---|---|
| `size` | `'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl' \| 'xxl' \| 'xxxl' \| 'display'` | `'md'` |
| `weight` | `'light' \| 'regular' \| 'medium' \| 'semibold' \| 'bold'` | `'regular'` |
| `color` | `keyof IColors` | `'textPrimary'` |
| `align` | `'left' \| 'center' \| 'right'` | `'left'` |
| `numberOfLines` | `number` | — |

---

## Icon

Renders any [Lucide](https://lucide.dev) icon with token-based size and color.

```tsx
import { Icon } from 'rubber-duck-ui'

<Icon icon="Star" size="medium_26" color="accent" />
```

| Prop | Type | Default |
|---|---|---|
| `icon` | `IconName` (any Lucide icon name) | required |
| `size` | `'small_16' \| 'tiny_20' \| 'medium_26' \| 'big_32' \| 'large_40' \| 'gigant_104'` | `'medium_26'` |
| `color` | `keyof IColors` | `'textPrimary'` |

---

## Loading

Lottie-powered animated spinner.

```tsx
import { Loading } from 'rubber-duck-ui'

<Loading size="small_64" color="accent" />
```

| Prop | Type | Default |
|---|---|---|
| `size` | `'tiny_48' \| 'small_64' \| 'big_150'` | `'small_64'` |
| `color` | `keyof IColors` | `'accent'` |

---

## Avatar

User avatar with image support, initials fallback, and skeleton loading state.

```tsx
import { Avatar } from 'rubber-duck-ui'

<Avatar title="João Silva" source={{ uri: 'https://...' }} size="medium_40" />
```

| Prop | Type | Default |
|---|---|---|
| `title` | `string` | — |
| `source` | `ImageSource` | — |
| `size` | `'tiny_24' \| 'small_32' \| 'medium_40' \| 'big_48' \| 'gigant_68'` | `'medium_40'` |
| `borderColor` | `keyof IColors` | — |

When no `source` is provided, renders the initials extracted from `title`. Shows a skeleton while the image loads and falls back to initials on error.

---

## CheckBox

Animated checkbox with optional labels.

```tsx
import { CheckBox } from 'rubber-duck-ui'

<CheckBox
  title="Accept terms"
  subTitle="Read our terms of service"
  isChecked={checked}
  onPress={() => setChecked(v => !v)}
/>
```

| Prop | Type | Default |
|---|---|---|
| `onPress` | `() => void` | required |
| `isChecked` | `boolean` | `false` |
| `title` | `string` | — |
| `subTitle` | `string` | — |

---

## RadioButton

Animated radio button with optional labels.

```tsx
import { RadioButton } from 'rubber-duck-ui'

<RadioButton
  title="Option A"
  isChecked={selected === 'a'}
  onPress={() => setSelected('a')}
/>
```

| Prop | Type | Default |
|---|---|---|
| `onPress` | `() => void` | — |
| `isChecked` | `boolean` | `false` |
| `title` | `string` | — |
| `subTitle` | `string` | — |

---

## SimpleText

Single-line text input with animated focus state.

```tsx
import { SimpleText } from 'rubber-duck-ui'

<SimpleText
  title="Name"
  value={name}
  onChangeValue={setName}
  placeholder="Enter your name"
  isRequired
/>
```

| Prop | Type | Default |
|---|---|---|
| `value` | `string` | required |
| `onChangeValue` | `(value: string) => void` | required |
| `title` | `string` | — |
| `placeholder` | `string` | — |
| `isRequired` | `boolean` | `false` |
| `isReadOnly` | `boolean` | `false` |
| `isDisabled` | `boolean` | `false` |

---

## MultilineText

Multi-line textarea with animated focus state.

```tsx
import { MultilineText } from 'rubber-duck-ui'

<MultilineText
  title="Description"
  value={text}
  onChangeValue={setText}
  numberOfLines={6}
/>
```

| Prop | Type | Default |
|---|---|---|
| `value` | `string` | required |
| `onChangeValue` | `(value: string) => void` | required |
| `title` | `string` | — |
| `placeholder` | `string` | — |
| `numberOfLines` | `number` | `4` |
| `isRequired` | `boolean` | `false` |
| `isReadOnly` | `boolean` | `false` |
| `isDisabled` | `boolean` | `false` |

---

## NumberField

Numeric input with optional right-side unit label.

```tsx
import { NumberField } from 'rubber-duck-ui'

<NumberField
  title="Weight"
  value={weight}
  onChangeValue={setWeight}
  rightLabel="kg"
/>
```

| Prop | Type | Default |
|---|---|---|
| `value` | `string` | required |
| `onChangeValue` | `(value: string) => void` | required |
| `title` | `string` | — |
| `placeholder` | `string` | — |
| `rightLabel` | `string` | — |
| `isRequired` | `boolean` | `false` |
| `isReadOnly` | `boolean` | `false` |
| `isDisabled` | `boolean` | `false` |

---

## MoneyField

Currency input with configurable formatting and masking.

```tsx
import { MoneyField } from 'rubber-duck-ui'

<MoneyField
  title="Price"
  value={price}
  onChangeValue={setPrice}
  currencySymbol="R$"
  decimalSeparator=","
  groupSeparator="."
  precision={2}
/>
```

| Prop | Type | Default |
|---|---|---|
| `value` | `string` | required |
| `onChangeValue` | `(value: string) => void` | required |
| `title` | `string` | — |
| `placeholder` | `string` | — |
| `currencySymbol` | `string` | — |
| `decimalSeparator` | `string` | `'.'` |
| `groupSeparator` | `string` | `','` |
| `precision` | `number` | `2` |
| `isRequired` | `boolean` | `false` |
| `isReadOnly` | `boolean` | `false` |
| `isDisabled` | `boolean` | `false` |
