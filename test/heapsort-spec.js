var testHelper = require("./test-helper");
var algorithm = require("../src/heapsort");

testHelper.runTests("heapsort", algorithm.sort);
testHelper.runCustomComparisonTests("heapsort custom comparison", algorithm.sort);