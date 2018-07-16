<template>
<div class="pop-container">
  <div class="pop-window" style="margin-top:80px;">
    <!-- purchase information at top -->
    <div class="purchase-info" align="left">
        <div class="title">
            <div class="amount">
                <strong>${{ amount }} Gift Card</strong>
            </div>
            <div class="description">
                <input v-model="description" placeholder="Decription or ingredients here">
            </div>
        </div>
        <div class="optional">
            <p>Add a message (optional)</p>
        </div>
        <div class="detail-message">
            <div class="from-name">
                <small>From Name</small>
                <input v-model="from" placeholder="From Name">
            </div>
            <div class="to">
                <small>To</small>
                <input v-model="toName" placeholder="Name">
                <input v-model="toEmail" placeholder="Email">
            </div>
            <div class="message">
                <small>Message</small>
                <textarea v-model="message"></textarea>
            </div>
        </div>
    </div>
    <!-- increase or decrease -->
    <div class="number">
        <div @click="addNum"><img src="../assets/buttons/add.png" /></div>
        <div><span class="gift-num">{{ giftNum }}</span></div>
        <div @click="minusNum"><img src="../assets/buttons/minus.png" /></div>
    </div>
    <!-- cancel or add to cart -->
    <div class="actions">
        <button @click="closeBtn" class="cancel">Cancel</button>
        <button @click="confirmBtn({amount, giftNum ,description, from, toName, toEmail, message})" class="add">Add to Cart</button>
    </div>
  </div>
</div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  name: 'AddToCart',
  data () {
    return {
          description: '',
          from: '',
          toName: '',
          toEmail: '',
          message: ''     
    }
  },
  computed: {
    ...mapState({
        amount: state => state['vouchers'].amount,
        giftNum: state => state['addToCart'].giftNum
    })
  },
  methods: {
      closeBtn() {
          // change isOpen to false
          this.$store.dispatch('vouchers/closeForm')
      },
      confirmBtn(voucher) {
          this.$store.dispatch('addToCart/addVouchers', voucher)
          this.$store.dispatch('vouchers/closeForm')
      },
      addNum() {
          this.$store.dispatch('addToCart/add')
      },
      minusNum() {
          this.$store.dispatch('addToCart/minus')
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
input {
    margin-top: 10px;
}
.number {
    display: inline-flex;
    margin-left: auto;
    margin-right: auto;
}
.gift-num{
    margin-left: 10px;
    margin-right: 10px;
    font-weight: bold;
}
.number div {
    display:inline-block;
}
p {
    font-weight: bold;
}
small {
    font-size: smaller;
    font-weight: bold;
}
strong{
    font-family:Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    font-size: 30px;

}
.pop-window {
    padding-top: 20px;
    padding-bottom: 20px;
    width: 500px;
    margin-top: 100px;
    margin: 0 auto;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    background: white;
    z-index: 9999;
}
.description input {
    border-width: 0;
    width: 100%;
}
.from-name input {
    width: 100%;
}
.purchase-info {
    margin: 10px 60px 10px 60px;
}
textarea {
    width: 104%;
    height: 60px;
    resize: none;
}
.cancel {
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
.add {
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
}
.detail-message input {
    width: 100%;
    padding: 8px;
    margin-bottom: 15px;
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
input::-webkit-input-placeholder, textarea::-webkit-input-placeholder { 
    color:  #E3E3E3;
}
</style>