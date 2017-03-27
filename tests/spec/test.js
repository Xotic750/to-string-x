/* jslint maxlen:80, es6:true, white:true */

/* jshint bitwise:true, camelcase:true, curly:true, eqeqeq:true, forin:true,
   freeze:true, futurehostile:true, latedef:true, newcap:true, nocomma:true,
   nonbsp:true, singleGroups:true, strict:true, undef:true, unused:true,
   es3:false, esnext:true, plusplus:true, maxparams:1, maxdepth:2,
   maxstatements:12, maxcomplexity:4 */

/* eslint strict: 1, max-lines: 1, symbol-description: 1, max-nested-callbacks: 1,
   max-statements: 1 */

/* global JSON:true, expect, module, require, describe, xit, it, returnExports */

(function () { // eslint-disable-line no-extra-semi

  'use strict';

  var $toString;
  if (typeof module === 'object' && module.exports) {
    require('es5-shim');
    require('es5-shim/es5-sham');
    if (typeof JSON === 'undefined') {
      JSON = {};
    }
    require('json3').runInContext(null, JSON);
    require('es6-shim');
    var es7 = require('es7-shim');
    Object.keys(es7).forEach(function (key) {
      var obj = es7[key];
      if (typeof obj.shim === 'function') {
        obj.shim();
      }
    });
    $toString = require('../../index.js');
  } else {
    $toString = returnExports;
  }

  var hasSymbol = typeof Symbol === 'function' && typeof Symbol() === 'symbol';
  var ifSymbolIt = hasSymbol ? it : xit;

  describe('Basic tests', function () {
    it('should return a string for everything', function () {
      var values = [true, 'abc', 1, null, undefined, function () {}, [], /r/],
        expected = values.map(String),
        actual = values.map($toString);
      expect(actual).toEqual(expected);
    });

    ifSymbolIt('should throw for Symbol', function () {
      var sym = Symbol('foo');
      expect(function () {
        $toString(sym);
      }).toThrow();
      var symObj = Object(sym);
      expect(function () {
        $toString(Object(symObj));
      }).toThrow();
    });
  });
}());
