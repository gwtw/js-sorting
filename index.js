/**
 * @module index
 * @license MIT Copyright 2014 Daniel Imms (http://www.growingwiththeweb.com)
 */
'use strict';

/**
 * Exports all sorting algorithms in ./lib.
 */
module.exports = {
  bubbleSortOptimised: require('./lib/bubble-sort-optimised'),
  bubbleSort: require('./lib/bubble-sort'),
  bucketSort: require('./lib/bucket-sort'),
  cocktailSort: require('./lib/cocktail-sort'),
  combSort: require('./lib/comb-sort'),
  countingSort: require('./lib/counting-sort'),
  countingSortWithMin: require('./lib/counting-sort-with-min'),
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
