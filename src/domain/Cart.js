import Product from './Product'

export default class Cart {

  constructor (productJsonList) {
    this.productList = []
    productJsonList.forEach(productJson => {
      this.productList.push(new Product(productJson))
    });
  }

  productList

  remove(product) {
    const index = this.productList.indexOf(product)
    this.productList.splice(index, 1)
  }

  add(product) {
    this.productList.push(product)
  }

}