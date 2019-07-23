export type TypeChecker<Value> = (arg: Value) => boolean;

export interface Type<Value> {
  check(value: unknown): boolean;
  checker(): TypeChecker<unknown>;
  type(): string;
  value(): Value;
}

const automaticCheck = () => true;

export function create<Value>(
  typename: string,
  typevalue: Value,
  typechecker: TypeChecker<unknown> = automaticCheck
): Type<Value> {
  throwIfUnacceptable(typename, typevalue, typechecker);

  return {
    checker() {
      return typechecker;
    },
    check(value) {
      return typechecker(value);
    },
    type() {
      return typename;
    },
    value() {
      return typevalue;
    }
  };
}

export function equals<T>(
  type: Type<T>,
  equalsTo: Type<unknown>
): equalsTo is Type<T> {
  return type.type() === equalsTo.type();
}

export function update<T>(type: Type<T>, typevalue: T): Type<T> | never {
  const typename = type.type();
  const typechecker = type.checker();

  throwIfUnacceptable(typename, typevalue, typechecker);

  return create(type.type(), typevalue, type.checker());
}

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
