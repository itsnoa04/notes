---
%% created: 2022-07-08 08:59 %%
tags: problem-note
aliases:
---

Given an array return the indices of the two numbers that add up to a given target.
eg :
array : [1,3,7,9,2]
target: 11
result: [3,4]

---
Step 1: verify the constraints: 

Ask these questions

Q1: Are all of the numbers positive or can they be negative?
probable answer : Yes
Q2: Are they duplicate numbers in the array?
probable answer : Yes
Q3: Will there always be a solution available?
probable answer : No
Q4: What do we return if there is no solution?
probable answer : return null
Q5: Will there be multiple pairs that add up to a perticular value
probable answer : No

Step 2:Write out test cases:

Best Case Test Case: Tailored test case so that we know what the answer will be
1)
	array : [1,3,7,9,2]
	target: 11
	result: [3,4]
2)
	array : [1,3,7,9,2]
	target: 11
	result: [3,4]

