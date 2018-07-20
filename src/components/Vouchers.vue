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
      <ul v-for="(voucher, id) in menus[0].Categories[0].SubMenuItems" :key="id">
        <li class="voucher" @click="openDialog(voucher.Price)" >
          <span class="price">${{voucher.Price}}</span>
          <span class="name">{{voucher.Name}}</span>
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
      menus: []
    }
  },
  firestore() {
    return {
      menus: db.collection('Menus').doc('2006400').collection('StoreMenus')
    }
  },
  computed: {
    ...mapState({
      isOpen: state => state['vouchers'].isOpen,
      //amount: state => state['vouchers'].amount,
    })
  },
  methods: {
    openDialog(amount) {
     this.$store.dispatch('vouchers/openForm', amount)
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
.price {
  position: relative;
  font-size: 3em;
  font-weight: bold;
  top: 40px;
  right: 80px;
}
.name {
  position: relative;
  font-weight: bold;
  font-size: 1.1em;
  top: 20px;
  right: 35px;
}
.voucher {
  height: 180px;
  background: url('../assets/vouchers/voucher.png') no-repeat;
}
div {
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
