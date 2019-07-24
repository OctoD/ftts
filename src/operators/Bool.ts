import { create, store } from "../operator";
import { any, bool, Bool } from "../primitives";
import { Type } from "../type";
import { DefaultSigns } from "./DefaultSigns";

export interface BoolOperators {
  is(a: Type<any>, b: Bool): boolean;
}

export const BoolOperators = <BoolOperators>{};

BoolOperators.is = store(
  create(DefaultSigns.Equals, any, bool, (a, b) => !!a.value() === b.value())
).get();
