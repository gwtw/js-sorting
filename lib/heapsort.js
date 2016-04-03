/**
 * @module lib/heapsort
 * @license MIT Copyright 2014 Daniel Imms (http://www.growingwiththeweb.com)
 */
'use strict';

var attachObserver = require('./common/attach-observer');
var defaultSwap = require('./common/default-swap');
var exposeCompareObserver = require('./common/expose-compare-observer');
var exposeSwapObserver = require('./common/expose-swap-observer');
var wrapCompare = require('./common/wrap-compare');

/**
 * Heapify an array.
 * @param {Array} array The array to build a heapify.
 * @param {number} heapSize The size of the heap.
 * @param {number} i The index of the array to heapify.
 * @param {function} compare The compare function.
 * @param {function} swap A function to call when the swap operation is
 * performed. This can be used to listen in on internals of the algorithm.
 * @returns The sorted array.
 */
function heapify(array, heapSize, i, compare, swap) {
  var left = i * 2 + 1;
  var right = i * 2 + 2;
  var largest = i;

  if (left < heapSize && compare(array, left, largest) > 0) {
    largest = left;
  }
  if (right < heapSize && compare(array, right, largest) > 0) {
    largest = right;
  }

  if (largest !== i) {
    swap(array, i, largest);
    heapify(array, heapSize, largest, compare, swap);
  }
}

/**
 * Build a heap out of an array.
 * @param {Array} array The array to build a heap on.
 * @param {number} heapSize The size of the heap.
 * @param {function} compare The compare function.
 * @param {function} swap A function to call when the swap operation is
 * performed. This can be used to listen in on internals of the algorithm.
 * @returns The sorted array.
 */
function buildHeap(array, heapSize, compare, swap) {
  for (var i = Math.floor(array.length / 2); i >= 0; i--) {
    heapify(array, heapSize, i, compare, swap);
  }
}

/**
 * Sorts an array using heapsort.
 * @param {Array} array The array to sort.
 * @param {function} compare The compare function.
 * @param {function} swap A function to call when the swap operation is
 * performed. This can be used to listen in on internals of the algorithm.
 * @returns The sorted array.
 */
function sort(array, compare, swap) {
  var heapSize = array.length;
  buildHeap(array, heapSize, compare, swap);
  while (heapSize > 1) {
    swap(array, 0, --heapSize);
    heapify(array, heapSize, 0, compare, swap);
  }
  return array;
}

/**
 * Sorts an array.
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
