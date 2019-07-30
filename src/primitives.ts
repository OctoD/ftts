import { create, Type } from "./type";

export type Any<T = any> = Type<T>;
export type Bool = Type<boolean>;
export type Fn<
  T extends (...args: any[]) => any = (...args: any[]) => any
> = Type<T>;
export type Obj = Type<object>;
export type Null = Type<null>;
export type Nullable<T> = Type<T | null>;
export type Num = Type<number>;
export type Str = Type<string>;
export type Undefined = Type<undefined>;

export function Any<T = any>(value: T = null as any): Type<T> {
  return create("any", value);
}

export function Bool(value: boolean = true): Type<boolean> {
  return create("boolean", value, value => typeof value === "boolean");
}

export function Fn<Fn extends (...args: any[]) => any>(value: Fn): Type<Fn> {
  return create("function", value, value => typeof value === "function");
}

export function Obj(value: object = {}): Type<object> {
  return create(
    "object",
    value,
    value => typeof value === "object" && value !== null
  );
}

export function Null(): Type<null> {
  return create("null", null, value => value === null);
}

export function Nullable<U>(type: Type<U>): Type<U | null> {
  const name = ["null", type.type()].join(".");
  return create(
    name,
    type.value(),
    value => value === null || type.check(value)
  );
}

export function Num(value: number = 0): Type<number> {
  return create(
    "number",
    value,
    value => typeof value === "number" && !isNaN(value)
  );
}

export function Str(value: string = ""): Type<string> {
  return create("string", value, value => typeof value === "string");
}

export function Undefined(): Type<undefined> {
  return create("undefined", undefined, value => value === undefined);
}

export const any = Any();
export const bool = Bool();
export const fn = Fn(() => void 0);
export const nil = Null();
export const num = Num();
export const obj = Obj();
export const str = Str();
export const und = Undefined();
