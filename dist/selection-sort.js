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
      return (root.selectionSort = factory());
    });
  } else if (typeof exports === 'object') {
    module.exports = factory();
  } else {
    root.selectionSort = factory();
  }
}(this, function () {
  'use strict';

  var algorithm = {

    sort: function (array) {
      for (var i = 0; i < array.length - 1; i++) {
        var minIndex = i;

        for (var j = i + 1; j < array.length; j++) {
          if (algorithm.compare(array[j], array[minIndex]) < 0) {
            minIndex = j;
          }
        }

        if (minIndex !== i) {
          algorithm.swap(array, i, minIndex);
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
