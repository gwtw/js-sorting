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
      return (root.cocktailSort = factory());
    });
  } else if (typeof exports === 'object') {
    module.exports = factory();
  } else {
    root.cocktailSort = factory();
  }
}(this, function () {
  'use strict';

  var algorithm = {

    sort: function (array) {
      var start = -1;
      var end = array.length - 2;
      var swapped;
      var i;

      do {
        swapped = false;
        for (i = ++start; i <= end; i++) {
          if (algorithm.compare(array[i], array[i + 1]) > 0) {
            algorithm.swap(array, i, i + 1);
            swapped = true;
          }
        }

        if (!swapped) {
          break;
        }

        swapped = false;
        for (i = --end; i >= start; i--) {
          if (algorithm.compare(array[i], array[i + 1]) > 0) {
            algorithm.swap(array, i, i + 1);
            swapped = true;
          }
        }
      } while (swapped);

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
    compare: function(a, b) {
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
