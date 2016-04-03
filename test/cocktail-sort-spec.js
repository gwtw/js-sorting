var testHelper = require("./test-helper");
var algorithm = require("../index").cocktailSort;

describe("cocktail-sort", function () {
  testHelper.runIntegerTests(algorithm);
  testHelper.runStringTests(algorithm);
  testHelper.runCustomComparisonTests(algorithm);

  testHelper.runCompareObserverTests(algorithm);
  testHelper.runSwapObserverTests(algorithm);
});
