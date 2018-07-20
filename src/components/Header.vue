<template>
  <div class="container">
    <!-- <img :src="img" style="width: 100%;"/> -->
    <div class="total-price" align="left">${{totalPrice}}</div>
    <div class="store">
      <!-- <div class="store-name">{{store[0].Name}}</div>
      <div class="store-address">{{store[0].Location.Address}}, {{store[0].Location.Suburb}}, {{store[0].Location.Postcode}}</div>
      <div class="store-open" v-for="(open, id) in store[0].OperatingHours" :key="id">
        <div>open {{Open.OpeningTime.substring(0, 5)}} to {{open.ClosingTime.substring(0, 5)}} {{open.DayOfWeek}}</div>
      </div> -->
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { db } from '../firebase'
export default {
  name: 'ShopHeader',
  data () {
    return {
      
    }
  },
  firestore() {
    return {
      store: db.collection('Stores')
    }
  },
  computed: {
    totalPrice: function() {
        return this.$store.getters['addToCart/totalPrice']
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import url('https://fonts.googleapis.com/css?family=Nunito+Sans:200,300,400');
.container {
    width: auto;
    margin-top: -55px;
    margin-bottom: 20px;
    background: url('../assets/head/head.png') no-repeat;
    height: 300px;
    font-family: 'Nunito Sans', sans-serif;
}
.total-price {
  width: 60px;
  color: white;
  position: relative;
  padding-top: 29px;
  margin-left: 1475px;
}
.store {
  margin-top: 90px;
  color: white;
  margin-left: 600px;
}
.store-name {
  font-size: 2em;
}
.store-address .store-open {
  font-weight: bold;
}
</style>
