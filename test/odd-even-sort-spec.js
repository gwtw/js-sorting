var testHelper = require("./test-helper");
var algorithm = require("../src/odd-even-sort");

describe("odd-even-sort", function () {
  testHelper.runIntegerTests(algorithm.sort);
  testHelper.runStringTests(algorithm.sort);
  testHelper.runCustomComparisonTests(algorithm.sort);
});
