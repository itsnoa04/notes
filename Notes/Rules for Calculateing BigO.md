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
const printElementsFromBothArrays = (arrayA, arrayB) => {
	for ( i in arrayA ){
		console.log(arrayA[i])
	}
	
	for ( i in arrayB ){
		console.log(arrayB[i])
	}
}

arrayA = ["a","b","c","d"]
arrayB = [1,2,3,4]

printElementsFromBothArrays(arrayA,arrayB)
```

here arrayA and arrayB are to be calculated with tho different letters

the big O notation of the above code is O(a+b) as the loops are consecutive

This is similar to O(2n) or [[O(n)]]

```js
const fun = (a,b) => {
	for(i in a){
		for(j in b){
			console.log(a[i],b[j])
		}
	}
}

fun("death","life")
```

In the above example the Big O notation is O(a*b) as they are similar to [[O(n^2)]]