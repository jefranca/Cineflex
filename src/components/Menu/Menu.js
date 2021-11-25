import { useNavigate } from 'react-router';
import { useEffect, useState } from 'react';
import styled from "styled-components";
import { getMovies } from '../../services/api.services';

export default function Content(){
    const navigate=useNavigate();
    const [movies, setMovies]= useState([]);
    useEffect(() => {
        getMovies()
        .then((response) =>{
            setMovies(response.data);
        })
    },[])
    return(
        <Container>
            <h1>Selecione o filme</h1>
            <div className="movies">
                {movies.map((movie) =><button onClick={()=>navigate(`/filme/${movie.id}`)}> <img src={movie.posterURL} alt={movie.title} />  </button>)}
            </div>
        </Container>
    )
}

const Container= styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top:  67px;

    & h1{
        font-size: 24px;
        color: #293845;
        margin: 20px 0;
    }

    & div{
        display: flex;
        flex-wrap: wrap;
        justify-content: center;

        & button{
        margin: 10px 10px;
        }
    }

    & img{
        padding: 5px;
        width: 130px;
    }
    
`;