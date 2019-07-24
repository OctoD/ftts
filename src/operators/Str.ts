import { create, Operator, store } from "../operator";
import { str } from "../primitives";
import { DefaultSigns } from "./DefaultSigns";

export interface StrOperators {
  concat: Operator<string, string>;
  repeat: Operator<string, string>;
  split: Operator<string, string>;
}

export const StrOperators = <StrOperators>{};

StrOperators.concat = store(
  create(DefaultSigns.Plus, str, str, (a, b) => a.value() + b.value())
);

StrOperators.repeat = store(
  create(DefaultSigns.Pow, str, str, (a, b) => a.value() + b.value())
);

StrOperators.split = store(
  create(DefaultSigns.Divide, str, str, (a, b) => a.value().split(b.value()))
);
