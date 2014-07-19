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

  var algorithm = {

    sort: function (array, compareFunc) {
      var pos = 1;

      while (pos < array.length) {
        if (algorithm.compare(array[pos], array[pos-1], compareFunc) >= 0) {
          pos++;
        } else {
          algorithm.swap(array, pos, pos - 1);
          if (pos > 1) {
            pos--;
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
