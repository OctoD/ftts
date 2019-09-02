export type TypeBuilder<T> = (arg?: T) => Type<T>;
export type TypeChecker<Value> = (arg: Value) => boolean;
export type TypeDecorator = <T>(type: Type<T>) => Type<T>;

/**
 *
 *
 * @export
 * @interface Type
 * @template Value
 */
export interface Type<Value> {
  check(value: unknown): boolean;
  checker(): TypeChecker<unknown>;
  decorators(): TypeDecorator[];
  id(): string;
  name(): string;
  value(): Value;
}

const automaticCheck = () => true;

/**
 *
 *
 * @export
 * @template Value
 * @param {string} typename
 * @param {Value} typevalue
 * @param {TypeChecker<unknown>} [typechecker=automaticCheck]
 * @param {string} [id=Math.floor(Math.random() * Date.now() * 0xffffff).toString(12)]
 * @param {TypeDecorator[]} [decorators=[]]
 * @returns {Type<Value>}
 */
export function create<Value>(
  typename: string,
  typevalue: Value,
  typechecker: TypeChecker<unknown> = automaticCheck,
  id: string = Math.floor(Math.random() * Date.now() * 0xffffff).toString(12),
  decorators: TypeDecorator[] = []
): Type<Value> {
  let t = {
    checker() {
      return typechecker;
    },
    check(value: Value) {
      return typechecker(value);
    },
    decorators() {
      return decorators;
    },
    id() {
      return id;
    },
    name() {
      return typename;
    },
    value() {
      return typevalue;
    }
  };

  for (let i = 0; i < decorators.length; i++) {
    t = decorators[i](t);
  }

  throwIfUnacceptable(t.name(), t.value(), t.checker());

  return t;
}

/**
 *
 *
 * @export
 * @template T
 * @param {Type<T>} type
 * @param {Type<unknown>} equalsTo
 * @returns {equalsTo is Type<T>}
 */
export function equals<T>(
  type: Type<T>,
  equalsTo: Type<unknown>
): equalsTo is Type<T> {
  return type.name() === equalsTo.name();
}

/**
 *
 *
 * @export
 * @param {unknown} value
 * @returns {value is Type<unknown>}
 */
export function isType(value: unknown): value is Type<unknown> {
  if (typeof value !== "object") {
    return false;
  }

  if (value === null) {
    return false;
  }

  return (
    typeof (<Type<any>>value).check === "function" &&
    typeof (<Type<any>>value).checker === "function" &&
    typeof (<Type<any>>value).decorators === "function" &&
    typeof (<Type<any>>value).id === "function" &&
    typeof (<Type<any>>value).name === "function" &&
    typeof (<Type<any>>value).value === "function"
  );
}

/**
 *
 *
 * @export
 * @param {Type<any>} left
 * @param {Type<any>} right
 * @returns {left is typeof right}
 */
export function same(left: Type<any>, right: Type<any>): left is typeof right {
  return left.id() === right.id() && left.name() === right.name();
}

/**
 *
 *
 * @export
 * @template T
 * @param {Type<T>} type
 * @param {T} typevalue
 * @returns {(Type<T> | never)}
 */
export function update<T>(type: Type<T>, typevalue: T): Type<T> | never {
  const typename = type.name();
  const typechecker = type.checker();

  throwIfUnacceptable(typename, typevalue, typechecker);

  return create(
    type.name(),
    typevalue,
    type.checker(),
    type.id(),
    type.decorators()
  );
}

/**
 *
 *
 * @param {string} typename
 * @param {unknown} typevalue
 * @param {TypeChecker<unknown>} typechecker
 * @returns {(void | never)}
 */
function throwIfUnacceptable(
  typename: string,
  typevalue: unknown,
  typechecker: TypeChecker<unknown>
): void | never {
  if (typechecker(typevalue)) {
    return;
  }

  throw new TypeError(
    `Type ${typename} cannot accept a value of type ${Object.prototype.toString.call(
      typevalue
    )}`
  );
}
