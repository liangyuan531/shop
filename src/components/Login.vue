<template>
<div class="pop-container">
  <div class="container" style="margin-top:400px;">
    <div class="login">
      <div class="login-title">
        <strong>Login</strong>
      </div>
      <div class="wide-form" :class="{'has-error':errors.has('email')}">
        <input v-model="userInfo.email" v-validate="email" data-rules="required|email" placeholder="Email Address">
        <p class="text-danger" v-if="errors.has('email')"></p>
      </div>
      <div class="wide-form">
        <input type="password" placeholder="Password">
      </div>
    </div>
    <div class="actions">
        <button @click="closeBtn" class="cancelBtn">Cancel</button>
        <button @click="login({userInfo})" class="loginBtn">Login</button>
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
    closeBtn() {
      this.$store.dispatch('checkout/closeLogin')
    },
    login(userInfo) {
      this.$store.dispatch('checkout/login')
    }
  }
}
</script>

<style scoped>
.container {
    padding-top: 20px;
    padding-bottom: 20px;
    margin-left: 500px;
    width: 500px;
    height: 200px;
    margin: auto;
    padding-left: 40px;
    background-color: white
}
.wide-form {
    width: 100%;
}
.wide-form input {
    border: 1px solid #ccc;
    width: 400px
}
.login-title {
  margin-bottom: 20px;
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
    margin-left: 20px;
}
.cancelBtn {
    cursor: pointer;
    background: red;
    border: 0;
    padding: 10px 15px;
    color: #ffffff;
    -webkit-transition: 0.3s ease;
    transition: 0.3s ease;
    text-transform: uppercase;
    font-size: 0.8em;
    margin: 6px auto;
    border: 1px solid red;
}
.pop-container {
    position: fixed;
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.75);
    /* opacity: 0; */
    /* visibility: visible; */
    -webkit-transition: opacity 0.3s 0s, visibility 0s 0.3s;
    -moz-transition: opacity 0.3s 0s, visibility 0s 0.3s;
    transition: opacity 0.3s 0s, visibility 0s 0.3s;
    /* overflow: visible;  */
}
</style>
