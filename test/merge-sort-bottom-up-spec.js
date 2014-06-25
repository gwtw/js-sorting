var testHelper = require("./test-helper");
var algorithm = require("../src/merge-sort-bottom-up");

describe("merge-sort-bottom-up", function () {
  testHelper.runIntegerTests(algorithm.sort);
  testHelper.runStringTests(algorithm.sort);
  testHelper.runCustomComparisonTests(algorithm.sort);
});
