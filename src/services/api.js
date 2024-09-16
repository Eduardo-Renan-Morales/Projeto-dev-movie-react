import axios from "axios";

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3',
    params: {
        api_key: '37dc6e4c00c9c75747af66de151ca11b',
        language: 'pt-BR',
        page: 1
    }
})

export default api
