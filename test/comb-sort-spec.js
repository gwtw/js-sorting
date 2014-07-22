var testHelper = require("./test-helper");
var algorithm = require("../src/comb-sort");

describe("comb-sort", function () {
  testHelper.runIntegerTests(algorithm);
  testHelper.runStringTests(algorithm);
  testHelper.runCustomComparisonTests(algorithm);
});
