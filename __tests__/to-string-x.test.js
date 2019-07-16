import noop from 'lodash/noop';
import $toString from 'src/to-string-x';

const hasSymbol = typeof Symbol === 'function' && typeof Symbol('') === 'symbol';
const ifSymbolIt = hasSymbol ? it : xit;

describe('basic tests', function() {
  it('should return a string for everything', function() {
    expect.assertions(1);
    const values = [true, 'abc', 1, null, undefined, noop, [], /r/];

    const expected = values.map(String);
    const actual = values.map($toString);
    expect(actual).toStrictEqual(expected);
  });

  it('should throw for Object.create(null)', function() {
    expect.assertions(1);
    expect(function() {
      $toString(Object.create(null));
    }).toThrowErrorMatchingSnapshot();
  });

  ifSymbolIt('should throw for Symbol', function() {
    expect.assertions(2);

    const sym = Symbol('foo');
    expect(function() {
      $toString(sym);
    }).toThrowErrorMatchingSnapshot();

    const symObj = Object(sym);
    expect(function() {
      $toString(Object(symObj));
    }).toThrowErrorMatchingSnapshot();
  });
});
