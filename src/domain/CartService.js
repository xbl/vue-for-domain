
export default class CartService {

  static checkAll(cart, checkAllFlag) {
    cart.productList.forEach(product => {
        product.uiChecked = checkAllFlag
    });
  }

  static checkOne(cart, uiChecked) {
    if(!uiChecked) {
      return false
    }
    let flag = true
    cart.productList.forEach(product => {
      if (!product.uiChecked){
        flag = false
        return false
      }
    });
    return flag
  }
}