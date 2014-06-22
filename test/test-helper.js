var testHelper = {};

// This function expects algorithm to be a function that takes an array as an
// argument and returnsa sorted array. The array returned may or may not be the
// array passed in as an argument.
testHelper.testSortingAlgorithm = function (name, algorithm) {
  describe(name, function () {
    for (var i = 0; i < tests.length; i++) {
      var test = tests[i];
      it(test.it, function () {
        expect(algorithm(test.original)).toEqual(test.sorted);
      })
    }
  });
};

var tests = [{
  it: "Should sort empty array",
  original: [],
  sorted: []
}, {
  it: "Should sort small sorted array",
  original: [1,2,3,4,5],
  sorted: [1,2,3,4,5]
}, {
  it: "Should sort small reverse sorted array",
  original: [5,4,3,2,1],
  sorted: [1,2,3,4,5]
}, {
  it: "Should sort small sorted array with only negative values",
  original: [-5,-4,-3,-2,-1],
  sorted: [-5,-4,-3,-2,-1]
}, {
  it: "Should sort small reverse sorted array with only negative values",
  original: [-1,-2,-3,-4,-5],
  sorted: [-5,-4,-3,-2,-1]
}, {
  it: "Should sort small sorted array with two values swapped",
  original: [1,2,5,4,3],
  sorted: [1,2,3,4,5]
}, {
  it: "Should sort large sorted array",
  original: [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],
  sorted: [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
}, {
  it: "Should sort large reverse sorted array",
  original: [20,19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1,0],
  sorted: [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
}, {
  it: "Should sort large array with two values swapped",
  original: [1,2,8,4,5,6,7,3,9,10,11,12,13,14,15,16,17,18,19,20],
  sorted: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
}, {
  it: "Should sort large sorted array with only negative values",
  original: [-20,-19,-18,-17,-16,-15,-14,-13,-12,-11,-10,-9,-8,-7,-6,-5,-4,-3,-2,-1],
  sorted: [-20,-19,-18,-17,-16,-15,-14,-13,-12,-11,-10,-9,-8,-7,-6,-5,-4,-3,-2,-1]
}, {
  it: "Should sort large reverse sorted array with only negative values",
  original: [-1,-2,-3,-4,-5,-6,-7,-8,-9,-10,-11,-12,-13,-14,-15,-16,-17,-18,-19,-20],
  sorted: [-20,-19,-18,-17,-16,-15,-14,-13,-12,-11,-10,-9,-8,-7,-6,-5,-4,-3,-2,-1]
}, {
  it: "Should sort jumbled array with small range of values",
  original: [5,-3,2,0,-5,1,4,-4,-2,3,-1],
  sorted: [-5,-4,-3,-2,-1,0,1,2,3,4,5]
}, {
  it: "Should sort jumbled array with large range of values",
  original: [102,10,-50,2938,108,-4011,-38,523,16],
  sorted: [-4011,-50,-38,10,16,102,108,523,2938]
}, {
  it: "Should sort array with duplicate values",
  original: [-2,-7,1,9,-7,1,-2,10,-7,-7],
  sorted: [-7,-7,-7,-7,-2,-2,1,1,9,10]
}];

module.exports = testHelper;
