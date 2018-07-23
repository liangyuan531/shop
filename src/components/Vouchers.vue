<template>
  <div class="vouchers">
    <!-- <table cellspacing="15px;">
      <thead id="gift_cards_head" align="left">Gift Cards</thead>
      <tbody>
        <tr>
          <th @click="openDialog(25)"><img src="../assets/vouchers/voucher25.png" /></th>
          <th @click="openDialog(50)"><img src="../assets/vouchers/voucher50.png" /></th>
        </tr>
        <tr>
          <td @click="openDialog(100)"><img src="../assets/vouchers/voucher100.png" /></td>
          <td @click="openDialog(500)"><img src="../assets/vouchers/voucher500.png" /></td>
        </tr>
      </tbody>
    </table> -->
    <div class="title">Gift Cards</div>
      <div class="vouchers-wall">
        <ul v-for="(voucher, id) in menus.Categories[0].SubMenuItems" :key="id">
          <li class="voucher">
            <div class="price-container" align="left" @click="openDialog(voucher.Price, $event)">
              <span class="price">${{voucher.Price}}</span>
            </div>
            <div class="other-container" align="left">
              <div class="name">
                <span>{{voucher.Name}}</span>
              </div>
              <div class="description">
                <input v-model="description" placeholder="Decription or ingredients here">
              </div>
            </div>
          </li>
        </ul>
      </div>
    <!-- <div>{{menus[0].Categories[0].SubMenuItems}}</div> -->
    <!-- <div>
      <dialog-bar v-show="isOpen"></dialog-bar>
    </div> -->
  </div>
  
</template>
<script src="https://www.gstatic.com/firebasejs/5.3.0/firebase.js"></script>
<script>
import addToCart from './AddToCart.vue'
import { mapState, mapGetters } from 'vuex'
import { db } from '../firebase'
export default {
  name: 'Vouchers',
  // components: {
  //   'dialog-bar': addToCart
  // },
  data () {
    return {
      menus: [],
      description: ''
    }
  },
  firestore() {
    return {
      menus: db.collection('Menus').doc('2006400').collection('StoreMenus').doc('GiftCardMenu')
    }
  },
  computed: {
    ...mapState({
      isOpen: state => state['vouchers'].isOpen,
      //amount: state => state['vouchers'].amount,
    })
  },
  methods: {
    openDialog(amount, event) {
     this.$store.dispatch('vouchers/openForm', amount)
     this.des()
    },
    des(description){
      console.log('set desc', this.description);
      
     this.$store.dispatch('vouchers/setDescription', this.description)
    }
  },
  beforeMount: function() {
    this.$store.dispatch('cart/backToVouchers')
  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import url('https://fonts.googleapis.com/css?family=Nunito+Sans');
.title {
  margin-right: 810px;
  font-size: 1.3em;
  font-weight: bold;
}
.vouchers {
  height: 420px;
  width: 990px;
  padding: 0px;
}
.voucher-wall {
   width: 990px;
   /* float: left; */
   padding: 0px;
}
ul{
  width: 980px; 
}
li{
  margin-right: 0px;
  width: 480px; 
  display: block;
  float: left;
}
.price-container {
  position: relative;
  font-size: 3em;
  font-weight: bold;
  top: 40px;
  left: 30px;
  cursor: pointer;
}
.other-container {
  position: relative;
  font-weight: bold;
  font-size: 1.1em;
  top: -15px;
  left: 210px;
}
.description input {
    border-width: 0;
    width: 200px;
    font-size: 0.8em;
}
.voucher {
  height: 180px;
  background: url('../assets/vouchers/voucher.png') no-repeat;
}
div, input {
  font-family: 'Nunito Sans', sans-serif
}
table {
  border: 0pt;
}
#gift_cards_head {
  margin-left: 0%;
  /* font-family: 'Courier New', Courier, monospace; */
  font-size: 25px;
  font-weight: bold;
}
tr {
  cursor: pointer;
}
</style>
