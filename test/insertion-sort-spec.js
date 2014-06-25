var testHelper = require("./test-helper");
var algorithm = require("../src/insertion-sort");

describe("insertion-sort", function () {
  testHelper.runIntegerTests(algorithm.sort);
  testHelper.runStringTests(algorithm.sort);
  testHelper.runCustomComparisonTests(algorithm.sort);
});
