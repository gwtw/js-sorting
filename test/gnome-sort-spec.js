var testHelper = require("./test-helper");
var algorithm = require("../src/gnome-sort");

describe("gnome-sort", function () {
  testHelper.runIntegerTests(algorithm.sort);
  testHelper.runStringTests(algorithm.sort);
  testHelper.runCustomComparisonTests(algorithm.sort);
});
