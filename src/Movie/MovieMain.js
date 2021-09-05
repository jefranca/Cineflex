import MovieTime from "./MovieTime"
export default function MovieMain({days, idMovie}){
    return(
        <div className="movie-main">
        <h1>Selecione o horário</h1>
        {days.map((day) => {
            return(
                <div className="days">
                    <h2>{day.weekday} - {day.date}</h2>
                    <MovieTime showtime={day.showtimes} idMovie={idMovie}/>
                </div>
            )
        })}
        </div>
    )
    
}