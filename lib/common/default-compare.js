/**
 * @module lib/common/default-compare
 * @license MIT Copyright 2014 Daniel Imms (http://www.growingwiththeweb.com)
 */
'use strict';

/**
 * Compares two values.
 * @param {number|string} a The first value.
 * @param {number|string} b The second value.
 * @returns 1 when a > b, -1 when a < b, otherwise 0.
 */
module.exports = function (a, b) {
  if (a > b) {
    return 1;
  }
  if (a < b) {
    return -1;
  }
  return 0;
};
