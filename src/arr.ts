import { Type, create, update, same } from "./type";
import {
  Bool,
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
  Fn
} from "./primitives";

export type Arr<T extends Type<any>> = Type<T[]>;

//#region internals

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

function mapToType<T>(
  type: Type<T>
): (value: T, index: number, arr: T[]) => Type<T> {
  return value => update(type, value);
}

//#endregion

export function Arr(value: any[] = []): Arr<Any> {
  return create("AnyArray", value.map(mapToType(Any())), ensureArrayAnd());
}

export function BoolArr(value: boolean[] = []): Arr<Bool> {
  return create(
    "BoolArray",
    value.map(mapToType(bool)),
    ensureArrayAnd(ensureAllOfType(bool))
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
