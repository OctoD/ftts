import { Type, create, update, same, equals } from "./type";
import {
  Bool,
  Char,
  Obj,
  Str,
  Num,
  Any,
  Undefined,
  bool,
  obj,
  num,
  str,
  und,
  Fn,
  char,
  Bit,
  bit
} from "./primitives";

export type Arr<T extends Type<any>> = Type<T[]>;
export type CharArr = Arr<Char>;
export type BitArr = Arr<Bit>;
export type BoolArr = Arr<Bool>;
export type ObjArr = Arr<Obj>;
export type NumArr = Arr<Num>;
export type StrArr = Arr<Str>;

//#region internals

const noop = () => true;

function ensureArrayAnd(
  fn: (arg: unknown[]) => boolean = noop
): (arg: unknown) => boolean {
  return arg => Array.isArray(arg) && fn(arg);
}

function ensureAllOfType<U>(type: Type<U>): (arg: unknown[]) => boolean {
  return args => ensureOfType(type, args, 0);
}

function ensureOfType<U>(
  type: Type<U>,
  args: unknown[],
  index: number
): boolean {
  if (index >= args.length) {
    return true;
  }

  return equals(type, args[index] as any)
    ? ensureOfType(type, args, index + 1)
    : false;
}

function mapToType<T>(
  type: Type<T>
): (value: T, index: number, arr: T[]) => Type<T> {
  return value => update(type, value);
}

//#endregion

export const arr = Arr();
export const bitarr = BitArr();
export const chararr = CharArr();
export const boolarr = BoolArr();
export const objarr = ObjArr();
export const numarr = NumArr();
export const strarr = StrArr();

export function Arr(value: any[] = []): Arr<Any> {
  return create("AnyArray", value.map(mapToType(Any())), ensureArrayAnd());
}

export function BitArr(value: number[] = []): Arr<Bit> {
  return create(
    "BitArray",
    value.map(mapToType(bit)),
    ensureArrayAnd(ensureAllOfType(bit))
  );
}

export function BoolArr(value: boolean[] = []): Arr<Bool> {
  return create(
    "BoolArray",
    value.map(mapToType(bool)),
    ensureArrayAnd(ensureAllOfType(bool))
  );
}

export function CharArr(value: string[] = []): Arr<Char> {
  return create(
    "CharArray",
    value.map(mapToType(char)),
    ensureArrayAnd(ensureAllOfType(char))
  );
}

export function ObjArr(value: object[] = []): Arr<Obj> {
  return create(
    "ObjArray",
    value.map(mapToType(obj)),
    ensureArrayAnd(ensureAllOfType(obj))
  );
}

export function NumArr(value: number[] = []): Arr<Num> {
  return create(
    "NumArray",
    value.map(mapToType(num)),
    ensureArrayAnd(ensureAllOfType(num))
  );
}

export function StrArr(value: string[] = []): Arr<Str> {
  return create(
    "StrArray",
    value.map(mapToType(str)),
    ensureArrayAnd(ensureAllOfType(str))
  );
}

//#region functions

type IterableCallback<Return> = (
  value: Type<any>,
  index: Num,
  array: Arr<Type<any>>
) => Return;

export function concat<T extends Type<U>, U>(...arrs: Arr<T>[]): Arr<T> {
  let base = <any[]>[];

  arrs.forEach(arr => {
    base = base.concat(arr.value());
  });

  return update(Arr(), base);
}

export function filter<T extends Type<U>, U>(
  arr: Arr<T>,
  fn: Fn<IterableCallback<Arr<T>>>
): Arr<T> {
  const internalFn = fn.value();

  return update(arr, arr.value().filter((a, b) => internalFn(a, Num(b), arr)));
}

export function fill<T extends Type<U>, U>(
  arr: Arr<T>,
  value: Any,
  start: Num | Undefined = und,
  end: Num | Undefined = und
): Arr<T> {
  return update(
    arr,
    arr
      .value()
      .slice()
      .fill(value.value(), start.value(), end.value())
  );
}

export function find<T extends Type<U>, U>(
  arr: Arr<T>,
  fn: Fn<IterableCallback<T | Undefined>>
): T | Undefined {
  const internalFn = fn.value();
  const result = arr.value().find((a, b) => internalFn(a, Num(b), arr));

  return result ? result : und;
}

export function findIndex<T extends Type<U>, U>(
  arr: Arr<T>,
  fn: Fn<IterableCallback<Num | Undefined>>
): Num {
  const internalFn = fn.value();

  return Num(arr.value().findIndex((a, b) => internalFn(a, Num(b), arr)));
}

export function indexOf<T extends Type<U>, U, K>(
  arr: Arr<T>,
  type: Type<K>
): Num {
  const values = arr.value();

  for (let i = 0; i < values.length; i++) {
    if (same(type, values[i])) {
      return Num(i);
    }
  }

  return Num(-1);
}

export function join<T extends Type<U>, U>(
  arr: Arr<T>,
  delimiter: Str = Str(",")
): Str {
  return Str(arr.value().join(delimiter.value()));
}

export function map<T extends Type<U>, U, K extends Type<Y>, Y>(
  arr: Arr<T>,
  fn: Fn<IterableCallback<Arr<K>>>
): Arr<K> {
  const internalFn = fn.value();

  return update(arr, arr
    .value()
    .map((a, b) => internalFn(a, Num(b), arr)) as any);
}

export function pop<T extends Type<U>, U>(arr: Arr<T>): Arr<T> {
  const copy = arr.value().slice();

  copy.pop();

  return update(arr, copy);
}

export function push<T extends Type<U>, U>(arr: Arr<T>, element: T): Arr<T> {
  return update(arr, [...arr.value(), element]);
}

export function shift<T extends Type<U>, U>(arr: Arr<T>): Arr<T> {
  const copy = arr.value().slice();

  copy.shift();

  return update(arr, copy);
}

export function slice<T extends Type<U>, U>(
  arr: Arr<T>,
  start: Num | Undefined = und,
  stop: Num | Undefined = und
): Arr<T> {
  return update(arr, arr.value().slice(start.value(), stop.value()));
}

export function splice<T extends Type<U>, U>(
  arr: Arr<T>,
  start: Num = num,
  deleteCount: Num | Undefined = und,
  ...items: T[]
): Arr<T> {
  const dcount = deleteCount.value();

  if (items.length > 0 && dcount) {
    return update(
      arr,
      arr
        .value()
        .slice()
        .splice(start.value(), dcount, ...items)
    );
  }

  return update(
    arr,
    arr
      .value()
      .slice()
      .splice(start.value(), dcount)
  );
}

export function unshift<T extends Type<U>, U>(
  arr: Arr<T>,
  ...items: T[]
): Arr<T> {
  const copy = arr.value().slice();

  copy.unshift(...items);

  return update(arr, copy);
}

//#endregion
