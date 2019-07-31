export type TypeBuilder<T> = (arg?: T) => Type<T>;
export type TypeChecker<Value> = (arg: Value) => boolean;
export type TypeDecorator = <T>(type: Type<T>) => Type<T>;

export interface Type<Value> {
  check(value: unknown): boolean;
  checker(): TypeChecker<unknown>;
  decorators(): TypeDecorator[];
  id(): string;
  type(): string;
  value(): Value;
}

const automaticCheck = () => true;

export function create<Value>(
  typename: string,
  typevalue: Value,
  typechecker: TypeChecker<unknown> = automaticCheck,
  id: string = Math.floor(Math.random() * Date.now() * 0xffffff).toString(12),
  decorators: TypeDecorator[] = []
): Type<Value> {
  throwIfUnacceptable(typename, typevalue, typechecker);

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
    type() {
      return typename;
    },
    value() {
      return typevalue;
    }
  };

  for (let i = 0; i < decorators.length; i++) {
    t = decorators[i](t);
  }

  return t;
}

export function equals<T>(
  type: Type<T>,
  equalsTo: Type<unknown>
): equalsTo is Type<T> {
  return type.type() === equalsTo.type();
}

export function isType(value: unknown): value is Type<unknown> {
  if (typeof value !== "object") {
    return false;
  }

  if (value === null) {
    return false;
  }

  return (
    typeof (<any>value)["check"] === "function" &&
    typeof (<any>value)["checker"] === "function" &&
    typeof (<any>value)["id"] === "function" &&
    typeof (<any>value)["type"] === "function" &&
    typeof (<any>value)["value"] === "function"
  );
}

export function same(left: Type<any>, right: Type<any>): left is typeof right {
  return left.id() === right.id() && left.type() === right.type();
}

export function update<T>(type: Type<T>, typevalue: T): Type<T> | never {
  const typename = type.type();
  const typechecker = type.checker();

  throwIfUnacceptable(typename, typevalue, typechecker);

  return create(
    type.type(),
    typevalue,
    type.checker(),
    type.id(),
    type.decorators()
  );
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
