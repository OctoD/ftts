import { num, str, Str, Num } from "../primitives";
import * as struct from "../struct";
import { StrArr } from "../arr";

describe(`Struct`, () => {
  test("create", () => {
    expect(() =>
      struct.create({
        a: str,
        b: num
      })
    ).not.toThrowError();

    expect(() => struct.create(100 as any)).toThrowError();
  });

  test(`equalsTo`, () => {
    const s1 = struct.create({ foo: num });
    const s2 = struct.create({ foo: num });
    const s3 = struct.create({ foo: num, bar: str });
    const s4 = struct.create({ foo: num, bar: num });

    expect(struct.equalsTo(s1, s2)).toBeTruthy();
    expect(struct.equalsTo(s1, s3)).toBeFalsy();
    expect(struct.equalsTo(s3, s4)).toBeFalsy();
  });

  test("hasKey", () => {
    const s1 = struct.create({ foo: num });

    expect(struct.hasKey(s1, Str("foo"))).toBeTruthy();
    expect(struct.hasKey(s1, Str("bar"))).toBeFalsy();
  });

  test("keys", () => {
    const keys = StrArr(["foo", "bar", "baz"]);
    const s1 = struct.create({ foo: str, bar: str, baz: str });

    expect(
      struct
        .keys(s1)
        .value()
        .map(a => a.value())
    ).toStrictEqual(keys.value().map(a => a.value()));
  });

  test("values", () => {
    const foo = Str("hello");
    const bar = Num(10);
    const s1 = struct.create({ foo, bar });

    expect(struct.values(s1)).toStrictEqual([foo, bar]);
  });
});
