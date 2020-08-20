<template>
  <v-container v-if="projetos != null">
      <v-card class="mx-auto"  tile>
        <v-list three-line>
          <v-subheader>Projetos</v-subheader>
          <v-list-item-group color="primary">
            <v-list-item v-for="(item, i) in projetos" :key="i">
              <!-- <v-list-item-avatar v-if="avatar">
                <v-img :src="item.avatar"></v-img>
              </v-list-item-avatar> -->
              <v-list-item-content>
                <v-list-item-title v-html="item.name"></v-list-item-title>
                <v-list-item-subtitle v-if="threeLine" v-html="item.language">
                  {{item.description}}
                </v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-card>
  </v-container>
</template>

<script>
import { api } from '@/services.js';

export default {
  name: 'Projetos',
  data() {
    return {
      threeLine: true,
      projetos: null,
      err: null
    }
  },
  methods: {
    fetchProjetos(endpoint){
      api.get(endpoint)
      .then(result => {
        this.projetos = result.data;
      }).catch((err) => {
        this.err = err
      });
    }
  },
  created() {
    this.fetchProjetos('https://api.github.com/users/enricoferreira/repos');
  },
}
</script>

<style>

</style>