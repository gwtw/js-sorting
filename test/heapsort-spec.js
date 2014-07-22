var testHelper = require("./test-helper");
var algorithm = require("../src/heapsort");

describe("heapsort", function () {
  testHelper.runIntegerTests(algorithm);
  testHelper.runStringTests(algorithm);
  testHelper.runCustomComparisonTests(algorithm);
});
