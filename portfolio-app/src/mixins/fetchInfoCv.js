export default{
    data() {
        return {
            curriculo: null,
            err: false,
            baseUrl: process.env.VUE_APP_BASE_URL
        }
    },
    methods: {
        fetchCurriculoJson(){                        
            fetch(`${this.baseUrl}info_cv.json`)
            .then(r => r.json())
            .then(json => {
                console.log(json);
                this.curriculo = json
            })
            .catch((err) => {
                console.log(err);
                
                this.err = true
            })
        }
    },
    
}