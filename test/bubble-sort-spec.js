var testHelper = require("./test-helper");
var algorithm = require("../src/bubble-sort");

describe("bubble-sort", function () {
  testHelper.runIntegerTests(algorithm);
  testHelper.runStringTests(algorithm);
  testHelper.runCustomComparisonTests(algorithm);
});
