import { Link } from "react-router-dom";
import { useEffect, useState } from 'react';
import axios from "axios";
import { useParams } from 'react-router-dom';
import Seat from "./Seat";
import SessionInfos from "./SessionInfos";
import SessionFooter from "./SessionFooter";
import "../css/session.css";

export default function SessionMain({savecpf, savename, saveseat, saveseats}){
    const [seats, setSeats]= useState(undefined)
    const [movie, setMovie]= useState([])
    const [day, setDay]= useState([])
    const [time, setTime]= useState([])
    const {idMovie, idSession} = useParams()
    
    useEffect(() => {
        const promise=axios.get(`https://mock-api.bootcamp.respondeai.com.br/api/v2/cineflex/showtimes/${idSession}/seats`)
        promise.then((response) =>{
            setSeats(response.data.seats)
            setMovie(response.data.movie)
            setDay(response.data.day)
            setTime(response.data.name)
            console.log(response.data.seats)
        })
    },[])

    if(seats){
        return(
            <div className="session-main">
                

                    <h1>Selecione o(s) assento(s)</h1>
                    <div className="seats ">
                        {seats.map((seat) => <Seat name={seat.name} isAvailable={seat.isAvailable} idSeat={seat.id} saveseat={saveseat} saveseats={saveseats}/>)}
                    </div>
                    <div className="seats legend">
                        <div>
                            <span>Selecionado</span>
                            <div className="selected seat"></div>
                        </div>
                        <div>
                            <span>Disponivel</span>
                            <div className="available seat"></div>
                        </div>
                        <div>
                            <span>Indisponivel</span>
                            <div className="unavailable seat"></div>
                        </div>
                    </div>
                    <SessionInfos savecpf={savecpf} savename={savename}/>
                    <Link to={`/filme/${idMovie}/sessao/${idSession}/sucesso`}><button className="button" onClick={saveseats}>Reservar Assento(s)</button></Link>
                    <SessionFooter title={movie.title} posterURL={movie.posterURL} weekday={day.weekday} time={time} />    
            </div>
    
        )
    }return (
        <div >
            <h1> Carregando</h1>
        </div>
    )
    
}