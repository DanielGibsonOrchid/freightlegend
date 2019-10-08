<script>
import Banner from '../components/Banner.vue';
import TwoColumn from '../components/TwoColumn.vue';
import GetStartedForm from '../components/GetStartedForm.vue';

export default {
  name: 'home',
  components: {
    GetStartedForm,
    Banner,
    TwoColumn,
  }
}
</script>

<template>
  <div id="home">
    <Banner />
    <TwoColumn />
    <GetStartedForm />
  </div>  
</template>

<style scoped>

</style>