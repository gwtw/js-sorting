(function (root, factory) {
  'use strict';
  if (typeof define === 'function' && define.amd) {
    define([], function () {
      return (root.cocktailSort = factory());
    });
  } else if (typeof exports === 'object') {
    module.exports = factory();
  } else {
    root.cocktailSort = factory();
  }
}(this, function () {
  'use strict';

  var cocktailSort = {
    sort: sort
  };

  function sort(array, compareFunc) {
    var start = -1;
    var end = array.length - 2;
    var swapped;
    var i;

    do {
      swapped = false;
      for (i = ++start; i <= end; i++) {
        if (compare(array[i], array[i + 1], compareFunc) > 0) {
          swap(array, i, i + 1);
          swapped = true;
        }
      }

      if (!swapped) {
        break;
      }

      swapped = false;
      for (i = --end; i >= start; i--) {
        if (compare(array[i], array[i + 1], compareFunc) > 0) {
          swap(array, i, i + 1);
          swapped = true;
        }
      }
    } while (swapped);

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

  return cocktailSort;
}));
