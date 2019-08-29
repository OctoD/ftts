**[ftts](../README.md)**

[Globals](../README.md) › ["arr"](_arr_.md)

# External module: "arr"

## Index

### Type aliases

* [Arr](_arr_.md#arr)
* [BitArr](_arr_.md#bitarr)
* [BoolArr](_arr_.md#boolarr)
* [CharArr](_arr_.md#chararr)
* [IterableCallback](_arr_.md#iterablecallback)
* [NumArr](_arr_.md#numarr)
* [ObjArr](_arr_.md#objarr)
* [StrArr](_arr_.md#strarr)

### Variables

* [arr](_arr_.md#const-arr)
* [bitarr](_arr_.md#const-bitarr)
* [boolarr](_arr_.md#const-boolarr)
* [chararr](_arr_.md#const-chararr)
* [numarr](_arr_.md#const-numarr)
* [objarr](_arr_.md#const-objarr)
* [strarr](_arr_.md#const-strarr)

### Functions

* [Arr](_arr_.md#arr)
* [BitArr](_arr_.md#bitarr)
* [BoolArr](_arr_.md#boolarr)
* [CharArr](_arr_.md#chararr)
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

*Defined in [arr.ts:21](https://github.com/OctoD/ftts/blob/b8036e1/src/arr.ts#L21)*

___

###  BitArr

Ƭ **BitArr**: *[Arr](_arr_.md#arr)‹[Bit](_primitives_.md#bit)›*

*Defined in [arr.ts:23](https://github.com/OctoD/ftts/blob/b8036e1/src/arr.ts#L23)*

___

###  BoolArr

Ƭ **BoolArr**: *[Arr](_arr_.md#arr)‹[Bool](_primitives_.md#bool)›*

*Defined in [arr.ts:24](https://github.com/OctoD/ftts/blob/b8036e1/src/arr.ts#L24)*

___

###  CharArr

Ƭ **CharArr**: *[Arr](_arr_.md#arr)‹[Char](_primitives_.md#char)›*

*Defined in [arr.ts:22](https://github.com/OctoD/ftts/blob/b8036e1/src/arr.ts#L22)*

___

###  IterableCallback

Ƭ **IterableCallback**: *function*

*Defined in [arr.ts:127](https://github.com/OctoD/ftts/blob/b8036e1/src/arr.ts#L127)*

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

*Defined in [arr.ts:26](https://github.com/OctoD/ftts/blob/b8036e1/src/arr.ts#L26)*

___

###  ObjArr

Ƭ **ObjArr**: *[Arr](_arr_.md#arr)‹[Obj](_primitives_.md#obj)›*

*Defined in [arr.ts:25](https://github.com/OctoD/ftts/blob/b8036e1/src/arr.ts#L25)*

___

###  StrArr

Ƭ **StrArr**: *[Arr](_arr_.md#arr)‹[Str](_primitives_.md#str)›*

*Defined in [arr.ts:27](https://github.com/OctoD/ftts/blob/b8036e1/src/arr.ts#L27)*

## Variables

### `Const` arr

• **arr**: *[Type](../interfaces/_type_.type.md)‹[Type](../interfaces/_type_.type.md)‹any›[]›* =  Arr()

*Defined in [arr.ts:65](https://github.com/OctoD/ftts/blob/b8036e1/src/arr.ts#L65)*

___

### `Const` bitarr

• **bitarr**: *[Type](../interfaces/_type_.type.md)‹[Type](../interfaces/_type_.type.md)‹number›[]›* =  BitArr()

*Defined in [arr.ts:66](https://github.com/OctoD/ftts/blob/b8036e1/src/arr.ts#L66)*

___

### `Const` boolarr

• **boolarr**: *[Type](../interfaces/_type_.type.md)‹[Type](../interfaces/_type_.type.md)‹boolean›[]›* =  BoolArr()

*Defined in [arr.ts:68](https://github.com/OctoD/ftts/blob/b8036e1/src/arr.ts#L68)*

___

### `Const` chararr

• **chararr**: *[Type](../interfaces/_type_.type.md)‹[Type](../interfaces/_type_.type.md)‹string›[]›* =  CharArr()

*Defined in [arr.ts:67](https://github.com/OctoD/ftts/blob/b8036e1/src/arr.ts#L67)*

___

### `Const` numarr

• **numarr**: *[Type](../interfaces/_type_.type.md)‹[Type](../interfaces/_type_.type.md)‹number›[]›* =  NumArr()

*Defined in [arr.ts:70](https://github.com/OctoD/ftts/blob/b8036e1/src/arr.ts#L70)*

___

### `Const` objarr

• **objarr**: *[Type](../interfaces/_type_.type.md)‹[Type](../interfaces/_type_.type.md)‹object›[]›* =  ObjArr()

*Defined in [arr.ts:69](https://github.com/OctoD/ftts/blob/b8036e1/src/arr.ts#L69)*

___

### `Const` strarr

• **strarr**: *[Type](../interfaces/_type_.type.md)‹[Type](../interfaces/_type_.type.md)‹string›[]›* =  StrArr()

*Defined in [arr.ts:71](https://github.com/OctoD/ftts/blob/b8036e1/src/arr.ts#L71)*

## Functions

###  Arr

▸ **Arr**(`value`: any[]): *[Arr]()‹[Any](_primitives_.md#any)›*

*Defined in [arr.ts:73](https://github.com/OctoD/ftts/blob/b8036e1/src/arr.ts#L73)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`value` | any[] |  [] |

**Returns:** *[Arr]()‹[Any](_primitives_.md#any)›*

___

###  BitArr

▸ **BitArr**(`value`: number[]): *[Arr](_arr_.md#arr)‹[Bit](_primitives_.md#bit)›*

*Defined in [arr.ts:77](https://github.com/OctoD/ftts/blob/b8036e1/src/arr.ts#L77)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`value` | number[] |  [] |

**Returns:** *[Arr](_arr_.md#arr)‹[Bit](_primitives_.md#bit)›*

___

###  BoolArr

▸ **BoolArr**(`value`: boolean[]): *[Arr](_arr_.md#arr)‹[Bool](_primitives_.md#bool)›*

*Defined in [arr.ts:85](https://github.com/OctoD/ftts/blob/b8036e1/src/arr.ts#L85)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`value` | boolean[] |  [] |

**Returns:** *[Arr](_arr_.md#arr)‹[Bool](_primitives_.md#bool)›*

___

###  CharArr

▸ **CharArr**(`value`: string[]): *[Arr](_arr_.md#arr)‹[Char](_primitives_.md#char)›*

*Defined in [arr.ts:93](https://github.com/OctoD/ftts/blob/b8036e1/src/arr.ts#L93)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`value` | string[] |  [] |

**Returns:** *[Arr](_arr_.md#arr)‹[Char](_primitives_.md#char)›*

___

###  NumArr

▸ **NumArr**(`value`: number[]): *[Arr](_arr_.md#arr)‹[Num](_primitives_.md#num)›*

*Defined in [arr.ts:109](https://github.com/OctoD/ftts/blob/b8036e1/src/arr.ts#L109)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`value` | number[] |  [] |

**Returns:** *[Arr](_arr_.md#arr)‹[Num](_primitives_.md#num)›*

___

###  ObjArr

▸ **ObjArr**(`value`: object[]): *[Arr](_arr_.md#arr)‹[Obj](_primitives_.md#obj)›*

*Defined in [arr.ts:101](https://github.com/OctoD/ftts/blob/b8036e1/src/arr.ts#L101)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`value` | object[] |  [] |

**Returns:** *[Arr](_arr_.md#arr)‹[Obj](_primitives_.md#obj)›*

___

###  StrArr

▸ **StrArr**(`value`: string[]): *[Arr](_arr_.md#arr)‹[Str](_primitives_.md#str)›*

*Defined in [arr.ts:117](https://github.com/OctoD/ftts/blob/b8036e1/src/arr.ts#L117)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`value` | string[] |  [] |

**Returns:** *[Arr](_arr_.md#arr)‹[Str](_primitives_.md#str)›*

___

###  concat

▸ **concat**<**T**, **U**>(...`arrs`: [Arr](_arr_.md#arr)‹T›[]): *[Arr](_arr_.md#arr)‹T›*

*Defined in [arr.ts:133](https://github.com/OctoD/ftts/blob/b8036e1/src/arr.ts#L133)*

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

*Defined in [arr.ts:39](https://github.com/OctoD/ftts/blob/b8036e1/src/arr.ts#L39)*

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

*Defined in [arr.ts:33](https://github.com/OctoD/ftts/blob/b8036e1/src/arr.ts#L33)*

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

*Defined in [arr.ts:43](https://github.com/OctoD/ftts/blob/b8036e1/src/arr.ts#L43)*

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

*Defined in [arr.ts:152](https://github.com/OctoD/ftts/blob/b8036e1/src/arr.ts#L152)*

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

*Defined in [arr.ts:143](https://github.com/OctoD/ftts/blob/b8036e1/src/arr.ts#L143)*

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

*Defined in [arr.ts:167](https://github.com/OctoD/ftts/blob/b8036e1/src/arr.ts#L167)*

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

*Defined in [arr.ts:177](https://github.com/OctoD/ftts/blob/b8036e1/src/arr.ts#L177)*

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

*Defined in [arr.ts:186](https://github.com/OctoD/ftts/blob/b8036e1/src/arr.ts#L186)*

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

*Defined in [arr.ts:201](https://github.com/OctoD/ftts/blob/b8036e1/src/arr.ts#L201)*

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

*Defined in [arr.ts:208](https://github.com/OctoD/ftts/blob/b8036e1/src/arr.ts#L208)*

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

*Defined in [arr.ts:57](https://github.com/OctoD/ftts/blob/b8036e1/src/arr.ts#L57)*

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

*Defined in [arr.ts:31](https://github.com/OctoD/ftts/blob/b8036e1/src/arr.ts#L31)*

**Returns:** *boolean*

___

###  pop

▸ **pop**<**T**, **U**>(`arr`: [Arr](_arr_.md#arr)‹T›): *[Arr](_arr_.md#arr)‹T›*

*Defined in [arr.ts:219](https://github.com/OctoD/ftts/blob/b8036e1/src/arr.ts#L219)*

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

*Defined in [arr.ts:227](https://github.com/OctoD/ftts/blob/b8036e1/src/arr.ts#L227)*

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

*Defined in [arr.ts:231](https://github.com/OctoD/ftts/blob/b8036e1/src/arr.ts#L231)*

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

*Defined in [arr.ts:239](https://github.com/OctoD/ftts/blob/b8036e1/src/arr.ts#L239)*

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

*Defined in [arr.ts:247](https://github.com/OctoD/ftts/blob/b8036e1/src/arr.ts#L247)*

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

*Defined in [arr.ts:274](https://github.com/OctoD/ftts/blob/b8036e1/src/arr.ts#L274)*

**Type parameters:**

▪ **T**: *[Type](../interfaces/_type_.type.md)‹U›*

▪ **U**

**Parameters:**

Name | Type |
------ | ------ |
`arr` | [Arr](_arr_.md#arr)‹T› |
`...items` | T[] |

**Returns:** *[Arr](_arr_.md#arr)‹T›*