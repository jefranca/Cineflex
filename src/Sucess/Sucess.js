import Header from "../Header"
import "../css/sucess.css"
import { useEffect, useState } from 'react';
import axios from "axios";
import { useParams } from 'react-router-dom';
export default function Sucess({cpf, name}){
    const { idSession } = useParams()
    const [movie, setMovie]=useState("")
    const [day, setDay]=useState("")
    const [time, setTime]=useState("")
    useEffect(() => {
        const promise=axios.get(`https://mock-api.bootcamp.respondeai.com.br/api/v2/cineflex/showtimes/${idSession}/seats`)
        promise.then((response) =>{
            setMovie(response.data.movie.title)
            setDay(response.data.day.date)
            setTime(response.data.name)
        })
    },[])
    return(
        <div>
            <Header />
            <div className="sucess-page">
                <h5>Pedido feito com sucesso!</h5>
                <div>
                    <h6>Filme e sessão</h6>
                    <p>{movie}</p>
                    <p>{day} {time}</p>
                </div>
                <div>
                    <h6>Ingressos</h6>
                    <p>Assento 15</p>
                    <p>Assento 16</p>
                </div>
                <div>
                    <h6>Comprador</h6>
                    <p>Nome: {name}</p>
                    <p>Cpf: {cpf}</p>
                </div>
                <button className="button">Voltar para Home</button>
            </div> 
        </div>
    )
}