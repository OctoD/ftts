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
  });

  test(`equalsTo`, () => {
    const s1 = struct.create({ foo: num });
    const s2 = struct.create({ foo: num });
    const s3 = struct.create({ foo: num, bar: str });

    expect(struct.equalsTo(s1, s2)).toBeTruthy();
    expect(struct.equalsTo(s1, s3)).toBeFalsy();
  });

  test("hasKey", () => {
    const s1 = struct.create({ foo: num });

    expect(struct.hasKey(s1, Str("foo"))).toBeTruthy();
    expect(struct.hasKey(s1, Str("bar"))).toBeFalsy();
  });

  test("keys", () => {
    const keys = StrArr(["foo", "bar", "baz"]);
    const s1 = struct.create({ foo: str, bar: str, baz: str });

    expect(struct.keys(s1)).toStrictEqual(keys);
  });

  test("values", () => {
    const foo = Str("hello");
    const bar = Num(10);
    const s1 = struct.create({ foo, bar });

    expect(struct.values(s1)).toStrictEqual([foo, bar]);
  });
});
