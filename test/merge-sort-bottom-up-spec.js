var testHelper = require("./test-helper");
var algorithm = require("../src/merge-sort-bottom-up");

describe("merge-sort-bottom-up", function () {
  testHelper.runIntegerTests(algorithm);
  testHelper.runStringTests(algorithm);
  testHelper.runCustomComparisonTests(algorithm);
});
