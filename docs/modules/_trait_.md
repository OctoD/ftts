**[ftts](../README.md)**

[Globals](../README.md) › ["trait"](_trait_.md)

# External module: "trait"

## Index

### Interfaces

* [Trait](../interfaces/_trait_.trait.md)

### Type aliases

* [TraitInvokable](_trait_.md#traitinvokable)

### Functions

* [create](_trait_.md#create)
* [impl](_trait_.md#impl)
* [isTrait](_trait_.md#istrait)

## Type aliases

###  TraitInvokable

Ƭ **TraitInvokable**: *function*

*Defined in [trait.ts:7](https://github.com/OctoD/ftts/blob/b8036e1/src/trait.ts#L7)*

#### Type declaration:

▸ (`arg`: K): *T & U*

**Parameters:**

Name | Type |
------ | ------ |
`arg` | K |

## Functions

###  create

▸ **create**<**T**, **U**>(`trait`: T): *T*

*Defined in [trait.ts:11](https://github.com/OctoD/ftts/blob/b8036e1/src/trait.ts#L11)*

**Type parameters:**

▪ **T**: *[Trait](../interfaces/_trait_.trait.md)‹U›*

▪ **U**

**Parameters:**

Name | Type |
------ | ------ |
`trait` | T |

**Returns:** *T*

___

###  impl

▸ **impl**<**T**, **U**>(`type`: [Type](../interfaces/_type_.type.md)‹T›, `trait`: U): *[TraitInvokable](_trait_.md#traitinvokable)‹[Type](../interfaces/_type_.type.md), U, T›*

*Defined in [trait.ts:19](https://github.com/OctoD/ftts/blob/b8036e1/src/trait.ts#L19)*

**Type parameters:**

▪ **T**

▪ **U**: *[Trait](../interfaces/_trait_.trait.md)‹T›*

**Parameters:**

Name | Type |
------ | ------ |
`type` | [Type](../interfaces/_type_.type.md)‹T› |
`trait` | U |

**Returns:** *[TraitInvokable](_trait_.md#traitinvokable)‹[Type](../interfaces/_type_.type.md), U, T›*

___

###  isTrait

▸ **isTrait**(`arg`: unknown): *boolean*

*Defined in [trait.ts:29](https://github.com/OctoD/ftts/blob/b8036e1/src/trait.ts#L29)*

**Parameters:**

Name | Type |
------ | ------ |
`arg` | unknown |

**Returns:** *boolean*