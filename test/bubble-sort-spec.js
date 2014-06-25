var testHelper = require("./test-helper");
var algorithm = require("../src/bubble-sort");

describe("bubble-sort", function () {
  testHelper.runIntegerTests(algorithm.sort);
  testHelper.runStringTests(algorithm.sort);
  testHelper.runCustomComparisonTests(algorithm.sort)
});
