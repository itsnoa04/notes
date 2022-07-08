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

}
