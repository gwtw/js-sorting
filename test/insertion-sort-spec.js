var testHelper = require("./test-helper");
var algorithm = require("../index").insertionSort;

describe("insertion-sort", function () {
  testHelper.runIntegerTests(algorithm);
  testHelper.runStringTests(algorithm);
  testHelper.runCustomComparisonTests(algorithm);

  //testHelper.runCompareObserverTests(algorithm);
  testHelper.runShiftObserverTests(algorithm);
});
