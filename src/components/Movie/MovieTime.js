import { Link } from "react-router-dom";
import styled from "styled-components";
export default function MovieTime({showtime, idMovie}){
    return(
        <div>
                <Link to={`/filme/${idMovie}/sessao/${showtime[0].id}`}><StyledButton>{showtime[0].name}</StyledButton></Link>
                <Link to={`/filme/${idMovie}/sessao/${showtime[1].id}`}><StyledButton>{showtime[1].name}</StyledButton></Link>
            </div>
    )
}

const StyledButton=styled.button`
     background-color: #E8833A;
    width: 83px;
    height: 43px;
    margin-right: 10px;
    border-radius: 3px;
    color: #FFFFFF;
    font-size: 18px;
`;