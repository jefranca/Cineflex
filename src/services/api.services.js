import axios from "axios";

function getMovies(){
    return axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/cineflex/movies");
}
function getMovie(idMovie){
    return axios.get(`https://mock-api.bootcamp.respondeai.com.br/api/v2/cineflex/movies/${idMovie}/showtimes`)
}

export {
    getMovies,
    getMovie
}