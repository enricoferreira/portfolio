import {api} from '@/services.js';

export default{
    data() {
        return {
            curriculo_info: null
        }
    },
    methods: {
        curriculoData(endpoint){
            api.get(endpoint)
            .then()
        }
    },
    
}