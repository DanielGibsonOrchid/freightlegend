<script>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import GetStartedForm from './components/GetStartedForm.vue';
import Banner from './components/Banner.vue';
import TwoColumn from './components/TwoColumn.vue';

export default {
  name: 'app',
  components: {
    Header,
    Footer,
    GetStartedForm,
    Banner,
    TwoColumn,
  }
}
</script>

<template>
  <div id="app">
    <Header />
    <Banner />
    <TwoColumn />
    <GetStartedForm />
    <Footer />
  </div>
</template>

<style>

@import url('https://fonts.googleapis.com/css?family=Roboto:400,500|Source+Sans+Pro:400,600,700&display=swap');

#app {
  padding: 0;
}

/* To use variables: var(--purple); */
:root {
  --purple: #6A10CB;
  --purpleOpacity: #6a10cb80;
  --black: #06010C;
  --blue: #0DA0ED;
  --whiteBackground: #F7F9FB;
  --grey: #F7F9FB;
  --sans: 'Source Sans Pro', sans-serif;
}

html {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  box-sizing: border-box;
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 24px;
  line-height: 40px;
  color: var(--black);
  max-width: 1440px;
  margin: 0 auto;
  /* text-shadow: 0 2px 0 rgba(0, 0, 0, 0.07); */
}

body {
  margin: 0;
  overflow-x: hidden;
}

input, button, submit {
  border: none;
  cursor: pointer;
  outline: inherit;
  padding: 0;
  box-sizing: border-box;
}

select {
  -webkit-appearance: none;
  -moz-appearance: none;
  border: 0 !important;
}

h1 {
  font-size: 52px;
  line-height: 60px;
  font-weight: 500;
}

h2 {
  font-family: var(--sans);
  font-weight: 700;
  font-size: 48px;
  line-height: 60px;
  letter-spacing: -0.005em;
  color: var(--blue);
}

h3 {
  font-size: 32px;
  font-weight: 500;
  line-height: 50px;
}

h4 {
  font-family: var(--sans);
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: var(--blue);
}

h5 {
  font-family: var(--sans);
  font-weight: 700;
  font-size: 36px;
  line-height: 52px;
  letter-spacing: -0.005em;
}

h6 {
  font-family: var(--sans);
  font-weight: 400;
  font-size: 20px;
  line-height: 40px;
}

*,
*:before,
*:after {
  box-sizing: inherit;
}
ul {
  list-style: none;
  padding-left: 0;
}

.flex {
  display: flex;
}

.flex-col {
  display: flex;
  flex-direction: column;
}

.btn-main {
  font-family: var(--sans);
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  text-align: center;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: var(--blue);
  border-radius: 39px;
  padding: 20px 105px;
}

.btn-main:hover {
  background: var(--purple);
  color: #fff;
  -o-transition:.25s ease-in-out;
  -ms-transition:.25s ease-in-out;
  -moz-transition:.25s ease-in-out;
  -webkit-transition:.25s ease-in-out;
  transition:.25s ease-in-out;
}

.input-main {
  background: #fff;
  border-radius: 8px;
  font-size: 16px;
  line-height: 20px;
  font-family: var(--sans);
  padding: 17px 50px 17px 20px;
  background: rgba(255, 255, 255, .5);
}

/* Removes Firefox's dotted border when selecting elements */
select:-moz-focusring { 
  color: transparent;
  text-shadow: 0 0 0 #000; 
}

</style>
