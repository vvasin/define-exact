# define-exact

![npm](https://img.shields.io/npm/v/define-exact)

A TypeScript utility function for defining exact subtypes of the specified type, preserving specific property keys and literal types.

## Installation

```bash
npm install define-exact
```

## Usage

The `defineExact` function helps in creating objects with exact types, allowing TypeScript to infer function argument types without explicit annotations.
It's particularly useful when you want the compiler to retain the most specific type information possible.

```typescript
import defineExact from 'define-exact';

// A base type
type Foo = {
  [key: string]: (arg: number) => string;
};

// typeof exactFoo: {exactKey: (arg: number) => string}
const exactFoo = defineExact<Foo>()({
  exactKey: arg => arg.toString(),
});

// typeof veryExactFoo: {exactKey: (arg: number) => `literal ${number}`}
const veryExactFoo = defineExact<typeof exactFoo>()({
  exactKey: arg => `literal ${arg}` as const,
});

// A possible way to "unexact"
const foo: Foo = veryExactFoo;
```
