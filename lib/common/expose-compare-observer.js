/**
 * @module lib/common/expose-compare-observer
 * @license MIT Copyright 2016 Daniel Imms (http://www.growingwiththeweb.com)
 */
'use strict';

/**
 * Attaches functions to a sorting algorithm to allow attaching and detaching of
 * compare observers.
 */
module.exports = function (sort) {
  /**
   * Detach a compare observer to the sorting algorithm.
   * @param {function} observer A function to call when the compare operation
   * is performed. This can be used to listen in on internals of the algorithm.
   */
  sort.attachCompareObserver = function (observer) {
    this.compareObserver = observer;
  }

  /**
   * Detach the compare observer from the sorting algorithm.
   */
  sort.detachCompareObserver = function () {
    delete this.compareObserver;
  }
};
