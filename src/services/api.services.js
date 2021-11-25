import axios from "axios";

function getMovies(){
    return axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/cineflex/movies");
}

export {
    getMovies
}