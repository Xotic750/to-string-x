import isSymbol from 'is-symbol';
var ERROR_MESSAGE = 'Cannot convert a Symbol value to a string';
var castString = ERROR_MESSAGE.constructor;
/**
 * The abstract operation ToString converts argument to a value of type String.
 *
 * @param {*} [value] - The value to convert to a string.
 * @throws {TypeError} If `value` is a Symbol.
 * @returns {string} The converted value.
 */

export default function ToString(value) {
  if (isSymbol(value)) {
    throw new TypeError(ERROR_MESSAGE);
  }

  return castString(value);
}

//# sourceMappingURL=to-string-x.esm.js.map