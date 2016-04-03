/**
 * @module lib/common/wrap-compare
 * @license MIT Copyright 2016 Daniel Imms (http://www.growingwiththeweb.com)
 */
'use strict';

var attachObserver = require('./attach-observer');
var defaultCompare = require('./default-compare');

/**
 * Wraps a compare function that takes 2 values with a function that takes an
 * array and 2 indexes. Then attaches a compare observer if provided.
 * @param {function} compare The original compare function that takes 2 values.
 * @param {function} compareObserver A function to call when the compare
 * operation is performed. This can be used to listen in on internals of the
 * algorithm.
 * @return The wrapped compare function.
 */
module.exports = function (customCompare, compareObserver) {
  var wrappedCompare = function (array, a, b) {
    return (customCompare || defaultCompare)(array[a], array[b])
  }
  if (compareObserver) {
    wrappedCompare = attachObserver(wrappedCompare, compareObserver);
  }
  return wrappedCompare;
}
