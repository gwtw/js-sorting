/**
 * @module lib/insertion-sort
 * @license
 * js-sorting <http://github.com/Tyriar/js-sorting>
 * Copyright 2014 Daniel Imms <http://www.growingwiththeweb.com>
 * Released under the MIT license <http://github.com/Tyriar/js-sorting/blob/master/LICENSE>
 */
'use strict';

var defaultCompare = require('./common/default-compare');

/**
 * Sorts an array using insertion sort.
 * @param {Array} array The array to sort.
 * @param {function} compare The compare function.
 * @param {function} shiftObserver An optional function that takes a 'from' index
 * and the index in which it was shifted to, allow listening to the internals of
 * the algorithm. For example, for the array [a, b, c], shifting a two indexes to
 * the right resulting in [b, c, a] would trigger shiftObserver(0, 2).
 * @returns The sorted array.
 */
function sort(array, compare, shiftObserver) {
  for (var i = 1; i < array.length; i++) {
    var item = array[i];
    var indexHole = i;
    while (indexHole > 0 && compare(array[indexHole - 1], item) > 0) {
      array[indexHole] = array[--indexHole];
    }
    array[indexHole] = item;
    if (shiftObserver) {
      shiftObserver(i, indexHole);
    }
  }

  return array;
}

/**
 * Sorts an array.
 * @param {Array} array The array to sort.
 * @param {function} customCompare A custom compare function.
 * @param {function} shiftObserver A function to call when the shift operation
 * is performed. This can be used to listen in on internals of the algorithm.
 * @returns The sorted array.
 */
module.exports = function (array, customCompare, shiftObserver) {
  var compare = customCompare || defaultCompare;
  return sort(array, compare, shiftObserver);
};
