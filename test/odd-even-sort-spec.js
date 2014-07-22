var testHelper = require("./test-helper");
var algorithm = require("../src/odd-even-sort");

describe("odd-even-sort", function () {
  testHelper.runIntegerTests(algorithm);
  testHelper.runStringTests(algorithm);
  testHelper.runCustomComparisonTests(algorithm);
});
