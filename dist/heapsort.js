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
      return (root.heapsort = factory());
    });
  } else if (typeof exports === 'object') {
    module.exports = factory();
  } else {
    root.heapsort = factory();
  }
}(this, function () {
  'use strict';

  var algorithm = {

    sort: function (array) {
      var heapSize = array.length;
      buildHeap(array, heapSize);
      while (heapSize > 1) {
        algorithm.swap(array, 0, heapSize - 1);
        heapSize--;
        heapify(array, heapSize, 0);
      }
      return array;
    },

    // Swaps elements at indexes `a` and `b`.
    swap: function (list, a, b) {
      var temp = list[a];
      list[a] = list[b];
      list[b] = temp;
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

  function buildHeap(array, heapSize) {
    for (var i = Math.floor(array.length / 2); i >= 0; i--) {
      heapify(array, heapSize, i);
    }
  }

  function heapify(array, heapSize, i) {
    var left = i * 2 + 1;
    var right = i * 2 + 2;
    var largest;

    if (left < heapSize &&
        algorithm.compare(array[left], array[i]) > 0) {
      largest = left;
    } else {
      largest = i;
    }

    if (right < heapSize &&
        algorithm.compare(array[right], array[largest]) > 0) {
      largest = right;
    }

    if (largest !== i) {
      algorithm.swap(array, i, largest);
      heapify(array, heapSize, largest);
    }
  }

  return algorithm;
}));
