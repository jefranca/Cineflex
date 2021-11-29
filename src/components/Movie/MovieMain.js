import styled from "styled-components";
import MovieTime from "./MovieTime";
export default function MovieMain({ days, idMovie }) {
  return (
    <MovieMainContainer>
      <h1>Selecione o horário</h1>
      {days.map((day) => {
        return (
          <div className="day">
            <h2>
              {day.weekday} - {day.date}
            </h2>
            <MovieTime showtime={day.showtimes} idMovie={idMovie} />
          </div>
        );
      })}
    </MovieMainContainer>
  );
}

const MovieMainContainer = styled.div`
  margin: 67px 0 127px 12px;
  display: flex;
  flex-direction: column;

  & h1 {
    margin: 20px auto;
    color: #293845;
    font-size: 24px;
  }

  & h2 {
    color: #293845;
    font-size: 20px;
  }

  & .day {
    display: flex;
    flex-direction: column;
    margin-bottom: 23px;
    height: 80px;
    justify-content: space-between;
  }
`;
