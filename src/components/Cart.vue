<template>
<div class="cart-container">
  <div class="cart">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <!-- <div class="cart-header">
        <label>Your Order</label>
    </div> -->
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
            <!-- <router-link to="/checkout" v-show="showCheckout"> -->
            <button v-show="showCheckout" class="checkout-btn" @click="goToCheckout">Checkout</button>
            <!-- </router-link> -->
            <!-- <router-link to="/order-detail"  -->
            <button v-show="showPaynow" class="checkout-btn" @click.prevent="pay">
                <i v-if="isLoading" class="fa fa-spinner fa-spin" />
                Pay Now
            </button>
            <!-- </router-link> -->
        </div>
    </div>
  </div>
  <!-- <div class="continueOrder" v-show="continueOrder">
      <router-link to="/">
        <button class="continueOrder-btn" @click="backToVouchers">Continue Ordering</button>
      </router-link>
  </div> -->
</div>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex'
import CheckoutVue from './Checkout.vue';
import firebase from 'firebase/app'
require('firebase/auth')
export default {
  name: 'CartView',
  data () {
    return {
      subTotal: 0,
      status: false,
      responseStatus: -1,
      isLoading: false
    }
  },
  computed: {
    ...mapState({
        // any item in cart or not
        isEmpty: state => state['addToCart'].isAdd,
        vouchers: state => state['addToCart'].addedVouchers,
        showCheckout: state => state['cart'].showCheckout,
        showPaynow: state => state['cart'].showPaynow,
        continueOrder: state => state['cart'].continueOrderShow,
        userInfo: state => state['checkout'].userInfo,
        cardInfo: state => state['checkout'].cardInfo
    }),
    //...mapGetters(['addToCart/totalPrice'])
    totalPrice: function() {
        return this.$store.getters['addToCart/totalPrice']
    },
    
  },
  methods: {
      ...mapActions(['addMessage', 'clearMessage']),
      goToCheckout() {
          this.clearMessage()
          // go to checkout only after user add voucher to the cart
          if(this.$store.getters['addToCart/totalPrice'] != 0){
              this.$store.dispatch('cart/checkout')
              // change button to pay now and show continu ordering
              this.$router.push({path: '/checkout'})
          }else {
              let message_obj = {
                message: "You have not choose any item",
                messageClass: "danger",
                autoClose: true
            }
            this.addMessage(message_obj)
          }
          
      },
      backToVouchers() {
          this.$store.dispatch('cart/backToVouchers')
      },
      payWithRequest(){
          var expirydate = this.cardInfo.expiry.split('/')
          var month = expirydate[0]
          var year = expirydate[1]
          var amount = this.totalPrice
        
          this.$http.post('http://dev.posski.com/v5/AbacusPayment', {
                    "Email": this.userInfo.email,
                    "FirstName": this.userInfo.firstName,
                    "LastName": this.userInfo.lastName,
                    "CardHolder": "zarni aung",
                    "CardNumber": this.cardInfo.cardNum,
                    "ExpiryYear": "20"+year,
                    "ExpiryMonth": month,
                    "Amount": amount,
                    "Cvv": this.cardInfo.cvv,
                    "Country":"AUS"
                    // // "Status": {
                    // //     "Code": 0,
                    // //     "Message": ""
                    // // }
    //                 "Email": "zarni.api1244@abacus.co",
    // "FirstName": "zarni",
    // "LastName": "aung",
    // "CardHolder": "zarni aung",
    // "CardNumber": "4111111111111111",
    // "ExpiryYear": "2020",
    // "ExpiryMonth": "08",
    // "Amount": "888",
    // "Cvv": "888",
    // "Country":"AUS"
                
            }).then(response => {
                var data = response.body
                console.log('response:', response )
                console.log('response.data:', response.data )
                this.responseStatus = data.Status.Code
                if(this.responseStatus != 0){
                    this.isLoading = false
                    let message_obj = {
                        message: 'Payment unsuccessful',
                        messageClass: "danger"
                    }
                    this.addMessage(message_obj)
                    return
                }
                let message_obj = {
                    message: 'Successfully pay',
                    messageClass: "success"
                }
                this.addMessage(message_obj)
                // go to order detail page
                this.$router.push({path: '/order-detail'});
                // hind cart
                this.$store.dispatch('cart/hindCart')
            }, response => {
              console.log('error');
            })
      },
      pay(user) {
          this.isLoading = true
          if(this.userInfo.email != '' && this.userInfo.password != ''){
               console.log('created');
               firebase.auth().createUserWithEmailAndPassword(this.userInfo.email, this.userInfo.password)
                //.then()
          }
          if(this.userInfo.firstName === '' && this.userInfo.address === ''){
                this.isLoading = false
                let message_obj = {
                    message: 'You must input your information and deliver address',
                    messageClass: "danger"
                }
               this.addMessage(message_obj)
               return
          }
          if(this.cardInfo.cardNum === '' || this.cardInfo.expiry ==='' || this.cardInfo.cvv === ''){
               this.isLoading = false
               let message_obj = {
                    message: 'You must input payment information',
                    messageClass: "danger"
               }
               this.addMessage(message_obj)
               return
           }
           //if all required information is given, make a payment
           this.payWithRequest()
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
