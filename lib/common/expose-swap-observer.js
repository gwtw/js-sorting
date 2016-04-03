/**
 * @module lib/common/expose-swap-observer
 * @license MIT Copyright 2016 Daniel Imms (http://www.growingwiththeweb.com)
 */
'use strict';

/**
 * Attaches functions to a sorting algorithm to allow attaching and detaching of
 * swap observers.
 */
module.exports = function (sort) {
  /**
   * Detach a swap observer to the sorting algorithm.
   * @param {function} observer A function to call when the swap operation is
   * performed. This can be used to listen in on internals of the algorithm.
   */
  sort.attachSwapObserver = function (observer) {
    this.swapObserver = observer;
  }

  /**
   * Detach the swap observer from the sorting algorithm.
   */
  sort.detachSwapObserver = function () {
    delete this.swapObserver;
  }
};
