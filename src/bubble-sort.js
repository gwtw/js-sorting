// Explanation: http://www.growingwiththeweb.com/2014/02/bubble-sort.html
//
// Complexity (n=input size):
//   Time, worse case:   O(n^2)
//   Time, best case:    O(n^2)
//   Time, average case: O(n^2)
//   Space worst case:   O(1) auxiliary

// UMD pattern: https://github.com/umdjs/umd/blob/master/returnExportsGlobal.js
(function (root, factory) {
  'use strict';
  if (typeof define === 'function' && define.amd) {
    define([], function () {
      return (root.bubbleSort = factory());
    });
  } else if (typeof exports === 'object') {
    module.exports = factory();
  } else {
    root.bubbleSort = factory();
  }
}(this, function () {
  'use strict';

  var bubbleSort = {
    sort: sort
  };

  function sort(array, compareFunc) {
    var i, j;

    for (i = 0; i < array.length - 1; i++) {
      for (j = 1; j < array.length - i; j++) {
        if (compare(array[j - 1], array[j], compareFunc) > 0) {
          swap(array, j, j - 1);
        }
      }
    }

    return array;
  }

  function swap(array, a, b) {
    var temp = array[a];
    array[a] = array[b];
    array[b] = temp;
  }

  function compare(a, b, compareFunc) {
    if (compareFunc) {
      return compareFunc(a, b);
    }
    if (a > b) {
      return 1;
    }
    if (a < b) {
      return -1;
    }
    return 0;
  }

  return bubbleSort;
}));
