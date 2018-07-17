<template>
<div>
  <div class="cart">
    <div class="cart-header">
        <!-- <label>Your Order</label> -->
    </div>
    <div class="cart-content">
        <!-- cart items -->
        <div class="cart-menus" v-if="isEmpty"> 
            <div v-for="(voucher, id) in vouchers" :key="id">
                <div class="cart-menu">
                    <div class="gift-num">
                        <strong>{{voucher.giftNum}}&nbsp; x &nbsp;</strong>
                    </div>
                    <div class="cart-menu-item">
                        <strong>${{voucher.amount}} Gift Card</strong>
                        <div class="extras-container" v-if="voucher.from">
                            <small>From:</small>{{voucher.from}}<br>
                            <small>To:</small>{{voucher.toName}}<br>
                            {{voucher.description}}
                        </div>
                    </div>
                    <div class="cart-menu-item-price">
                        <strong>{{voucher.amount * voucher.giftNum}}</strong>
                    </div>
                </div>
            </div>
        </div>
        <!-- cart total price -->
        <div id="cart-totals">
            <div class="cart-total-price">
                <strong>Total:</strong>
                <strong>${{totalPrice}}</strong>
            </div>
        </div>
        <!-- checkout button -->
        <div>
            <router-link to="/checkout" v-show="showCheckout">
                <button class="checkout-btn" @click="goToCheckout">Checkout</button>
            </router-link>
             <router-link to="/order-detail" v-show="showPaynow">
                <button class="checkout-btn">Pay Now</button>
            </router-link>
        </div>
    </div>
  </div>
  <div class="continueOrder" v-show="continueOrder">
      <router-link to="/">
        <button class="continueOrder-btn" @click="backToVouchers">Continue Ordering</button>
      </router-link>
  </div>
  
</div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
export default {
  name: 'CartView',
  data () {
    return {
      subTotal: 0
    }
  },
  computed: {
    ...mapState({
        // any item in cart or not
        isEmpty: state => state['addToCart'].isAdd,
        vouchers: state => state['addToCart'].addedVouchers,
        showCheckout: state => state['cart'].showCheckout,
        showPaynow: state => state['cart'].showPaynow,
        continueOrder: state => state['cart'].continueOrderShow
    }),
    //...mapGetters(['addToCart/totalPrice'])
    totalPrice: function() {
        return this.$store.getters['addToCart/totalPrice']
    }
  },
  methods: {
      goToCheckout() {
          this.$store.dispatch('cart/checkout')
      },
      backToVouchers() {
          this.$store.dispatch('cart/backToVouchers')
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import url('https://fonts.googleapis.com/css?family=Nunito+Sans:200,300,400');
.cart {
    text-align: center;
    color: #bbb;
    position: relative;
    border: 1px solid #f6f6f6;
    background-color: #fefefe;
    text-align: center;
    color: #bbb;
    width: 300px;
    top: 28px;
    display: block;
    border: 1px solid #dedede;
}
div {
    display: block;
}
.cart-header {
    font-size: 25px;
    padding: 10px 0 10px 0;
    background-color: #fff;
    border-bottom: none;
    padding-top: 24px;
}
.cart-content {
    margin: 5px 20px;
    padding-bottom: 10px;
}
.cart-totals {
    background: none;
    border-top: none;
    color: #777777;
    margin-bottom: 10px;
    font-size: 0.9em;
    display: inline-flex;
    justify-content: space-between;
    width: 100%;
    flex-direction: column;
}
.cart-total-price {
    display: inline-flex;
    justify-content: space-between;
    width: 100%;
    color: black;
    font-size: 15px;
}
.cart-menu {
    margin: 5px auto;
    box-sizing: border-box;
    display: flex;
    color: #3F3E3B;
    padding: 5px;
}
.cart-menu-item {
    flex: 3;
    text-align: left;
    font-size: 0.8em;
}
.gift-num {
    text-align: right;
    font-size: 0.9em;
}
.cart-menu-item-price {
    text-align: right;
    font-size: .9em;
    font-weight: 400; 
}
strong {
    font-family: 'Nunito Sans', sans-serif
}
.extras-container {
    padding-top: 7px;
    font-family: 'Nunito Sans';
    font-size: 300;
}
div {
    font-family: 'Nunito Sans';
}
.checkout-btn {
    cursor: pointer;
    background: #3862EB;
    width: 100%;
    border: 0;
    padding: 10px 15px;
    color: #ffffff;
    -webkit-transition: 0.3s ease;
    transition: 0.3s ease;
    font-size: 1em;
    margin: 6px auto;
    border: 1px solid #3862EB;
}
.continueOrder {
    margin-top: 50px;
}
.continueOrder-btn {
    background-color:transparent;
    font-weight: bold;
    margin-top: 100px;
    cursor: pointer;
    width: 90%;
    border: 0;
    padding: 15px 15px;
    color: #9e9d9d;
    transition: 0.3s ease;
    font-size: 1em;
    margin: 6px auto;
    border: 1px solid rgb(160, 160, 160);
}
li {
    list-style-type: none
}
ul {
    margin-left: 0px;
}
</style>
