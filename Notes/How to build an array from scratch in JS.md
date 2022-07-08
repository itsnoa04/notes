---
%% created: 2022-07-08 08:18 %%
tags: concept interview-prep
aliases:
---

```js
class MyArray {

  constructor() {

    this.length = 0

    this.data = {}

  }

  get(index){

    retrn this.data[index]

  }

  push(item){

    this.data[this.length] = item

    this.length++

    return this.data

  }

  pop(){

    const lastItem = this.data[this.length - 1]

    delete this.data[this.length - 1]

    this.length--

    return lastItem

  }

  deleteAtIndex(index){

    const Item = this.data[index]

    this.shiftItems(index)

    return Items

  }

  shiftItems(index){

    for(let i = index; i < this.length; i++){

        this.data[i] = this.data[i+1]

    }

    delete this.data[this.length -1]

    this.length--

  }

  

}
```

## Refs:
[[Array]]