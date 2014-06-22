var testHelper = require("./test-helper");
var algorithm = require("../src/merge-sort");

testHelper.runTests("merge-sort", algorithm.sort);
