export default class Product {

  name
  price
  count

  constructor ({ name, price, count}) {
    this.name = name
    this.price = price
    this.count = count
  }

  set uiCount(count) {
    if(count > 9) {
      this.count = 9
      // throw new Error('1')
      return 
    }
    if(count < 0) {
      this.count = 0
      // throw new Error('1')
      return 
    }
    this.count = count
  }

  get uiCount() {
    return this.count
  }
}