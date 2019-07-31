import { TryCatch, Ok } from "tiinvo";
import { StrArr } from "./arr";
import { Obj, Str } from "./primitives";
import * as type from "./type";

/**
 *
 *
 * @export
 * @interface StructData
 */
export interface StructDataType {
  [index: string]: type.Type<unknown>;
}

/**
 *
 *
 * @export
 * @interface Struct
 * @extends {type.Type<T>}
 * @template T
 */
export interface Struct<T extends StructDataType> extends type.Type<T> {}

/**
 *
 *
 * @export
 * @template T
 * @param {T} initialStruct
 * @returns {Struct<T>}
 */
export function create<T extends StructDataType>(initialStruct: T): Struct<T> {
  const struct = <Struct<T>>(
    type.create("struct", initialStruct, isStructLikeData)
  );

  return struct;
}

/**
 *
 *
 * @export
 * @template T
 * @template U
 * @param {Struct<T>} leftStruct
 * @param {Struct<U>} rightStruct
 * @returns {boolean}
 */
export function equalsTo<T extends StructDataType, U extends StructDataType>(
  leftStruct: Struct<T>,
  rightStruct: Struct<U>
): boolean {
  const leftvalue = leftStruct.value();
  const rightvalue = rightStruct.value();
  const leftKeys = dataKeys(leftvalue);
  const rightKeys = dataKeys(rightvalue);

  return (
    leftKeys.length === rightKeys.length &&
    compareKeys(leftvalue, rightvalue, rightKeys, 0)
  );
}

/**
 *
 *
 * @export
 * @template T
 * @param {Struct<T>} struct
 * @param {Str} key
 * @returns {boolean}
 */
export function hasKey<T extends StructDataType>(
  struct: Struct<T>,
  key: Str
): boolean {
  return key.value() in struct.value();
}

/**
 *
 *
 * @export
 * @param {unknown} maybeType
 * @returns {maybeType is StructDataType}
 */
export function isStruct(maybeType: unknown): maybeType is StructDataType {
  return type.isType(maybeType) && isStructLikeData(maybeType.value());
}

/**
 *
 *
 * @export
 * @template T
 * @param {Struct<T>} struct
 * @returns {StrArr}
 */
export function keys<T extends StructDataType>(struct: Struct<T>): StrArr {
  return StrArr(dataKeys(struct.value()));
}

/**
 *
 *
 * @export
 * @template T
 * @param {Struct<T>} struct
 * @returns {Array<type.Type<unknown>>}
 */
export function values<T extends StructDataType>(
  struct: Struct<T>
): Array<type.Type<unknown>> {
  const value = struct.value();
  return dataKeys(value).map(key => value[key]);
}

/**
 *
 *
 * @template T
 * @param {T} struct
 * @param {string[]} keys
 * @param {number} index
 * @returns {boolean}
 */
function checkKeys<T extends StructDataType>(
  struct: T,
  keys: string[],
  index: number
): boolean {
  if (index >= keys.length) {
    return true;
  }

  return type.isType(struct[keys[index]])
    ? checkKeys(struct, keys, index + 1)
    : false;
}

/**
 *
 *
 * @param {StructDataType} comparing
 * @param {StructDataType} comparingTo
 * @param {string[]} keys
 * @param {number} index
 * @returns {boolean}
 */
function compareKeys(
  comparing: StructDataType,
  comparingTo: StructDataType,
  keys: string[],
  index: number
): boolean {
  if (index >= keys.length) {
    return true;
  }

  const t = comparing[keys[index]];
  const tto = comparingTo[keys[index]];

  return t && tto && type.equals(t, tto)
    ? compareKeys(comparing, comparingTo, keys, index + 1)
    : false;
}

/**
 *
 *
 * @template T
 * @param {T} struct
 * @returns {string[]}
 */
function dataKeys<T extends StructDataType>(struct: T): string[] {
  return Object.keys(struct);
}

/**
 *
 *
 * @param {unknown} value
 * @returns {boolean}
 */
function isStructLikeData(value: unknown): boolean {
  return TryCatch(Obj, value as any).mapOrElse(
    () => false,
    (obj: Obj) => checkKeys(obj.value() as any, dataKeys(obj.value() as any), 0)
  );
}
