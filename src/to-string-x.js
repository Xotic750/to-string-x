import isSymbol from 'is-symbol';

const ERROR_MESSAGE = 'Cannot convert a Symbol value to a string';
const castString = ERROR_MESSAGE.constructor;
/**
 * The abstract operation ToString converts argument to a value of type String.
 *
 * @param {*} [value] - The value to convert to a string.
 * @throws {TypeError} If `value` is a Symbol.
 * @returns {string} The converted value.
 */
const ToString = function ToString(value) {
  if (isSymbol(value)) {
    throw new TypeError(ERROR_MESSAGE);
  }

  return castString(value);
};

export default ToString;
