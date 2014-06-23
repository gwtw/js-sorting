// Explanation: http://www.growingwiththeweb.com/2012/11/algorithm-insertion-sort.html
//
// Complexity (n=input size)
//   Time, worse case:   O(n^2)
//   Time, best case:    O(n)
//   Time, average case: O(n^2)
//   Space worst case:   O(1) auxiliary

// UMD pattern: https://github.com/umdjs/umd/blob/master/returnExportsGlobal.js
(function (root, factory) {
  'use strict';
  if (typeof define === 'function' && define.amd) {
    define([], function () {
        return (root.insertionSort = factory());
    });
  } else if (typeof exports === 'object') {
    module.exports = factory();
  } else {
    root.insertionSort = factory();
  }
}(this, function () {
  'use strict';

  var insertionSort = {
    sort: sort
  };

  function sort(array, compareFunc) {
    var i;

    for (i = 1; i < array.length; i++) {
      var item = array[i];
      var indexHole = i;
      while (indexHole > 0 && 
          compare(array[indexHole - 1], item, compareFunc) > 0) {
        array[indexHole] = array[--indexHole];
      }
      array[indexHole] = item;
    }

    return array;
  }

  function compare(a, b, compareFunc) {
    if (compareFunc) {
      return compareFunc(a, b);
    }
    return a - b;
  }

  return insertionSort;
}));
