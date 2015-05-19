/**
 * @license
 * js-sorting <http://github.com/Tyriar/js-sorting>
 * Copyright 2014-2015 Daniel Imms <http://www.growingwiththeweb.com>
 * Released under the MIT license <http://github.com/Tyriar/js-sorting/blob/master/LICENSE>
 */
'use strict';

var defaultCompare = require('./common/default-compare');

function sort(array, compare) {
  if (array.length <= 1) {
    return array;
  }

  var i;
  var middle = Math.floor(array.length / 2);
  var left = new Array(middle);
  var right = new Array(array.length - middle);

  for (i = 0; i < left.length; i++) {
    left[i] = array[i];
  }
  for (i = 0; i < right.length; i++) {
    right[i] = array[i + left.length];
  }

  return merge(sort(left, compare), sort(right, compare), compare);
}

function merge(left, right, compare) {
  var result = new Array(left.length + right.length);
  var leftIndex = 0;
  var rightIndex = 0;
  var resultIndex = 0;

  while (leftIndex < left.length || rightIndex < right.length) {
    if (leftIndex < left.length && rightIndex < right.length) {
      if (compare(left[leftIndex], right[rightIndex]) <= 0) {
        result[resultIndex++] = left[leftIndex++];
      } else {
        result[resultIndex++] = right[rightIndex++];
      }
    } else if (leftIndex < left.length) {
      result[resultIndex++] = left[leftIndex++];
    } else if (rightIndex < right.length) {
      result[resultIndex++] = right[rightIndex++];
    }
  }
  return result;
}

module.exports = function (array, customCompare) {
  var compare = customCompare || defaultCompare;
  return sort(array, compare);
};
