// Explanation: http://www.growingwiththeweb.com/2013/12/selection-sort.html
//
// Complexity (n=input size)
//   Time, worse case:   O(n^2)
//   Time, best case:    O(n^2)
//   Time, average case: O(n^2)
//   Space worst case:   O(1) auxiliary

// UMD pattern: https://github.com/umdjs/umd/blob/master/returnExportsGlobal.js
(function (root, factory) {
  'use strict';
  if (typeof define === 'function' && define.amd) {
    define([], function () {
      return (root.selectionSort = factory());
    });
  } else if (typeof exports === 'object') {
    module.exports = factory();
  } else {
    root.selectionSort = factory();
  }
}(this, function () {
  'use strict';

  var selectionSort = {
    sort: sort
  };

  function sort(array, compareFunc) {
    for (var i = 0; i < array.length - 1; i++) {
      var minIndex = i;

      for (var j = i + 1; j < array.length; j++) {
        if (compare(array[j], array[minIndex], compareFunc) < 0) {
          minIndex = j;
        }
      }

      if (minIndex !== i) {
        swap(array, i, minIndex);
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

  return selectionSort;
}));
