/**
 * @module lib/cocktail-sort
 * @license MIT Copyright 2014 Daniel Imms (http://www.growingwiththeweb.com)
 */
'use strict';

var attachObserver = require('./common/attach-observer');
var defaultSwap = require('./common/default-swap');
var exposeCompareObserver = require('./common/expose-compare-observer');
var exposeSwapObserver = require('./common/expose-swap-observer');
var wrapCompare = require('./common/wrap-compare');

/**
 * Sorts an array using cocktail sort.
 * @param {Array} array The array to sort.
 * @param {function} compare The compare function.
 * @param {function} swap A function to call when the swap operation is
 * performed. This can be used to listen in on internals of the algorithm.
 * @returns The sorted array.
 */
function sort(array, compare, swap) {
  var start = -1;
  var end = array.length - 2;
  var swapped;
  var i;

  do {
    swapped = false;
    for (i = ++start; i <= end; i++) {
      if (compare(array, i, i + 1) > 0) {
        swap(array, i, i + 1);
        swapped = true;
      }
    }

    if (!swapped) {
      break;
    }

    swapped = false;
    for (i = --end; i >= start; i--) {
      if (compare(array, i, i + 1) > 0) {
        swap(array, i, i + 1);
        swapped = true;
      }
    }
  } while (swapped);

  return array;
}

/**
 * Sorts an array using cocktail sort.
 * @param {Array} array The array to sort.
 * @param {function} customCompare A custom compare function.
 * @returns The sorted array.
 */
function sortExternal(array, customCompare) {
  var compare = wrapCompare(customCompare, sortExternal.compareObserver);
  var swap = attachObserver(defaultSwap, sortExternal.swapObserver);
  return sort(array, compare, swap);
};

exposeCompareObserver(sortExternal);
exposeSwapObserver(sortExternal);

module.exports = sortExternal;
