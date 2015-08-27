/**
 * @module lib/merge-sort-bottom-up
 * @license MIT Copyright 2014 Daniel Imms (http://www.growingwiththeweb.com)
 */
'use strict';

var defaultCompare = require('./common/default-compare');

/**
 * Merge a portion of the array.
 * @param {Array} array The array to merge.
 * @param {number} leftPosition The starting index of the array to merge.
 * @param {number} chunkSize The size of the portion of the array to merge.
 * @param {Array} workArray A work array the size of the array argument, this
 * parameter is for performance reasons so many arrays aren't created by the
 * algorithm.
 * @param {function} compare The compare function.
 * @returns The sorted array.
 */
function bottomUpMerge(
    array, leftPosition, chunkSize, workArray, compare) {
  var i;
  var rightPosition = leftPosition + chunkSize;
  var endPosition = Math.min(leftPosition + chunkSize * 2 - 1,
                             array.length - 1);
  var leftIndex = leftPosition;
  var rightIndex = rightPosition;

  for (i = 0; i <= endPosition - leftPosition; i++) {
    if (leftIndex < rightPosition &&
        (rightIndex > endPosition ||
        compare(array[leftIndex], array[rightIndex]) <= 0)) {
      workArray[i] = array[leftIndex++];
    } else {
      workArray[i] = array[rightIndex++];
    }
  }

  for (i = leftPosition; i <= endPosition; i++) {
    array[i] = workArray[i - leftPosition];
  }
}

/**
 * Sorts an array using bottom up merge sort.
 * @param {Array} array The array to sort.
 * @param {function} compare The compare function.
 * @returns The sorted array.
 */
function sort(array, compare) {
  var workArray = new Array(array.length);
  var chunkSize = 1;
  while (chunkSize < array.length) {
    var i = 0;
    while (i < array.length - chunkSize) {
      bottomUpMerge(array, i, chunkSize, workArray, compare);
      i += chunkSize * 2;
    }
    chunkSize *= 2;
  }
  return array;
}

/**
 * Sorts an array using bottom up merge sort.
 * @param {Array} array The array to sort.
 * @param {function} customCompare A custom compare function.
 * @returns The sorted array.
 */
module.exports = function (array, customCompare) {
  var compare = customCompare || defaultCompare;
  return sort(array, compare);
};
