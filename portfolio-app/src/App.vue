<template>
  <v-app>

    <v-main class="white lighten-5">
    <side-bar></side-bar>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>


export default {
  name: 'App',

  components: {
    
  },

  data: () => ({
    //
  }),
};
</script>
<style>
/* @import url('https://fonts.googleapis.com/css2?family=Josefin+Slab:wght@400;700&display=swap');
html, body, .v-application{
  font-family: 'Josefin Slab', serif !important;
  font-weight: 600;
} */

</style>
