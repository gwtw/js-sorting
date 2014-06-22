// Explanation: http://www.growingwiththeweb.com/2013/12/selection-sort.html
// UMD pattern: https://github.com/umdjs/umd/blob/master/returnExportsGlobal.js
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
}(this, function (assert) {
  'use strict';

  var selectionSort = {
    sort: sort
  };

  function sort(array) {
    for (var i = 0; i < array.length - 1; i++) {
      var minIndex = i;

      for (var j = i + 1; j < array.length; j++) {
        if (array[j] < array[minIndex]) {
          minIndex = j;
        }
      }

      if (minIndex != i) {
        swap(array, i, minIndex);
      }
    }

    return array;
  }

  function swap(array, a, b) {
    var temp = array[a];
    array[a] = array[b];
    array[b] = temp;
  }

  return selectionSort;
}));
