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

function sort(array, compare, swap) {
  for (var i = 0; i < array.length - 1; i++) {
    for (var j = 1; j < array.length - i; j++) {
      if (compare(array[j - 1], array[j]) > 0) {
        swap(array, j, j - 1);
      }
    }
  }
  return array;
}

/**
 * Sorts an array.
 * @param {Array} array The array to sort.
 * @param {function} customCompare A custom compare function.
 * @param {function} customSwap A custom swap function, this can be used to listen in on internals
 * of the algorithm.
 * @returns The sorted array.
 */
module.exports = function(array, customCompare, swapObserver) {
  var compare = customCompare || defaultCompare;
  var swap = attachObserver(defaultSwap, swapObserver);
  return sort(array, compare, swap);
};
