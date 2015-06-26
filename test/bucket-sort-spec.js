var testHelper = require("./test-helper");
var algorithm = require("../index").bucketSort;

describe("bucket-sort", function () {
  describe("sort(array)", function () {
    for (var i = 0; i < testHelper.integerTests.length; i++) {
      (function (test) {
        var sorted = testHelper.getSorted(test);
        var original = testHelper.getOriginal(test);

        it(test.it, function () {
          expect(algorithm(original)).toEqual(sorted);
        });
      })(testHelper.integerTests[i]);
    }
  });

  describe("sort(array, 1)", function () {
    for (var i = 0; i < testHelper.integerTests.length; i++) {
      (function (test) {
        var sorted = testHelper.getSorted(test);
        var original = testHelper.getOriginal(test);

        it(test.it, function () {
          expect(algorithm(original, 1)).toEqual(sorted);
        });
      })(testHelper.integerTests[i]);
    }
  });

  describe("sort(array, 10)", function () {
    for (var i = 0; i < testHelper.integerTests.length; i++) {
      (function (test) {
        var sorted = testHelper.getSorted(test);
        var original = testHelper.getOriginal(test);

        it(test.it, function () {
          expect(algorithm(original, 10)).toEqual(sorted);
        });
      })(testHelper.integerTests[i]);
    }
  });
});
