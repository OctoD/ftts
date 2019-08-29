**[ftts](../README.md)**

[Globals](../README.md) › ["arr"](_arr_.md)

# External module: "arr"

## Index

### Type aliases

* [Arr](_arr_.md#arr)
* [BoolArr](_arr_.md#boolarr)
* [IterableCallback](_arr_.md#iterablecallback)
* [NumArr](_arr_.md#numarr)
* [ObjArr](_arr_.md#objarr)
* [StrArr](_arr_.md#strarr)

### Variables

* [arr](_arr_.md#const-arr)
* [boolarr](_arr_.md#const-boolarr)
* [numarr](_arr_.md#const-numarr)
* [objarr](_arr_.md#const-objarr)
* [strarr](_arr_.md#const-strarr)

### Functions

* [Arr](_arr_.md#arr)
* [BoolArr](_arr_.md#boolarr)
* [NumArr](_arr_.md#numarr)
* [ObjArr](_arr_.md#objarr)
* [StrArr](_arr_.md#strarr)
* [concat](_arr_.md#concat)
* [ensureAllOfType](_arr_.md#ensurealloftype)
* [ensureArrayAnd](_arr_.md#ensurearrayand)
* [ensureOfType](_arr_.md#ensureoftype)
* [fill](_arr_.md#fill)
* [filter](_arr_.md#filter)
* [find](_arr_.md#find)
* [findIndex](_arr_.md#findindex)
* [indexOf](_arr_.md#indexof)
* [join](_arr_.md#join)
* [map](_arr_.md#map)
* [mapToType](_arr_.md#maptotype)
* [noop](_arr_.md#const-noop)
* [pop](_arr_.md#pop)
* [push](_arr_.md#push)
* [shift](_arr_.md#shift)
* [slice](_arr_.md#slice)
* [splice](_arr_.md#splice)
* [unshift](_arr_.md#unshift)

## Type aliases

###  Arr

Ƭ **Arr**: *[Type](../interfaces/_type_.type.md)‹T[]›*

*Defined in [arr.ts:17](https://github.com/OctoD/ftts/blob/73fcc67/src/arr.ts#L17)*

___

###  BoolArr

Ƭ **BoolArr**: *[Arr](_arr_.md#arr)‹[Bool](_primitives_.md#bool)›*

*Defined in [arr.ts:18](https://github.com/OctoD/ftts/blob/73fcc67/src/arr.ts#L18)*

___

###  IterableCallback

Ƭ **IterableCallback**: *function*

*Defined in [arr.ts:103](https://github.com/OctoD/ftts/blob/73fcc67/src/arr.ts#L103)*

#### Type declaration:

▸ (`value`: [Type](../interfaces/_type_.type.md)‹any›, `index`: [Num](_primitives_.md#num), `array`: [Arr](_arr_.md#arr)‹[Type](../interfaces/_type_.type.md)‹any››): *Return*

**Parameters:**

Name | Type |
------ | ------ |
`value` | [Type](../interfaces/_type_.type.md)‹any› |
`index` | [Num](_primitives_.md#num) |
`array` | [Arr](_arr_.md#arr)‹[Type](../interfaces/_type_.type.md)‹any›› |

___

###  NumArr

Ƭ **NumArr**: *[Arr](_arr_.md#arr)‹[Num](_primitives_.md#num)›*

*Defined in [arr.ts:20](https://github.com/OctoD/ftts/blob/73fcc67/src/arr.ts#L20)*

___

###  ObjArr

Ƭ **ObjArr**: *[Arr](_arr_.md#arr)‹[Obj](_primitives_.md#obj)›*

*Defined in [arr.ts:19](https://github.com/OctoD/ftts/blob/73fcc67/src/arr.ts#L19)*

___

###  StrArr

Ƭ **StrArr**: *[Arr](_arr_.md#arr)‹[Str](_primitives_.md#str)›*

*Defined in [arr.ts:21](https://github.com/OctoD/ftts/blob/73fcc67/src/arr.ts#L21)*

## Variables

### `Const` arr

• **arr**: *[Type](../interfaces/_type_.type.md)‹[Type](../interfaces/_type_.type.md)‹any›[]›* =  Arr()

*Defined in [arr.ts:59](https://github.com/OctoD/ftts/blob/73fcc67/src/arr.ts#L59)*

___

### `Const` boolarr

• **boolarr**: *[Type](../interfaces/_type_.type.md)‹[Type](../interfaces/_type_.type.md)‹boolean›[]›* =  BoolArr()

*Defined in [arr.ts:60](https://github.com/OctoD/ftts/blob/73fcc67/src/arr.ts#L60)*

___

### `Const` numarr

• **numarr**: *[Type](../interfaces/_type_.type.md)‹[Type](../interfaces/_type_.type.md)‹number›[]›* =  NumArr()

*Defined in [arr.ts:62](https://github.com/OctoD/ftts/blob/73fcc67/src/arr.ts#L62)*

___

### `Const` objarr

• **objarr**: *[Type](../interfaces/_type_.type.md)‹[Type](../interfaces/_type_.type.md)‹object›[]›* =  ObjArr()

*Defined in [arr.ts:61](https://github.com/OctoD/ftts/blob/73fcc67/src/arr.ts#L61)*

___

### `Const` strarr

• **strarr**: *[Type](../interfaces/_type_.type.md)‹[Type](../interfaces/_type_.type.md)‹string›[]›* =  StrArr()

*Defined in [arr.ts:63](https://github.com/OctoD/ftts/blob/73fcc67/src/arr.ts#L63)*

## Functions

###  Arr

▸ **Arr**(`value`: any[]): *[Arr]()‹[Any](_primitives_.md#any)›*

*Defined in [arr.ts:65](https://github.com/OctoD/ftts/blob/73fcc67/src/arr.ts#L65)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`value` | any[] |  [] |

**Returns:** *[Arr]()‹[Any](_primitives_.md#any)›*

___

###  BoolArr

▸ **BoolArr**(`value`: boolean[]): *[Arr](_arr_.md#arr)‹[Bool](_primitives_.md#bool)›*

*Defined in [arr.ts:69](https://github.com/OctoD/ftts/blob/73fcc67/src/arr.ts#L69)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`value` | boolean[] |  [] |

**Returns:** *[Arr](_arr_.md#arr)‹[Bool](_primitives_.md#bool)›*

___

###  NumArr

▸ **NumArr**(`value`: number[]): *[Arr](_arr_.md#arr)‹[Num](_primitives_.md#num)›*

*Defined in [arr.ts:85](https://github.com/OctoD/ftts/blob/73fcc67/src/arr.ts#L85)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`value` | number[] |  [] |

**Returns:** *[Arr](_arr_.md#arr)‹[Num](_primitives_.md#num)›*

___

###  ObjArr

▸ **ObjArr**(`value`: object[]): *[Arr](_arr_.md#arr)‹[Obj](_primitives_.md#obj)›*

*Defined in [arr.ts:77](https://github.com/OctoD/ftts/blob/73fcc67/src/arr.ts#L77)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`value` | object[] |  [] |

**Returns:** *[Arr](_arr_.md#arr)‹[Obj](_primitives_.md#obj)›*

___

###  StrArr

▸ **StrArr**(`value`: string[]): *[Arr](_arr_.md#arr)‹[Str](_primitives_.md#str)›*

*Defined in [arr.ts:93](https://github.com/OctoD/ftts/blob/73fcc67/src/arr.ts#L93)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`value` | string[] |  [] |

**Returns:** *[Arr](_arr_.md#arr)‹[Str](_primitives_.md#str)›*

___

###  concat

▸ **concat**<**T**, **U**>(...`arrs`: [Arr](_arr_.md#arr)‹T›[]): *[Arr](_arr_.md#arr)‹T›*

*Defined in [arr.ts:109](https://github.com/OctoD/ftts/blob/73fcc67/src/arr.ts#L109)*

**Type parameters:**

▪ **T**: *[Type](../interfaces/_type_.type.md)‹U›*

▪ **U**

**Parameters:**

Name | Type |
------ | ------ |
`...arrs` | [Arr](_arr_.md#arr)‹T›[] |

**Returns:** *[Arr](_arr_.md#arr)‹T›*

___

###  ensureAllOfType

▸ **ensureAllOfType**<**U**>(`type`: [Type](../interfaces/_type_.type.md)‹U›): *function*

*Defined in [arr.ts:33](https://github.com/OctoD/ftts/blob/73fcc67/src/arr.ts#L33)*

**Type parameters:**

▪ **U**

**Parameters:**

Name | Type |
------ | ------ |
`type` | [Type](../interfaces/_type_.type.md)‹U› |

**Returns:** *function*

▸ (`arg`: unknown[]): *boolean*

**Parameters:**

Name | Type |
------ | ------ |
`arg` | unknown[] |

___

###  ensureArrayAnd

▸ **ensureArrayAnd**(`fn`: function): *function*

*Defined in [arr.ts:27](https://github.com/OctoD/ftts/blob/73fcc67/src/arr.ts#L27)*

**Parameters:**

▪`Default value`  **fn**: *function*=  noop

▸ (`arg`: unknown[]): *boolean*

**Parameters:**

Name | Type |
------ | ------ |
`arg` | unknown[] |

**Returns:** *function*

▸ (`arg`: unknown): *boolean*

**Parameters:**

Name | Type |
------ | ------ |
`arg` | unknown |

___

###  ensureOfType

▸ **ensureOfType**<**U**>(`type`: [Type](../interfaces/_type_.type.md)‹U›, `args`: unknown[], `index`: number): *boolean*

*Defined in [arr.ts:37](https://github.com/OctoD/ftts/blob/73fcc67/src/arr.ts#L37)*

**Type parameters:**

▪ **U**

**Parameters:**

Name | Type |
------ | ------ |
`type` | [Type](../interfaces/_type_.type.md)‹U› |
`args` | unknown[] |
`index` | number |

**Returns:** *boolean*

___

###  fill

▸ **fill**<**T**, **U**>(`arr`: [Arr](_arr_.md#arr)‹T›, `value`: [Any](_primitives_.md#any), `start`: [Num](_primitives_.md#num) | [Undefined](_primitives_.md#undefined), `end`: [Num](_primitives_.md#num) | [Undefined](_primitives_.md#undefined)): *[Arr](_arr_.md#arr)‹T›*

*Defined in [arr.ts:128](https://github.com/OctoD/ftts/blob/73fcc67/src/arr.ts#L128)*

**Type parameters:**

▪ **T**: *[Type](../interfaces/_type_.type.md)‹U›*

▪ **U**

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`arr` | [Arr](_arr_.md#arr)‹T› | - |
`value` | [Any](_primitives_.md#any) | - |
`start` | [Num](_primitives_.md#num) \| [Undefined](_primitives_.md#undefined) |  und |
`end` | [Num](_primitives_.md#num) \| [Undefined](_primitives_.md#undefined) |  und |

**Returns:** *[Arr](_arr_.md#arr)‹T›*

___

###  filter

▸ **filter**<**T**, **U**>(`arr`: [Arr](_arr_.md#arr)‹T›, `fn`: [Fn](_primitives_.md#fn)‹[IterableCallback](_arr_.md#iterablecallback)‹[Arr](_arr_.md#arr)‹T›››): *[Arr](_arr_.md#arr)‹T›*

*Defined in [arr.ts:119](https://github.com/OctoD/ftts/blob/73fcc67/src/arr.ts#L119)*

**Type parameters:**

▪ **T**: *[Type](../interfaces/_type_.type.md)‹U›*

▪ **U**

**Parameters:**

Name | Type |
------ | ------ |
`arr` | [Arr](_arr_.md#arr)‹T› |
`fn` | [Fn](_primitives_.md#fn)‹[IterableCallback](_arr_.md#iterablecallback)‹[Arr](_arr_.md#arr)‹T››› |

**Returns:** *[Arr](_arr_.md#arr)‹T›*

___

###  find

▸ **find**<**T**, **U**>(`arr`: [Arr](_arr_.md#arr)‹T›, `fn`: [Fn](_primitives_.md#fn)‹[IterableCallback](_arr_.md#iterablecallback)‹T | [Undefined](_primitives_.md#undefined)››): *T | [Undefined](_primitives_.md#undefined)*

*Defined in [arr.ts:143](https://github.com/OctoD/ftts/blob/73fcc67/src/arr.ts#L143)*

**Type parameters:**

▪ **T**: *[Type](../interfaces/_type_.type.md)‹U›*

▪ **U**

**Parameters:**

Name | Type |
------ | ------ |
`arr` | [Arr](_arr_.md#arr)‹T› |
`fn` | [Fn](_primitives_.md#fn)‹[IterableCallback](_arr_.md#iterablecallback)‹T \| [Undefined](_primitives_.md#undefined)›› |

**Returns:** *T | [Undefined](_primitives_.md#undefined)*

___

###  findIndex

▸ **findIndex**<**T**, **U**>(`arr`: [Arr](_arr_.md#arr)‹T›, `fn`: [Fn](_primitives_.md#fn)‹[IterableCallback](_arr_.md#iterablecallback)‹[Num](_primitives_.md#num) | [Undefined](_primitives_.md#undefined)››): *[Num](_primitives_.md#num)*

*Defined in [arr.ts:153](https://github.com/OctoD/ftts/blob/73fcc67/src/arr.ts#L153)*

**Type parameters:**

▪ **T**: *[Type](../interfaces/_type_.type.md)‹U›*

▪ **U**

**Parameters:**

Name | Type |
------ | ------ |
`arr` | [Arr](_arr_.md#arr)‹T› |
`fn` | [Fn](_primitives_.md#fn)‹[IterableCallback](_arr_.md#iterablecallback)‹[Num](_primitives_.md#num) \| [Undefined](_primitives_.md#undefined)›› |

**Returns:** *[Num](_primitives_.md#num)*

___

###  indexOf

▸ **indexOf**<**T**, **U**, **K**>(`arr`: [Arr](_arr_.md#arr)‹T›, `type`: [Type](../interfaces/_type_.type.md)‹K›): *[Num](_primitives_.md#num)*

*Defined in [arr.ts:162](https://github.com/OctoD/ftts/blob/73fcc67/src/arr.ts#L162)*

**Type parameters:**

▪ **T**: *[Type](../interfaces/_type_.type.md)‹U›*

▪ **U**

▪ **K**

**Parameters:**

Name | Type |
------ | ------ |
`arr` | [Arr](_arr_.md#arr)‹T› |
`type` | [Type](../interfaces/_type_.type.md)‹K› |

**Returns:** *[Num](_primitives_.md#num)*

___

###  join

▸ **join**<**T**, **U**>(`arr`: [Arr](_arr_.md#arr)‹T›, `delimiter`: [Str](_primitives_.md#str)): *[Str](_primitives_.md#str)*

*Defined in [arr.ts:177](https://github.com/OctoD/ftts/blob/73fcc67/src/arr.ts#L177)*

**Type parameters:**

▪ **T**: *[Type](../interfaces/_type_.type.md)‹U›*

▪ **U**

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`arr` | [Arr](_arr_.md#arr)‹T› | - |
`delimiter` | [Str](_primitives_.md#str) |  Str(",") |

**Returns:** *[Str](_primitives_.md#str)*

___

###  map

▸ **map**<**T**, **U**, **K**, **Y**>(`arr`: [Arr](_arr_.md#arr)‹T›, `fn`: [Fn](_primitives_.md#fn)‹[IterableCallback](_arr_.md#iterablecallback)‹[Arr](_arr_.md#arr)‹K›››): *[Arr](_arr_.md#arr)‹K›*

*Defined in [arr.ts:184](https://github.com/OctoD/ftts/blob/73fcc67/src/arr.ts#L184)*

**Type parameters:**

▪ **T**: *[Type](../interfaces/_type_.type.md)‹U›*

▪ **U**

▪ **K**: *[Type](../interfaces/_type_.type.md)‹Y›*

▪ **Y**

**Parameters:**

Name | Type |
------ | ------ |
`arr` | [Arr](_arr_.md#arr)‹T› |
`fn` | [Fn](_primitives_.md#fn)‹[IterableCallback](_arr_.md#iterablecallback)‹[Arr](_arr_.md#arr)‹K››› |

**Returns:** *[Arr](_arr_.md#arr)‹K›*

___

###  mapToType

▸ **mapToType**<**T**>(`type`: [Type](../interfaces/_type_.type.md)‹T›): *function*

*Defined in [arr.ts:51](https://github.com/OctoD/ftts/blob/73fcc67/src/arr.ts#L51)*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`type` | [Type](../interfaces/_type_.type.md)‹T› |

**Returns:** *function*

▸ (`value`: T, `index`: number, `arr`: T[]): *[Type](../interfaces/_type_.type.md)‹T›*

**Parameters:**

Name | Type |
------ | ------ |
`value` | T |
`index` | number |
`arr` | T[] |

___

### `Const` noop

▸ **noop**(): *boolean*

*Defined in [arr.ts:25](https://github.com/OctoD/ftts/blob/73fcc67/src/arr.ts#L25)*

**Returns:** *boolean*

___

###  pop

▸ **pop**<**T**, **U**>(`arr`: [Arr](_arr_.md#arr)‹T›): *[Arr](_arr_.md#arr)‹T›*

*Defined in [arr.ts:195](https://github.com/OctoD/ftts/blob/73fcc67/src/arr.ts#L195)*

**Type parameters:**

▪ **T**: *[Type](../interfaces/_type_.type.md)‹U›*

▪ **U**

**Parameters:**

Name | Type |
------ | ------ |
`arr` | [Arr](_arr_.md#arr)‹T› |

**Returns:** *[Arr](_arr_.md#arr)‹T›*

___

###  push

▸ **push**<**T**, **U**>(`arr`: [Arr](_arr_.md#arr)‹T›, `element`: T): *[Arr](_arr_.md#arr)‹T›*

*Defined in [arr.ts:203](https://github.com/OctoD/ftts/blob/73fcc67/src/arr.ts#L203)*

**Type parameters:**

▪ **T**: *[Type](../interfaces/_type_.type.md)‹U›*

▪ **U**

**Parameters:**

Name | Type |
------ | ------ |
`arr` | [Arr](_arr_.md#arr)‹T› |
`element` | T |

**Returns:** *[Arr](_arr_.md#arr)‹T›*

___

###  shift

▸ **shift**<**T**, **U**>(`arr`: [Arr](_arr_.md#arr)‹T›): *[Arr](_arr_.md#arr)‹T›*

*Defined in [arr.ts:207](https://github.com/OctoD/ftts/blob/73fcc67/src/arr.ts#L207)*

**Type parameters:**

▪ **T**: *[Type](../interfaces/_type_.type.md)‹U›*

▪ **U**

**Parameters:**

Name | Type |
------ | ------ |
`arr` | [Arr](_arr_.md#arr)‹T› |

**Returns:** *[Arr](_arr_.md#arr)‹T›*

___

###  slice

▸ **slice**<**T**, **U**>(`arr`: [Arr](_arr_.md#arr)‹T›, `start`: [Num](_primitives_.md#num) | [Undefined](_primitives_.md#undefined), `stop`: [Num](_primitives_.md#num) | [Undefined](_primitives_.md#undefined)): *[Arr](_arr_.md#arr)‹T›*

*Defined in [arr.ts:215](https://github.com/OctoD/ftts/blob/73fcc67/src/arr.ts#L215)*

**Type parameters:**

▪ **T**: *[Type](../interfaces/_type_.type.md)‹U›*

▪ **U**

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`arr` | [Arr](_arr_.md#arr)‹T› | - |
`start` | [Num](_primitives_.md#num) \| [Undefined](_primitives_.md#undefined) |  und |
`stop` | [Num](_primitives_.md#num) \| [Undefined](_primitives_.md#undefined) |  und |

**Returns:** *[Arr](_arr_.md#arr)‹T›*

___

###  splice

▸ **splice**<**T**, **U**>(`arr`: [Arr](_arr_.md#arr)‹T›, `start`: [Num](_primitives_.md#num), `deleteCount`: [Num](_primitives_.md#num) | [Undefined](_primitives_.md#undefined), ...`items`: T[]): *[Arr](_arr_.md#arr)‹T›*

*Defined in [arr.ts:223](https://github.com/OctoD/ftts/blob/73fcc67/src/arr.ts#L223)*

**Type parameters:**

▪ **T**: *[Type](../interfaces/_type_.type.md)‹U›*

▪ **U**

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`arr` | [Arr](_arr_.md#arr)‹T› | - |
`start` | [Num](_primitives_.md#num) |  num |
`deleteCount` | [Num](_primitives_.md#num) \| [Undefined](_primitives_.md#undefined) |  und |
`...items` | T[] | - |

**Returns:** *[Arr](_arr_.md#arr)‹T›*

___

###  unshift

▸ **unshift**<**T**, **U**>(`arr`: [Arr](_arr_.md#arr)‹T›, ...`items`: T[]): *[Arr](_arr_.md#arr)‹T›*

*Defined in [arr.ts:250](https://github.com/OctoD/ftts/blob/73fcc67/src/arr.ts#L250)*

**Type parameters:**

▪ **T**: *[Type](../interfaces/_type_.type.md)‹U›*

▪ **U**

**Parameters:**

Name | Type |
------ | ------ |
`arr` | [Arr](_arr_.md#arr)‹T› |
`...items` | T[] |

**Returns:** *[Arr](_arr_.md#arr)‹T›*