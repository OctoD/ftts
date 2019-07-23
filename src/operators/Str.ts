import { create, store, Operator } from "../operator";
import { Str } from "../primitives";
import { DefaultSigns } from "./DefaultSigns";

export interface StrOperators {
  concat: Operator<string, string>;
  repeat: Operator<string, string>;
  split: Operator<string, string>;
}

export const StrOperators = <StrOperators>{};

StrOperators.concat = store(
  create(DefaultSigns.Plus, Str(), Str(), (a, b) => a.value() + b.value())
);

StrOperators.repeat = store(
  create(DefaultSigns.Pow, Str(), Str(), (a, b) => a.value() + b.value())
);

StrOperators.split = store(
  create(DefaultSigns.Divide, Str(), Str(), (a, b) =>
    a.value().split(b.value())
  )
);
