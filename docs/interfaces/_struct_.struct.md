**[ftts](../README.md)**

[Globals](../README.md) › ["struct"](../modules/_struct_.md) › [Struct](_struct_.struct.md)

# Interface: Struct <**T**>

**`export`** 

**`interface`** Struct

**`extends`** {type.Type<T>}

**`template`** T

## Type parameters

▪ **T**: *[StructDataType](_struct_.structdatatype.md)*

## Hierarchy

* [Type](_type_.type.md)‹T›

  * **Struct**

## Index

### Methods

* [check](_struct_.struct.md#check)
* [checker](_struct_.struct.md#checker)
* [decorators](_struct_.struct.md#decorators)
* [id](_struct_.struct.md#id)
* [name](_struct_.struct.md#name)
* [value](_struct_.struct.md#value)

## Methods

###  check

▸ **check**(`value`: unknown): *boolean*

*Inherited from [Type](_type_.type.md).[check](_type_.type.md#check)*

*Defined in [type.ts:6](https://github.com/OctoD/ftts/blob/73fcc67/src/type.ts#L6)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | unknown |

**Returns:** *boolean*

___

###  checker

▸ **checker**(): *[TypeChecker](../modules/_type_.md#typechecker)‹unknown›*

*Inherited from [Type](_type_.type.md).[checker](_type_.type.md#checker)*

*Defined in [type.ts:7](https://github.com/OctoD/ftts/blob/73fcc67/src/type.ts#L7)*

**Returns:** *[TypeChecker](../modules/_type_.md#typechecker)‹unknown›*

___

###  decorators

▸ **decorators**(): *[TypeDecorator](../modules/_type_.md#typedecorator)[]*

*Inherited from [Type](_type_.type.md).[decorators](_type_.type.md#decorators)*

*Defined in [type.ts:8](https://github.com/OctoD/ftts/blob/73fcc67/src/type.ts#L8)*

**Returns:** *[TypeDecorator](../modules/_type_.md#typedecorator)[]*

___

###  id

▸ **id**(): *string*

*Inherited from [Type](_type_.type.md).[id](_type_.type.md#id)*

*Defined in [type.ts:9](https://github.com/OctoD/ftts/blob/73fcc67/src/type.ts#L9)*

**Returns:** *string*

___

###  name

▸ **name**(): *string*

*Inherited from [Type](_type_.type.md).[name](_type_.type.md#name)*

*Defined in [type.ts:10](https://github.com/OctoD/ftts/blob/73fcc67/src/type.ts#L10)*

**Returns:** *string*

___

###  value

▸ **value**(): *T*

*Inherited from [Type](_type_.type.md).[value](_type_.type.md#value)*

*Defined in [type.ts:11](https://github.com/OctoD/ftts/blob/73fcc67/src/type.ts#L11)*

**Returns:** *T*