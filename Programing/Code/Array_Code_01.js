// Given an array return the indices of the two numbers that add up to a given target.
// eg :
// array : [1,3,7,9,2]
// target: 11
// result: [3,4]

// We can find the solution by using the 2 pointer method
// In the 2 pointer method we set two pointers P1 and P2
// let P1 be the first index
// P2 → every other number in the array until:
// numberToFind = target - nums[P1]
// P2 = munberToFind
// add 1 to P1 and reset P2
// remove previous P1 value
// Repeat the steps until result is obtained
// Return as an array => [p1,p2]
