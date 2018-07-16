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
    <!-- <div>
      <add-to-cart></add-to-cart>
    </div> -->
    
  </div>
</template>

<script>
import ShopHeader from './components/Header.vue'
import CartView from './components/Cart.vue'
//import AddToCart from './components/AddToCart.vue'
export default {
  name: 'App',
  components: {
    shopHeader: ShopHeader,
    cartView: CartView,
    //addToCart: AddToCart
  }
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
  margin-left: 50px;
  float: left;
  width: 70%;
}
.cart {
  margin-top: 50px;
  display: inline-block;
  margin-right: 10px;
}
.content {
  margin-left: 200px;
  margin-right: 200px;
}
</style>
