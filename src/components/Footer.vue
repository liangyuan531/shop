<template>
  <div class="footer-container">
    <div class="footer-content">
        <table cellspacing="20px;">
            <td><a />About Us</td>
            <td><a />Contact Us</td>
            <td><a />Privacy Policy</td>
        </table>
    </div>
    
  </div>
</template>

<script>
export default {
  name: 'ShopHeader',
  data () {
    return {
      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import url('https://fonts.googleapis.com/css?family=Nunito+Sans:200,300,400');
td {
    cursor: pointer;
    font-family: 'Nunito Sans', sans-serif;
    font-size: 12px;
}
table {
    vertical-align: -webkit-baseline-middle;
}
.footer-container {
    color: #bbb;
    /* position: absolute; */
    border: 1px solid #f6f6f6;
    background-color: #fefefe;
    width: 100%;
    height: 60px;
}
.footer-content {
    margin-left: 150px;
}
</style>
