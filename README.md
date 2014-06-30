# js-sorting

[![Build Status](https://secure.travis-ci.org/Tyriar/js-sorting.png)](http://travis-ci.org/Tyriar/js-sorting)
[![Code climate](https://codeclimate.com/github/Tyriar/js-sorting.png)](https://codeclimate.com/github/Tyriar/js-sorting)

A collection of sorting algorithms written in JavaScript. Each algorithm is enclosed in its own file, wrapped in a [Universal Module Definition (UMD)][1] API to make it easier to use across multiple platforms.

To learn more about how each algorithm is implemented have a look at the [technical articles on my blog][2].

## Installing

```
bower install --save js-sorting
```

### NPM

```
npm install --save js-sorting
```

## Including

### Browser

```html
<script src="bower_components/js-sorting/src/merge-sort.js"></script>
```

### Node.JS

```javascript
var mergeSort = require("merge-sort");
```

## Usage

See [the source files][4] for a list sorts available and their public interfaces, Here is an example for the [merge sort][5].

```javascript
// Sort normally
mergeSort.sort([5, 3, 2, 4, 1]);

// Sort in reverse
mergeSort.sort([5, 3, 2, 4, 1], function (a, b) {
    return b - a;
});

// Sort complex objects
var list = [
  { 'firstname': 'John',   'lastname': 'Smith'   },
  { 'firstname': 'Daniel', 'lastname': 'Imms'    },
  { 'firstname': 'Mary',   'lastname': 'Jackson' },
  { 'firstname': 'John',   'lastname': 'Brown'   },
  { 'firstname': 'Mary',   'lastname': 'Harris'  },
];
mergeSort.sort(list, function (a, b) {
  // Sort by first name first
  if (a.firstname.toLowerCase() < b.firstname.toLowerCase()) return -1;
  if (a.firstname.toLowerCase() > b.firstname.toLowerCase()) return 1;
  // Sort by last name second
  if (a.lastname.toLowerCase() < b.lastname.toLowerCase()) return -1;
  if (a.lastname.toLowerCase() > b.lastname.toLowerCase()) return 1;
  return 0;
});
```

## Contributing

I'd love to get some contributions for other sorting algorithms, if you want to make a pull request try to follow the existing style of the code and make sure you add tests for the new algorithm.

### Testing locally

```
npm install
npm test
```

## See also

* [Tyriar/js-data-structures][3]



[1]: https://github.com/umdjs/umd/blob/master/returnExportsGlobal.js
[2]: http://www.growingwiththeweb.com/p/explore.html?t=Sorting
[3]: https://github.com/Tyriar/js-data-structures
[4]: https://github.com/Tyriar/js-sorting/tree/master/src
[5]: https://github.com/Tyriar/js-sorting/blob/master/src/merge-sort.js
