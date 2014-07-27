# js-sorting [![NPM version](http://img.shields.io/npm/v/js-sorting.svg?style=flat)](https://www.npmjs.org/package/js-sorting)

[![Build Status](http://img.shields.io/travis/Tyriar/js-sorting.svg?style=flat)](http://travis-ci.org/Tyriar/js-sorting)
[![Code climate](http://img.shields.io/codeclimate/github/Tyriar/js-sorting.svg?style=flat)](https://codeclimate.com/github/Tyriar/js-sorting)
[![Code coverage](http://img.shields.io/codeclimate/coverage/github/Tyriar/js-sorting.svg?style=flat)](https://codeclimate.com/github/Tyriar/js-sorting)

A collection of sorting algorithms written in JavaScript. Each algorithm is enclosed in its own file, wrapped in a [Universal Module Definition (UMD)][1] API to make it easier to use across multiple platforms.

Detailed information on the complexity of each algorithm is located [here][6]. To learn more about how some of the algorithms are implemented, have a look at the [technical articles on my blog][2].

## Installing

```
# via bower
bower install --save js-sorting

# via NPM
npm install --save js-sorting
```

## Including

**Browser**

```html
<script src="bower_components/js-sorting/src/merge-sort.js"></script>
```

**Node.JS**

```javascript
var mergeSort = require("merge-sort");
```

## Usage

See [the source files][4] for a list sorts available and their public interfaces, Here is an example for the [merge sort][5].

```javascript
// Sort normally
mergeSort.sort([5, 3, 2, 4, 1]);

// Sort in reverse
mergeSort.compare = function (a, b) {
    return b - a;
};
mergeSort.sort([5, 3, 2, 4, 1]);

// Sort complex objects
var list = [
  { 'firstname': 'John',   'lastname': 'Smith'   },
  { 'firstname': 'Daniel', 'lastname': 'Imms'    },
  { 'firstname': 'Mary',   'lastname': 'Jackson' },
  { 'firstname': 'John',   'lastname': 'Brown'   },
  { 'firstname': 'Mary',   'lastname': 'Harris'  },
];
mergeSort.compare = function (a, b) {
  // Sort by first name first
  if (a.firstname.toLowerCase() < b.firstname.toLowerCase()) return -1;
  if (a.firstname.toLowerCase() > b.firstname.toLowerCase()) return 1;
  // Sort by last name second
  if (a.lastname.toLowerCase() < b.lastname.toLowerCase()) return -1;
  if (a.lastname.toLowerCase() > b.lastname.toLowerCase()) return 1;
  return 0;
};
mergeSort.sort(list);
```

### Observing array changes

In order to support [one of my other projects][8], various methods are exposed for each sort that allow observation of internal array changes. This can be done by wrapping the functions like so:

```javascript
var originalCompare = bubbleSort.compare;
bubbleSort.compare = function (a, b) {
  alert('Comparing value at index "' + a + '" with "' + b + '"');
  originalCompare(array, a, b);
};

var originalSwap = bubbleSort.swap;
bubbleSort.swap = function (array, a, b) {
  alert('Swapping "' + array[a] + '" (i=' + a + ') with "' +
                       array[b] + '" (i=' + b + ')');
  originalSwap(array, a, b);
};
```

The functions available are different for each algorithm since not all sorts only do compares and swaps to transform the array in a standard way. For example [insertion sort exposes a `shift` function][9] which shifts an item to a particular index. While this is the same as swapping the item with the adjacent item until it reaches the index, it is achieved in half the number of assignments by only assigning the item being shifted once. The way that this operation is visualised is quite different to just x swaps.

## Contributing

I'd love to get some contributions for other sorting algorithms, if you want to make a pull request try to follow the existing style of the code and make sure you add tests for the new algorithm.

### Testing locally

```
npm install
npm test

# generate coverage report in ./coverage/
grunt coverage
```

## License

MIT © [Daniel Imms][7]

## See also

* [Tyriar/js-data-structures][3]



  [1]: https://github.com/umdjs/umd/blob/master/returnExportsGlobal.js
  [2]: http://www.growingwiththeweb.com/p/explore.html?t=Sorting
  [3]: https://github.com/Tyriar/js-data-structures
  [4]: https://github.com/Tyriar/js-sorting/tree/master/src
  [5]: https://github.com/Tyriar/js-sorting/blob/master/src/merge-sort.js
  [6]: https://github.com/Tyriar/js-sorting/blob/master/src/README.md
  [7]: http://www.growingwiththeweb.com
  [8]: https://github.com/Tyriar/sorting-visualiser
  [9]: https://github.com/Tyriar/js-sorting/blob/master/src/insertion-sort.js
