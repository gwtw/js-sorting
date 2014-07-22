(function (root, factory) {
  'use strict';
  if (typeof define === 'function' && define.amd) {
    define([], function () {
      return (root.combSort = factory());
    });
  } else if (typeof exports === 'object') {
    module.exports = factory();
  } else {
    root.combSort = factory();
  }
}(this, function () {
  'use strict';

  var algorithm = {

    sort: function (array) {
      var gap = array.length;
      var shrinkFactor = 1.3;
      var swapped;

      while ((gap > 1) || swapped) {
        if (gap > 1) {
          gap = Math.floor(gap / shrinkFactor);
        }

        swapped = false;

        for (var i = 0; gap + i < array.length; ++i) {
          if (algorithm.compare(array[i], array[i + gap]) > 0) {
            algorithm.swap(array, i, i + gap);
            swapped = true;
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

    compare: function (a, b) {
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
