<script>
export default {
  name: 'Footer'
}
</script>

<template>
  <div id="footer" class="footer flex">
    <div>
      <div class="img-div"><a href="/"><img class="logo" src="../assets/freightLegend-purple-logo.png"></a></div>
      <p>&#169; 2019 All Rights Reserved.</p>
    </div>
    <ul class="flex">
      <li><router-link to="/privacy">Privacy</router-link></li>
      <li>|</li>
      <li><router-link to="/terms">Terms of Services</router-link></li>
      <li>|</li>
      <li><router-link to="/about">About</router-link></li>
      <li>|</li>
      <li><router-link to="/faq">FAQ</router-link></li>
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

a {
  text-decoration: none;
  color: inherit;
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

@media (max-width: 830px) {
  .footer {
    flex-direction: column;
    align-items: center;
    padding-right: 0;
    padding-left: 0;
    font-size: 22px; 
  }

  .img-div {
    text-align: center;
  }

  ul {
    flex-direction: column;
  }

  ul li {
    padding-right: 0;
    padding-bottom: 20px;
  }

}


</style>