var testHelper = require("./test-helper");
var algorithm = require("../src/insertion-sort");

describe("insertion-sort", function () {
  testHelper.runIntegerTests(algorithm);
  testHelper.runStringTests(algorithm);
  testHelper.runCustomComparisonTests(algorithm);
});
