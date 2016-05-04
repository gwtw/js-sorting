/**
 * @module lib/quicksort
 * @license MIT Copyright 2014 Daniel Imms (http://www.growingwiththeweb.com)
 */
'use strict';

var attachObserver = require('./common/attach-observer');
var defaultSwap = require('./common/default-swap');
var exposeCompareObserver = require('./common/expose-compare-observer');
var exposeSwapObserver = require('./common/expose-swap-observer');
var wrapCompare = require('./common/wrap-compare');

/**
 * Sorts an array using quicksort.
 * @param {Array} array The array to sort.
 * @param {number} left The index to sort from.
 * @param {number} right The index to sort to.
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
 * @param {number} left The index to sort from.
 * @param {number} right The index to sort to.
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
 * @param {number} left The index to sort from.
 * @param {number} right The index to sort to.
 * @param {function} compare The compare function.
 * @param {function} swapObserver A function to call when the swap operation is
 * performed. This can be used to listen in on internals of the algorithm.
 * @returns The pivot.
 */
function partitionRight(array, left, right, compare, swap) {
  var mid = left;

  for (var i = mid; i < right; i++) {
    if (compare(array, i, right) <= 0) {
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
 * @returns The sorted array.
 */
function sortExternal(array, customCompare) {
  var compare = wrapCompare(customCompare, sortExternal.compareObserver);
  var swap = attachObserver(defaultSwap, sortExternal.swapObserver);
  return sort(array, 0, array.length - 1, compare, swap);
};

exposeCompareObserver(sortExternal);
exposeSwapObserver(sortExternal);

module.exports = sortExternal;
