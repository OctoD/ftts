import { num } from "./primitives";
import { impl, trait } from "./trait";

export const INT8_MIN = -128;
export const INT8_MAX = 127;
export const INT16_MIN = -32_768;
export const INT16_MAX = 32_767;
export const INT32_MIN = -2_147_483_648;
export const INT32_MAX = 2_147_483_647;

export const UINT8_MIN = 0;
export const UINT8_MAX = 256;
export const UINT16_MIN = 0;
export const UINT16_MAX = 65_535;
export const UINT32_MIN = 0;
export const UINT32_MAX = 4_294_967_295;

function createIntValidator(min: number, max: number, signed: boolean) {
  function checker(value: unknown): boolean {
    if (typeof value !== "number") {
      return false;
    }

    if (value - Math.floor(value) > 0) {
      return false;
    }

    return value >= min && value <= max;
  }

  return trait({
    check(value: unknown) {
      return checker(value);
    },
    checker() {
      return checker;
    },
    signed(): boolean {
      return signed;
    }
  });
}

export const int8Trait = trait(createIntValidator(INT8_MIN, INT8_MAX, true));
export const int16Trait = trait(createIntValidator(INT16_MIN, INT16_MAX, true));
export const int32Trait = trait(createIntValidator(INT32_MIN, INT32_MAX, true));
export const uint8Trait = trait(
  createIntValidator(UINT8_MIN, UINT8_MAX, false)
);
export const uint16Trait = trait(
  createIntValidator(UINT16_MIN, UINT16_MAX, false)
);
export const uint32Trait = trait(
  createIntValidator(UINT32_MIN, UINT32_MAX, false)
);

export const Int8 = impl(num, int8Trait);
export const Int16 = impl(num, int16Trait);
export const Int32 = impl(num, int32Trait);

export const Uint8 = impl(num, uint8Trait);
export const Uint16 = impl(num, uint16Trait);
export const Uint32 = impl(num, uint32Trait);

export const int8 = Int8(0);
export const int16 = Int16(0);
export const int32 = Int32(0);

export const uint8 = Uint8(0);
export const uint16 = Uint16(0);
export const uint32 = Uint32(0);
