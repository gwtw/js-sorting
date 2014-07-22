var testHelper = require("./test-helper");
var algorithm = require("../src/merge-sort");

describe("merge-sort", function () {
  testHelper.runIntegerTests(algorithm);
  testHelper.runStringTests(algorithm);
  testHelper.runCustomComparisonTests(algorithm);
});
