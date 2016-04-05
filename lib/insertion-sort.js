/**
 * @module lib/insertion-sort
 * @license MIT Copyright 2014 Daniel Imms (http://www.growingwiththeweb.com)
 */
'use strict';

var attachObserver = require('./common/attach-observer');
var defaultCompare = require('./common/default-compare');
//var exposeCompareObserver = require('./common/expose-compare-observer');
var exposeShiftObserver = require('./common/expose-shift-observer');

/**
 * Sorts an array using insertion sort.
 * @param {Array} array The array to sort.
 * @param {function} compare The compare function.
 * @returns The sorted array.
 */
function sort(array, compare) {
  for (var i = 1; i < array.length; i++) {
    var item = array[i];
    var indexHole = i;
    while (indexHole > 0 && compare(array[indexHole - 1], item) > 0) {
      array[indexHole] = array[--indexHole];
    }
    array[indexHole] = item;
    if (sortExternal.shiftObserver) {
      sortExternal.shiftObserver(i, indexHole);
    }
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
  var compare = customCompare || defaultCompare;
  return sort(array, compare);
};

// TODO: Re-enable when it works with shifted elements
//exposeCompareObserver(sortExternal);
exposeShiftObserver(sortExternal);

module.exports = sortExternal;
