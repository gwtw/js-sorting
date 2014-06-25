// Explanation: http://www.growingwiththeweb.com/2012/11/algorithm-heapsort.html
//
// Complexity (n=input size)
//   Time, worse case:   O(n log n)
//   Time, best case:    O(n log n)
//   Time, average case: O(n log n)
//   Space worst case:   O(1) auxiliary

// UMD pattern: https://github.com/umdjs/umd/blob/master/returnExportsGlobal.js
(function (root, factory) {
  'use strict';
  if (typeof define === 'function' && define.amd) {
    define([], function () {
      return (root.heapsort = factory());
    });
  } else if (typeof exports === 'object') {
    module.exports = factory();
  } else {
    root.heapsort = factory();
  }
}(this, function () {
  'use strict';

  var heapsort = {
    sort: sort
  };

  function sort(array, compareFunc) {
    var heapSize = array.length;
    buildHeap(array, heapSize, compareFunc);
    while (heapSize > 1) {
      swap(array, 0, heapSize - 1);
      heapSize--;
      heapify(array, heapSize, 0, compareFunc);
    }
    return array;
  }

  function buildHeap(array, heapSize, compareFunc) {
    for (var i = Math.floor(array.length / 2); i >= 0; i--)
      heapify(array, heapSize, i, compareFunc);
  }

  function heapify(array, heapSize, i, compareFunc) {
    var left = i * 2 + 1;
    var right = i * 2 + 2;
    var largest;

    if (left < heapSize &&
        compare(array[left], array[i], compareFunc) > 0) {
      largest = left;
    } else {
      largest = i;
    }

    if (right < heapSize &&
        compare(array[right], array[largest], compareFunc) > 0) {
      largest = right;
    }

    if (largest != i) {
      swap(array, i, largest);
      heapify(array, heapSize, largest, compareFunc);
    }
  }

  function swap(list, a, b) {
    var temp = list[a];
    list[a] = list[b];
    list[b] = temp;
  }

  function compare(a, b, compareFunc) {
    if (compareFunc) {
      return compareFunc(a, b);
    }
    if (a > b) return 1;
    if (a < b) return -1;
    return 0;
  }

  return heapsort;
}));
