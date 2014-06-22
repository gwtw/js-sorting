var testHelper = require("./test-helper");
var algorithm = require("../src/counting-sort");

// Test sort(array, maxValue) for arrays with non-negative values.
describe("counting-sort", function () {
  for (var i = 0; i < testHelper.tests.length; i++) {
    (function (test) {
      var sorted = testHelper.getSorted(test);
      var original = testHelper.getOriginal(test);
      var minValue = sorted[0];
      var maxValue = sorted[sorted.length - 1];

      if (minValue >= 0) {
        it(test.it, function () {
          expect(algorithm.sort(original, maxValue))
            .toEqual(sorted);
        });
      }
    })(testHelper.tests[i]);
  }
});

// Test sort(array, minValue, maxValue) for arrays with a specific range.
describe("counting-sort", function () {
  for (var i = 0; i < testHelper.tests.length; i++) {
    (function (test) {
      var sorted = testHelper.getSorted(test);
      var original = testHelper.getOriginal(test);
      var minValue = sorted[0];
      var maxValue = sorted[sorted.length - 1];

      it(test.it, function () {
        expect(algorithm.sort(original, minValue, maxValue))
          .toEqual(sorted);
      });
    })(testHelper.tests[i]);
  }
});