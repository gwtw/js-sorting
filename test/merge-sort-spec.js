var testHelper = require("./test-helper");
var algorithm = require("../src/merge-sort");

describe("merge-sort", function () {
  testHelper.runIntegerTests(algorithm.sort);
  testHelper.runStringTests(algorithm.sort);
  testHelper.runCustomComparisonTests(algorithm.sort);
});
