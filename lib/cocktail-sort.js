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
  var start = -1;
  var end = array.length - 2;
  var swapped;
  var i;

  do {
    swapped = false;
    for (i = ++start; i <= end; i++) {
      if (compare(array[i], array[i + 1]) > 0) {
        swap(array, i, i + 1);
        swapped = true;
      }
    }

    if (!swapped) {
      break;
    }

    swapped = false;
    for (i = --end; i >= start; i--) {
      if (compare(array[i], array[i + 1]) > 0) {
        swap(array, i, i + 1);
        swapped = true;
      }
    }
  } while (swapped);

  return array;
}

module.exports = function (array, customCompare, swapObserver) {
  var compare = customCompare || defaultCompare;
  var swap = defaultSwap;
  if (swapObserver) {
    swap = function (list, a, b) {
      swapObserver(list, a, b);
      defaultSwap(list, a, b);
    };
  }
  return sort(array, compare, swap);
};
