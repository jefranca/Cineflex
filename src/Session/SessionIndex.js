import { useContext, useEffect, useState } from "react";
import { getSession } from "../services/api.services";
import { useParams } from "react-router-dom";
import Seat from "./Seat";
import SessionInfos from "./SessionInfos";
import SessionFooter from "./SessionFooter";
import styled from "styled-components";
import UserContext from "../context/UserContext";

export default function SessionIndex() {
  const [seats, setSeats] = useState(undefined);
  const { idSession } = useParams();
  const {
    movie,
    setMovie,
    day,
    setDay,
    time,
    setTime,
    selectedSeats,
    setSelectedSeats,
  } = useContext(UserContext);

  useEffect(() => {
    getSession(idSession).then((response) => {
      setSeats(response.data.seats);
      setMovie(response.data.movie);
      setDay(response.data.day);
      setTime(response.data.name);
    });
  }, [idSession, setDay, setMovie, setTime]);
  if (seats) {
    return (
      <SessionContainer>
        <h1>Selecione o(s) assento(s)</h1>
        <div className="seats ">
          {seats.map((seat) => (
            <Seat
              name={seat.name}
              isAvailable={seat.isAvailable}
              idSeat={seat.id}
              setSelectedSeats={setSelectedSeats}
              selectedSeats={selectedSeats}
            />
          ))}
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
        <SessionInfos />
        <SessionFooter
          title={movie.title}
          posterURL={movie.posterURL}
          weekday={day.weekday}
          time={time}
        />
      </SessionContainer>
    );
  }
  return (
    <div>
      <h1> Carregando</h1>
    </div>
  );
}

const SessionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 400px;
  margin: 87px auto 137px auto;

  & .seats {
    display: flex;
    width: 100%;
    margin: 0 auto;
    flex-wrap: wrap;
    justify-content: space-around;
  }

  & .seats:nth-child(3) {
    width: 67%;
  }

  & .seats .seat {
    position: relative;
    width: 0;
    height: 0;
    padding: 3.1%;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 8px 5px;
  }

  & .legend .seat {
    padding: 20%;
  }
  & .legend div {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  & .available {
    background-color: #c3cfd9;
    border: 1px solid #7b8b99;
  }
  & .unavailable {
    background-color: #fbe192;
    border: 1px solid #f7c52b;
  }
  & .selected {
    background-color: #8dd7cf;
    border: 1px solid #1aae9e;
  }
`;
