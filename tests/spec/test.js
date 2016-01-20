/*jslint maxlen:80, es6:true, white:true */

/*jshint bitwise:true, camelcase:true, curly:true, eqeqeq:true, forin:true,
  freeze:true, futurehostile:true, latedef:true, newcap:true, nocomma:true,
  nonbsp:true, singleGroups:true, strict:true, undef:true, unused:true,
  es3:false, esnext:true, plusplus:true, maxparams:1, maxdepth:2,
  maxstatements:12, maxcomplexity:4 */

/*global JSON:true, expect, module, require, describe, xit, it, returnExports */

(function () {
  'use strict';

  var hasSymbol = typeof Symbol === 'function' &&
      typeof Symbol() === 'symbol',
    ifSymbolIt = hasSymbol ? it : xit,
    $toString;
  if (typeof module === 'object' && module.exports) {
    require('es5-shim');
    require('es5-shim/es5-sham');
    if (typeof JSON === 'undefined') {
      JSON = {};
    }
    require('json3').runInContext(null, JSON);
    require('es6-shim');
    $toString = require('../../index.js');
  } else {
    $toString = returnExports;
  }

  describe('Basic tests', function () {
    it('should return a string for everything', function () {
      function fn() {}
      var values = [true, 'abc', 1, null, undefined, fn, [], /r/],
          expected = values.map(String),
          actual = values.map($toString);
      expect(actual).toEqual(expected);
    });

    ifSymbolIt('should throw for Symbol', function () {
      var sym = Symbol('foo');
      expect(function () {
        $toString(sym);
      }).toThrow();
      expect(function () {
        $toString(Object(sym));
      }).toThrow();
    });
  });
}());
