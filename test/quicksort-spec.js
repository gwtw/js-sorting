var testHelper = require("./test-helper");
var algorithm = require("../src/quicksort");

testHelper.runTests("quicksort", algorithm.sort);
testHelper.runCustomComparisonTests("quicksort custom comparison", algorithm.sort);
