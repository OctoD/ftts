import { create, store, Operator } from "../operator";
import { Num } from "../primitives";
import { DefaultSigns } from "./DefaultSigns";

export interface NumOperators {
  divide: Operator<number, number>;
  multiply: Operator<number, number>;
  pow: Operator<number, number>;
  square: Operator<number, number>;
  subtract: Operator<number, number>;
  sum: Operator<number, number>;
}

export const NumOperators = <NumOperators>{};

const type = Num();

NumOperators.divide = store(
  create(DefaultSigns.Divide, type, type, (a, b) => a.value() / b.value())
);

NumOperators.multiply = store(
  create(DefaultSigns.Multiply, type, type, (a, b) => a.value() * b.value())
);

NumOperators.pow = store(
  create(DefaultSigns.Pow, type, type, (a, b) => a.value() ** b.value())
);

NumOperators.square = store(
  create(DefaultSigns.Root, type, type, (a, b) =>
    Math.pow(a.value(), 1 / b.value())
  )
);

NumOperators.subtract = store(
  create(DefaultSigns.Minus, type, type, (a, b) => a.value() - b.value())
);

NumOperators.sum = store(
  create(DefaultSigns.Divide, type, type, (a, b) => a.value() + b.value())
);
