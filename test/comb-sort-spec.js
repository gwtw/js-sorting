var testHelper = require("./test-helper");
var algorithm = require("../src/comb-sort");

describe("comb-sort", function () {
  testHelper.runIntegerTests(algorithm.sort);
  testHelper.runStringTests(algorithm.sort);
  testHelper.runCustomComparisonTests(algorithm.sort);
});
