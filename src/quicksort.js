/*!
 * js-sorting
 * http://github.com/Tyriar/js-sorting
 *
 * Copyright 2015 Daniel Imms (http://www.growingwiththeweb.com)
 * Released under the MIT license
 * http://github.com/Tyriar/js-sorting/blob/master/LICENSE
 */
'use strict';

var algorithm = {

  sort: function (array) {
    sortInternal(array, 0, array.length - 1);
    return array;
  },

  // Swaps elements at indexes `a` and `b`.
  swap: function (array, a, b) {
    var temp = array[a];
    array[a] = array[b];
    array[b] = temp;
  },

  // Compares elements at indexes `a` and `b`. Returns 0 if they're equal, a
  // positive number if `a` is larger or a negative number if `b` is larger.
  compare: function (a, b) {
    if (a > b) {
      return 1;
    }
    if (a < b) {
      return -1;
    }
    return 0;
  }

};

function sortInternal(array, left, right) {
  if (left < right) {
    var pivot = partitionRandom(array, left, right);
    sortInternal(array, left, pivot - 1);
    sortInternal(array, pivot + 1, right);
  }
}

function partitionRandom(array, left, right) {
  var pivot = left + Math.floor(Math.random() * (right - left));
  if (pivot !== right) {
    algorithm.swap(array, right, pivot);
  }
  return partitionRight(array, left, right);
}

function partitionRight(array, left, right) {
  var pivot = array[right];
  var mid = left;

  for (var i = mid; i < right; i++) {
    if (algorithm.compare(array[i], pivot) <= 0) {
      if (i !== mid) {
        algorithm.swap(array, i, mid);
      }
      mid++;
    }
  }
  if (right !== mid) {
    algorithm.swap(array, right, mid);
  }

  return mid;
}

module.exports = algorithm;
