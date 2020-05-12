import { requireCv } from './requisicoes.js';

requireCv().then(json => {
    console.log(json);
    
})