import { DefaultSigns } from "./DefaultSigns";
import { create, store, Operator } from "../operator";
import { bool, any } from "../primitives";

export interface BoolOperators {
  is: Operator<any, boolean>;
}

export const BoolOperators = <BoolOperators>{};

BoolOperators.is = store(
  create(DefaultSigns.Equals, any, bool, (a, b) => !!a.value() === b.value())
);
