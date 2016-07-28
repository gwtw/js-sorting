# js-sorting

[![Build Status](https://travis-ci.org/gwtw/js-sorting.svg?branch=master)](http://travis-ci.org/gwtw/js-sorting)

A collection of sorting algorithms written in JavaScript.

Detailed information on the complexity of each algorithm is located [here][6]. To learn more about how some of the algorithms are implemented, have a look at the [technical articles on my blog][2].

## Installing

```bash
npm install --save js-sorting
```

## Usage

See [the source files][4] for a list sorts available and their public interfaces, Here is an example for [merge sort][5].

```javascript
var mergeSort = require("js-sorting").mergeSort;

// Sort normally
mergeSort([5, 3, 2, 4, 1]);

// Sort in reverse
var reverseCompare = function (a, b) {
    return b - a;
};
mergeSort([5, 3, 2, 4, 1], reverseCompare);

// Sort complex objects
var list = [
  { 'firstname': 'John',   'lastname': 'Smith'   },
  { 'firstname': 'Daniel', 'lastname': 'Imms'    },
  { 'firstname': 'Mary',   'lastname': 'Jackson' },
  { 'firstname': 'John',   'lastname': 'Brown'   },
  { 'firstname': 'Mary',   'lastname': 'Harris'  },
];
var complexNameSort = function (a, b) {
  // Sort by first name first
  if (a.firstname.toLowerCase() < b.firstname.toLowerCase()) return -1;
  if (a.firstname.toLowerCase() > b.firstname.toLowerCase()) return 1;
  // Sort by last name second
  if (a.lastname.toLowerCase() < b.lastname.toLowerCase()) return -1;
  if (a.lastname.toLowerCase() > b.lastname.toLowerCase()) return 1;
  return 0;
};
mergeSort.sort(list, complexNameSort);
```

### Observing array changes

In order to support [one of my other projects][8], various methods are exposed for each sort that allow observation of internal array changes. This can be done by wrapping the functions like so:

```javascript
bubbleSort.attachCompareObserver = function (array, a, b) {
  alert('Comparing "' + array[a] + '" (i=' + a + ') with "' +
                        array[b] + '" (i=' + b + ')');
};

bubbleSort.attachSwapObserver(function (array, a, b) {
  alert('Swapping "' + array[a] + '" (i=' + a + ') with "' +
                       array[b] + '" (i=' + b + ')');
});
```

The functions available are different for each algorithm since not all sorts only do compares and swaps to transform the array in a standard way. For example [insertion sort exposes a `shift` function][9] which shifts an item to a particular index. While this is the same as swapping the item with the adjacent item until it reaches the index, it is achieved in half the number of assignments by only assigning the item being shifted once. The way that this operation is visualised is quite different to just x swaps.

## Contributing

I'd love to get some contributions for other sorting algorithms, if you want to make a pull request try to follow the existing style of the code and make sure you add tests for the new algorithm.

### Testing locally

```bash
npm install
npm test

# generate coverage report in ./coverage/
grunt coverage
```



## License

MIT © [Daniel Imms](http://www.growingwiththeweb.com)



## See also

* [js-data-structures](https://github.com/gwtw/js-data-structures)
* [js-design-patterns](https://github.com/gwtw/js-design-patterns)
* [js-interview-questions](https://github.com/gwtw/js-interview-questions)



[1]: https://github.com/umdjs/umd/blob/master/returnExportsGlobal.js
[2]: http://www.growingwiththeweb.com/p/explore.html?t=Sorting
[4]: lib
[5]: lib/merge-sort.js
[6]: lib/README.md
[8]: https://github.com/gwtw/sorting-visualiser
[9]: lib/insertion-sort.js
