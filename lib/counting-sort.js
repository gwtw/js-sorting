/**
 * @license
 * js-sorting <http://github.com/Tyriar/js-sorting>
 * Copyright 2014 Daniel Imms <http://www.growingwiththeweb.com>
 * Released under the MIT license <http://github.com/Tyriar/js-sorting/blob/master/LICENSE>
 */
'use strict';

/**
 * Sorts an array using counting sort.
 * @param {Array} array The array to sort.
 * @param {number} maxValue The max value for the counting sort.
 */
function sortWithMax(array, maxValue) {
  var buckets = new Array(maxValue + 1);
  var sortedIndex = 0;
  var i;

  for (i = 0; i < array.length; i++) {
    if (!buckets[array[i]]) {
      buckets[array[i]] = 0;
    }
    buckets[array[i]]++;
  }

  for (i = 0; i < buckets.length; i++) {
    while (buckets[i] > 0) {
      array[sortedIndex++] = i;
      buckets[i]--;
    }
  }

  return array;
}

/**
 * Sorts an array using counting sort.
 * @param {Array} array The array to sort.
 * @param {number} maxValue The max value for the counting sort.
 * @param {number} minValue The min value for the counting sort.
 * @returns The sorted array.
 */
function sortWithMinAndMax(array, maxValue, minValue) {
  if (array.length === 0) {
    return array;
  }

  var rangeSize = maxValue - minValue;
  var buckets = new Array(rangeSize);
  var sortedIndex = 0;
  var i;

  for (i = 0; i < array.length; i++) {
    // Change the value to a zero-based index
    var bucketIndex = array[i] - minValue;
    if (!buckets[bucketIndex]) {
      buckets[bucketIndex] = 0;
    }
    buckets[bucketIndex]++;
  }

  for (i = 0; i < buckets.length; i++) {
    while (buckets[i] > 0) {
      // Change the index to the correct value
      array[sortedIndex++] = i + minValue;
      buckets[i]--;
    }
  }

  return array;
}

/**
 * Sorts an array using counting sort.
 * @param {Array} array The array to sort.
 * @param {Object} maxValue The max value in the array.
 * @param {Object} minValue (Optional) The min value in the array.
 * @returns The sorted array.
 */
module.exports = function (array, maxValue, minValue) {
  if (arguments.length === 2) {
    return sortWithMax(array, maxValue);
  }
  if (arguments.length === 3) {
    return sortWithMinAndMax(array, maxValue, minValue);
  }
  throw 'Cannot sort with counting sort with ' + arguments.length +
    ' arguments';
};
