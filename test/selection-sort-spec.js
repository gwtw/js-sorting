var testHelper = require("./test-helper");
var algorithm = require("../src/selection-sort");

describe("selection-sort", function () {
  testHelper.runIntegerTests(algorithm.sort);
  testHelper.runStringTests(algorithm.sort);
  testHelper.runCustomComparisonTests(algorithm.sort);
});
