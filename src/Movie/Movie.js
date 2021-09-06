import Header from "../Header"
import MovieMain from "./MovieMain"
import MovieFooter from "./MovieFooter"
import { useEffect, useState } from 'react';
import axios from "axios";
import { useParams } from 'react-router-dom';
import "../css/movie.css"
export default function Movie(){
    let [sessions, setSessions] = useState(undefined)
    const {idMovie} = useParams()
    useEffect(() => {
        const promise = axios.get(`https://mock-api.bootcamp.respondeai.com.br/api/v2/cineflex/movies/${idMovie}/showtimes`)
        promise.then((response) =>{
            setSessions(response.data)
        })
    },[])
    if(sessions)
    {
        return(
            <div>
                <Header />
                <MovieMain days={sessions.days} idMovie={idMovie}/>
                <MovieFooter title={sessions.title} posterURL={sessions.posterURL}/>
            </div>
            )
    }return (
        <div>
            <h1> Carregando</h1>
        </div>
    )
    
}