import { create, store } from "../operator";
import { any } from "../primitives";
import { Type } from "../type";
import { equalsTo } from "../struct";
import { DefaultSigns } from "./DefaultSigns";

export interface StructOperators {
  is(a: Type<any>, b: Type<any>): boolean;
  isNot(a: Type<any>, b: Type<any>): boolean;
}

export const StructOperators = <StructOperators>{};

StructOperators.is = store(
  create(DefaultSigns.Equals, any, any, (a, b) => equalsTo(a, b))
).get();

StructOperators.isNot = store(
  create(DefaultSigns.NotEqual, any, any, (a, b) => !equalsTo(a, b))
).get();
