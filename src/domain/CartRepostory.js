
export default class CartRepostory {

  static getProductionList() {
    const productionList = [{
        id: 1,
        name: '商品1',
        price: 10,
        count: 1
      }, {
        id: 2,
        name: '商品2',
        price: 10,
        count: 2
      }]
    return Promise.resolve(productionList)
  }

  static remove(production) {
    return Promise.resolve(production)
  }

  static save(cart) {
    return Promise.resolve(cart)
  }
}