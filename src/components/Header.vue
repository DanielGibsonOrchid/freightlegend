<script>
export default {
  name: 'Header',
  data () {
    return {
      showMobileMenu: false,
      geoCountry: null,
    }
  },
  mounted () {
    fetch("/locale.json")
      .then(response => response.json())
      .then(data => this.geoCountry = data.locale)
      .catch(err => console.error("Error fetching data from /nz.json endpoint"))
  },
}
</script>

<template>
  <div id="header" class="header flex">
    <div><router-link to="/"><img class="logo" src="../assets/freightLegend-purple-logo.png"></router-link></div>
    
    <div class="flex-col">
      <ul class="phone flex">
        <li v-if="geoCountry === 'United States'"><a href="tel:4158900794">415-890-0794</a></li>
        <li v-if="geoCountry === 'Australia'"><a href="tel:1300849082">1300-849-082</a></li>
        <li v-if="geoCountry === 'New Zealand'"><a href="tel:0800933233">0800-933-233</a></li>
        <li v-if="geoCountry === 'Not specified'"><a href="tel:+6499503824">+64-9-950-3824</a></li>
      </ul>

      <ul class="desktop-menu flex">
        <!-- <li><router-link to="/faq">FAQ</router-link></li> -->
        <!-- <li><router-link to="/about">ABOUT</router-link></li> -->
        <li><a href="https://app.freightlegend.com">LOG IN</a></li>
        <li><a class="btn" href="#interested">I'M INTERESTED</a></li>
      </ul>

      <button @click="showMobileMenu = !showMobileMenu" class="hamburger-btn"><img src="../assets/hamburger-menu-v2.png" alt=""></button>

      <div class="mobileDiv">
        <ul v-if="showMobileMenu" :class="{'mobile-menu' : showMobileMenu}" class=" flex">
          <!-- <li><a href="/faq">FAQ</a></li>
          <li><a href="/about">ABOUT</a></li> -->
          <li><a href="/login">LOG IN</a></li>
          <li><a class="btn" href="/#interested">I'M INTERESTED</a></li>
        </ul>
      </div>
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

.phone, .desktop-menu, .mobile-menu {
  font-size: 14px;
  letter-spacing: 0.1em;
}

.phone {
  justify-content: flex-end;
}

.phone a {
  color: #b4b3b6;
}

.phone li a:hover {
  border-bottom: none;
}

.phone li:nth-child(2) {
  margin-right: 40px;
  margin-left: 40px;
}

.desktop-menu, .mobile-menu {
  justify-content: end;
}

.desktop-menu li {
  margin-right: 40px;
  font-weight: 600;
}
.desktop-menu li:last-child {
  margin-right: 0;
}

.desktop-menu a, .mobile-menu a {
  color: var(--black);
  text-decoration: none;
}

.desktop-menu .btn, .mobile-menu .btn {
  font-size: 13px;
  color: #fff;
  background: var(--purple);
  padding: 10px 18px;
  border-radius: 44px;
  -o-transition:.25s;
  -ms-transition:.25s;
  -moz-transition:.25s;
  -webkit-transition:.25s;
  transition:.25s;
}

.desktop-menu .btn:hover, .mobile-menu .btn:hover {
  background: var(--blue);
  border-bottom: none;
}

.mobileDiv {
  position: relative;
  display: none;
}

.hamburger-btn {
  display: none;
}



@media (max-width: 830px) {

  .logo {
    padding-top: 45px;
    padding-bottom: 10px;
  }

  .phone {
    flex-direction: column;
    font-size: 15px;
    margin-bottom: 0;
  }

  .phone li:nth-child(2) {
    margin-left: 0;
    margin-right: 0;
  }

  .phone li {
    margin-bottom: 15px;
  }

  .desktop-menu {
    display: none;
  }

  .mobileDiv {
    display: block;
  }

  .mobile-menu {
    position: absolute;
    padding: 15px 0 25px;
    background: var(--whiteBackground);
    border-radius: 8px;
    flex-direction: column;
    z-index: 1;
    left: -205%;
    top: 35px;
    width: 370px;
    font-size: 22px;
    line-height: 42px;
    text-align: center;
    -webkit-animation: fadein 0.2s; /* Safari, Chrome and Opera > 12.1 */
       -moz-animation: fadein 0.2s; /* Firefox < 16 */
        -ms-animation: fadein 0.2s; /* Internet Explorer */
         -o-animation: fadein 0.2s; /* Opera < 12.1 */
            animation: fadein 0.2s;
  }
  @keyframes fadein {
      from { opacity: 0; }
      to   { opacity: 1; }
  }

  /* Firefox < 16 */
  @-moz-keyframes fadein {
      from { opacity: 0; }
      to   { opacity: 1; }
  }

  /* Safari, Chrome and Opera > 12.1 */
  @-webkit-keyframes fadein {
      from { opacity: 0; }
      to   { opacity: 1; }
  }

  /* Internet Explorer */
  @-ms-keyframes fadein {
      from { opacity: 0; }
      to   { opacity: 1; }
  }

  .hamburger-btn {
    position: absolute;
    top: 55%;
    left: 70%;
    height: 35px;
    width: 35px;
    background: #fff; 
    display: block;
  } 

  .mobile-menu .btn {
    font-size: 22px;
    margin-top: 20px;
  }

  .mobile-menu li:last-child {
    margin-top: 15px;
  }

  .flex-col {
    position: relative;
  }
}

</style>