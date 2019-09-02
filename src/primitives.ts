import { create, Type } from "./type";

export type Any<T = any> = Type<T>;
export type Bool = Type<boolean>;
export type Bit = Type<number>;
export type Char = Type<string>;
export type Fn<
  T extends (...args: any[]) => any = (...args: any[]) => any
> = Type<T>;
export type Obj = Type<object>;
export type Null = Type<null>;
export type Nullable<T> = Type<T | null>;
export type Num = Type<number>;
export type Str = Type<string>;
export type Undefined = Type<undefined>;

/**
 *
 *
 * @export
 * @template T
 * @param {T} [value=null as any]
 * @returns {Type<T>}
 */
export function Any<T = any>(value: T = null as any): Type<T> {
  return create("any", value);
}

/**
 *
 *
 * @export
 * @param {boolean} [value=true]
 * @returns {Type<boolean>}
 */
export function Bool(value: boolean = true): Type<boolean> {
  return create("boolean", value, value => typeof value === "boolean");
}

/**
 *
 *
 * @export
 * @param {number} [value=0]
 * @returns {Type<number>}
 */
export function Bit(value: number = 0): Type<number> {
  return create(
    "bit",
    value,
    value => typeof value === "number" && (value === 0 || value === 1)
  );
}

/**
 *
 *
 * @export
 * @param {string} [value=" "]
 * @returns {Type<string>}
 */
export function Char(value: string = " "): Type<string> {
  return create(
    "char",
    value,
    value => typeof value === "string" && value.length === 1
  );
}

/**
 *
 *
 * @export
 * @template Fn
 * @param {Fn} value
 * @returns {Type<Fn>}
 */
export function Fn<Fn extends (...args: any[]) => any>(value: Fn): Type<Fn> {
  return create("function", value, value => typeof value === "function");
}

/**
 *
 *
 * @export
 * @param {object} [value={}]
 * @returns {Type<object>}
 */
export function Obj(value: object = {}): Type<object> {
  return create(
    "object",
    value,
    value => typeof value === "object" && value !== null
  );
}

/**
 *
 *
 * @export
 * @returns {Type<null>}
 */
export function Null(): Type<null> {
  return create("null", null, value => value === null);
}

/**
 *
 *
 * @export
 * @template U
 * @param {Type<U>} type
 * @returns {(Type<U | null>)}
 */
export function Nullable<U>(type: Type<U>): Type<U | null> {
  const name = ["null", type.name()].join(".");
  return create(
    name,
    type.value(),
    value => value === null || type.check(value)
  );
}

/**
 *
 *
 * @export
 * @param {number} [value=0]
 * @returns {Type<number>}
 */
export function Num(value: number = 0): Type<number> {
  return create(
    "number",
    value,
    value => typeof value === "number" && !isNaN(value)
  );
}

/**
 *
 *
 * @export
 * @param {string} [value=""]
 * @returns {Type<string>}
 */
export function Str(value: string = ""): Type<string> {
  return create("string", value, value => typeof value === "string");
}

/**
 *
 *
 * @export
 * @returns {Type<undefined>}
 */
export function Undefined(): Type<undefined> {
  return create("undefined", undefined, value => value === undefined);
}

export const any = Any();
export const bool = Bool();
export const bit = Bit();
export const char = Char();
export const fn = Fn(() => void 0);
export const nil = Null();
export const num = Num();
export const obj = Obj();
export const str = Str();
export const und = Undefined();
