<script>
export default {
  name: 'Footer'
}
</script>

<template>
  <div id="footer" class="footer flex">
    <div>
      <div><img class="logo" src="../assets/freightLegend-purple-logo.png"></div>
      <p>&#169; 2019 All Rights Reserved.</p>
    </div>
    <ul class="flex">
      <li>Privacy</li>
      <li>|</li>
      <li>Terms of Services</li>
      <li>|</li>
      <li>About</li>
      <li>|</li>
      <li>FAQ</li>
    </ul>
  </div>  
</template>

<style scoped>
.footer {
  font-family: var(--sans);
  color: var(--purpleOpacity);
  font-size: 14px;
  line-height: 15px;
  padding: 100px 62px 5px 30px;
  max-width: 1170px;
  margin: 0 auto;
  justify-content: space-between;
}

ul {
  align-items: center;
  padding-top: 35px;
}

ul li {
  padding-right: 32px;
}

ul li:last-child {
  padding-right: 0;
}


</style>