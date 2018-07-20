<template>
  <div class="Order-detail-container">
    <div class="Order-detail-info" align="left">
        <!-- <div class="vouchers">
            <div class="voucher-title">
                <strong>Vouchers</strong>
            </div>
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
        </div> -->
        <div class="contact">
            <div class="contact-title">
                <strong>Personal Detail</strong>
            </div>
            <div class="wide-form">
                <label>Full name</label>
                <small>{{userInfo.firstName +' '+ userInfo.lastName }}</small>
            </div>
            <div class="wide-form">
                <label>Email address</label>
                <small>{{userInfo.email}}</small>
            </div>
        </div>

        <div class="delivery">
            <div class="delivery-title">
                <strong>Delivery Detail</strong>
            </div>
            <div class="wide-form">
                <label>Street Address</label>
                <small>{{userInfo.address }}</small>
            </div>
            <div class="half-form">
                <div class="left-field">
                    <label>Postcode</label>
                    <small>{{userInfo.postcode }}</small>
                </div>
                <div class="right-field">
                    <label>City/town</label>
                    <small>{{userInfo.city }}</small>
                </div>
            </div>
            <div class="wide-form">
                <label>Phone Number</label>
                <small>{{userInfo.phone }}</small>
            </div>
            <div class="wide-form">
                <label>Delivery instructions</label>
                <small>{{userInfo.instructions }}</small>
            </div>
        </div>
        <div align="center">
            <router-link to="/">
                <button class="confirm-btn" @click="goToVoucher">Confirm</button>
            </router-link>
        </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'Checkout',
  data () {
    return {
    }
  },
  computed: {
      ...mapState({
          firstName: state => state['checkout'].isChecked,
          userInfo: state => state['checkout'].userInfo,
          vouchers: state => state['addToCart'].addedVouchers
      })
  },
  methods: {
      goToVoucher() {
        this.$store.dispatch('cart/backToVouchers')
        this.$store.dispatch('addToCart/resetCart')
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import url('https://fonts.googleapis.com/css?family=Nunito+Sans');
.Order-detail-info {
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
.wide-form {
    width: 100%;
}

.Order-detail-container {
    margin-left: 400px;
    padding-left: 40px;
    width: 400px;
    background-color: white;
    padding-top: 30px;
    padding-bottom: 30px;
}
.confirm-btn {
    cursor: pointer;
    background: #3862EB;
    width: 30%;
    border: 0;
    padding: 10px 15px;
    color: #ffffff;
    -webkit-transition: 0.3s ease;
    transition: 0.3s ease;
    font-size: 1em;
    margin-top: 20px;
    border: 1px solid #3862EB;
}
small {
    font-size: smaller;
    font-weight: bold;
}
strong{
    font-size: 25px;
}
div {
    display: block;
    font-family: 'Nunito Sans', sans-serif
}
</style>
