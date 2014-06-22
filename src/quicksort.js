// Explanation: http://www.growingwiththeweb.com/2012/12/algorithm-quicksort.html
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
}(this, function (assert) {
  'use strict';

  var quicksort = {
    sort: sort
  };

  function sort(array) {
    sortInternal(array, 0, array.length - 1);
    return array;
  }

  function sortInternal(array, left, right) {
    if (left < right) {
      var pivot = partitionRandom(array, left, right);
      sortInternal(array, left, pivot - 1);
      sortInternal(array, pivot + 1, right);
    }
  }

  function partitionRandom(array, left, right) {
    var pivot = left + Math.floor(Math.random() * (right - left));
    swap(array, right, pivot);
    return partitionRight(array, left, right);
  }

  function partitionRight(array, left, right) {
    var pivot = array[right];
    var mid = left;

    for (var i = mid; i < right; i++) {
      if (array[i] <= pivot) {
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

  return quicksort;
}));
