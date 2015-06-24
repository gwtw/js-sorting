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

/**
 * Sorts an array using quicksort.
 * @param {Array} array The array to sort.
 * @paran {number} left The index to sort from.
 * @paran {number} left The index to sort to.
 * @param {function} compare The compare function.
 * @param {function} swapObserver A function to call when the swap operation is
 * performed. This can be used to listen in on internals of the algorithm.
 * @returns The sorted array.
 */
function sort(array, left, right, compare, swap) {
  if (left < right) {
    var pivot = partitionRandom(array, left, right, compare, swap);
    sort(array, left, pivot - 1, compare, swap);
    sort(array, pivot + 1, right, compare, swap);
  }
  return array;
}

/**
 * Partition the array by selecting a random pivot and moving all elements less
 * than the pivot to a lesser index and all elements greater than the pivot to a
 * greater index.
 * @param {Array} array The array to sort.
 * @paran {number} left The index to sort from.
 * @paran {number} left The index to sort to.
 * @param {function} compare The compare function.
 * @param {function} swapObserver A function to call when the swap operation is
 * performed. This can be used to listen in on internals of the algorithm.
 * @returns The pivot.
 */
function partitionRandom(array, left, right, compare, swap) {
  var pivot = left + Math.floor(Math.random() * (right - left));
  if (pivot !== right) {
    swap(array, right, pivot);
  }
  return partitionRight(array, left, right, compare, swap);
}

/**
 * Partition the array using the right most element as the pivot by moving all
 * elements less than the pivot to a lesser index and all elements greater than
 * the pivot to a greater index.
 * @param {Array} array The array to sort.
 * @paran {number} left The index to sort from.
 * @paran {number} left The index to sort to.
 * @param {function} compare The compare function.
 * @param {function} swapObserver A function to call when the swap operation is
 * performed. This can be used to listen in on internals of the algorithm.
 * @returns The pivot.
 */
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

/**
 * Sorts an array using quicksort.
 * @param {Array} array The array to sort.
 * @param {function} customCompare A custom compare function.
 * @param {function} swapObserver A function to call when the swap operation is
 * performed. This can be used to listen in on internals of the algorithm.
 * @returns The sorted array.
 */
module.exports = function (array, customCompare, swapObserver) {
  var compare = customCompare || defaultCompare;
  var swap = attachObserver(defaultSwap, swapObserver);
  return sort(array, 0, array.length - 1, compare, swap);
};
