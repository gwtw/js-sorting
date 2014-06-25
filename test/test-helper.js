var testHelper = {};

testHelper.integerTests = require("./data/integer-tests");
testHelper.integerReverseTests = require("./data/integer-reverse-tests");
testHelper.stringTests = require("./data/string-tests");

// Test sorting integer arrays.
testHelper.runIntegerTests = function (algorithm) {
  describe('integer tests', function () {
    for (var i = 0; i < testHelper.integerTests.length; i++) {
      (function (test) {
        it(test.it, function () {
          expect(algorithm(testHelper.getOriginal(test)))
            .toEqual(testHelper.getSorted(test));
        });
      })(testHelper.integerTests[i]);
    }
  });
};

// Test sorting character and string arrays. These will only work on comparison
// sorts.
testHelper.runStringTests = function (algorithm) {
  describe('string tests', function () {
    for (var i = 0; i < testHelper.stringTests.length; i++) {
      (function (test) {
        it(test.it, function () {
          expect(algorithm(testHelper.getOriginal(test)))
            .toEqual(testHelper.getSorted(test));
        });
      })(testHelper.stringTests[i]);
    }
  });
};

// Test sorting both normally and in reverse using custom comparison functions.
testHelper.runCustomComparisonTests = function (algorithm) {
  describe('custom comparison tests', function () {
    for (var i = 0; i < testHelper.integerReverseTests.length; i++) {
      (function (test) {
        it(test.it, function () {
          var compare = function (a, b) {
            return b - a;
          };
          expect(algorithm(testHelper.getOriginal(test), compare))
            .toEqual(testHelper.getSorted(test));
        });
      })(testHelper.integerReverseTests[i]);
    }
    for (var i = 0; i < testHelper.integerTests.length; i++) {
      (function (test) {
        it(test.it, function () {
          var compare = function (a, b) {
            return a - b;
          };
          expect(algorithm(testHelper.getOriginal(test), compare))
            .toEqual(testHelper.getSorted(test));
        });
      })(testHelper.integerTests[i]);
    }
  });
};

// Only test on copies of the test arrays
testHelper.getOriginal = function (test) {
  return test.original.slice(0);
};
testHelper.getSorted = function (test) {
  return test.sorted.slice(0);
};

module.exports = testHelper;
