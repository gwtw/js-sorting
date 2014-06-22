var testHelper = {};

testHelper.tests = require("./data/regular-tests");
testHelper.reverseTests = require("./data/reverse-tests");

// This function expects algorithm to be a function that takes an array as an
// argument and returnsa sorted array. The array returned may or may not be the
// array passed in as an argument.
testHelper.runTests = function (name, algorithm) {
  describe(name, function () {
    for (var i = 0; i < testHelper.tests.length; i++) {
      (function (test) {
        it(test.it, function () {
          expect(algorithm(testHelper.getOriginal(test)))
            .toEqual(testHelper.getSorted(test));
        });
      })(testHelper.tests[i]);
    }
  });
};

// Like runTests but runs the algorithm passing in a custom comparison function
// to sort both normally and in reverse.
testHelper.runCustomComparisonTests = function (name, algorithm) {
  describe(name, function () {
    for (var i = 0; i < testHelper.reverseTests.length; i++) {
      (function (test) {
        it(test.it, function () {
          var compare = function (a, b) {
            return b - a;
          };
          expect(algorithm(testHelper.getOriginal(test), compare))
            .toEqual(testHelper.getSorted(test));
        });
      })(testHelper.reverseTests[i]);
    }
    for (var i = 0; i < testHelper.tests.length; i++) {
      (function (test) {
        it(test.it, function () {
          var compare = function (a, b) {
            return a - b;
          };
          expect(algorithm(testHelper.getOriginal(test), compare))
            .toEqual(testHelper.getSorted(test));
        });
      })(testHelper.tests[i]);
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
