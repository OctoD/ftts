import { create as tcreate, Type } from "./type";

/**
 *
 *
 * @export
 * @interface Trait
 * @template T
 */
export interface Trait<T = unknown> {
  [index: string]: (this: Type<T> & Trait, ...args: any[]) => any;
}

export type TraitInvokable<T extends Type<K>, U extends Trait<K>, K> = (
  arg: K
) => T & U;

/**
 *
 *
 * @export
 * @template T
 * @template U
 * @param {T} trait
 * @returns {T}
 */
export function create<T extends Trait<U>, U>(trait: T): T {
  if (!isTrait(trait)) {
    throw new TypeError(`trait is not a Trait`);
  }

  return trait;
}

/**
 *
 *
 * @export
 * @template T
 * @template U
 * @param {Type<T>} type
 * @param {U} trait
 * @returns {TraitInvokable<typeof type, U, T>}
 */
export function impl<T, U extends Trait<T>>(
  type: Type<T>,
  trait: U
): TraitInvokable<typeof type, U, T> {
  return arg =>
    tcreate(type.name(), arg, type.checker(), type.id(), [
      t => Object.assign(t, trait)
    ]) as typeof type & U;
}

/**
 *
 *
 * @export
 * @param {unknown} arg
 * @returns {arg is Trait}
 */
export function isTrait(arg: unknown): arg is Trait {
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
