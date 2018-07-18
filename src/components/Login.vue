<template>
  <div class="login-container">
    <div class="login-info" align="left">
      <div class="login-bar">
        <div class="info">
          <span>Go back to</span>
            <router-link to="/checkout">
                <link class="checkout" @click="backToCheckout">Checkout
            </router-link>
          <span>if you don't have an account</span>
        </div>
      </div>
      <div class="login">
        <div class="login-title">
          <strong>Login</strong>
        </div>
        <div class="wide-form" :class="{'has-error':errors.has('email')}">
          <label>Email</label>
          <input v-model="email" v-validate="email" name="email" data-rules="required|email" placeholder="Email Address">
          <div class="validate" v-show="errors.has('email')">{{ errors.first('email') }}</div>
        </div>
        <div class="wide-form">
          <label>Password</label>
          <input v-model="password" v-validate="'required|min:6'" type="password" name="pwd" placeholder="Password">
          <div class="validate" v-show="errors.has('pwd')">{{ errors.first('pwd') }}</div>
        </div>
        <div class="actions">
          <button @click.prevent="login({email, password})" class="loginBtn">
            Login
          </button>
        
        </div>
        <div class="forgetPwd">
          <link > Forgot password
        </div>
      </div>
    </div>
    
  </div>
</template>

<script>
import { db } from '../firebase'
import firebase from 'firebase/app'
require('firebase/auth')
export default {
  data() {
    return {
      email: '',
      password: '',
      users: []
    }
  },
  firestore() {
    return {
      users: db.collection('users')
    }
  },
  methods: {
    login(user) {
      firebase.auth().signInWithEmailAndPassword(user.email, user.password)
        .then(() => {
          this.$router.push({path: '/checkout'})
          this.$store.dispatch('login/login', user)
        }).catch((error) =>{
          var errorCode = error.code;
          var errorMessage = error.message;
          if (errorCode === 'auth/wrong-password') {
            alert('Wrong password.');
          } else {
            alert(errorMessage);
          }
            console.log(error);
        })
    },
    backToCheckout() {
      this.$store.dispatch('cart/backToCheckout')
      console.log('back');
      
    }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Nunito+Sans:200,300,400');
div {
  font-family: 'Nunito Sans', sans-serif
}
.login-container {
    padding-left: 40px;
    width: 650px;
    background-color: white;
    padding-top: 30px;
    padding-bottom: 30px;
}
.forgetPwd {
  margin-top: 20px;
  font-size: 10pt;
  color: #3862EB;
  cursor: pointer;
}
.wide-form {
    width: 100%;
}
.wide-form input {
    border: 1px solid #ccc;
    width: 600px
}
.login-title {
  margin-bottom: 20px;
}
.login-bar {
    background-color: #F1FCFF;
    width: 600px;
    padding-top: 5px;
    padding-bottom: 20px;
}
.login {
    margin: 30px auto;
}
.login-info {
    margin: 30px auto;
}
.info {
    margin-left: 50px;
    margin-top: 20px;
}
.checkout {
    text-decoration: none;
    color: #3862EB;
    cursor: pointer;
    padding: 10px 15px;
    -webkit-transition: 0.3s ease;
    transition: 0.3s ease;
    font-size: 0.8em;
    margin-top: 30px;
    margin-bottom: 30px;
}
a, a:active {
  text-decoration:none;
  text-decoration:blink;
}
a:visited { 
  text-decoration: none;
  color: #3862EB
}
strong{
    font-size: 25px;
}
input {
    background-color: white;
    text-indent: 0px;
    display: inline-block;
    text-align: start;
    margin: 0em;
}
div {
    display: block;
}
input::-webkit-input-placeholder, textarea::-webkit-input-placeholder { 
    color:  #DDDDDD;
}
label {
    padding-bottom: 8px;
    display: block;
    color: #4c4c4c;
    font-weight: 400;
    font-size: 0.9em;
    margin-top: 10px;
}
.login {
  margin-right: 40px;
}
.login input {
    /* width: 100%; */
    padding: 8px;
    box-sizing: border-box;
    margin-bottom: 15px;
    border-radius: 0 !important;
}
.loginBtn {
    cursor: pointer;
    background: #3862EB;
    border: 0;
    padding: 10px 15px;
    color: #ffffff;
    -webkit-transition: 0.3s ease;
    transition: 0.3s ease;
    text-transform: uppercase;
    font-size: 0.8em;
    margin: 6px auto;
    border: 1px solid #3862EB;
    width: 150px;
}
.validate {
    margin-top: 1px;
    color: red;
    font-size: 8pt;
}
</style>
