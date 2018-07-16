<template>
  <div class="container">
    <img :src="img" style="width: 100%;"/>
  </div>
</template>

<script>
import img from '@/assets/head/head.png'
export default {
  name: 'ShopHeader',
  data () {
    return {
      img: img
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container {
    width: auto;
    margin-top: -55px;
    margin-bottom: 20px;
}
</style>
