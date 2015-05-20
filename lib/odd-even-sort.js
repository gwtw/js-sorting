/**
 * @license
 * js-sorting <http://github.com/Tyriar/js-sorting>
 * Copyright 2014 Daniel Imms <http://www.growingwiththeweb.com>
 * Released under the MIT license <http://github.com/Tyriar/js-sorting/blob/master/LICENSE>
 */
'use strict';

var attachObserver = require('./common/attach-observer');
var defaultCompare = require('./common/default-compare');
var defaultSwap = require('./common/default-swap');

function innerSort(array, i, compare, swap) {
  var sorted = true;
  for (; i < array.length - 1; i += 2) {
    if (compare(array[i], array[i + 1]) > 0) {
      swap(array, i, i + 1);
      sorted = false;
    }
  }
  return sorted;
}

function sort(array, compare, swap) {
  var sorted = false;
  while (!sorted) {
    sorted = innerSort(array, 1, compare, swap);
    sorted = sorted && innerSort(array, 0, compare, swap);
  }
  return array;
}

module.exports = function (array, customCompare, swapObserver) {
  var compare = customCompare || defaultCompare;
  var swap = attachObserver(defaultSwap, swapObserver);
  return sort(array, compare, swap);
};
