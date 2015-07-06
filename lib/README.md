## Comparison sorts

| Algorithm               | File                   | Time                         | Space    |
|-------------------------|------------------------|------------------------------|----------|
| [Bubble sort][c01_a]    | [1][c01_1], [2][c01_2] | Θ(n^2)                       | Θ(1)     |
|  Cocktail sort          | [1][c02_1]             | O(n^2), Ω(n)                 | Θ(1)     |
|  Comb sort              | [1][c03_1]             | Ω((n^2)/(2^p))<sup>[1]</sup> | Θ(1)     |
|  Gnome sort             | [1][c04_1]             | O(n^2), Ω(n)                 | Θ(1)     |
| [Heapsort][c05_a]       | [1][c05_1]             | Θ(n log n)                   | Θ(1)     |
| [Insertion sort][c06_a] | [1][c06_1]             | O(n^2), Ω(n)                 | Θ(1)     |
| [Merge sort][c07_a]     | [1][c07_1], [2][c07_2] | Θ(n log n)                   | Θ(n)     |
|  Odd-even sort          | [1][c08_1]             | O(n^2), Ω(n)                 | Θ(1)     |
| [Quicksort][c09_a]      | [1][c09_1]             | O(n^2), Ω(n log n)           | O(log n) |
| [Selection sort][c10_a] | [1][c10_1]             | O(n^2), Ω(n)                 | Θ(1)     |

<sup>[1]</sup> Average case, where p = number of increments

  [c01_a]: http://www.growingwiththeweb.com/2014/02/bubble-sort.html
  [c01_1]: bubble-sort.js
  [c01_2]: bubble-sort-optimised.js
  [c02_1]: cocktail-sort.js
  [c03_1]: comb-sort.js
  [c04_1]: gnome-sort.js
  [c05_a]: http://www.growingwiththeweb.com/2012/11/algorithm-heapsort.html
  [c05_1]: heapsort.js
  [c06_a]: http://www.growingwiththeweb.com/2012/11/algorithm-insertion-sort.html
  [c06_1]: insertion-sort.js
  [c07_a]: http://www.growingwiththeweb.com/2012/11/algorithm-merge-sort.html
  [c07_1]: merge-sort.js
  [c07_2]: merge-sort-bottom-up.js
  [c08_1]: odd-even-sort.js
  [c09_a]: http://www.growingwiththeweb.com/2012/12/algorithm-quicksort.html
  [c09_1]: quicksort.js
  [c10_a]: http://www.growingwiththeweb.com/2013/12/selection-sort.html
  [c10_1]: selection-sort.js
  [c11_1]: bucket-sort.js

## Distribution sorts

| Algorithm              | File                 | Time                                     | Space                  | Notes
|------------------------|----------------------|------------------------------------------|------------------------|-------
| [Bucket sort][d01_a]   | [1][d01_1]           | O(n^2), Ω(n + k), Θ(n + k)<sup>[1]</sup> | Θ(n + k)<sup>[2]</sup> | Where k = number of buckets
| [Counting sort][d02_a] | [1][d02_1]           | Θ(n + k)                                 | Θ(k)<sup>[3]</sup>     | Where k = number of possible values
|  Radix sort            | [1][d03_1]           | Θ(d(n + k))<sup>[4]</sup>                | Θ(n + k)<sup>[4]</sup> | Where d = number of digits, k = number of possible values

<sup>[1]</sup> Average case<br>
<sup>[2]</sup> O(n * k) if buckets are allocated space for n elements<br>
<sup>[3]</sup> O(n + k) if buckets are lists of values instead of a count of values
<sup>[4]</sup> When the inner stable sort used takes Θ(n + k)

  [d01_a]: http://www.growingwiththeweb.com/2015/06/bucket-sort.html
  [d01_1]: bucket-sort.js
  [d02_a]: http://www.growingwiththeweb.com/2014/05/counting-sort.html
  [d02_1]: counting-sort.js
  [d03_1]: radix-sort.js
