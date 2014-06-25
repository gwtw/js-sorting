var testHelper = require("./test-helper");
var algorithm = require("../src/quicksort");

describe("quicksort", function () {
  testHelper.runIntegerTests(algorithm.sort);
  testHelper.runStringTests(algorithm.sort);
  testHelper.runCustomComparisonTests(algorithm.sort);
});
