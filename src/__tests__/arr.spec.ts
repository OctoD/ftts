import * as arr from "../arr";

describe(`arr`, () => {
  test("Arr", () => {
    expect(() => arr.Arr([1, "qwe", new Date()])).not.toThrowError();
  });

  test("BoolArr", () => {
    expect(() => arr.BoolArr([false, true])).not.toThrowError();
  });

  test("NumArr", () => {
    expect(() => arr.NumArr([1, 2, 3])).not.toThrowError();
  });

  test("ObjArr", () => {
    expect(() => arr.ObjArr([{}])).not.toThrowError();
  });

  test("StrArr", () => {
    expect(() => arr.StrArr(["arrrrrh"])).not.toThrowError();
  });
});
