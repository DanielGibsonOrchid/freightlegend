<script>

export default {
  name: 'thanks',
}
</script>

<template>
  <div class="thanks" id="thanks">
    <div class="thanks-wrapper">
      <h2>Thanks</h2>
      <p>Your contact details have been received. One of our team members will contact you shortly to setup your trail account and get you started with using FreightLegend!</p>
      <router-link to="/" class="back-btn">Back to Home</router-link>
    </div>
  </div>  
</template>

<style scoped>
  .thanks {
    background-color: var(--grey);
    margin: 100px 0;
  }

  .thanks-wrapper {
    max-width: 980px;
    margin: 0 auto;
    padding: 50px 30px;
  }

  .back-btn {
    margin-top: 100px;
    display: block;
    color: var(--blue);
  }
</style>