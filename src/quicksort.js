// Explanation: http://www.growingwiththeweb.com/2012/12/algorithm-quicksort.html
//
// Complexity (n=input size)
//   Time, worse case:   O(n^2)
//   Time, best case:    O(n log n)
//   Time, average case: O(n log n)
//   Space worst case:   O(log n) auxiliary

// UMD pattern: https://github.com/umdjs/umd/blob/master/returnExportsGlobal.js
(function (root, factory) {
  'use strict';
  if (typeof define === 'function' && define.amd) {
    define([], function () {
      return (root.quicksort = factory());
    });
  } else if (typeof exports === 'object') {
    module.exports = factory();
  } else {
    root.quicksort = factory();
  }
}(this, function () {
  'use strict';

  var quicksort = {
    sort: sort
  };

  function sort(array, compareFunc) {
    sortInternal(array, 0, array.length - 1, compareFunc);
    return array;
  }

  function sortInternal(array, left, right, compareFunc) {
    if (left < right) {
      var pivot = partitionRandom(array, left, right, compareFunc);
      sortInternal(array, left, pivot - 1, compareFunc);
      sortInternal(array, pivot + 1, right, compareFunc);
    }
  }

  function partitionRandom(array, left, right, compareFunc) {
    var pivot = left + Math.floor(Math.random() * (right - left));
    swap(array, right, pivot);
    return partitionRight(array, left, right, compareFunc);
  }

  function partitionRight(array, left, right, compareFunc) {
    var pivot = array[right];
    var mid = left;

    for (var i = mid; i < right; i++) {
      if (compare(array[i], pivot, compareFunc) <= 0) {
        swap(array, i, mid++);
      }
    }
    swap(array, right, mid);

    return mid;
  }

  function swap(array, a, b) {
    if (a != b) {
      var temp = array[a];
      array[a] = array[b];
      array[b] = temp;
    }
  }

  function compare(a, b, compareFunc) {
    if (compareFunc) {
      return compareFunc(a, b);
    }
    if (a > b) return 1;
    if (a < b) return -1;
    return 0;
  }

  return quicksort;
}));
