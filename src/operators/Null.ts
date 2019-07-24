import { DefaultSigns } from "./DefaultSigns";
import { create, store, Operator } from "../operator";
import { Null, Any, Nullable } from "../primitives";
import { Option } from "tiinvo";

interface NullOperators {
  coalesce: Operator<any, null>;
  toNullable: Operator<any, null>;
}

export const NullOperators = <NullOperators>{};

NullOperators.coalesce = store(
  create(DefaultSigns.DoubleQuestionMark, Any<any>(), Null(), (a, b) => {
    return Option(a.value()).mapOrElse(() => b.value(), () => a.value());
  })
);

NullOperators.toNullable = store(
  create(DefaultSigns.QuestionMark, Any<any>(), Null(), a => {
    return Nullable(a);
  })
);
