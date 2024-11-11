/**
 * Defines an exact subtype of the specified type `T`, preserving specific
 * property keys and literal types.
 *
 * This utility function helps in creating objects with exact types, allowing
 * TypeScript to infer function argument types without explicit annotations.
 * It's particularly useful when you want the compiler to retain the most
 * specific type information possible.
 *
 * @template T - The base type from which the exact subtype is derived.
 * @returns A function that takes a value of a type extending the given type `T`
 * and returns it.
 *
 * @example
 * // A base type
 * type Foo = {
 *   [key: string]: (arg: number) => string;
 * };
 *
 * // typeof exactFoo: {exactKey: (arg: number) => string}
 * const exactFoo = defineExact<Foo>()({
 *   exactKey: arg => arg.toString(),
 * });
 *
 * // typeof veryExactFoo: {exactKey: (arg: number) => `literal ${number}`}
 * const veryExactFoo = defineExact<typeof exactFoo>()({
 *   exactKey: arg => `literal ${arg}` as const,
 * });
 *
 * // A possible way to "unexact"
 * const foo: Foo = veryExactFoo;
 */
export default function defineExact<T>() {
  return <R extends T>(value: R) => value;
}
