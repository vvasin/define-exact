import {describe, expectTypeOf, it} from 'vitest';
import defineExact from '../src/index';

describe('defineExact', () => {
  it('returns exact subtype', () => {
    type Foo = {
      [key: string]: (arg: number) => string;
    };

    const exactFoo = defineExact<Foo>()({
      exactKey: arg => arg.toString(),
    });

    expectTypeOf(exactFoo).toMatchTypeOf<Foo>();
    expectTypeOf(exactFoo).toEqualTypeOf<{
      exactKey: (arg: number) => string;
    }>();

    const veryExactFoo = defineExact<typeof exactFoo>()({
      exactKey: arg => `literal ${arg}` as const,
    });

    expectTypeOf(veryExactFoo).toMatchTypeOf<Foo>();
    expectTypeOf(veryExactFoo).toEqualTypeOf<{
      exactKey: (arg: number) => `literal ${number}`;
    }>();
  });
});
