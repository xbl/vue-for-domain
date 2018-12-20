<template>
  <div class="hello">
    <label><input type="checkbox" v-model="checkAllFlag" @change="checkAll"> 全选</label>
    <div v-for="product in cart.productList" :key="product.id">
      <ul>
        <li><input type="checkbox" v-model="product.uiChecked" @change="checkOne(product.uiChecked)"></li>
        <li>name: {{ product.name}}</li>
        <li>price: {{ product.price}}</li>
        <li>count: {{ product.uiCount}}
          <button @click="product.uiCount = product.uiCount - 1">-</button>
          <input type="number" v-model="product.uiCount">
          <button @click="product.uiCount = product.uiCount + 1">+</button>
        </li>
        <li>
          <button @click="remove(product)">remove</button>
        </li>
      </ul>
    </div>
    <button @click="submit()">submit</button>
  </div>
</template>

<script>
import Cart from '../domain/Cart'
import CartRepostory from '../domain/CartRepostory'
import CartService from '../domain/CartService'

export default {
  name: 'cart',
  data: () => ({
    cart: {},
    checkAllFlag: false
  }),
  methods: {
    submit()  {
      CartRepostory.save(this.cart)
        .then(() => {
          alert(JSON.stringify(this.cart))
        })
    },
    remove(product) {
      CartRepostory.remove(product)
        .then(() => {
          this.cart.remove(product)
        })
    },
    checkAll() {
      CartService.checkAll(this.cart, this.checkAllFlag)
    },
    checkOne(uiChecked) {
      return this.checkAllFlag = CartService.checkOne(this.cart, uiChecked)
    }
  },
  created() {
    CartRepostory.getProductionList()
      .then((productionList) => {
        this.cart = new Cart(productionList)
      })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
a {
  color: #42b983;
}
</style>
