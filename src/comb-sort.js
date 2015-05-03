/*!
 * js-sorting
 * http://github.com/Tyriar/js-sorting
 *
 * Copyright 2015 Daniel Imms (http://www.growingwiththeweb.com)
 * Released under the MIT license
 * http://github.com/Tyriar/js-sorting/blob/master/LICENSE
 */
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

    // Swaps elements at indexes `a` and `b`.
    swap: function (array, a, b) {
      var temp = array[a];
      array[a] = array[b];
      array[b] = temp;
    },

    // Compares elements at indexes `a` and `b`. Returns 0 if they're equal, a
    // positive number if `a` is larger or a negative number if `b` is larger.
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
