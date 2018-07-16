<template>
  <div class="login-container">
    <div class="login-info" align="left">
      <div class="login-bar">
        <div class="info">
          <span>Go back to</span>
            <router-link to="/checkout">
                <link class="checkout">Checkout
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
          <input v-model="userInfo.email" v-validate="email" data-rules="required|email" placeholder="Email Address">
          <p class="text-danger" v-if="errors.has('email')"></p>
        </div>
        <div class="wide-form">
          <label>Password</label>
          <input type="password" placeholder="Password">
        </div>
        <div class="actions">
          <button @click="login({userInfo})" class="loginBtn">Login</button>
        </div>
        <div class="forgetPwd">
          <link > Forgot password
        </div>
      </div>
    </div>
    
  </div>
</template>

<script>
export default {
  data() {
    return {
      userInfo:{
        email: ''
      }
    }
  },
  methods: {
    login(userInfo) {
      this.$store.dispatch('checkout/login')
    }
  }
}
</script>

<style scoped>
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
    background-color: #DDF6FA;
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
    font-family:Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
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
</style>
