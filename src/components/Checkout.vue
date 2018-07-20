<template>
  <div class="checkout-container">
    <div class="login-bar" v-if="!isLogin">
        <div>
            <router-link to="/login">
                <button class="login">Log in</button>
            </router-link>
            <span class="info-login">or you may also place an order as a guest without creating an account</span>
        </div>
    </div>
    <div class="logout-bar" v-else>
        <div>
            <button class="logout" @click="logout">Log out</button>
            <span class="info-logout">Welcome {{useremail}}</span>
        </div>
    </div>
    <div class="purchase-info" align="left">
        <div class="contact">
            <div class="contact-title">
                <strong>My Details</strong>
            </div>
            <div class="half-form">
                <div class="left-field">
                    <label>First Name</label>
                    <input v-validate="'required'" name="first name" v-model="userInfo.firstName" placeholder="First Name">
                    <div class="validate" v-show="errors.has('first name')">{{ errors.first('first name') }}</div>
                </div>
                <div class="right-field">
                    <label>Last Name</label>
                    <input v-model="userInfo.lastName" placeholder="Last Name">
                </div>
            </div>
            <div class="wide-form">
                <label>Email address</label>
                <input v-validate="'required|email'" name="email" v-model="userInfo.email" placeholder="Email address">
                <div class="validate" v-show="errors.has('email')">{{ errors.first('email') }}</div>
            </div>
            <div>
                <table class="register">
                    <tr>
                        <td>
                            <div class="box">
                                <input type="radio" :checked="check1" @click="choose1"><span></span>
                            </div>
                        </td>
                        <td>
                            <span>Register a new account</span>
                            <small>Left unchecked you will be placing your order as a guest</small>
                        </td>
                    </tr>
                </table>
                
                <!-- <label for>
                    Register a new account<br>
                    <span>Left unchecked you will be placing your order as a guest</span>
                </label> -->   
            </div>
            <div class="password" v-if="check1">
                <div class="wide-form">
                    <label>Create Your Password</label>
                    <input type="password" v-validate="'required|min:6'" name="pwd" v-model="userInfo.password" placeholder="Password">
                    <div class="validate" v-show="errors.has('pwd')">{{ errors.first('pwd') }}</div>
                </div>
            </div>
        </div>

        <div class="delivery">
            <div class="delivery-title">
                <strong>Delivery Address</strong>
            </div>
            <div class="wide-form">
                <label>Street Address</label>
                <input v-validate="'required'" name="street address" v-model="userInfo.address" placeholder="Street Address">
                <div class="validate" v-show="errors.has('street address')">{{ errors.first('street address') }}</div>
            </div>
            <div class="half-form">
                <div class="left-field">
                    <label>Postcode</label>
                    <input v-validate="'required|digits:4'" name="postcode" v-model="userInfo.postcode" placeholder="Postcode">
                    <div class="validate" v-show="errors.has('postcode')">{{ errors.first('postcode') }}</div>
                </div>
                <div class="right-field">
                    <label>City/town</label>
                    <input v-validate="'required'" name="city/town" v-model="userInfo.city" placeholder="City/town">
                    <div class="validate" v-show="errors.has('city/town')">{{ errors.first('city/town') }}</div>
                </div>
            </div>
            <div class="wide-form">
                <label>Phone Number</label>
                <input v-validate="'required|numeric'" name="phone" v-model="userInfo.phone" placeholder="Phone Number">
                <div class="validate" v-show="errors.has('phone')">{{ errors.first('phone') }}</div>
            </div>
            <div class="wide-form">
                <label>Delivery instructions</label>
                <input v-model="userInfo.instructions" placeholder="Delivery instructions">
            </div>
        </div>

        <div class="payment">
            <div class="payment-title">
                <strong>Payment</strong>
            </div>
            <div class="wide-form">
                <label>Card Number</label>
                <input v-validate="'required|credit_card'" name="credit" v-model="cardInfo.cardNum" placeholder="Card Number">
                <div class="validate" v-show="errors.has('credit')">{{ errors.first('credit') }}</div>
            </div>
            <div class="half-form">
                <div class="left-field">
                    <label>Expiry Date</label>
                    <input v-validate="'required|date_format:MM/YY'" name="expiry" v-model="cardInfo.expiry" placeholder="MM/YY">
                    <div class="validate" v-show="errors.has('expiry')">{{ errors.first('expiry') }}</div>
                </div>
                <div class="right-field">
                    <label>CVV</label>
                    <input v-validate="'required|digits:3'" name="cvv" v-model="cardInfo.cvv" placeholder="CVV">
                    <div class="validate" v-show="errors.has('cvv')">{{ errors.first('cvv') }}</div>
                </div>
            </div>
            <div>
                <div class="box">
                    <input type="radio" :checked="check2" @click="choose2"><span></span>
                </div>
                <label for>Save card for next time</label>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { mapFields } from 'vuex-map-fields';
