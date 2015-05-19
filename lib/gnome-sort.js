/**
 * @license
 * js-sorting <http://github.com/Tyriar/js-sorting>
 * Copyright 2014-2015 Daniel Imms <http://www.growingwiththeweb.com>
 * Released under the MIT license <http://github.com/Tyriar/js-sorting/blob/master/LICENSE>
 */
'use strict';

var defaultCompare = require('./common/default-compare');
var defaultSwap = require('./common/default-swap');

function sort(array, compare, swap) {
  var pos = 1;

  while (pos < array.length) {
    if (compare(array[pos], array[pos - 1]) >= 0) {
      pos++;
    } else {
      swap(array, pos, pos - 1);
      if (pos > 1) {
        pos--;
      }
    }
  }

  return array;
}

module.exports = function (array, customCompare, customSwap) {
  var compare = customCompare || defaultCompare;
  var swap = customSwap || defaultSwap;
  return sort(array, compare, swap);
};
