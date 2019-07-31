import { create, store } from "../operator";
import { any } from "../primitives";
import { Type, equals } from "../type";
import { DefaultSigns } from "./DefaultSigns";

export interface TypeOperators {
  is(a: Type<any>, b: Type<any>): boolean;
  isNot(a: Type<any>, b: Type<any>): boolean;
}

export const TypeOperators = <TypeOperators>{};

TypeOperators.is = store(
  create(DefaultSigns.Equals, any, any, (a, b) => equals(a, b))
).get();

TypeOperators.isNot = store(
  create(DefaultSigns.NotEqual, any, any, (a, b) => !equals(a, b))
).get();
