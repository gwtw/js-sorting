/**
 * @module lib/common/attach-observer
 * @license MIT Copyright 2014 Daniel Imms (http://www.growingwiththeweb.com)
 */
'use strict';

/**
 * Attaches an observer to a function.
 * @param {function} baseFunction The base function.
 * @param {function} observer The observer to attach.
 * @returns A new function that calls the observer before the baseFunction.
 */
module.exports = function (baseFunction, observer) {
  if (!observer) {
    return baseFunction;
  }
  return function () {
    observer.apply(undefined, arguments);
    return baseFunction.apply(undefined, arguments);
  };
};
