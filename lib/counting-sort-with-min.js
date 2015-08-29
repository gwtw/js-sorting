/**
 * @module lib/counting-sort-with-min
 * @license MIT Copyright 2014 Daniel Imms (http://www.growingwiththeweb.com)
 */
'use strict';

/**
 * Sorts an array using counting sort.
 * @param {Array} array The array to sort.
 * @param {number} minValue The min value for the counting sort.
 * @param {number} maxValue The max value for the counting sort.
 * @returns The sorted array.
 */
function sort(array, minValue, maxValue) {
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
 * @param {Object} minValue The min value in the array.
 * @param {Object} maxValue The max value in the array.
 * @returns The sorted array.
 */
module.exports = sort;
