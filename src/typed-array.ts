import { Type, create, update } from "./type";
import { Bool, Obj, Str, Num, Any } from "./primitives";

const noop = () => true;

function ensureArrayAnd(
  fn: (arg: unknown[]) => boolean = noop
): (arg: unknown) => boolean {
  return arg => Array.isArray(arg) && fn(arg);
}

function ensureAllOfType<U>(type: Type<U>): (arg: unknown[]) => boolean {
  const check = (
    args: unknown[],
    index: number,
    inferred: Type<U>
  ): boolean => {
    return inferred.check(args[index])
      ? check(args, index + 1, inferred)
      : false;
  };

  return args => check(args, 0, type);
}

function map<T>(type: Type<T>): (value: T, index: number, arr: T[]) => Type<T> {
  return value => update(type, value);
}

const bool = Bool();
const obj = Obj();
const num = Num();
const str = Str();

export function Arr(value: any[] = []): Type<Any[]> {
  return create("AnyArray", value, ensureArrayAnd());
}

export function BoolArr(value: boolean[] = []): Type<Bool[]> {
  return create(
    "BoolArray",
    value.map(map(bool)),
    ensureArrayAnd(ensureAllOfType(bool))
  );
}

export function ObjArr(value: object[] = []): Type<Obj[]> {
  return create(
    "ObjArray",
    value.map(map(obj)),
    ensureArrayAnd(ensureAllOfType(obj))
  );
}

export function NumArr(value: number[] = []): Type<Num[]> {
  return create(
    "NumArray",
    value.map(map(num)),
    ensureArrayAnd(ensureAllOfType(num))
  );
}

export function StrArr(value: string[] = []): Type<Str[]> {
  return create(
    "StrArray",
    value.map(map(str)),
    ensureArrayAnd(ensureAllOfType(str))
  );
}
