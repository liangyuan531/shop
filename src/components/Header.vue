<template>
  <div class="container">
    <!-- <img :src="img" style="width: 100%;"/> -->
    <div class="head-bar">
       <div class="total-price" align="left">${{totalPrice}}</div>
    </div>
    <div class="store-container" align="center">
        <div class="store-name">
          {{store[0].Name}}
        </div>
        <div class="store-address">
          {{store[0].Location.Address}}, {{store[0].Location.Suburb}}, {{store[0].Location.Postcode}}
        </div>
        <!-- {{store[0].OperatingHours[0].OpeningTime}}  -->
        <div class="store-open">
          <ul v-for="(open, id) in store[0].OperatingHours" :key="id">
            <li>Open {{open.OpeningTime.substring(0, 5)}} to {{open.ClosingTime.substring(0, 5)}} {{open.DayOfWeek}}</li>
          </ul>
        </div>
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
      store: []
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
.head-bar {
  background: url('../assets/head/shop.png') no-repeat;
  position: relative;
  margin-left: 1425px;
  top: 15px;
  height: 50px;

}
.total-price {
  width: 200px;
  color: white;
  padding-left: 50px;
  padding-top: 14px;
}
.store-container {
  opacity: 0.7;
  width: 560px;
  height: 294px;
  background-color: black;
  margin-top: -50px;
  color: white;
  margin-left: 670px;
}
.store-name {
  font-size: 2em;
  padding-top: 50px;
}
.store-address .store-open {
  font-weight: bold;
}
.store-address {
  margin-top: 20px;
}
.store-open {
  font-size: .7em;
  margin-top: 100px;
}
.store-open li{
  list-style:none;
  height: 2px;
}
</style>
