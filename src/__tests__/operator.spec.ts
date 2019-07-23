import * as operators from "../operator";
import { Str, Num, Obj, Bool } from "../primitives";

describe(`operators`, () => {
  it("can create a new operator", () => {
    const op = operators.create("**", Str(), Num(), (a, b) => {
      return a.value().repeat(b.value());
    });

    expect(op.name()).toBe([Str().type(), Num().type()].join("**"));
    expect(operators.apply(op, Str("a"), Num(10))).toEqual("a".repeat(10));
  });

  it("can store an operator", () => {
    const op1 = operators.create(
      "+",
      Str(),
      Num(),
      (a, b) => a.value() + b.value()
    );

    const op2 = operators.create(
      "+",
      Num(),
      Str(),
      (a, b) => a.value() > b.value().length
    );

    expect(operators.store(op1)).toBeTruthy();
    expect(operators.store(op2)).toBeTruthy();
  });

  it("can override an existing operator", () => {
    expect(operators.get("+", Num(), Str())).toBeDefined();

    expect(
      operators.apply(operators.get("+", Str(), Num())!, Str("abc"), Num(3))
    ).toBe("abc3");

    const op = operators.create(
      "==",
      Num(),
      Str(),
      (a, b) => a.value() === b.value().length
    );

    operators.override(op);

    expect(
      operators.apply(operators.get("==", Num(), Str())!, Num(10), Str("qwe"))
    ).toBe(false);
  });

  it("will throw if an operation is unacceptable", () => {
    const op = operators.get("+", Str(), Num())!;

    expect(() =>
      operators.apply(op, Obj() as any, Bool() as any)
    ).toThrowError();
  });
});
