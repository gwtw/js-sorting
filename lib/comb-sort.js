/**
 * @module lib/comb-sort
 * @license MIT Copyright 2014 Daniel Imms (http://www.growingwiththeweb.com)
 */
'use strict';

var attachObserver = require('./common/attach-observer');
var defaultSwap = require('./common/default-swap');
var exposeCompareObserver = require('./common/expose-compare-observer');
var exposeSwapObserver = require('./common/expose-swap-observer');
var wrapCompare = require('./common/wrap-compare');

/**
 * Sorts an array using comb sort.
 * @param {Array} array The array to sort.
 * @param {function} compare The compare function.
 * @param {function} swap A function to call when the swap operation is
 * performed. This can be used to listen in on internals of the algorithm.
 * @returns The sorted array.
 */
function sort(array, compare, swap) {
  var gap = array.length;
  var shrinkFactor = 1.3;
  var swapped;

  while (gap > 1 || swapped) {
    if (gap > 1) {
      gap = Math.floor(gap / shrinkFactor);
    }

    swapped = false;

    for (var i = 0; gap + i < array.length; ++i) {
      if (compare(array, i, i + gap) > 0) {
        swap(array, i, i + gap);
        swapped = true;
      }
    }
  }

  return array;
}

/**
 * Sorts an array using comb sort.
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
