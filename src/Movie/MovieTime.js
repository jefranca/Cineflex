import { Link } from "react-router-dom";
export default function MovieTime({showtime, idMovie}){
    return(
        <div className="time">
                <Link to={`/filme/${idMovie}/sessao/${showtime[0].id}`}><button>{showtime[0].name}</button></Link>
                <Link to={`/filme/${idMovie}/sessao/${showtime[1].id}`}><button>{showtime[1].name}</button></Link>
            </div>
    )
}