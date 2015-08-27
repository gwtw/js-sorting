/**
 * @module lib/common/default-swap
 * @license MIT Copyright 2014 Daniel Imms (http://www.growingwiththeweb.com)
 */
'use strict';

/**
 * Swaps two values within an array.
 * @param {Array} array The array.
 * @param {number} a The first index to swap.
 * @param {number} a The second index to swap.
 */
module.exports = function (array, a, b) {
  var temp = array[a];
  array[a] = array[b];
  array[b] = temp;
};
