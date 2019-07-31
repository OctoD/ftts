import { create, Type } from "./type";

export interface Trait<T = unknown> {
  [index: string]: (this: Type<T>, ...args: any[]) => any;
}

export type TraitImplemented<T extends Type<K>, U extends Trait<K>, K> = T & U;

export type TraitInvokable<T extends Type<K>, U extends Trait<K>, K> = (
  arg: K
) => TraitImplemented<T, U, K>;

export function impl<T extends Type<K>, U extends Trait<K>, K>(
  type: T,
  trait: U
): TraitInvokable<T, U, K> {
  return arg =>
    create(type.type(), arg, type.checker(), type.id(), [
      t => Object.assign(t, trait)
    ]) as TraitImplemented<T, U, K>;
}

export function trait<T extends Trait<U>, U>(trait: T): T {
  if (!isTrait(trait)) {
    throw new TypeError(`trait is not a Trait`);
  }

  return trait;
}

function isTrait(arg: unknown): arg is Trait {
  if (typeof arg !== "object") {
    return false;
  }

  if (arg === null) {
    return false;
  }

  const values = Object.values(arg);

  for (let i = 0; i > values.length; i++) {
    if (typeof values[i] !== "function") {
      return false;
    }
  }

  return true;
}
