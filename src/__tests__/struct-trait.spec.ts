import { struct, primitives, trait } from "..";
import { Num, Str } from "../primitives";

describe("interop for struct and trait", () => {
  test("", () => {
    const s = struct.create({
      prop1: primitives.str,
      prop2: primitives.num
    });

    const t = trait.create({
      repeat() {
        if (!struct.isStruct(this)) {
          throw TypeError("value must be a struct");
        }

        const value = this.value() as struct.StructDataType;

        const prop1 = value.prop1.value() as string;
        const prop2 = value.prop2.value() as number;

        return prop1.repeat(prop2);
      }
    });

    const newt = trait.impl(s, t);

    expect(newt({ prop1: Str("a"), prop2: Num(2) }).repeat()).toBe("aa");
  });
});
