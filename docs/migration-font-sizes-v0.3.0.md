# Migration: Font Size Scale — v0.3.0

## O que mudou

A escala `FONT_SIZES` foi rebalanceada seguindo a regra dos múltiplos de 4/8, com `md` agora valendo **16px** (era 14px).

### Escala anterior → nova

| Key | Antes | Depois |
|-----|-------|--------|
| `xs` | 10 | 12 |
| `sm` | 12 | 14 |
| `md` | 14 | **16** |
| `lg` | 16 | 20 |
| `xl` | 20 | 24 |
| `xxl` | 24 | 32 |
| `xxxl` | 32 | 40 |
| `display` | 40 | 48 |

---

## Impacto no seu app

Se você usa o componente `<Text>` do DS **sem passar `size`**, o tamanho padrão era `md=14px` e agora passa a ser `md=16px`. Seu texto vai aparecer **maior** do que antes.

### Como corrigir

Passe `size` explicitamente onde quiser manter o visual anterior:

```tsx
// Antes — recebia 14px via default
<Text>Meu texto</Text>

// Depois — para manter 14px, passe size="sm" explicitamente
<Text size="sm">Meu texto</Text>
```

### Tabela de remapeamento

Use esta tabela para converter os valores que você já passava explicitamente:

| Você passava | Valor visual | Passe agora |
|---|---|---|
| `size="sm"` | 12px | `size="xs"` |
| `size="md"` ou nada | 14px | `size="sm"` |
| `size="lg"` | 16px | `size="md"` |
| `size="xl"` | 20px | `size="lg"` |
| `size="xxl"` | 24px | `size="xl"` |
| `size="xxxl"` | 32px | `size="xxl"` |
| `size="display"` | 40px | `size="xxxl"` |

---

## O que já foi ajustado internamente no DS

Os componentes internos do DS já foram atualizados para manter seus tamanhos visuais. Você não precisa fazer nada em relação a:

- `Button` (todas as variantes: `sm`, `md`, `lg`)
- `CheckBox`
- `RadioButton`
- `SimpleText`, `NumberField`, `MultilineText`, `MoneyField`
- `Toaster`
- `Avatar`
- `BottomListModal`

Esses componentes continuam com a mesma aparência de antes.

---

## Se você quer aproveitar a nova escala

Se preferir que seus textos cresçam proporcionalmente com a nova escala (ao invés de preservar o tamanho antigo), basta **não passar `size`** e deixar o novo default `md=16px` agir.
