import * as type from "../type";

describe(`type`, () => {
  it(`creates a new type`, () => {
    const t = type.create("foo", "bar");

    expect(t.name()).toBe("foo");
    expect(t.value()).toBe("bar");
  });

  it(`creates a new type with a type checking function`, () => {
    const t = type.create("foo", "bar", a => a === "bar");

    expect(t.check("bar")).toBeTruthy();
    expect(t.check("baz")).toBeFalsy();
  });

  it(`can update type without mutating the previous one`, () => {
    const t = type.create("bar", 123, a => typeof a === "number");

    expect(t.name()).toBe("bar");
    expect(() => type.update(t, "100" as any)).toThrowError();

    const t2 = type.update(t, 100);

    expect(t2.value()).toBe(100);
  });

  it("can check if something is Type or not", () => {
    expect(type.isType(10)).toBeFalsy();
    expect(type.isType(null)).toBeFalsy();
    expect(type.isType(type.create("foo", 123))).toBeTruthy();
  });

  it("can check if two types are the same", () => {
    const t1 = type.create("foo", 100);
    const t2 = type.create("bar", 100);
    const t3 = type.create("bar", "hello");
    const t4 = type.create("bar", 100);

    expect(type.same(t1, t2)).toBeFalsy();
    expect(type.same(t2, t3)).toBeFalsy();
    expect(type.same(t3, t4)).toBeFalsy();
    expect(type.same(t2, t4)).toBeFalsy();
    expect(type.same(t2, t2)).toBeTruthy();
    expect(type.same(t4, t4)).toBeTruthy();
  });

  it("can compare equality between two types", () => {
    const t = type.create("t1", 1);
    const v = type.create("t2", 1);

    expect(type.equals(t, v)).toBeFalsy();
  });
});
