import {
  Str,
  Num,
  Fn,
  Obj,
  Null,
  Undefined,
  Bool,
  Any,
  Char,
  Bit
} from "../primitives";

describe(`primitives`, () => {
  test(`Any`, () => {
    expect(Any().value()).toStrictEqual(null as any);
    expect(Any(false).value()).toStrictEqual(false);
    expect(Any("aa").value()).toEqual("aa");
    expect(Any(100).value()).toEqual(100);
  });

  test("Bit", () => {
    expect(Bit().value()).toStrictEqual(0);
    expect(Bit(1).value()).toStrictEqual(1);
    expect(() => Bit(100)).toThrowError();
    expect(() => Bit("asd" as any)).toThrowError();
  });

  test(`Char`, () => {
    expect(Char().value()).toStrictEqual(" ");
    expect(Char("a").value()).toStrictEqual("a");
    expect(() => Char("aa")).toThrowError();
    expect(() => Char(123 as any)).toThrowError();
  });

  test(`Bool`, () => {
    expect(Bool().value()).toStrictEqual(true);
    expect(Bool(false).value()).toStrictEqual(false);
    expect(() => Bool(null as any)).toThrowError();
  });

  test(`Fn`, () => {
    expect(Fn(jest.fn).value()).toStrictEqual(jest.fn);
    expect(() => Fn(null as any)).toThrowError();
  });

  test(`Obj`, () => {
    expect(Obj().value()).toStrictEqual({});
    expect(() => Obj(null as any)).toThrowError();
  });

  test(`Null`, () => {
    expect(Null().value()).toBeNull();
  });

  test(`Num`, () => {
    expect(Num().value()).toBe(0);
    expect(Num(100).value()).toBe(100);
    expect(() => Num(null as any)).toThrowError();
  });

  test(`Str`, () => {
    expect(Str().value()).toBe("");
    expect(Str("a").value()).toBe("a");
    expect(() => Str(null as any)).toThrowError();
  });

  test(`Undefined`, () => {
    expect(Undefined().value()).toBeUndefined();
  });
});
