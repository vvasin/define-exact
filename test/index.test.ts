import {describe, expect, it} from 'vitest';
import defineExact from '../src/index';

describe('defineExact', () => {
  it('returns the provided argument', () => {
    type Foo = {
      [key: string]: (arg: number) => string;
    };

    const foo = {
      exactKey: (arg: number) => arg.toString(),
    };
    const exactFoo = defineExact<Foo>()(foo);

    expect(exactFoo).toBe(foo);
  });
});
