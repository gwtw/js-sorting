/**
 * @module lib/bubble-sort-optimised
 * @license MIT Copyright 2014 Daniel Imms (http://www.growingwiththeweb.com)
 */
'use strict';

var attachObserver = require('./common/attach-observer');
var defaultCompare = require('./common/default-compare');
var defaultSwap = require('./common/default-swap');

/**
 * Sorts an array using bubble sort.
 * @param {Array} array The array to sort.
 * @param {function} compare The compare function.
 * @param {function} swap A function to call when the swap operation is
 * performed. This can be used to listen in on internals of the algorithm.
 * @returns The sorted array.
 */
function sort(array, compare, swap) {
  var unsortedBelow = array.length;
  while (unsortedBelow !== 0) {
    var lastSwap = 0;
    for (var i = 1; i < unsortedBelow; i++) {
      if (compare(array[i - 1], array[i]) > 0) {
        swap(array, i, i - 1);
        lastSwap = i;
      }
    }
    unsortedBelow = lastSwap;
  }
  return array;
}

/**
 * Sorts an array using bubble sort.
 * @param {Array} array The array to sort.
 * @param {function} customCompare A custom compare function.
 * @param {function} swapObserver A function to call when the swap operation is
 * performed. This can be used to listen in on internals of the algorithm.
 * @returns The sorted array.
 */
module.exports = function(array, customCompare, swapObserver) {
  var compare = customCompare || defaultCompare;
  var swap = attachObserver(defaultSwap, swapObserver);
  return sort(array, compare, swap);
};
