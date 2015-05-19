var testHelper = require("./test-helper");
var algorithm = require("../index").mergeSort;

describe("merge-sort", function () {
  testHelper.runIntegerTests(algorithm);
  testHelper.runStringTests(algorithm);
  testHelper.runCustomComparisonTests(algorithm);
});
