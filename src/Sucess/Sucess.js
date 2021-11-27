import Header from "../Header";
import "../css/sucess.css";
import { useContext, useEffect } from "react";
import axios from "axios";
import UserContext from "../context/UserContext";
import { useNavigate } from "react-router";
export default function Sucess() {
  const navigate = useNavigate();
  const {
    day,
    time,
    movie,
    name,
    cpf,
    selectedSeats,
    setCpf,
    setName,
    setSelectedSeats,
  } = useContext(UserContext);
  useEffect(() => {
    const sendPost = {
      ids: selectedSeats,
      name: name,
      cpf: cpf,
    };
    axios.post(
      `https://mock-api.bootcamp.respondeai.com.br/api/v2/cineflex/seats/book-many`,
      sendPost
    );
  }, [cpf,name,selectedSeats]);
  return (
    <div>
      <Header />
      <div className="sucess-page">
        <h5>Pedido feito com sucesso!</h5>
        <div>
          <h6>Filme e sessão</h6>
          <p>{movie.title}</p>
          <p>
            {day.date} {time}
          </p>
        </div>
        <div>
          <h6>Ingressos</h6>
          {selectedSeats.map((seat) => (
            <p>Assento {seat % 50}</p>
          ))}
        </div>
        <div>
          <h6>Comprador</h6>
          <p>Nome: {name}</p>
          <p>Cpf: {cpf}</p>
        </div>
        <button
          className="button"
          onClick={() => {
            setCpf("");
            setName("");
            setSelectedSeats([]);
            navigate("/");
          }}
        >
          Voltar para Home
        </button>
      </div>
    </div>
  );
}
