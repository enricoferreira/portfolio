<template>
<div class="d-flex flex-wrap" v-if="curriculo_skill != null">

  <v-col v-for="(skill, index) in curriculo_skill" :key="index"  cols="6" md="6" sm="12" lg="4">
    <v-card>     
      <v-card-title class="d-flex justify-space-between">
        {{skill.nome}}
        <v-icon v-if="skill.image == ''" large :color="skill.color">{{skill.icon}}</v-icon>
        <v-img v-else :src="skill.image"  max-width="27" contain></v-img>		
      </v-card-title>

      <v-card-subtitle>
        <v-rating :value="skill.estrelas" color="amber" dense half-increments readonly size="20"></v-rating>
      </v-card-subtitle>

      <v-card-text class="d-flex justify-space-between">
        {{skill.experiencia | moment('MM/YYYY')}}  
		<v-spacer></v-spacer>
        <v-btn icon @click="skill.active = !skill.active">
          <v-icon>{{ skill.active ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
        </v-btn>
      </v-card-text>
   

      <v-expand-transition>
        <div v-show="skill.active">
          <v-divider></v-divider>
          <v-card-text>
            {{skill.describe}}
          </v-card-text>
        </div>
      </v-expand-transition>
    </v-card>    
  </v-col>
  
  </div>
</template>

<script>
import {api} from '@/services.js';
export default {
  data() {
        return {
          show: false,
            curriculo_skill: null,
            err: false
        }
    },
    methods: {        
        curriculoSkill(){
            api.get('/curriculo')
            .then(json => {				
				Object.getOwnPropertyNames(json.data.skills)
				.forEach(r => {
					Object.defineProperty(json.data.skills[r], 'active', {
						value: false,
						writable: true,
						enumerable: true,
						configurable: true
					});
				})
				console.log(json.data.skills);
				this.curriculo_skill = json.data.skills
            }).catch(() => {
                this.err = false
            });
        }
    },
    computed: {
      skillTeste(){
		console.log(Object.getOwnPropertyNames(this.curriculo_skill));		  
        return [1, 31, 12];
      }
    },
    created() {
        this.curriculoSkill();
    },
}
</script>

<style>

</style>