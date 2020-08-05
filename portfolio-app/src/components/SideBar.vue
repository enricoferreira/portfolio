<template>
  
    <v-app-bar color="white" elevate-on-scroll>
      <v-btn text to="/">Enrico</v-btn>
      <v-spacer></v-spacer>
        <v-btn v-for="(pagina, index) in paginas" :key="index" class="" :to="{name: pagina}" text>
          {{pagina}}
        </v-btn>        
    </v-app-bar>
  
</template>

<script>
export default {
    name: 'SideBar',
    data() {
      return {
        paginas: ['about', 'skills', 'projects', 'timeline']
      }
    },
}
</script>

<style>
a{
    text-decoration: none;
}
.theme--dark.v-btn--active::before {
  opacity: 0;
}

.v-btn::before {
  background: none;
}

header{
  position: sticky;
  top: 0;
  z-index: 10;
}
</style>