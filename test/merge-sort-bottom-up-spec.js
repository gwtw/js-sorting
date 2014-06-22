var testHelper = require("./test-helper");
var algorithm = require("../src/merge-sort-bottom-up");

testHelper.runTests("merge-sort-bottom-up", algorithm.sort);
testHelper.runCustomComparisonTests("merge-sort-bottom-up custom comparison", algorithm.sort);
