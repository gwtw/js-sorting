// Also known as "stupid sort"
//
// Complexity (n=input size):
//   Time, worse case:   O(n^2)
//   Time, best case:    O(n)
//   Time, average case: O(n^2)
//   Space worst case:   O(1) auxiliary

// UMD pattern: https://github.com/umdjs/umd/blob/master/returnExportsGlobal.js
(function (root, factory) {
  'use strict';
  if (typeof define === 'function' && define.amd) {
    define([], function () {
      return (root.gnomeSort = factory());
    });
  } else if (typeof exports === 'object') {
    module.exports = factory();
  } else {
    root.gnomeSort = factory();
  }
}(this, function () {
  'use strict';

  var gnomeSort = {
    sort: sort
  };

  function sort(array, compareFunc) {
    var pos = 1;

    while (pos < array.length) {
      if (compare(array[pos], array[pos-1], compareFunc) >= 0) {
        pos++;
      } else {
        swap(array, pos, pos - 1);
        if (pos > 1) {
          pos--;
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

  return gnomeSort;
}));
