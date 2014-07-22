var testHelper = require("./test-helper");
var algorithm = require("../src/selection-sort");

describe("selection-sort", function () {
  testHelper.runIntegerTests(algorithm);
  testHelper.runStringTests(algorithm);
  testHelper.runCustomComparisonTests(algorithm);
});
