import { Null, Num } from "../../primitives";
import { NullOperators } from "../Null";

describe(`Null operators`, () => {
  test(`coalesce`, () => {
    expect(NullOperators.coalesce.get()(Null(), Num(10))).toStrictEqual(10);

    expect(NullOperators.coalesce.get()(Num(10), Num(20))).toStrictEqual(10);
  });

  test("toNullable", () => {
    expect(
      (NullOperators.toNullable.get()(Num(10), Null()) as any).value()
    ).toStrictEqual(10);
  });
});
