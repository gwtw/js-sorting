/*! js-sorting | (c) 2015 Daniel Imms | github.com/Tyriar/js-sorting/blob/master/LICENSE */
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

  var algorithm = {

    sort: function (array) {
      var i;

      for (i = 1; i < array.length; i++) {
        var item = array[i];
        var indexHole = i;
        while (indexHole > 0 &&
            algorithm.compare(array[indexHole - 1], item) > 0) {
          array[indexHole] = array[--indexHole];
        }
        array[indexHole] = item;
        algorithm.shift(i, indexHole);
      }

      return array;
    },

    // Called when an element is being shifted from index `from` to index `to`,
    // swapping all elements in-between.
    //
    // Example:
    // b, c, d, e, a -> shift(4, 0) -> a, b, c, d, e
    shift: function (from, to) { },

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
