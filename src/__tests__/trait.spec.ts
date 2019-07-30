import { trait, impl } from "../trait";
import { num, Num } from "../primitives";

describe(`trait`, () => {
  test("trait", () => {
    const t = trait({
      foo: jest.fn()
    });

    expect(t.value()).toHaveProperty("foo");
  });

  test("impl", () => {
    const t = trait({
      even() {
        return this.value() % 2 === 0;
      },
      odd() {
        return this.value() % 2 !== 0;
      }
    });
    const i = impl(Num, t);

    expect(i(10)).toHaveProperty("even");
    expect(i(20)).toHaveProperty("odd");

    expect(i(20));
  });
});
