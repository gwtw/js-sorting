/**
 * @license
 * js-sorting <http://github.com/Tyriar/js-sorting>
 * Copyright 2014-2015 Daniel Imms <http://www.growingwiththeweb.com>
 * Released under the MIT license <http://github.com/Tyriar/js-sorting/blob/master/LICENSE>
 */
'use strict';

var defaultCompare = require('./common/default-compare');
var defaultSwap = require('./common/default-swap');

function sort(array, compare, swap) {
  var i;
  var sorted = false;

  while(!sorted) {
    sorted = true;
    for (i = 1; i < array.length - 1; i += 2) {
      if (compare(array[i], array[i + 1]) > 0) {
        swap(array, i, i + 1);
        sorted = false;
      }
    }

    for (i = 0; i < array.length - 1; i += 2) {
      if (compare(array[i], array[i + 1]) > 0) {
        swap(array, i, i + 1);
        sorted = false;
      }
    }
  }

  return array;
}

module.exports = function (array, customCompare, customSwap) {
  var compare = customCompare || defaultCompare;
  var swap = customSwap || defaultSwap;
  return sort(array, compare, swap);
};
