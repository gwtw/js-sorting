/**
 * @license
 * js-sorting <http://github.com/Tyriar/js-sorting>
 * Copyright 2014 Daniel Imms <http://www.growingwiththeweb.com>
 * Released under the MIT license <http://github.com/Tyriar/js-sorting/blob/master/LICENSE>
 */
'use strict';

var defaultCompare = require('./common/default-compare');

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

module.exports = function (array, customCompare) {
  var compare = customCompare || defaultCompare;
  return sort(array, compare);
};
