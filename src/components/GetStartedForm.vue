<script>
export default {
  name: 'gs-form',
}
</script>

<template>
  <div id="gs-form" class="gs-form flex">
    <div class="container">
      <div class="ready-to-try">
        <h5>Ready to try FreightLegend?</h5>
        <h6>Contact us to see how easy it is for your team <br />to start trialing FreightLegend</h6>
        <form class="get-started-form" name="get-started" method="POST" data-netlify="true" netlify-honeypot="bot-field">
          <div class="form-content flex">
            <p class="hidden">
              <label>Don’t fill this out if you're human: <input name="bot-field" /></label>
            </p>
            <input type="text" name="name" placeholder="Your name" class="input-main" />
            <input type="email" name="email" placeholder="Your email" class="input-main" />
            <div class="select-div">
              <select name="country" class="input-main">
                <option value="New Zealand">New Zealand</option>
                <option value="Australia">Australia</option>
                <option value="USA">USA</option>
                <option value="Other">Other</option>
              </select>
            </div>
          </div>
          <input type="submit" class="btn-main" />
        </form>
      </div>
    </div>
  </div>  
</template>

<style scoped>
.gs-form {
  color: #fff;
  text-align: center;
  max-width: 1172px;
  margin: 0 auto;
  padding: 0 30px;
  justify-content: space-between;
  position: relative;
  height: 400px;
}

.container {
  position: relative;
  width: 100%;
  height: 100%;
}

.container:before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url("../assets/homepage/call-to-action-background.png");
  background-repeat: round;
}

.ready-to-try {
  position: relative;
}

h5 {
  margin-bottom: -35px;
}

form {
  max-width: 100%;
  display: block;
  margin-top: -15px;
}

select {
  width: 267px;
}

option {
  color: #000;
}

.form-content {
  justify-content: space-between;
  max-width: 843px;
  margin: 0 auto;
  color: #000;
}

.hidden {
  visibility: hidden;
  display: none;
}

.select-div {
  position: relative;
}

.select-div:before {
  content: '';
  position: absolute;
  top: 24px;
  left: 230px;
  width: 100%;
  height: 100%;
  background-image: url("../assets/homepage/down-arrow.png");
  background-repeat: no-repeat;
}

.btn-main {
  margin-top: 30px;
  padding: 20px 70px;
}

</style>