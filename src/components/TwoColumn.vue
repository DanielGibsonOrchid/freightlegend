<script>
export default {
  name: 'two-column'
}
</script>

<template>
  <div id="two-column" class="two-column">
    <!-- Section 2 start -->
    <section class="sec-1 flex">
      <div><img src="../assets/homepage/sec-1-img.png" alt="Filter rates and charges"></div>
      <div class="text-content">
        <h4>Filtering</h4>
        <p>Rates and charges can be automatically filter based on specific customer needs.</p>
      </div>
    </section> <!-- Section 2 end -->
    <!-- Section 3 start -->
    <section class="sec-2 flex">
      <div><img src="../assets/homepage/sec-2-img.png" alt="Update multiple port pair rates" /></div>
      <div class="text-content">
        <h4>Updates</h4>
        <p>Update multiple port pair rates, associated surcharges and exchange rates. Something that used to eat up hours of time can now be done in a few clicks!</p>
      </div>
    </section> <!-- Section 3 end -->
    <!-- Section 4 start -->
    <section class="sec-3 flex">
      <div><img src="../assets/homepage/sec-3-img.png" alt="Customizable" /></div>
      <div class="text-content">
        <h4>Customizable</h4>
        <p>Never miss an expiring rate or charge. You’ll have the ability to update unique groups of data easily. <br />Fully Customizable.</p>
      </div>
    </section> <!-- Section 4 end -->
    <!-- Section 5 start -->
    <section class="sec-4 flex">
      <div><img src="../assets/homepage/sec-4-img.png" alt="Accessibility" /></div>
      <div class="text-content">
        <h4>Acessibility</h4>
        <p>It’s not just customers who can find quotes confusing! Freight Legend simplifies communications securely so everyone is on the same page.</p>
      </div>
    </section> <!-- Section 5 end -->
    <!-- Section 6 start -->
    <!-- <section class="sec-5 flex">
      <div class="text-content">
        <h4>Compare</h4>
        <p>Quickly compaire buy and sell rates while managing how much you share with customers.</p>
      </div>
    </section> -->
    <section class="sec-6">
      <h3>Want quoting to become something even recent hires can confidently use?</h3>
      <h2>Let us know and you can soon be enjoying a quoting system which allows your sales staff to focus on selling, not data entry - find out more today!</h2>
    </section> <!-- Section 6 end -->
  </div>  
</template>

<style scoped>
.two-column {
  padding: 45px 30px 0;
  max-width: 1170px;
  margin: 0 auto;
  justify-content: space-between;
}

h3 {
  font-weight: 400;
}

h4 {
  margin-bottom: -20px;
}

section {
  padding: 75px 0;
  justify-content: space-between;
}

.sec-2, .sec-4 {
  flex-direction: row-reverse;
}

.sec-2 .text-content, .sec-4 .text-content {
  padding-left: 0;
  padding-right: 25px;
}

.text-content {
  padding-left: 25px;
  max-width: 414px;
}

.sec-5 {
  justify-content: flex-end;
}

.sec-6 {
  padding-top: 0;
}

@media (max-width: 830px) {
  .sec-1, .sec-2, .sec-3, .sec-4, .sec-5 {
    flex-direction: column;
  }

  .text-content, .sec-2 .text-content, .sec-4 .text-content {
    padding: 0;
  }

  section {
  padding: 15px 0;
  }
}



</style>