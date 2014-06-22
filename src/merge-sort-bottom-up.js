// Explanation: http://www.growingwiththeweb.com/2012/11/algorithm-merge-sort.html
//
// Complexity (n=input size)
//   Time, worse case:   O(n log n)
//   Time, best case:    O(n log n)
//   Time, average case: O(n log n)
//   Space worst case:   O(n) auxiliary

// UMD pattern: https://github.com/umdjs/umd/blob/master/returnExportsGlobal.js
(function (root, factory) {
  'use strict';
  if (typeof define === 'function' && define.amd) {
  define([], function () {
    return (root.mergeSortBottomUp = factory());
  });
  } else if (typeof exports === 'object') {
  module.exports = factory();
  } else {
  root.mergeSortBottomUp = factory();
  }
}(this, function (assert) {
  'use strict';

  var mergeSortBottomUp = {
    sort: sort
  };

  function sort(array, compareFunc) {
    var workArray = new Array(array.length);
    var chunkSize = 1;
    while (chunkSize < array.length) {
      var i = 0;
      while (i < array.length - chunkSize) {
        bottomUpMerge(array, i, chunkSize, workArray, compareFunc);
        i += chunkSize * 2;
      }
      chunkSize *= 2;
    }
    return array;
  }

  function bottomUpMerge(array, leftPosition, chunkSize, workArray, compareFunc) {
    var i;
    var rightPosition = leftPosition + chunkSize;
    var endPosition = Math.min(leftPosition + chunkSize * 2 - 1, array.length - 1);
    var leftIndex = leftPosition;
    var rightIndex = rightPosition;

    for (i = 0; i <= endPosition - leftPosition; i++) {
      if (leftIndex < rightPosition &&
          (rightIndex > endPosition ||
          compare(array[leftIndex], array[rightIndex], compareFunc) <= 0)) {
        workArray[i] = array[leftIndex++];
      } else {
        workArray[i] = array[rightIndex++];
      }
    }

    for (i = leftPosition; i <= endPosition; i++) {
      array[i] = workArray[i - leftPosition];
    }
  }

  function compare(a, b, compareFunc) {
    if (compareFunc) {
      return compareFunc(a, b);
    }
    return a - b;
  }

  return mergeSortBottomUp;
}));
