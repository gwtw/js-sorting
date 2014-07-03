var testHelper = require("./test-helper");
var algorithm = require("../src/cocktail-sort");

describe("cocktail-sort", function () {
  testHelper.runIntegerTests(algorithm.sort);
  testHelper.runStringTests(algorithm.sort);
  testHelper.runCustomComparisonTests(algorithm.sort)
});
