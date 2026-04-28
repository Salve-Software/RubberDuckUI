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

---

## BottomModal

Generic imperative bottom sheet organism backed by `@gorhom/bottom-sheet`. Renders any JSX as content. Controlled via the static `BottomModalApi` class.

Mount `<RubberDuckUIProvider>` once at the app root (it mounts `BottomModal` internally). Then trigger it from anywhere:

```tsx
import { BottomModalApi } from 'rubber-duck-ui'

BottomModalApi.open({
  content: <MyCustomForm />,
})

BottomModalApi.dismiss()
```

The consumer owns the inner content and is responsible for the wrapper type:
- Static, short content → wrap in `BottomSheetView` from `@gorhom/bottom-sheet`.
- Scrollable content → use `BottomSheetFlatList` / `BottomSheetScrollView` directly. Do **not** wrap a scrollable in `BottomSheetView` — `enableDynamicSizing` will fail to measure it.

### BottomModalApi methods

| Method | Signature | Description |
|---|---|---|
| `open` | `(props: IBottomModalRefProps) => void` | Opens the sheet with the given content |
| `dismiss` | `() => void` | Dismisses the sheet |

### IBottomModalRefProps

| Prop | Type | Default | Description |
|---|---|---|---|
| `content` | `ReactNode` | required | JSX to render inside the sheet |

---

## BottomListModal

Imperative list-style bottom sheet — title sticky on top, virtualized item list below. Built on top of `BottomModal`. Controlled via the static `BottomListModalApi` class.

```tsx
import { BottomListModalApi } from 'rubber-duck-ui'

BottomListModalApi.open({
  title: 'Options',
  items: [
    { id: '1', type: 'icon', title: 'Edit', iconName: 'Pencil', onPress: () => {} },
    { id: '2', type: 'icon', title: 'Delete', iconName: 'Trash2', isDanger: true, onPress: () => {} },
  ],
})

BottomListModalApi.dismiss()
```

### BottomListModalApi methods

| Method | Signature | Description |
|---|---|---|
| `open` | `(props: IBottomListModalRefProps) => void` | Opens the list sheet with the given props |
| `dismiss` | `() => void` | Dismisses the sheet |

### IBottomListModalRefProps

| Prop | Type | Default | Description |
|---|---|---|---|
| `title` | `string` | required | Header title (sticky on top) |
| `items` | `IModalListItem[]` | required | List of items to render |

### IModalListItem

| Prop | Type | Required | Description |
|---|---|---|---|
| `id` | `string` | ✓ | Unique key |
| `type` | `'checkbox' \| 'radio' \| 'avatar' \| 'icon'` | ✓ | Row renderer variant |
| `title` | `string` | ✓ | Primary label |
| `subTitle` | `string` | — | Secondary label |
| `onPress` | `() => void` | ✓ | Action fired on press |
| `isChecked` | `boolean` | — | Checked state (`checkbox` / `radio`) |
| `isDanger` | `boolean` | — | Renders title and icon in `error` color (`icon` type) |
| `keepOpen` | `boolean` | — | If `true`, fires `onPress` immediately without dismissing the sheet |
| `iconName` | `IconName` | — | Lucide icon name (required when `type === 'icon'`) |
| `avatarSource` | `ImageSourcePropType` | — | Image source (used when `type === 'avatar'`) |

### Item types

**`icon`** — row with a Lucide icon and a text label. Set `isDanger: true` for destructive actions.

```tsx
{ id: '1', type: 'icon', title: 'Delete', iconName: 'Trash2', isDanger: true, onPress: () => {} }
```

**`checkbox`** — uses the DS `CheckBox` molecule. Use `keepOpen: true` to let the user toggle multiple items before dismissing.

```tsx
{ id: '1', type: 'checkbox', title: 'Active', isChecked: true, onPress: () => {}, keepOpen: true }
```

**`radio`** — uses the DS `RadioButton` molecule. Supports `subTitle` for secondary context.

```tsx
{ id: '1', type: 'radio', title: 'Newest first', subTitle: 'Sort by date', isChecked: true, onPress: () => {} }
```

**`avatar`** — row with a `Avatar` molecule, title and optional subtitle. Falls back to initials when `avatarSource` is not provided.

```tsx
{ id: '1', type: 'avatar', title: 'Ana Lima', subTitle: 'Designer', avatarSource: { uri: '...' }, onPress: () => {} }
```
