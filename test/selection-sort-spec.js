var testHelper = require("./test-helper");
var algorithm = require("../src/selection-sort");

testHelper.runTests("selection-sort", algorithm.sort);
testHelper.runCustomComparisonTests("selection-sort custom comparison", algorithm.sort);
