The notation for describing the time and space complexity of algorithms.
Variables in Big O notation represent the sizes of algorithm inputs. For example, O(n) is the time complexity of an algorithm that traverses an array of length n; similarly, O(n + m) is the time complexity of an algorithm that traverses an array of length n and a string of length m.
The following are examples of common complexities and their Big O notations, in order of speed:

- Constant: O(1)
- Logarithmic: O(log(n))
- Linear: O(n)
- Log-linear: O(nlog(n))
- Quadratic: O(n²)
- Cubic: O(n³)
- Exponential: 0(2")
- Factorial: O(n!)

It should be noted that in the context of coding interviews, Big O notation is commonly used to describe an algorithm's worst-case complexity, even if the worst-case complexity differs from the average-case complexity.

Some sorting algorithms, for example, have different time complexities depending on the layout of the elements in their input array. Their time complexity will be much greater in rare cases than in more common cases. Similarly, an algorithm that accepts a string and performs special operations on uppercase characters may have a different time complexity when run on an input string containing only uppercase characters versus an input string containing only a few uppercase characters.

Thus, when describing an algorithm's time complexity, it can be useful to specify whether the time complexity refers to the average case or the worst case (e.g., "this algorithm runs in O(nlog(n)) time on average and in O(n2) time in the worst case").