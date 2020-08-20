<template>
  <v-container class="">
      <v-alert v-if="err" type="error" dismissible >
          Erro na requisição, página não carregada
      </v-alert>
      <div v-if="curriculo != null">        
            <br>
            <v-col cols="8">
                <v-sheet  elevation="3" >
                    <span class="red--text text-h2">Olá, sou o </span>
                    <div class="text-h3">{{curriculo.nome | cleanName}} tenho 26 anos e sou <span class="blue--text">desenvolvedor Web</span></div>
                </v-sheet>
            </v-col>
      </div>
  </v-container>
</template>

<script>
import {api} from '@/services.js';

export default {
  name: 'Home',
  data() {
        return {
            summary: 'Olá, meu nome é. Sou Desenvolvedor Web desde 2019',
            curriculo: null,
            err: false,
            baseUrl: process.env.VUE_APP_BASE_URL
        }
    },
    methods: {
        getInfoCV(endpoint){
            api.get(endpoint)
            .then(result => {
                this.curriculo = result.data
            }).catch(() => {
                this.err = true
            });
        }
    },
    filters:{
        cleanName(name){
            const arrayNome = name
            .split(' ')
            .splice(0, 2)
            .join(' ');
            return arrayNome;
        }
    },
  created() {
        this.getInfoCV('/curriculo');
    },
}
</script>
