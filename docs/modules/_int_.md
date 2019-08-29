**[ftts](../README.md)**

[Globals](../README.md) › ["int"](_int_.md)

# External module: "int"

## Index

### Variables

* [INT16_MAX](_int_.md#const-int16_max)
* [INT16_MIN](_int_.md#const-int16_min)
* [INT32_MAX](_int_.md#const-int32_max)
* [INT32_MIN](_int_.md#const-int32_min)
* [INT8_MAX](_int_.md#const-int8_max)
* [INT8_MIN](_int_.md#const-int8_min)
* [Int16](_int_.md#const-int16)
* [Int32](_int_.md#const-int32)
* [Int8](_int_.md#const-int8)
* [UINT16_MAX](_int_.md#const-uint16_max)
* [UINT16_MIN](_int_.md#const-uint16_min)
* [UINT32_MAX](_int_.md#const-uint32_max)
* [UINT32_MIN](_int_.md#const-uint32_min)
* [UINT8_MAX](_int_.md#const-uint8_max)
* [UINT8_MIN](_int_.md#const-uint8_min)
* [Uint16](_int_.md#const-uint16)
* [Uint32](_int_.md#const-uint32)
* [Uint8](_int_.md#const-uint8)
* [int16](_int_.md#const-int16)
* [int16Trait](_int_.md#const-int16trait)
* [int32](_int_.md#const-int32)
* [int32Trait](_int_.md#const-int32trait)
* [int8](_int_.md#const-int8)
* [int8Trait](_int_.md#const-int8trait)
* [uint16](_int_.md#const-uint16)
* [uint16Trait](_int_.md#const-uint16trait)
* [uint32](_int_.md#const-uint32)
* [uint32Trait](_int_.md#const-uint32trait)
* [uint8](_int_.md#const-uint8)
* [uint8Trait](_int_.md#const-uint8trait)

### Functions

* [createIntValidator](_int_.md#createintvalidator)

## Variables

### `Const` INT16_MAX

• **INT16_MAX**: *number* =  Math.floor(UINT16_MAX / 2)

*Defined in [int.ts:13](https://github.com/OctoD/ftts/blob/b8036e1/src/int.ts#L13)*

___

### `Const` INT16_MIN

• **INT16_MIN**: *number* =  ~INT16_MAX

*Defined in [int.ts:14](https://github.com/OctoD/ftts/blob/b8036e1/src/int.ts#L14)*

___

### `Const` INT32_MAX

• **INT32_MAX**: *number* =  Math.floor(UINT32_MAX / 2)

*Defined in [int.ts:15](https://github.com/OctoD/ftts/blob/b8036e1/src/int.ts#L15)*

___

### `Const` INT32_MIN

• **INT32_MIN**: *number* =  ~INT32_MAX

*Defined in [int.ts:16](https://github.com/OctoD/ftts/blob/b8036e1/src/int.ts#L16)*

___

### `Const` INT8_MAX

• **INT8_MAX**: *number* =  Math.floor(UINT8_MAX / 2)

*Defined in [int.ts:11](https://github.com/OctoD/ftts/blob/b8036e1/src/int.ts#L11)*

___

### `Const` INT8_MIN

• **INT8_MIN**: *number* =  ~INT8_MAX

*Defined in [int.ts:12](https://github.com/OctoD/ftts/blob/b8036e1/src/int.ts#L12)*

___

### `Const` Int16

• **Int16**: *function* =  impl(num, int16Trait)

*Defined in [int.ts:62](https://github.com/OctoD/ftts/blob/b8036e1/src/int.ts#L62)*

#### Type declaration:

▸ (`arg`: K): *T & U*

**Parameters:**

Name | Type |
------ | ------ |
`arg` | K |

___

### `Const` Int32

• **Int32**: *function* =  impl(num, int32Trait)

*Defined in [int.ts:63](https://github.com/OctoD/ftts/blob/b8036e1/src/int.ts#L63)*

#### Type declaration:

▸ (`arg`: K): *T & U*

**Parameters:**

Name | Type |
------ | ------ |
`arg` | K |

___

### `Const` Int8

• **Int8**: *function* =  impl(num, int8Trait)

*Defined in [int.ts:61](https://github.com/OctoD/ftts/blob/b8036e1/src/int.ts#L61)*

#### Type declaration:

▸ (`arg`: K): *T & U*

**Parameters:**

Name | Type |
------ | ------ |
`arg` | K |

___

### `Const` UINT16_MAX

• **UINT16_MAX**: *65535* = 65535

*Defined in [int.ts:7](https://github.com/OctoD/ftts/blob/b8036e1/src/int.ts#L7)*

___

### `Const` UINT16_MIN

• **UINT16_MIN**: *0* = 0

*Defined in [int.ts:6](https://github.com/OctoD/ftts/blob/b8036e1/src/int.ts#L6)*

___

### `Const` UINT32_MAX

• **UINT32_MAX**: *4294967295* = 4294967295

*Defined in [int.ts:9](https://github.com/OctoD/ftts/blob/b8036e1/src/int.ts#L9)*

___

### `Const` UINT32_MIN

• **UINT32_MIN**: *0* = 0

*Defined in [int.ts:8](https://github.com/OctoD/ftts/blob/b8036e1/src/int.ts#L8)*

___

### `Const` UINT8_MAX

• **UINT8_MAX**: *256* = 256

*Defined in [int.ts:5](https://github.com/OctoD/ftts/blob/b8036e1/src/int.ts#L5)*

___

### `Const` UINT8_MIN

• **UINT8_MIN**: *0* = 0

*Defined in [int.ts:4](https://github.com/OctoD/ftts/blob/b8036e1/src/int.ts#L4)*

___

### `Const` Uint16

• **Uint16**: *function* =  impl(num, uint16Trait)

*Defined in [int.ts:66](https://github.com/OctoD/ftts/blob/b8036e1/src/int.ts#L66)*

#### Type declaration:

▸ (`arg`: K): *T & U*

**Parameters:**

Name | Type |
------ | ------ |
`arg` | K |

___

### `Const` Uint32

• **Uint32**: *function* =  impl(num, uint32Trait)

*Defined in [int.ts:67](https://github.com/OctoD/ftts/blob/b8036e1/src/int.ts#L67)*

#### Type declaration:

▸ (`arg`: K): *T & U*

**Parameters:**

Name | Type |
------ | ------ |
`arg` | K |

___

### `Const` Uint8

• **Uint8**: *function* =  impl(num, uint8Trait)

*Defined in [int.ts:65](https://github.com/OctoD/ftts/blob/b8036e1/src/int.ts#L65)*

#### Type declaration:

▸ (`arg`: K): *T & U*

**Parameters:**

Name | Type |
------ | ------ |
`arg` | K |

___

### `Const` int16

• **int16**: *[Type](../interfaces/_type_.type.md)‹number› & object* =  Int16(0)

*Defined in [int.ts:70](https://github.com/OctoD/ftts/blob/b8036e1/src/int.ts#L70)*

___

### `Const` int16Trait

• **int16Trait**: *object* =  create(
  createIntValidator(INT16_MIN, INT16_MAX, true)
)

*Defined in [int.ts:45](https://github.com/OctoD/ftts/blob/b8036e1/src/int.ts#L45)*

#### Type declaration:

* **check**(`value`: unknown): *boolean*

* **checker**(): *checker*

* **signed**(): *boolean*

___

### `Const` int32

• **int32**: *[Type](../interfaces/_type_.type.md)‹number› & object* =  Int32(0)

*Defined in [int.ts:71](https://github.com/OctoD/ftts/blob/b8036e1/src/int.ts#L71)*

___

### `Const` int32Trait

• **int32Trait**: *object* =  create(
  createIntValidator(INT32_MIN, INT32_MAX, true)
)

*Defined in [int.ts:48](https://github.com/OctoD/ftts/blob/b8036e1/src/int.ts#L48)*

#### Type declaration:

* **check**(`value`: unknown): *boolean*

* **checker**(): *checker*

* **signed**(): *boolean*

___

### `Const` int8

• **int8**: *[Type](../interfaces/_type_.type.md)‹number› & object* =  Int8(0)

*Defined in [int.ts:69](https://github.com/OctoD/ftts/blob/b8036e1/src/int.ts#L69)*

___

### `Const` int8Trait

• **int8Trait**: *object* =  create(createIntValidator(INT8_MIN, INT8_MAX, true))

*Defined in [int.ts:44](https://github.com/OctoD/ftts/blob/b8036e1/src/int.ts#L44)*

#### Type declaration:

* **check**(`value`: unknown): *boolean*

* **checker**(): *checker*

* **signed**(): *boolean*

___

### `Const` uint16

• **uint16**: *[Type](../interfaces/_type_.type.md)‹number› & object* =  Uint16(0)

*Defined in [int.ts:74](https://github.com/OctoD/ftts/blob/b8036e1/src/int.ts#L74)*

___

### `Const` uint16Trait

• **uint16Trait**: *object* =  create(
  createIntValidator(UINT16_MIN, UINT16_MAX, false)
)

*Defined in [int.ts:54](https://github.com/OctoD/ftts/blob/b8036e1/src/int.ts#L54)*

#### Type declaration:

* **check**(`value`: unknown): *boolean*

* **checker**(): *checker*

* **signed**(): *boolean*

___

### `Const` uint32

• **uint32**: *[Type](../interfaces/_type_.type.md)‹number› & object* =  Uint32(0)

*Defined in [int.ts:75](https://github.com/OctoD/ftts/blob/b8036e1/src/int.ts#L75)*

___

### `Const` uint32Trait

• **uint32Trait**: *object* =  create(
  createIntValidator(UINT32_MIN, UINT32_MAX, false)
)

*Defined in [int.ts:57](https://github.com/OctoD/ftts/blob/b8036e1/src/int.ts#L57)*

#### Type declaration:

* **check**(`value`: unknown): *boolean*

* **checker**(): *checker*

* **signed**(): *boolean*

___

### `Const` uint8

• **uint8**: *[Type](../interfaces/_type_.type.md)‹number› & object* =  Uint8(0)

*Defined in [int.ts:73](https://github.com/OctoD/ftts/blob/b8036e1/src/int.ts#L73)*

___

### `Const` uint8Trait

• **uint8Trait**: *object* =  create(
  createIntValidator(UINT8_MIN, UINT8_MAX, false)
)

*Defined in [int.ts:51](https://github.com/OctoD/ftts/blob/b8036e1/src/int.ts#L51)*

#### Type declaration:

* **check**(`value`: unknown): *boolean*

* **checker**(): *checker*

* **signed**(): *boolean*

## Functions

###  createIntValidator

▸ **createIntValidator**(`min`: number, `max`: number, `signed`: boolean): *object*

*Defined in [int.ts:18](https://github.com/OctoD/ftts/blob/b8036e1/src/int.ts#L18)*

**Parameters:**

Name | Type |
------ | ------ |
`min` | number |
`max` | number |
`signed` | boolean |

**Returns:** *object*

* **check**(`value`: unknown): *boolean*

* **checker**(): *checker*

* **signed**(): *boolean*