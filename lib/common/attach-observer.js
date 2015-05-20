/**
 * @license
 * js-sorting <http://github.com/Tyriar/js-sorting>
 * Copyright 2014 Daniel Imms <http://www.growingwiththeweb.com>
 * Released under the MIT license <http://github.com/Tyriar/js-sorting/blob/master/LICENSE>
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
    baseFunction.apply(undefined, arguments);
  };
};
