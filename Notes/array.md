A linear collection of data values accessible via numbered indices beginning with index 0.
The following are the standard array operations and their time complexities:

- Accessing a value at a given index: O(1)
- Updating a value at a given index: O(1)
- Inserting a value at the beginning: O(n)
- Inserting a value in the middle: O(n)
- Inserting a value at the end:
- amortized O(1) when dealing with a dynamic array
- O(n) when dealing with a static array
- Removing a value at the beginning: O(n)
- Removing a value in the middle: O(n)
- Removing a value at the end: O(1)
- Copying the array: O(n)

A static array is an array implementation that allocates a fixed amount of memory for storing the array's values. Appending values to an array thus entails copying the entire array and allocating new memory for it, taking into account the extra space required for the newly appended value. This is a time-consuming operation.

A dynamic array is an array implementation that allocates double the amount of memory required to store the array's values in advance. Appending values to the array is a constant-time operation until the allocated memory is exhausted, at which point the array is copied and double the memory is allocated to it once more.
This implementation results in a constant time insertion-at-end operation that is amortised.
