---
%% created: 2022-07-07 12:30 %%
tags: evergreen-notes interview-prep
aliases:
---

Rules of calculating [[Big O Asymptotic Analysis|Big O]] are as follows:
1.  only value the worst case senerio.
	if we have to loop through a list we always consider the required element to be the last element.
2.  ignore all constants.
	if the calculated bigO is something like O(2n) or O(n/2) then we ignore the constant and write it as O(n)
3. Different Inputs are to be calculated useing different symbols
	Consider the following code.
	
```js
let k = "hi"
console.log(k)
```