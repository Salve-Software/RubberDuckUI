# Component patterns

## Before implementing a new component

Always read an existing component of the same category before writing any code. Do not guess the structure — read the actual code.

- New Atom → read another existing Atom
- New Molecule → read another existing Molecule
- Component uses Reanimated → read the `useReanimatedStyles` hook of a component that already uses it (e.g. `CheckBox`)

This ensures hooks, file structure, test patterns, and import style are consistent with the rest of the library.

## Fixed values

No hardcoded numeric values in code. Always use design system tokens:

- Spacing and sizes: `Tokens.spacer({ key: '...' })`
- Border radii: `Tokens.radii({ key: '...' })`

Component-specific layout values (e.g. a Switch track width) belong in the component's `constants/` folder — one file per constant, all exported via `index.ts`:

```
constants/
├── NAME_OF_CONSTANT.ts    ← one constant per file
└── index.ts               ← export * from each file
```

Never define layout constants directly in `styles.ts` or in the component file.

## Storybook

Every new component needs a story at `example/.rnstorybook/stories/<Category>/<Component>/`.

Minimum variants to cover:
- Default state (off / false / empty)
- Active state (on / true / filled)
- Disabled (when applicable)
- `Interactive` — with `useState` to test the real animation in Storybook
