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
  for (var i = 0; i < array.length - 1; i++) {
    var minIndex = i;

    for (var j = i + 1; j < array.length; j++) {
      if (compare(array[j], array[minIndex]) < 0) {
        minIndex = j;
      }
    }

    if (minIndex !== i) {
      swap(array, i, minIndex);
    }
  }

  return array;
}

module.exports = function (array, customCompare, customSwap) {
  var swap = customSwap || defaultSwap;
  var compare = customCompare || defaultCompare;
  return sort(array, compare, swap);
};
