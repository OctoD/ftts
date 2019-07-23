import * as type from "../type";

describe(`type`, () => {
  it(`creates a new type`, () => {
    const t = type.create("foo", "bar");

    expect(t.type()).toBe("foo");
    expect(t.value()).toBe("bar");
  });

  it(`creates a new type with a type checking function`, () => {
    const t = type.create("foo", "bar", a => a === "bar");

    expect(t.check("bar")).toBeTruthy();
    expect(t.check("baz")).toBeFalsy();
  });

  it(`can update type without mutating the previous one`, () => {
    const t = type.create("bar", 123, a => typeof a === "number");

    expect(t.type()).toBe("bar");
    expect(() => type.update(t, "100" as any)).toThrowError();

    const t2 = type.update(t, 100);

    expect(t2.value()).toBe(100);
  });

  it("can compare equality between two types", () => {
    const t = type.create("t1", 1);
    const v = type.create("t2", 1);

    expect(type.equals(t, v)).toBeFalsy();
  });
});
