<template>
  <div class="checkout-container">
    <div class="purchase-info" align="left">
        <div class="contact">
            <div class="contact-title">
                <strong>My Details</strong>
            </div>
            <div class="half-form">
                <div class="left-field">
                    <label>First Name</label>
                    <input placeholder="First Name">
                </div>
                <div class="right-field">
                    <label>Last Name</label>
                    <input placeholder="Last Name">
                </div>
            </div>
            <div class="wide-form">
                <label>Email address</label>
                <input placeholder="Email address">
            </div>
            <div>
                <input class="radio" type="radio" checked="checked">Register a new account
                <label>
                    Left unchecked you will be placing your order as a guest
                </label>
            </div>
        </div>

        <div class="delivery">
            <div class="delivery-title">
                <strong>Delivery Address</strong>
            </div>
            <div class="wide-form">
                <label>Street Address</label>
                <input placeholder="Street Address">
            </div>
            <div class="half-form">
                <div class="left-field">
                    <label>Postcode</label>
                    <input placeholder="Postcode">
                </div>
                <div class="right-field">
                    <label>City/town</label>
                    <input placeholder="City/town">
                </div>
            </div>
            <div class="wide-form">
                <label>Delivery instructions</label>
                <input placeholder="Delivery instructions">
            </div>
            <div class="wide-form">
                <label>Street Address</label>
                <input placeholder="Street Address">
            </div>
        </div>

        <div class="payment">
            <div class="payment-title">
                <strong>Payment</strong>
            </div>
            <div class="wide-form">
                <label>Card Number</label>
                <input placeholder="Card Number">
            </div>
            <div class="half-form">
                <div class="left-field">
                    <label>Expiry Date</label>
                    <input placeholder="MM/YY">
                </div>
                <div class="right-field">
                    <label>CVV</label>
                    <input placeholder="CVV">
                </div>
            </div>
            <div>
                <div class="box">
                    <input type="radio"><span></span>
                </div>
                <label for>Save card for next time</label>
            </div>
        </div>

    </div>
  </div>
</template>

<script>
export default {
  name: 'Checkout',
  data () {
    return {
      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.half-form {
    display: flex;
}
.left-field {
    padding-right: 10px;
}
.right-field {
    padding-left: 10px;
}
label {
    padding-bottom: 8px;
    display: block;
    color: #4c4c4c;
    font-weight: 400;
    font-size: 0.9em;
    margin-top: 10px;
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
    width: 600px;
    background-color: white
}
.radio {
    position: absolute;  
}
small {
    font-size: smaller;
    font-weight: bold;
}
strong{
    font-family:Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
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
}
input::-webkit-input-placeholder, textarea::-webkit-input-placeholder { 
    color:  #DDDDDD;
}

.box {
    float: left;
    display: inline-block;
    width: 16px;
    height: 16px;
    margin-right: 10px;
    position: relative;
    background: #fff;
    vertical-align: middle;
    border:1px solid #e4e4e7;
    border-radius: 100%;}
  .box input {
    opacity: 0;
    position: absolute;
    top:-3px;
    left:-4px;
    width: 100%;
    height:100%;
    z-index:100;/*使input按钮在span的上一层，不加点击区域会出现不灵敏*/}
  input+span {
    display: block;
    width: 6px;
    height: 6px;
    border-radius:50%;
    position: absolute;
    background: #1796f9;
    top: 50%;
    left:50%;
    margin: -3px 0  0 -3px;
    z-index:1;}
  input[type="radio"] + span {
    opacity: 0;}
  input[type="radio"]:checked + span {
    opacity: 1;}

</style>
