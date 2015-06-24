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
 * Compares every second element of an array with its following element and
 * swaps it if not in order using a compare function.
 * @param {Array} array The array to sort.
 * @param {number} i The index to start at, should be either 0 or 1.
 * @param {function} compare The compare function.
 * @param {function} swap A function to call when the swap operation is
 * performed. This can be used to listen in on internals of the algorithm.
 * @returns The sorted array.
 */
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

/**
 * Sorts an array using odd even sort.
 * @param {Array} array The array to sort.
 * @param {function} compare The compare function.
 * @param {function} swap A function to call when the swap operation is
 * performed. This can be used to listen in on internals of the algorithm.
 * @returns The sorted array.
 */
function sort(array, compare, swap) {
  var sorted = false;
  while (!sorted) {
    sorted = innerSort(array, 1, compare, swap);
    sorted = sorted && innerSort(array, 0, compare, swap);
  }
  return array;
}

/**
 * Sorts an array using odd even sort.
 * @param {Array} array The array to sort.
 * @param {function} customCompare A custom compare function.
 * @param {function} swapObserver A function to call when the swap operation is
 * performed. This can be used to listen in on internals of the algorithm.
 * @returns The sorted array.
 */
module.exports = function (array, customCompare, swapObserver) {
  var compare = customCompare || defaultCompare;
  var swap = attachObserver(defaultSwap, swapObserver);
  return sort(array, compare, swap);
};
