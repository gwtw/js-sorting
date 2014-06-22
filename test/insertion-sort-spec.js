var testHelper = require("./test-helper");
var algorithm = require("../src/insertion-sort");

testHelper.runTests("insertion-sort", algorithm.sort);
testHelper.runCustomComparisonTests("insertion-sort custom comparison", algorithm.sort);
