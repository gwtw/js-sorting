/**
 * @license
 * js-sorting <http://github.com/Tyriar/js-sorting>
 * Copyright 2014 Daniel Imms <http://www.growingwiththeweb.com>
 * Released under the MIT license <http://github.com/Tyriar/js-sorting/blob/master/LICENSE>
 */
'use strict';

module.exports = {
  bubbleSortOptimised: require('./lib/bubble-sort-optimised'),
  bubbleSort: require('./lib/bubble-sort'),
  bucketSort: require('./lib/bucket-sort'),
  cocktailSort: require('./lib/cocktail-sort'),
  combSort: require('./lib/comb-sort'),
  countingSort: require('./lib/counting-sort'),
  gnomeSort: require('./lib/gnome-sort'),
  heapsort: require('./lib/heapsort'),
  insertionSort: require('./lib/insertion-sort'),
  mergeSort: require('./lib/merge-sort'),
  mergeSortBottomUp: require('./lib/merge-sort-bottom-up'),
  oddEvenSort: require('./lib/odd-even-sort'),
  quicksort: require('./lib/quicksort'),
  radixSort: require('./lib/radix-sort'),
  selectionSort: require('./lib/selection-sort')
};
