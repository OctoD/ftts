import { create, impl } from "../trait";
import { num, Num } from "../primitives";

describe(`trait`, () => {
  test("trait", () => {
    const t = create({
      foo: jest.fn()
    });

    t.foo();

    expect(t).toHaveProperty("foo");
    expect(t.foo).toHaveBeenCalled();
  });

  test("impl", () => {
    const t = create({
      even() {
        return Num(this.value() as number).value() % 2 === 0;
      },
      odd() {
        return Num(this.value() as number).value() % 2 !== 0;
      }
    });
    const i = impl(num, t);

    expect(i(10)).toHaveProperty("even");
    expect(i(20)).toHaveProperty("odd");

    expect(i(20));
  });
});
