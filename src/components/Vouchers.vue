<template>
  <div class="Vouchers">
    <table cellspacing="15px;">
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
    </table>
    <!-- <div>
      <dialog-bar v-show="isOpen"></dialog-bar>
    </div> -->
  </div>
</template>

<script>
import addToCart from './AddToCart.vue'
import { mapState, mapGetters } from 'vuex'
export default {
  name: 'Vouchers',
  // components: {
  //   'dialog-bar': addToCart
  // },
  data () {
    return {
    }
  },
  computed: {
    ...mapState({
      isOpen: state => state['vouchers'].isOpen
      //amount: state => state['vouchers'].amount,
    })
  },
  methods: {
    openDialog(amount) {
     this.$store.dispatch('vouchers/openForm', amount)
    }
  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
table {
  border: 0pt;
}
#gift_cards_head {
  margin-left: 0%;
  font-family: 'Courier New', Courier, monospace;
  font-size: 25px;
  font-weight: bold;
}
tr {
  cursor: pointer;
}
</style>