import firebase,{ functions } from 'firebase/app'
require('firebase/auth')
export default {
  name: 'Checkout',
  data () {
    return {
        
    }
  },
  computed: {
      ...mapState({
          check1: state => state['checkout'].isChecked1,
          check2: state => state['checkout'].isChecked2,
          isLogin: state => state['login'].isLogin,
          useremail: state => state['login'].useremail
      }),
      ...mapFields('checkout',['userInfo', 'cardInfo'])
  },
  methods: {
      logout() {
          firebase.auth().signOut()
          this.$store.dispatch('login/logout')
      },
      // radio choosing
      choose1() {
          this.$store.dispatch('checkout/choose1')
      },
      choose2() {
          this.$store.dispatch('checkout/choose2')
      }
  },
  beforeMount: function() {
      // in confirm page back to checkout page
      this.$store.dispatch('cart/showCart')
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import url('https://fonts.googleapis.com/css?family=Nunito+Sans');
.purchase-info {
    margin: 30px auto;
}
.half-form {
    display: flex;
}
.left-field {
    padding-right: 10px;
}
.right-field {
    padding-left: 10px;
}
.register span {
    font-size: 15px;
}
.register small {
    font-size: 10px;
    color:  #AFAFAF;
}
label {
    padding-bottom: 8px;
    display: block;
    color: #4c4c4c;
    font-weight: 400;
    font-size: 0.9em;
    margin-top: 10px;
}
.contact, .delivery, .payment {
    margin-left: 50px;
    margin-top: 20px;
}
.contact input, .delivery input, .payment input {
    /* width: 100%; */
    padding: 8px;
    box-sizing: border-box;
    margin-bottom: 15px;
    border-radius: 0 !important;
}
.left-field input, .right-field input {
    border: 1px solid #ccc !important;
    box-shadow: none !important;
    width: 270px;
}
.wide-form {
    width: 100%;
}
.wide-form input {
    border: 1px solid #ccc;
    width: 560px
}
.checkout-container {
    padding-left: 40px;
    width: 700px;
    background-color: white;
    padding-top: 30px;
    padding-bottom: 30px;
}
.radio {
    position: absolute;  
}
small {
    font-size: smaller;
    font-weight: bold;
}
strong{
    font-size: 25px;
}
input {
    /* -webkit-appearance: textfield; */
    background-color: white;
    /* -webkit-rtl-ordering: logical; */
    /* cursor: text; */
    /* text-rendering: auto; */
    /* color: initial; */
    /* letter-spacing: normal; */
    /* word-spacing: normal; */
    /* text-transform: none; */
    text-indent: 0px;
    /* text-shadow: none; */
    display: inline-block;
    text-align: start;
    margin: 0em;
    /* font: 400 13.3333px Arial; */
}
div {
    display: block;
    font-family: 'Nunito Sans', sans-serif
}
input::-webkit-input-placeholder, textarea::-webkit-input-placeholder { 
    color:  #E3E3E3;
}
table {
    border-collapse:collapse;
	border-spacing:0;
    margin-top: 10px;
    margin-bottom: 40px;
}
table small, table span {
    display: block;
}
.login-bar, .logout-bar {
    background-color: #F1FCFF;
    width: 650px;
}
.login, .logout {
    cursor: pointer;
    background: #3862EB;
    border: 0;
    padding: 10px 15px;
    color: #ffffff;
    -webkit-transition: 0.3s ease;
    transition: 0.3s ease;
    font-size: 0.8em;
    margin-top: 20px;
    margin-bottom: 20px;
    border: 1px solid #3862EB;
}
.info-login, .info-logout {
    margin-left: 10px;
    color: #656768;
}
.box {
    float: left;
    width: 20px;
    height: 20px;
    margin-right: 10px;
    position: relative;
    background: #fff;
    vertical-align: middle;
    border:1px solid #e4e4e7;
    border-radius: 100%;
}
.box input {
    opacity: 0;
    position: absolute;
    top:-5px;
    left:-4px;
    width: 100%;
    height:100%;
    z-index:100;
}
input+span {
    display: block;
    width: 14px;
    height: 14px;
    border-radius:50%;
    position: absolute;
    background: #3862EB;
    top: 30%;
    left:30%;
    margin: -3px 0  0 -3px;
    z-index:1;
}
input[type="radio"] + span {
    opacity: 0;
    }
input[type="radio"]:checked + span {
    opacity: 1;
}
.validate {
    margin-top: 1px;
    color: red;
    font-size: 8pt;
}
</style>
