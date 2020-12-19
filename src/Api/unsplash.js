import axios from 'axios';

export default axios.create({
    baseURL:"https://api.unsplash.com",
    headers:{
        Authorization: 'Client-ID jwsKS2fvzKJoTyQO0eynu9q131nCt_mrOhn0ogW2oGQ'
    }
})