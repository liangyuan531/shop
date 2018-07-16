<template>
  <div id="app">
    <shop-header></shop-header>
    <div class="content">
      <div class="router-view">
        <router-view/>
      </div>
      <div class="cart">
        <cart-view></cart-view>
      </div>
    </div>
    <div>
      <dialog-bar v-show="isOpen"></dialog-bar>
    </div>
  </div>
</template>

<script>
import ShopHeader from './components/Header.vue'
import CartView from './components/Cart.vue'
import AddToCart from './components/AddToCart.vue'
import { mapState } from 'vuex'
export default {
  name: 'App',
  components: {
    shopHeader: ShopHeader,
    cartView: CartView,
    dialogBar: AddToCart
  },
  computed: {
    ...mapState({
      isOpen: state => state['vouchers'].isOpen
      //amount: state => state['vouchers'].amount,
    })
  },
}
</script>

<style scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.router-view {
  margin-right: 50px;
  float: left;
  width: 70%;
}
.cart {
  margin-top: 50px;
  display: inline-block;
  margin-right: 10px;
}
.content {
  display:-webkit-flex;
  flex: 0%;
  -webkit-flex: 0 0 45%;
  margin-left: 200px;
  margin-right: 200px;
}
</style>
