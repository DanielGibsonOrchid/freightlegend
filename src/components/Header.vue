<script>
export default {
  name: 'Header'
}
</script>

<template>
  <div id="header" class="header flex">
    <div><img class="logo" src="../assets/freightLegend-purple-logo.png"></div>
    
    <div class="flex-col">
      <ul class="phone flex">
        <li><a href="tel:4158900794">415-890-0794(USA)</a></li>
        <li><a href="tel:1300849082">1300-849-082(AUS)</a></li>
        <li><a href="tel:0800933233">0800-933-233(NZ)</a></li>
      </ul>

      <ul class="menu flex">
        <li><a href="/faq">FAQ</a></li>
        <li><a href="/about">ABOUT</a></li>
        <li><a href="/login">LOG IN</a></li>
        <li><a class="btn" href="/#interested">I'M INTERESTED</a></li>
      </ul>
    </div>
  </div>
</template>

<style scoped>

.header {
  font-family: 'Source Sans Pro', sans-serif;
  justify-content: space-between;
  margin: 5px auto 0;
  padding: 0 15px;
  max-width: 1140px;
  line-height: 18px;
}

.logo {
  padding-top: 48px;
}

.phone, .menu {
  font-size: 14px;
  letter-spacing: 0.1em;
}

.phone a {
  color: #b4b3b6;
}

.phone li:nth-child(2) {
  margin: 0 40px;
}

.menu {
  justify-content: end;
}

.menu li {
  margin-right: 40px;
  font-weight: 600;
}
.menu li:last-child {
  margin-right: 0;
}

.menu a {
  color: var(--black);
  text-decoration: none;
}

.menu .btn {
  font-size: 13px;
  color: #fff;
  background: var(--purple);
  padding: 10px 18px;
  border-radius: 44px;
}

</style>