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
