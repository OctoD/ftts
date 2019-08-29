**[ftts](../README.md)**

[Globals](../README.md) › ["type"](_type_.md)

# External module: "type"

## Index

### Interfaces

* [Type](../interfaces/_type_.type.md)

### Type aliases

* [TypeBuilder](_type_.md#typebuilder)
* [TypeChecker](_type_.md#typechecker)
* [TypeDecorator](_type_.md#typedecorator)

### Functions

* [automaticCheck](_type_.md#const-automaticcheck)
* [create](_type_.md#create)
* [equals](_type_.md#equals)
* [isType](_type_.md#istype)
* [same](_type_.md#same)
* [throwIfUnacceptable](_type_.md#throwifunacceptable)
* [update](_type_.md#update)

## Type aliases

###  TypeBuilder

Ƭ **TypeBuilder**: *function*

*Defined in [type.ts:1](https://github.com/OctoD/ftts/blob/b8036e1/src/type.ts#L1)*

#### Type declaration:

▸ (`arg?`: [T]()): *[Type](../interfaces/_type_.type.md)‹T›*

**Parameters:**

Name | Type |
------ | ------ |
`arg?` | [T]() |

___

###  TypeChecker

Ƭ **TypeChecker**: *function*

*Defined in [type.ts:2](https://github.com/OctoD/ftts/blob/b8036e1/src/type.ts#L2)*

#### Type declaration:

▸ (`arg`: Value): *boolean*

**Parameters:**

Name | Type |
------ | ------ |
`arg` | Value |

___

###  TypeDecorator

Ƭ **TypeDecorator**: *function*

*Defined in [type.ts:3](https://github.com/OctoD/ftts/blob/b8036e1/src/type.ts#L3)*

#### Type declaration:

▸ <**T**>(`type`: [Type](../interfaces/_type_.type.md)‹T›): *[Type](../interfaces/_type_.type.md)‹T›*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`type` | [Type](../interfaces/_type_.type.md)‹T› |

## Functions

### `Const` automaticCheck

▸ **automaticCheck**(): *boolean*

*Defined in [type.ts:14](https://github.com/OctoD/ftts/blob/b8036e1/src/type.ts#L14)*

**Returns:** *boolean*

___

###  create

▸ **create**<**Value**>(`typename`: string, `typevalue`: Value, `typechecker`: [TypeChecker](_type_.md#typechecker)‹unknown›, `id`: string, `decorators`: [TypeDecorator](_type_.md#typedecorator)[]): *[Type](../interfaces/_type_.type.md)‹Value›*

*Defined in [type.ts:16](https://github.com/OctoD/ftts/blob/b8036e1/src/type.ts#L16)*

**Type parameters:**

▪ **Value**

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`typename` | string | - |
`typevalue` | Value | - |
`typechecker` | [TypeChecker](_type_.md#typechecker)‹unknown› |  automaticCheck |
`id` | string |  Math.floor(Math.random() * Date.now() * 0xffffff).toString(12) |
`decorators` | [TypeDecorator](_type_.md#typedecorator)[] |  [] |

**Returns:** *[Type](../interfaces/_type_.type.md)‹Value›*

___

###  equals

▸ **equals**<**T**>(`type`: [Type](../interfaces/_type_.type.md)‹T›, `equalsTo`: [Type](../interfaces/_type_.type.md)‹unknown›): *boolean*

*Defined in [type.ts:53](https://github.com/OctoD/ftts/blob/b8036e1/src/type.ts#L53)*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`type` | [Type](../interfaces/_type_.type.md)‹T› |
`equalsTo` | [Type](../interfaces/_type_.type.md)‹unknown› |

**Returns:** *boolean*

___

###  isType

▸ **isType**(`value`: unknown): *boolean*

*Defined in [type.ts:60](https://github.com/OctoD/ftts/blob/b8036e1/src/type.ts#L60)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | unknown |

**Returns:** *boolean*

___

###  same

▸ **same**(`left`: [Type](../interfaces/_type_.type.md)‹any›, `right`: [Type](../interfaces/_type_.type.md)‹any›): *boolean*

*Defined in [type.ts:79](https://github.com/OctoD/ftts/blob/b8036e1/src/type.ts#L79)*

**Parameters:**

Name | Type |
------ | ------ |
`left` | [Type](../interfaces/_type_.type.md)‹any› |
`right` | [Type](../interfaces/_type_.type.md)‹any› |

**Returns:** *boolean*

___

###  throwIfUnacceptable

▸ **throwIfUnacceptable**(`typename`: string, `typevalue`: unknown, `typechecker`: [TypeChecker](_type_.md#typechecker)‹unknown›): *void | never*

*Defined in [type.ts:98](https://github.com/OctoD/ftts/blob/b8036e1/src/type.ts#L98)*

**Parameters:**

Name | Type |
------ | ------ |
`typename` | string |
`typevalue` | unknown |
`typechecker` | [TypeChecker](_type_.md#typechecker)‹unknown› |

**Returns:** *void | never*

___

###  update

▸ **update**<**T**>(`type`: [Type](../interfaces/_type_.type.md)‹T›, `typevalue`: T): *[Type](../interfaces/_type_.type.md)‹T› | never*

*Defined in [type.ts:83](https://github.com/OctoD/ftts/blob/b8036e1/src/type.ts#L83)*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`type` | [Type](../interfaces/_type_.type.md)‹T› |
`typevalue` | T |

**Returns:** *[Type](../interfaces/_type_.type.md)‹T› | never*