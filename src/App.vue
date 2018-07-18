<template>
  <div id="app">
    <shop-header></shop-header>
    <message-component></message-component>
    <div class="content">
      <div class="router-view">
        <transition name='fade' mode='out-in'>
          <router-view/>
        </transition>
      </div>
      <div class="cart" v-show="cartShow">
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
import MessageComponent from './components/Message.vue'

import { mapState } from 'vuex'
export default {
  name: 'App',
  components: {
    shopHeader: ShopHeader,
    cartView: CartView,
    dialogBar: AddToCart,
    messageComponent: MessageComponent
  },
  computed: {
    ...mapState({
      isOpen: state => state['vouchers'].isOpen,
      //amount: state => state['vouchers'].amount,
      cartShow: state => state['cart'].cartShow
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
  /* width: 70%; */
  width: auto; 
  height: auto
}
.cart {
  margin-top: 50px;
  display: inline-block;
  margin-right: 10px; 
  width: auto; 
  height: auto
}
.content {
  display: flex;
  justify-content: center; 
  -webkit-flex: 0 0 20%;
  flex: 0%;
  margin-left: 200px;
  margin-right: 200px;
}
.fade-enter {
  opacity: 0;
}
.fade-leave {
  opacity: 1;
}
.fade-enter-active {
  transition: opacity .2s;
}
.fade-leave-active {
  opacity: 0;
  transition: opacity .2s;
}
</style>
