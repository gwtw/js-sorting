/**
 * @license
 * js-sorting <http://github.com/Tyriar/js-sorting>
 * Copyright 2014-2015 Daniel Imms <http://www.growingwiththeweb.com>
 * Released under the MIT license <http://github.com/Tyriar/js-sorting/blob/master/LICENSE>
 */
'use strict';

var defaultCompare = require('./common/default-compare');

// Called when an element is being shifted from index `from` to index `to`,
// swapping all elements in-between.
//
// Example:
// b, c, d, e, a -> shift(4, 0) -> a, b, c, d, e
//shift: function (from, to) { },

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

module.exports = function (array, customCompare, shiftObserver) {
  var compare = customCompare || defaultCompare;
  return sort(array, compare, shiftObserver);
};
