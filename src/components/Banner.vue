<script>
export default {
  name: 'banner'
}
</script>

<template>
  <div id="banner" class="banner">
    <section class="banner-sec">
      <div class="header-content flex">
        <div class="heading-text">
          <h1>Take the stress out of creating quotes</h1>
          <p>Quoting freight rates made easy even recent hires can confidently use.</p>
          <button class="btn-main">get started</button>
        </div>
        <div class="header-img"><img src="../assets/header-person.png" alt="" /></div>
      </div>
    </section>
    <section class="second-section flex">
      <h3>Freight Legend helps Freight Forwarders confidently quote and stay on top of the dynamic pricing from many international and domestic suppliers.</h3>
    </section>
  
  </div>  
</template>

<style scoped>
/* below style allows this section to ignore app's max-width */
.banner {
  background-color: var(--grey);
  width: 100%;
  position: relative;
  width: 100vw;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
}

.banner-sec {
  height: 690px;
  position: relative;
  margin-top: 16px;
}

.banner-sec:before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url("../assets/background-fade-v3.png");
  background-repeat: round;
}

.header-content {
  align-items: center;
  justify-content: space-between;
  max-width: 1140px;
  margin: 0 auto;
}

.heading-text {
  position: relative;
  color: #fff;
  max-width: 520px;
  padding-left: 15px;
}

.header-img {
  margin-right: -150px;
}

img {
  position: relative;
}

.second-section {
  height: 394px;
}

h3 {
  margin: auto;
  max-width: 920px;
  border-top: 2px solid var(--blue);
  position: relative;
  padding-top: 20px;
}

h3:after {
  content: '';
  position: absolute;
  background: var(--grey);
  right: 0;
  width: 94%;
  height: 2px;
  top: -2px;
}
</style>