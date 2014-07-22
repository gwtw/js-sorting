var testHelper = require("./test-helper");
var algorithm = require("../src/cocktail-sort");

describe("cocktail-sort", function () {
  testHelper.runIntegerTests(algorithm);
  testHelper.runStringTests(algorithm);
  testHelper.runCustomComparisonTests(algorithm)
});
