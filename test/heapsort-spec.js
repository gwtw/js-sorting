var testHelper = require("./test-helper");
var algorithm = require("../src/heapsort");

describe("heapsort", function () {
  testHelper.runIntegerTests(algorithm.sort);
  testHelper.runStringTests(algorithm.sort);
  testHelper.runCustomComparisonTests(algorithm.sort);
});
