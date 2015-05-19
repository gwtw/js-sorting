var testHelper = require("./test-helper");
var algorithm = require("../index").mergeSortBottomUp;

describe("merge-sort-bottom-up", function () {
  testHelper.runIntegerTests(algorithm);
  testHelper.runStringTests(algorithm);
  testHelper.runCustomComparisonTests(algorithm);
});
