<a
  href="https://travis-ci.org/Xotic750/to-string-x"
  title="Travis status">
<img
  src="https://travis-ci.org/Xotic750/to-string-x.svg?branch=master"
  alt="Travis status" height="18">
</a>
<a
  href="https://david-dm.org/Xotic750/to-string-x"
  title="Dependency status">
<img src="https://david-dm.org/Xotic750/to-string-x/status.svg"
  alt="Dependency status" height="18"/>
</a>
<a
  href="https://david-dm.org/Xotic750/to-string-x?type=dev"
  title="devDependency status">
<img src="https://david-dm.org/Xotic750/to-string-x/dev-status.svg"
  alt="devDependency status" height="18"/>
</a>
<a
  href="https://badge.fury.io/js/to-string-x"
  title="npm version">
<img src="https://badge.fury.io/js/to-string-x.svg"
  alt="npm version" height="18">
</a>
<a
  href="https://www.jsdelivr.com/package/npm/to-string-x"
  title="jsDelivr hits">
<img src="https://data.jsdelivr.com/v1/package/npm/to-string-x/badge?style=rounded"
  alt="jsDelivr hits" height="18">
</a>
<a
  href="https://bettercodehub.com/results/Xotic750/to-string-x"
  title="bettercodehub score">
<img src="https://bettercodehub.com/edge/badge/Xotic750/to-string-x?branch=master"
  alt="bettercodehub score" height="18">
</a>

<a name="module_to-string-x"></a>

## to-string-x

ES6-compliant shim for ToString.

**See**: [7.1.12 ToString ( argument )](http://www.ecma-international.org/ecma-262/6.0/#sec-tostring)  

<a name="exp_module_to-string-x--module.exports"></a>

### `module.exports(value)` ⇒ <code>string</code> ⏏

The abstract operation ToString converts argument to a value of type String.

**Kind**: Exported function  
**Returns**: <code>string</code> - The converted value.  
**Throws**:

- <code>TypeError</code> If `value` is a Symbol.

| Param | Type            | Description                       |
| ----- | --------------- | --------------------------------- |
| value | <code>\*</code> | The value to convert to a string. |

**Example**

```js
import $toString from 'to-string-x';

console.log($toString()); // 'undefined'
console.log($toString(null)); // 'null'
console.log($toString('abc')); // 'abc'
console.log($toString(true)); // 'true'
console.log($toString(Symbol('foo'))); // TypeError
console.log($toString(Symbol.iterator)); // TypeError
console.log($toString(Object(Symbol.iterator))); // TypeError
console.log($toString(Object.create(null))); // TypeError
```
