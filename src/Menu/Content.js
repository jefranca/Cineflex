import { Link } from "react-router-dom";
import { useEffect, useState } from 'react';
import axios from "axios";

export default function Content(){
    const [movies, setMovies]= useState([]);
    useEffect(() => {
        const promise = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/cineflex/movies");
        promise.then((response) =>{
            setMovies(response.data);
        })
    },[])
    return(
        <div className="content">
            <h1>Selecione o filme</h1>
            <div className="movies">
                {movies.map((movie) => <Link to={"/filme/" + movie.id}> <img src={movie.posterURL} alt={movie.title} /></Link>)}
            </div>
            
        </div>
    )
}