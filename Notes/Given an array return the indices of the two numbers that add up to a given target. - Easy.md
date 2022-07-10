---
%% created: 2022-07-08 08:59 %%
tags: problem-note easy array hashmap
aliases:
---

Given an [[Array]] return the indices of the two numbers that add up to a given target.
eg :
array : [1,3,7,9,2]
target: 11
result: [3,4]

---
Step 1: verify the constraints: 

Ask these questions

Q1: Are all the numbers positive, or can they be negative?
Probable answer : Yes
Q2: Are they duplicate numbers in the array?
Probable answer : Yes
Q3: Will there always be a solution available?
Probable answer : No
Q4: What do we return if there is no solution?
Probable answer : return null
Q5: Will there be multiple pairs that add up to a particular value
probable answer : No

Step 2:Write out test cases:

Best Case Test Case: Tailored test case so that we know what the answer will be
1)
	array : [1,3,7,9,2]
	target: 11
	result: [3,4]
2)
	array : [1,3,7,9,2]
	target: 25
	result: null
3)
	array:[]
	target: 1
	result: null
4)
	array: [5]
	target: 5
	result: null
5)
	array: [1,2]
	target: 3
	result: [0,1]

Step3: Figure out a solution without code

We can find the solution by using the [[2 pointer method]]
In the 2 pointer method we set two pointers P1 and P2
let P1 be the first index
P2 → every other number in the array until:
numberToFind = target - nums[P1]
P2 = munberToFind
add 1 to P1 and reset P2
remove previous P1 value
Repeat the steps until result is obtained
Return as an array => [p1,p2]

Step4: Convert this logic to code.
[Code](Array_Code_01.js)

```JS
const TwoSum = (nums, target) => {

  for (p1 = 0; p1 < nums.length; p1++) {

    let numToFind = target - nums[p1];

    for (p2 = parseInt(p1 + 1); p2 < nums.length; p2++) {

      if (nums[p2] == numToFind) {

        return [p1, p2];

      }

    }

  }

  return null;

};

  

console.log(TwoSum([1, 3, 7, 9, 2], 11));
```
Step 5: Double chk for errors
Chk for errors in your code.

Step 6: Explain with a [[test case]]:

Step 7: Analyse the space and time complexity
Time complexity : [[O(n^2)]]
Space ComplexityL [[O(1)]]

Step 8: [[Optimisation]]
for this perticular problem we can leverage a hashmap to improve out time complexity
{number to find : index}

```JS

const TwoSum = (nums, target) => {

  const targetIndexHash = {};

  for (pointer = 0; pointer < nums.length; pointer++) {

    if (targetIndexHash[nums[pointer]] >= 0) {

      return [targetIndexHash[nums[pointer]], pointer];

    } else {

      let numToFind = target - nums[pointer];

      targetIndexHash[numToFind] = pointer;

    }

  }

  return null;

};

  

console.log(TwoSum([1, 3, 7, 9, 2], 11));
```

Step 9: Analyse optimised Space and Time Complexity

Time complexity: [[O(n)]]
Space complexity: [[O(n)]]