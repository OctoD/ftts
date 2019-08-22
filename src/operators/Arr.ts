import { create, store } from "../operator";
import { Type } from "../type";
import { DefaultSigns } from "./DefaultSigns";
import * as arr from "../arr";
import { any } from "../primitives";

export interface ArrOperators {
  and<T extends Type<U>, U>(arr: arr.Arr<T>, arr2: arr.Arr<T>): arr.Arr<T>;
  append<T extends Type<U>, U>(arr: arr.Arr<T>, item: T): arr.Arr<T>;
  or<T extends Type<U>, U>(arr: arr.Arr<T>, arr2: arr.Arr<T>): arr.Arr<T>;
}

export const ArrOperators = <ArrOperators>{};

ArrOperators.and = store(
  create(DefaultSigns.And, arr.arr, arr.arr, (a, b) =>
    a.value().length ? b : a
  )
).get();

ArrOperators.append = store(
  create(DefaultSigns.AssignIncrease, arr.arr, any, (a, b) => arr.push(a, b))
).get();

ArrOperators.or = store(
  create(DefaultSigns.Or, arr.arr, arr.arr, (a, b) =>
    a.value().length ? a : b
  )
).get();
