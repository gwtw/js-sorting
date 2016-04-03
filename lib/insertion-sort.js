/**
 * @module lib/insertion-sort
 * @license MIT Copyright 2014 Daniel Imms (http://www.growingwiththeweb.com)
 */
'use strict';

var attachObserver = require('./common/attach-observer');
var defaultCompare = require('./common/default-compare');
//var exposeCompareObserver = require('./common/expose-compare-observer');

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
function sortExternal(array, customCompare, shiftObserver) {
  var compare = customCompare || defaultCompare;
  return sort(array, compare, shiftObserver);
};

// TODO: Re-enable when it works with shifted elements
//exposeCompareObserver(sortExternal);

module.exports = sortExternal;
