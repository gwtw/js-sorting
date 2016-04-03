/**
 * @module lib/gnome-sort
 * @license MIT Copyright 2014 Daniel Imms (http://www.growingwiththeweb.com)
 */
'use strict';

var attachObserver = require('./common/attach-observer');
var defaultSwap = require('./common/default-swap');
var exposeCompareObserver = require('./common/expose-compare-observer');
var exposeSwapObserver = require('./common/expose-swap-observer');
var wrapCompare = require('./common/wrap-compare');

/**
 * Sorts an array using gnome sort.
 * @param {Array} array The array to sort.
 * @param {function} compare The compare function.
 * @param {function} swap A function to call when the swap operation is
 * performed. This can be used to listen in on internals of the algorithm.
 * @returns The sorted array.
 */
function sort(array, compare, swap) {
  var pos = 1;

  while (pos < array.length) {
    if (compare(array, pos, pos - 1) >= 0) {
      pos++;
    } else {
      swap(array, pos, pos - 1);
      if (pos > 1) {
        pos--;
      }
    }
  }

  return array;
}

/**
 * Sorts an array using gnome sort.
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
