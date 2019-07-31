import { Type, equals } from "./type";

export type OperatorFn<A, B> = (left: Type<A>, right: Type<B>) => any;
export type OperationDirection = "left" | "right";
export type OperationSign = string;

export interface Operator<Left = unknown, Right = unknown> {
  get(): OperatorFn<Left, Right>;
  leftType(): Type<Left>;
  name(): string;
  rightType(): Type<Right>;
  sign(): OperationSign;
}

export function apply<Left, Right>(
  operator: Operator<Left, Right>,
  left: Type<Left>,
  right: Type<Right>
) {
  throwIfUnacceptable("left", operator.leftType(), left);
  throwIfUnacceptable("right", operator.rightType(), right);

  return operator.get()(left, right);
}

const operatorsDictionary = new Map<string, Operator<any, any>>();

export function create<U, X>(
  sign: OperationSign,
  leftType: Type<U>,
  rightType: Type<X>,
  fn: OperatorFn<U, X>
): Operator<U, X> {
  return {
    get() {
      return fn;
    },
    leftType() {
      return leftType;
    },
    name() {
      return createOperatorName(sign, leftType, rightType);
    },
    rightType() {
      return rightType;
    },
    sign() {
      return sign;
    }
  };
}

export function get<T, U>(
  sign: OperationSign,
  left: Type<T>,
  right: Type<U>
): Operator<T, U> | undefined {
  return operatorsDictionary.get(createOperatorName(sign, left, right));
}

export function operate<Return>(
  left: Type<any>,
  sign: OperationSign,
  right: Type<any>
): Return | never {
  const name = createOperatorName(sign, left, right);

  if (operatorsDictionary.has(name)) {
    return (operatorsDictionary.get(name)!.get()(
      left,
      right
    ) as unknown) as Return;
  }

  throw new SyntaxError(
    `Cannot operate between ${left.name()} and ${right.name()} with sign ${sign}`
  );
}

export function override<T, U>(operator: Operator<T, U>): boolean {
  operatorsDictionary.set(operator.name(), operator);
  return true;
}

export function store<T, U>(operator: Operator<T, U>): Operator<T, U> {
  const name = operator.name();

  if (operatorsDictionary.has(name)) {
    return operator;
  }

  operatorsDictionary.set(name, operator);

  return operator;
}

function createOperatorName(
  sign: OperationSign,
  leftType: Type<any>,
  rightType: Type<any>
): string {
  const left = leftType.name();
  const right = rightType.name();
  const chunks = left > right ? [left, right] : [right, left];

  return chunks.join(sign);
}

function throwIfUnacceptable<U>(
  direction: OperationDirection,
  operatorType: Type<U>,
  type: Type<unknown>
): void | never {
  if (!equals(operatorType, type)) {
    throw new TypeError(
      `Invalid ${direction} operand, expected ${operatorType.name()}, given ${type.name()}`
    );
  }
}
