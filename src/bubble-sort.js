/*!
 * js-sorting
 * http://github.com/Tyriar/js-sorting
 *
 * Copyright 2015 Daniel Imms (http://www.growingwiththeweb.com)
 * Released under the MIT license
 * http://github.com/Tyriar/js-sorting/blob/master/LICENSE
 */
'use strict';

var algorithm = {

  sort: function (array) {
    var i, j;

    for (i = 0; i < array.length - 1; i++) {
      for (j = 1; j < array.length - i; j++) {
        if (algorithm.compare(array[j - 1], array[j]) > 0) {
          algorithm.swap(array, j, j - 1);
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

module.exports = algorithm;
