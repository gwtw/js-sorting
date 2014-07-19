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

  var algorithm = {

    sort: function (array, compareFunc) {
      sortInternal(array, 0, array.length - 1, compareFunc);
      return array;
    },

    swap: function (array, a, b) {
      var temp = array[a];
      array[a] = array[b];
      array[b] = temp;
    },

    compare: function (a, b, compareFunc) {
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

  };

  function sortInternal(array, left, right, compareFunc) {
    if (left < right) {
      var pivot = partitionRandom(array, left, right, compareFunc);
      sortInternal(array, left, pivot - 1, compareFunc);
      sortInternal(array, pivot + 1, right, compareFunc);
    }
  }

  function partitionRandom(array, left, right, compareFunc) {
    var pivot = left + Math.floor(Math.random() * (right - left));
    if (pivot !== right) {
      algorithm.swap(array, right, pivot);
    }
    return partitionRight(array, left, right, compareFunc);
  }

  function partitionRight(array, left, right, compareFunc) {
    var pivot = array[right];
    var mid = left;

    for (var i = mid; i < right; i++) {
      if (algorithm.compare(array[i], pivot, compareFunc) <= 0) {
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

  return algorithm;
}));
