import * as int from "../int";

describe("numerics", () => {
  describe("signed", () => {
    test("int8", () => {
      expect(int.int8.signed()).toBeTruthy();
      expect(() => int.Int8(int.INT8_MIN)).not.toThrowError();
      expect(() => int.Int8(int.INT8_MAX)).not.toThrowError();
      expect(() => int.Int8(int.INT8_MIN - 1)).toThrowError();
      expect(() => int.Int8(int.INT8_MAX + 1)).toThrowError();
    });

    test("int16", () => {
      expect(int.int16.signed()).toBeTruthy();
      expect(() => int.Int16(int.INT16_MIN)).not.toThrowError();
      expect(() => int.Int16(int.INT16_MAX)).not.toThrowError();
      expect(() => int.Int16(int.INT16_MIN - 1)).toThrowError();
      expect(() => int.Int16(int.INT16_MAX + 1)).toThrowError();
    });

    test("int32", () => {
      expect(int.int32.signed()).toBeTruthy();
      expect(() => int.Int32(int.INT32_MIN)).not.toThrowError();
      expect(() => int.Int32(int.INT32_MAX)).not.toThrowError();
      expect(() => int.Int32(int.INT32_MIN - 1)).toThrowError();
      expect(() => int.Int32(int.INT32_MAX + 1)).toThrowError();
    });
  });

  describe("unsigned", () => {
    test("uint8", () => {
      expect(int.uint8.signed()).toBeFalsy();
      expect(() => int.Uint8(int.UINT8_MIN)).not.toThrowError();
      expect(() => int.Uint8(int.UINT8_MAX)).not.toThrowError();
      expect(() => int.Uint8(int.UINT8_MIN - 1)).toThrowError();
      expect(() => int.Uint8(int.UINT8_MAX + 1)).toThrowError();
    });

    test("uint16", () => {
      expect(int.uint16.signed()).toBeFalsy();
      expect(() => int.Uint16(int.UINT16_MIN)).not.toThrowError();
      expect(() => int.Uint16(int.UINT16_MAX)).not.toThrowError();
      expect(() => int.Uint16(int.UINT16_MIN - 1)).toThrowError();
      expect(() => int.Uint16(int.UINT16_MAX + 1)).toThrowError();
    });

    test("uint32", () => {
      expect(int.uint32.signed()).toBeFalsy();
      expect(() => int.Uint32(int.UINT32_MIN)).not.toThrowError();
      expect(() => int.Uint32(int.UINT32_MAX)).not.toThrowError();
      expect(() => int.Uint32(int.UINT32_MIN - 1)).toThrowError();
      expect(() => int.Uint32(int.UINT32_MAX + 1)).toThrowError();
    });
  });
});
