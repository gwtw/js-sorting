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
      }

      return array;
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
