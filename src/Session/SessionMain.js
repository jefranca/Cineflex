import { Link } from "react-router-dom";
import { useEffect, useState } from 'react';
import axios from "axios";
import { useParams } from 'react-router-dom';
import Seat from "./Seat";

export default function SessionMain(){
    let [seats, setSeats]= useState(undefined)
    const {idMovie, idSession} = useParams()
    useEffect(() => {
        const promise=axios.get(`https://mock-api.bootcamp.respondeai.com.br/api/v2/cineflex/showtimes/${idSession}/seats`)
        promise.then((response) =>{
            setSeats(response.data.seats)
            console.log(response.data.seats)
        })
    },[])

    

    if(seats){
        return(
            <div className="session-main">
                <h1>Selecione o(s) assento(s)</h1>
                <div className="seats">
                    {seats.map((seat) => <Seat name={seat.name} isAvailable={seat.isAvailable}/>)}
                </div>
                <div className="seats">
                    <div className="selected seat"></div>
                    <div className="available seat"></div>
                    <div className="unavailable seat"></div>
                </div>
            </div>
    
        )
    }return (
        <div>
            <h1> Carregando</h1>
        </div>
    )
    
}