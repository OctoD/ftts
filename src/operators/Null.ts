import { Option } from "tiinvo";
import { create, Operator, store } from "../operator";
import { any, nil, Nullable } from "../primitives";
import { DefaultSigns } from "./DefaultSigns";

interface NullOperators {
  coalesce: Operator<any, null>;
  toNullable: Operator<any, null>;
}

export const NullOperators = <NullOperators>{};

NullOperators.coalesce = store(
  create(DefaultSigns.DoubleQuestionMark, any, nil, (a, b) => {
    return Option(a.value()).mapOrElse(() => b.value(), () => a.value());
  })
);

NullOperators.toNullable = store(
  create(DefaultSigns.QuestionMark, any, nil, a => {
    return Nullable(a);
  })
);
