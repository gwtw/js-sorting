(function (root, factory) {
  'use strict';
  if (typeof define === 'function' && define.amd) {
    define([], function () {
      return (root.oddEvenSort = factory());
    });
  } else if (typeof exports === 'object') {
    module.exports = factory();
  } else {
    root.oddEvenSort = factory();
  }
}(this, function () {
  'use strict';

  var algorithm = {

    sort: function (array, compareFunc) {
      var i;
      var sorted = false;

      while(!sorted) {
        sorted = true;
        for (i = 1; i < array.length - 1; i += 2) {
          if (algorithm.compare(array[i], array[i + 1], compareFunc) > 0) {
            algorithm.swap(array, i, i + 1);
            sorted = false;
          }
        }

        for (i = 0; i < array.length - 1; i += 2) {
          if (algorithm.compare(array[i], array[i + 1], compareFunc) > 0) {
            algorithm.swap(array, i, i + 1);
            sorted = false;
          }
        }
      }

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

  return algorithm;
}));
