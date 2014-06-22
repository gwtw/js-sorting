var testHelper = require("./test-helper");
var algorithm = require("../src/bubble-sort");

testHelper.runTests("bubble-sort", algorithm.sort);
testHelper.runCustomComparisonTests("bubble-sort custom comparison", algorithm.sort)
