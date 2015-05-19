/**
 * @license
 * js-sorting <http://github.com/Tyriar/js-sorting>
 * Copyright 2014-2015 Daniel Imms <http://www.growingwiththeweb.com>
 * Released under the MIT license <http://github.com/Tyriar/js-sorting/blob/master/LICENSE>
 */
'use strict';

var defaultCompare = require('./common/default-compare');
var defaultSwap = require('./common/default-swap');

function sort(array, left, right, compare, swap) {
  if (left < right) {
    var pivot = partitionRandom(array, left, right, compare, swap);
    sort(array, left, pivot - 1, compare, swap);
    sort(array, pivot + 1, right, compare, swap);
  }
  return array;
}

function partitionRandom(array, left, right, compare, swap) {
  var pivot = left + Math.floor(Math.random() * (right - left));
  if (pivot !== right) {
    swap(array, right, pivot);
  }
  return partitionRight(array, left, right, compare, swap);
}

function partitionRight(array, left, right, compare, swap) {
  var pivot = array[right];
  var mid = left;

  for (var i = mid; i < right; i++) {
    if (compare(array[i], pivot) <= 0) {
      if (i !== mid) {
        swap(array, i, mid);
      }
      mid++;
    }
  }
  if (right !== mid) {
    swap(array, right, mid);
  }

  return mid;
}

module.exports = function (array, customCompare, customSwap) {
  var swap = customSwap || defaultSwap;
  var compare = customCompare || defaultCompare;
  return sort(array, 0, array.length - 1, compare, swap);
};
