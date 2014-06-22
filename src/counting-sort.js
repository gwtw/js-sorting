// Explanation: http://www.growingwiththeweb.com/2014/05/counting-sort.html
//
// Complexity (n=input size, k=possible number of values)
//   Time, worse case:   O(n + k)
//   Time, best case:    O(n + k)
//   Time, average case: O(n + k)
//   Space worst case:   O(n + k) auxiliary

// UMD pattern: https://github.com/umdjs/umd/blob/master/returnExportsGlobal.js
(function (root, factory) {
  'use strict';
  if (typeof define === 'function' && define.amd) {
    define([], function () {
      return (root.countingSort = factory());
    });
  } else if (typeof exports === 'object') {
    module.exports = factory();
  } else {
    root.countingSort = factory();
  }
}(this, function (assert) {
  'use strict';

  var countingSort = {
    sort: sort
  };

  function sort(array, maxValue) {
    var buckets = new Array(maxValue);
    var sortedIndex = 0;
    var i;

    for (i = 0; i < buckets.length; i++) {
      buckets[i] = 0;
    }

    for (i = 0; i < array.length; i++) {
      buckets[array[i]]++;
    }

    for (i = 0; i < buckets.length; i++) {
      while (buckets[i] > 0) {
        array[sortedIndex++] = i;
        buckets[i]--;
      }
    }

    return array;
  }

  return countingSort;
}));
