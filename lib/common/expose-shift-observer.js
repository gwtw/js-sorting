/**
 * @module lib/common/expose-shift-observer
 * @license MIT Copyright 2016 Daniel Imms (http://www.growingwiththeweb.com)
 */
'use strict';

/**
 * Attaches functions to a sorting algorithm to allow attaching and detaching of
 * shift observers.
 */
module.exports = function (sort) {
  /**
   * Detach a shift observer to the sorting algorithm.
   * @param {function} observer A function that takes a 'from' index and the
   * index in which it was shifted to, allow listening to the internals of the
   * algorithm. For example, for the array [a, b, c], shifting a two indexes to
   * the right resulting in [b, c, a] would trigger shiftObserver(0, 2).
   */
  sort.attachShiftObserver = function (observer) {
    this.shiftObserver = observer;
  }

  /**
   * Detach the shift observer from the sorting algorithm.
   */
  sort.detachShiftObserver = function () {
    delete this.shiftObserver;
  }
};
