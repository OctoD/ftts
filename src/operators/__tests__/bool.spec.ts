import { Bool, Undefined, Num } from "../../primitives";
import { BoolOperators } from "../Bool";

describe(`bool operators`, () => {
  it(`compares truthiness of falsiness of types`, () => {
    expect(BoolOperators.is(Undefined(), Bool(false))).toBeTruthy();
    expect(BoolOperators.is(Bool(true), Bool(false))).toBeFalsy();
    expect(BoolOperators.is(Num(), Bool())).toBeFalsy();
  });
});
