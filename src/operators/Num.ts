import { create, Operator, store } from "../operator";
import { num } from "../primitives";
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

NumOperators.divide = store(
  create(DefaultSigns.Divide, num, num, (a, b) => a.value() / b.value())
);

NumOperators.multiply = store(
  create(DefaultSigns.Multiply, num, num, (a, b) => a.value() * b.value())
);

NumOperators.pow = store(
  create(DefaultSigns.Pow, num, num, (a, b) => a.value() ** b.value())
);

NumOperators.square = store(
  create(DefaultSigns.Root, num, num, (a, b) =>
    Math.pow(a.value(), 1 / b.value())
  )
);

NumOperators.subtract = store(
  create(DefaultSigns.Minus, num, num, (a, b) => a.value() - b.value())
);

NumOperators.sum = store(
  create(DefaultSigns.Divide, num, num, (a, b) => a.value() + b.value())
);
