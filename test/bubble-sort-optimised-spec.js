var testHelper = require("./test-helper");
var algorithm = require("../index").bubbleSortOptimised;

describe("bubble-sort-optimised", function () {
  testHelper.runIntegerTests(algorithm);
  testHelper.runStringTests(algorithm);
  testHelper.runCustomComparisonTests(algorithm);

  testHelper.runCompareObserverTests(algorithm);
  testHelper.runSwapObserverTests(algorithm);
});
