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
  var pos = 1;

  while (pos < array.length) {
    if (compare(array[pos], array[pos - 1]) >= 0) {
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

module.exports = function (array, customCompare, swapObserver) {
  var compare = customCompare || defaultCompare;
  var swap = attachObserver(defaultSwap, swapObserver);
  return sort(array, compare, swap);
};