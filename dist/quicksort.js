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
    if (a !== b) {
      var temp = array[a];
      array[a] = array[b];
      array[b] = temp;
    }
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

  return { sort: sort };
}));
