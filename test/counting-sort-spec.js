var testHelper = require("./test-helper");
var algorithm = require("../index").countingSort;

describe("counting-sort", function () {
  // sort(array, maxValue) for arrays with non-negative values only.
  describe("sort(array, maxValue)", function () {
    for (var i = 0; i < testHelper.integerTests.length; i++) {
      (function (test) {
        var sorted = testHelper.getSorted(test);
        var original = testHelper.getOriginal(test);
        var minValue = sorted[0];
        var maxValue = sorted[sorted.length - 1];

        if (minValue >= 0) {
          it(test.it, function () {
            expect(algorithm(original, maxValue))
              .toEqual(sorted);
          });
        }
      })(testHelper.integerTests[i]);
    }
  });

  // Test sort(array, minValue, maxValue) for arrays with a specific range.
  describe("sort(array, maxValue, minValue)", function () {
    for (var i = 0; i < testHelper.integerTests.length; i++) {
      (function (test) {
        var sorted = testHelper.getSorted(test);
        var original = testHelper.getOriginal(test);
        var minValue = sorted[0];
        var maxValue = sorted[sorted.length - 1];

        it(test.it, function () {
          expect(algorithm(original, maxValue, minValue))
            .toEqual(sorted);
        });
      })(testHelper.integerTests[i]);
    }
  });

  describe("sort(...)", function () {
    it("should throw an exception with 1 argument", function () {
      expect(function () {
        algorithm(1);
      }).toThrow("Cannot sort with counting sort with 1 arguments");
    });

    it("should throw an exception with > 3 arguments", function () {
      expect(function () {
        algorithm(1, 2, 3, 4);
      }).toThrow("Cannot sort with counting sort with 4 arguments");
    });
  });
});
