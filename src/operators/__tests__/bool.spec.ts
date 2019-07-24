import { Bool, Undefined, Num } from "../../primitives";
import { BoolOperators } from "../Bool";

describe(`bool operators`, () => {
  it(`compares truthiness of falsiness of types`, () => {
    const is = BoolOperators.is.get();

    expect(is(Undefined(), Bool(false))).toBeTruthy();

    expect(is(Bool(true), Bool(false))).toBeFalsy();

    expect(is(Num(), Bool())).toBeFalsy();
  });
});
