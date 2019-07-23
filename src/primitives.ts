import { create, Type } from "./type";

export function Any<T = null>(value: T = null as any): Type<T> {
  return create("any", value);
}

export function Bool(value: boolean = true): Type<boolean> {
  return create("boolean", value, value => value === true || value === false);
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
