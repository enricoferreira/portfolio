<template>
  <div>
    <v-toolbar dark src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg">
      <!-- <v-app-bar-nav-icon></v-app-bar-nav-icon> -->

      <v-toolbar-title>Enrico</v-toolbar-title>

      <v-spacer></v-spacer>      

        <router-link to="">
            <v-btn icon text-capitalize>
                <v-icon>mdi-star</v-icon>
            </v-btn>
        </router-link>

        <router-link :to="{name: 'projects'}">
            <v-btn icon text-capitalize>
                <v-icon>mdi-format-list-bulleted-type</v-icon>
            </v-btn>
        </router-link>

      <v-btn icon>
        <v-icon>mdi-export</v-icon>
      </v-btn>
    </v-toolbar>
  </div>
</template>

<script>
export default {
    name: 'SideBar'
}
</script>

<style>
a{
    text-decoration: none;
}
</style>