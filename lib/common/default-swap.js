/**
 * @license
 * js-sorting <http://github.com/Tyriar/js-sorting>
 * Copyright 2014-2015 Daniel Imms <http://www.growingwiththeweb.com>
 * Released under the MIT license <http://github.com/Tyriar/js-sorting/blob/master/LICENSE>
 */
'use strict';

/**
 * Swaps two values within an array.
 * @param {Array} array The array.
 * @param {int} a The first index to swap.
 * @param {int} a The second index to swap.
 */
module.exports = function (array, a, b) {
  var temp = array[a];
  array[a] = array[b];
  array[b] = temp;
};
