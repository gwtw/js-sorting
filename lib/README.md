## Comparison sorts

| Algorithm              | File                 | Time                         | Space    |
|------------------------|----------------------|------------------------------|----------|
| [Bubble sort][01_a]    | [1][01_1], [2][01_2] | Θ(n^2)                       | Θ(1)     |
|  Cocktail sort         | [1][02_1]            | O(n^2), Ω(n)                 | Θ(1)     |
|  Comb sort             | [1][03_1]            | Ω((n^2)/(2^p))<sup>[1]</sup> | Θ(1)     |
|  Gnome sort            | [1][04_1]            | O(n^2), Ω(n)                 | Θ(1)     |
| [Heapsort][05_a]       | [1][05_1]            | Θ(n log n)                   | Θ(1)     |
| [Insertion sort][06_a] | [1][06_1]            | O(n^2), Ω(n)                 | Θ(1)     |
| [Merge sort][07_a]     | [1][07_1], [2][07_2] | Θ(n log n)                   | Θ(n)     |
|  Odd-even sort         | [1][08_1]            | O(n^2), Ω(n)                 | Θ(1)     |
| [Quicksort][09_a]      | [1][09_1]            | O(n^2), Ω(n log n)           | O(log n) |
| [Selection sort][10_a] | [1][10_1]            | O(n^2), Ω(n)                 | Θ(1)     |

<sup>[1]</sup> Average case, where p = number of increments

  [01_a]: http://www.growingwiththeweb.com/2014/02/bubble-sort.html
  [01_1]: bubble-sort.js
  [01_2]: bubble-sort-optimised.js
  [02_1]: cocktail-sort.js
  [03_1]: comb-sort.js
  [04_1]: gnome-sort.js
  [05_a]: http://www.growingwiththeweb.com/2012/11/algorithm-heapsort.html
  [05_1]: heapsort.js
  [06_a]: http://www.growingwiththeweb.com/2012/11/algorithm-insertion-sort.html
  [06_1]: insertion-sort.js
  [07_a]: http://www.growingwiththeweb.com/2012/11/algorithm-merge-sort.html
  [07_1]: merge-sort.js
  [07_2]: merge-sort-bottom-up.js
  [08_1]: odd-even-sort.js
  [09_a]: http://www.growingwiththeweb.com/2012/12/algorithm-quicksort.html
  [09_1]: quicksort.js
  [10_a]: http://www.growingwiththeweb.com/2013/12/selection-sort.html
  [10_1]: selection-sort.js
  [11_1]: bucket-sort.js

## Distribution sorts

| Algorithm              | File                 | Time                                     | Space                  | Notes
|------------------------|----------------------|------------------------------------------|------------------------|-------
|  Bucket sort           | [1][d01_1]           | O(n^2), Ω(n + k), Θ(n + k)<sup>[1]</sup> | Θ(n + k)<sup>[2]</sup> | Where k = number of buckets
| [Counting sort][d02_a] | [1][d02_1]           | Θ(n + k)                                 | Θ(k)<sup>[3]</sup>     | Where k = number of possible values

<sup>[1]</sup> Average case<br>
<sup>[2]</sup> O(n * k) if buckets are allocated space for n elements
<sup>[3]</sup> O(n + k) if buckets are lists of values instead of a count of values

  [d01_1]: bucket-sort.js
  [d02_a]: http://www.growingwiththeweb.com/2014/05/counting-sort.html
  [d02_1]: counting-sort.js
