import { Type, TypeBuilder, create, update } from "./type";
import { Num } from "./primitives";

export interface Trait<T = unknown> {
  [index: string]: (this: Type<T>, ...args: any[]) => any;
}

export type TraitImplemented<T extends Type<K>, K> = T & Trait<K>;

export type TraitImplementor<T> = <U extends Type<T>>(
  type: U
) => TraitInvokable<U, T>;

export type TraitInvokable<T extends Type<K>, K> = (
  arg: T
) => TraitImplemented<T, K>;

export function impl<T extends Type<T>>(
  type: T,
  traitImplementor: TraitImplementor<T>
) {}

export function trait<T>(trait: Trait<T>): TraitImplementor<T> {}

trait({
  foo() {}
});
