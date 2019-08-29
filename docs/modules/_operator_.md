**[ftts](../README.md)**

[Globals](../README.md) › ["operator"](_operator_.md)

# External module: "operator"

## Index

### Interfaces

* [Operator](../interfaces/_operator_.operator.md)

### Type aliases

* [OperationDirection](_operator_.md#operationdirection)
* [OperationSign](_operator_.md#operationsign)
* [OperatorFn](_operator_.md#operatorfn)

### Variables

* [operatorsDictionary](_operator_.md#const-operatorsdictionary)

### Functions

* [apply](_operator_.md#apply)
* [create](_operator_.md#create)
* [createOperatorName](_operator_.md#createoperatorname)
* [get](_operator_.md#get)
* [operate](_operator_.md#operate)
* [override](_operator_.md#override)
* [store](_operator_.md#store)
* [throwIfUnacceptable](_operator_.md#throwifunacceptable)

## Type aliases

###  OperationDirection

Ƭ **OperationDirection**: *"left" | "right"*

*Defined in [operator.ts:4](https://github.com/OctoD/ftts/blob/73fcc67/src/operator.ts#L4)*

___

###  OperationSign

Ƭ **OperationSign**: *string*

*Defined in [operator.ts:5](https://github.com/OctoD/ftts/blob/73fcc67/src/operator.ts#L5)*

___

###  OperatorFn

Ƭ **OperatorFn**: *function*

*Defined in [operator.ts:3](https://github.com/OctoD/ftts/blob/73fcc67/src/operator.ts#L3)*

#### Type declaration:

▸ (`left`: [Type](../interfaces/_type_.type.md)‹A›, `right`: [Type](../interfaces/_type_.type.md)‹B›): *any*

**Parameters:**

Name | Type |
------ | ------ |
`left` | [Type](../interfaces/_type_.type.md)‹A› |
`right` | [Type](../interfaces/_type_.type.md)‹B› |

## Variables

### `Const` operatorsDictionary

• **operatorsDictionary**: *Map‹string, [Operator](../interfaces/_operator_.operator.md)‹any, any››* =  new Map<string, Operator<any, any>>()

*Defined in [operator.ts:26](https://github.com/OctoD/ftts/blob/73fcc67/src/operator.ts#L26)*

## Functions

###  apply

▸ **apply**<**Left**, **Right**>(`operator`: [Operator](../interfaces/_operator_.operator.md)‹Left, Right›, `left`: [Type](../interfaces/_type_.type.md)‹Left›, `right`: [Type](../interfaces/_type_.type.md)‹Right›): *any*

*Defined in [operator.ts:15](https://github.com/OctoD/ftts/blob/73fcc67/src/operator.ts#L15)*

**Type parameters:**

▪ **Left**

▪ **Right**

**Parameters:**

Name | Type |
------ | ------ |
`operator` | [Operator](../interfaces/_operator_.operator.md)‹Left, Right› |
`left` | [Type](../interfaces/_type_.type.md)‹Left› |
`right` | [Type](../interfaces/_type_.type.md)‹Right› |

**Returns:** *any*

___

###  create

▸ **create**<**U**, **X**>(`sign`: [OperationSign](_operator_.md#operationsign), `leftType`: [Type](../interfaces/_type_.type.md)‹U›, `rightType`: [Type](../interfaces/_type_.type.md)‹X›, `fn`: [OperatorFn](_operator_.md#operatorfn)‹U, X›): *[Operator](../interfaces/_operator_.operator.md)‹U, X›*

*Defined in [operator.ts:28](https://github.com/OctoD/ftts/blob/73fcc67/src/operator.ts#L28)*

**Type parameters:**

▪ **U**

▪ **X**

**Parameters:**

Name | Type |
------ | ------ |
`sign` | [OperationSign](_operator_.md#operationsign) |
`leftType` | [Type](../interfaces/_type_.type.md)‹U› |
`rightType` | [Type](../interfaces/_type_.type.md)‹X› |
`fn` | [OperatorFn](_operator_.md#operatorfn)‹U, X› |

**Returns:** *[Operator](../interfaces/_operator_.operator.md)‹U, X›*

___

###  createOperatorName

▸ **createOperatorName**(`sign`: [OperationSign](_operator_.md#operationsign), `leftType`: [Type](../interfaces/_type_.type.md)‹any›, `rightType`: [Type](../interfaces/_type_.type.md)‹any›): *string*

*Defined in [operator.ts:97](https://github.com/OctoD/ftts/blob/73fcc67/src/operator.ts#L97)*

**Parameters:**

Name | Type |
------ | ------ |
`sign` | [OperationSign](_operator_.md#operationsign) |
`leftType` | [Type](../interfaces/_type_.type.md)‹any› |
`rightType` | [Type](../interfaces/_type_.type.md)‹any› |

**Returns:** *string*

___

###  get

▸ **get**<**T**, **U**>(`sign`: [OperationSign](_operator_.md#operationsign), `left`: [Type](../interfaces/_type_.type.md)‹T›, `right`: [Type](../interfaces/_type_.type.md)‹U›): *[Operator](../interfaces/_operator_.operator.md)‹T, U› | undefined*

*Defined in [operator.ts:53](https://github.com/OctoD/ftts/blob/73fcc67/src/operator.ts#L53)*

**Type parameters:**

▪ **T**

▪ **U**

**Parameters:**

Name | Type |
------ | ------ |
`sign` | [OperationSign](_operator_.md#operationsign) |
`left` | [Type](../interfaces/_type_.type.md)‹T› |
`right` | [Type](../interfaces/_type_.type.md)‹U› |

**Returns:** *[Operator](../interfaces/_operator_.operator.md)‹T, U› | undefined*

___

###  operate

▸ **operate**<**Return**>(`left`: [Type](../interfaces/_type_.type.md)‹any›, `sign`: [OperationSign](_operator_.md#operationsign), `right`: [Type](../interfaces/_type_.type.md)‹any›): *Return | never*

*Defined in [operator.ts:61](https://github.com/OctoD/ftts/blob/73fcc67/src/operator.ts#L61)*

**Type parameters:**

▪ **Return**

**Parameters:**

Name | Type |
------ | ------ |
`left` | [Type](../interfaces/_type_.type.md)‹any› |
`sign` | [OperationSign](_operator_.md#operationsign) |
`right` | [Type](../interfaces/_type_.type.md)‹any› |

**Returns:** *Return | never*

___

###  override

▸ **override**<**T**, **U**>(`operator`: [Operator](../interfaces/_operator_.operator.md)‹T, U›): *boolean*

*Defined in [operator.ts:80](https://github.com/OctoD/ftts/blob/73fcc67/src/operator.ts#L80)*

**Type parameters:**

▪ **T**

▪ **U**

**Parameters:**

Name | Type |
------ | ------ |
`operator` | [Operator](../interfaces/_operator_.operator.md)‹T, U› |

**Returns:** *boolean*

___

###  store

▸ **store**<**T**, **U**>(`operator`: [Operator](../interfaces/_operator_.operator.md)‹T, U›): *[Operator](../interfaces/_operator_.operator.md)‹T, U›*

*Defined in [operator.ts:85](https://github.com/OctoD/ftts/blob/73fcc67/src/operator.ts#L85)*

**Type parameters:**

▪ **T**

▪ **U**

**Parameters:**

Name | Type |
------ | ------ |
`operator` | [Operator](../interfaces/_operator_.operator.md)‹T, U› |

**Returns:** *[Operator](../interfaces/_operator_.operator.md)‹T, U›*

___

###  throwIfUnacceptable

▸ **throwIfUnacceptable**<**U**>(`direction`: [OperationDirection](_operator_.md#operationdirection), `operatorType`: [Type](../interfaces/_type_.type.md)‹U›, `type`: [Type](../interfaces/_type_.type.md)‹unknown›): *void | never*

*Defined in [operator.ts:109](https://github.com/OctoD/ftts/blob/73fcc67/src/operator.ts#L109)*

**Type parameters:**

▪ **U**

**Parameters:**

Name | Type |
------ | ------ |
`direction` | [OperationDirection](_operator_.md#operationdirection) |
`operatorType` | [Type](../interfaces/_type_.type.md)‹U› |
`type` | [Type](../interfaces/_type_.type.md)‹unknown› |

**Returns:** *void | never*