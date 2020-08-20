<template>
  <v-container>
       <v-timeline>
           <v-timeline-item v-for="(exp, i) in timeline" :key="i" :color="exp.color" small>
               <template v-slot:opposite>
                   <span :class="`headline font-weight-bold ${exp.color}--text`" v-text="exp.ano"></span>
               </template>
               <div class="py-4">
                   <h2 :class="`headline font-weight-light mb-4 ${exp.color}--text`">{{i}}</h2>
                   <v-subheader>
                       {{exp.cargo}}
                   </v-subheader>
                   <div>
                       {{exp.atribuicoes}}
                   </div>
               </div>
           </v-timeline-item>
       </v-timeline>
  </v-container>
</template>

<script>
import {api} from '@/services.js';

export default {
    data() {
        return {
            timeline: null,
            err: false
        }
    },
    methods: {
        curriculoExperiences(){
            api.get('/curriculo')
            .then(json => {
                this.timeline = json.data.experiencias
            }).catch(() => {
                this.err = false
            });
        }
    },
    created() {
        this.curriculoExperiences();
    },
}
</script>

<style>

</style>