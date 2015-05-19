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
  var gap = array.length;
  var shrinkFactor = 1.3;
  var swapped;

  while ((gap > 1) || swapped) {
    if (gap > 1) {
      gap = Math.floor(gap / shrinkFactor);
    }

    swapped = false;

    for (var i = 0; gap + i < array.length; ++i) {
      if (compare(array[i], array[i + gap]) > 0) {
        swap(array, i, i + gap);
        swapped = true;
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
