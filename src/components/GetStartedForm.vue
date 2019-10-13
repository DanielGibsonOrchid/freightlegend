<script>
export default {
  name: 'gs-form',
  data () {
    return {
      onSubmit: false,
    }
  }
}
</script>

<template>
  <div id="gs-form" class="gs-form flex">
    <div class="container">
      <!-- <div class="background-image">
        <img src="../assets/homepage/call-to-action-background.png" alt="Background image of blue waves">
      </div> -->
      <div class="ready-to-try" id="interested">
        <h5>Ready to try FreightLegend?</h5>
        <h6>Contact us to see how easy it is for your team <br />to start trialing FreightLegend</h6>
        <!-- v-on:submit="onSubmit = !onSubmit"
        netlify-honeypot="bot-field" -->
        <form 
          action="/success"
          class="get-started-form" 
          name="get-started" 
          method="post" 
          data-netlify="true"
          data-netlify-honeypot="bot-field"
        >
          <input type="hidden" name="bot-field" />
          <input type="hidden" name="form-name" value="get-started" />
          <div class="form-content flex">
           
            <input type="text" name="name" placeholder="Your name" class="input-main" required />
            <input type="email" name="email" placeholder="Your email" class="input-main input-margin" required />
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
          <!-- <button type="submit" class="btn-main">Submit Query</button> -->
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
  height: 100%;
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
  background-image: url("../assets/homepage/call-to-action-background-v2.png");
  background-repeat: round;
  border-radius: 30px;
  -webkit-box-shadow: 0px 5px 5px -1px rgba(13,160,237,0.6);
  -moz-box-shadow: 0px 5px 5px -1px rgba(13,160,237,0.6);
  box-shadow: 0px 5px 5px -1px rgba(13,160,237,0.6);
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
  width: 268px;
  padding-right: 17px;
  cursor: pointer;
}

option {
  color: #000;
}

.form-content {
  max-width: 843px;
  margin: 0 auto;
  color: #000;
  padding: 0 15px;
}

.input-margin {
  margin: 0 18px;
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
  width: 10px;
  height: 10px;
  background-image: url("../assets/homepage/down-arrow.png");
  background-repeat: no-repeat;
  pointer-events: none;
}

.btn-main {
  margin-top: 30px;
  margin-bottom: 20px;
  padding: 20px 70px;
}

@media (max-width: 830px) {
  .form-content {
    flex-direction: column;
    align-items: center;
  }

  .input-margin {
    margin: 15px 0 0 0;
  }

  .select-div {
    margin: 15px auto 0;
  }

  br {
    display: none;
  }
}

</style>