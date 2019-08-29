**[ftts](../README.md)**

[Globals](../README.md) › ["struct"](_struct_.md)

# External module: "struct"

## Index

### Interfaces

* [Struct](../interfaces/_struct_.struct.md)
* [StructDataType](../interfaces/_struct_.structdatatype.md)

### Functions

* [checkKeys](_struct_.md#checkkeys)
* [compareKeys](_struct_.md#comparekeys)
* [create](_struct_.md#create)
* [dataKeys](_struct_.md#datakeys)
* [equalsTo](_struct_.md#equalsto)
* [hasKey](_struct_.md#haskey)
* [isStruct](_struct_.md#isstruct)
* [isStructLikeData](_struct_.md#isstructlikedata)
* [keys](_struct_.md#keys)
* [values](_struct_.md#values)

## Functions

###  checkKeys

▸ **checkKeys**<**T**>(`struct`: T, `keys`: string[], `index`: number): *boolean*

*Defined in [struct.ts:130](https://github.com/OctoD/ftts/blob/73fcc67/src/struct.ts#L130)*

**`template`** T

**Type parameters:**

▪ **T**: *[StructDataType](../interfaces/_struct_.structdatatype.md)*

**Parameters:**

Name | Type |
------ | ------ |
`struct` | T |
`keys` | string[] |
`index` | number |

**Returns:** *boolean*

___

###  compareKeys

▸ **compareKeys**(`comparing`: [StructDataType](../interfaces/_struct_.structdatatype.md), `comparingTo`: [StructDataType](../interfaces/_struct_.structdatatype.md), `keys`: string[], `index`: number): *boolean*

*Defined in [struct.ts:153](https://github.com/OctoD/ftts/blob/73fcc67/src/struct.ts#L153)*

**Parameters:**

Name | Type |
------ | ------ |
`comparing` | [StructDataType](../interfaces/_struct_.structdatatype.md) |
`comparingTo` | [StructDataType](../interfaces/_struct_.structdatatype.md) |
`keys` | string[] |
`index` | number |

**Returns:** *boolean*

___

###  create

▸ **create**<**T**>(`initialStruct`: T): *[Struct](../interfaces/_struct_.struct.md)‹T›*

*Defined in [struct.ts:34](https://github.com/OctoD/ftts/blob/73fcc67/src/struct.ts#L34)*

**`export`** 

**`template`** T

**Type parameters:**

▪ **T**: *[StructDataType](../interfaces/_struct_.structdatatype.md)*

**Parameters:**

Name | Type |
------ | ------ |
`initialStruct` | T |

**Returns:** *[Struct](../interfaces/_struct_.struct.md)‹T›*

___

###  dataKeys

▸ **dataKeys**<**T**>(`struct`: T): *string[]*

*Defined in [struct.ts:178](https://github.com/OctoD/ftts/blob/73fcc67/src/struct.ts#L178)*

**`template`** T

**Type parameters:**

▪ **T**: *[StructDataType](../interfaces/_struct_.structdatatype.md)*

**Parameters:**

Name | Type |
------ | ------ |
`struct` | T |

**Returns:** *string[]*

___

###  equalsTo

▸ **equalsTo**<**T**, **U**>(`leftStruct`: [Struct](../interfaces/_struct_.struct.md)‹T›, `rightStruct`: [Struct](../interfaces/_struct_.struct.md)‹U›): *boolean*

*Defined in [struct.ts:52](https://github.com/OctoD/ftts/blob/73fcc67/src/struct.ts#L52)*

**`export`** 

**`template`** T

**`template`** U

**Type parameters:**

▪ **T**: *[StructDataType](../interfaces/_struct_.structdatatype.md)*

▪ **U**: *[StructDataType](../interfaces/_struct_.structdatatype.md)*

**Parameters:**

Name | Type |
------ | ------ |
`leftStruct` | [Struct](../interfaces/_struct_.struct.md)‹T› |
`rightStruct` | [Struct](../interfaces/_struct_.struct.md)‹U› |

**Returns:** *boolean*

___

###  hasKey

▸ **hasKey**<**T**>(`struct`: [Struct](../interfaces/_struct_.struct.md)‹T›, `key`: [Str](_primitives_.md#str)): *boolean*

*Defined in [struct.ts:76](https://github.com/OctoD/ftts/blob/73fcc67/src/struct.ts#L76)*

**`export`** 

**`template`** T

**Type parameters:**

▪ **T**: *[StructDataType](../interfaces/_struct_.structdatatype.md)*

**Parameters:**

Name | Type |
------ | ------ |
`struct` | [Struct](../interfaces/_struct_.struct.md)‹T› |
`key` | [Str](_primitives_.md#str) |

**Returns:** *boolean*

___

###  isStruct

▸ **isStruct**(`maybeType`: unknown): *boolean*

*Defined in [struct.ts:90](https://github.com/OctoD/ftts/blob/73fcc67/src/struct.ts#L90)*

**`export`** 

**Parameters:**

Name | Type |
------ | ------ |
`maybeType` | unknown |

**Returns:** *boolean*

___

###  isStructLikeData

▸ **isStructLikeData**(`value`: unknown): *boolean*

*Defined in [struct.ts:188](https://github.com/OctoD/ftts/blob/73fcc67/src/struct.ts#L188)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | unknown |

**Returns:** *boolean*

___

###  keys

▸ **keys**<**T**>(`struct`: [Struct](../interfaces/_struct_.struct.md)‹T›): *[StrArr](_arr_.md#strarr)*

*Defined in [struct.ts:102](https://github.com/OctoD/ftts/blob/73fcc67/src/struct.ts#L102)*

**`export`** 

**`template`** T

**Type parameters:**

▪ **T**: *[StructDataType](../interfaces/_struct_.structdatatype.md)*

**Parameters:**

Name | Type |
------ | ------ |
`struct` | [Struct](../interfaces/_struct_.struct.md)‹T› |

**Returns:** *[StrArr](_arr_.md#strarr)*

___

###  values

▸ **values**<**T**>(`struct`: [Struct](../interfaces/_struct_.struct.md)‹T›): *Array‹[Type](../interfaces/_type_.type.md)‹unknown››*

*Defined in [struct.ts:114](https://github.com/OctoD/ftts/blob/73fcc67/src/struct.ts#L114)*

**`export`** 

**`template`** T

**Type parameters:**

▪ **T**: *[StructDataType](../interfaces/_struct_.structdatatype.md)*

**Parameters:**

Name | Type |
------ | ------ |
`struct` | [Struct](../interfaces/_struct_.struct.md)‹T› |

**Returns:** *Array‹[Type](../interfaces/_type_.type.md)‹unknown››*