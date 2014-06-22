var testHelper = require("./test-helper");
var algorithm = require("../src/quicksort");

testHelper.runTests("quicksort", algorithm.sort);
