var testHelper = require("./test-helper");
var algorithm = require("../src/gnome-sort");

describe("gnome-sort", function () {
  testHelper.runIntegerTests(algorithm);
  testHelper.runStringTests(algorithm);
  testHelper.runCustomComparisonTests(algorithm);
});
