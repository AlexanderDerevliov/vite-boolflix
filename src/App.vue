<script>
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import { store } from './store';
import axios from 'axios';


export default {
  data() {
    return {
      store,
    }
  },

  components: { AppHeader, AppMain },


};

</script>

<template>
  <AppHeader />
  <AppMain />
</template>

<style lang="scss" >
@import "@fortawesome/fontawesome-free/css/all.css";
</style>
