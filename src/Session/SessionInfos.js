import { useContext } from "react";
import { useNavigate, useParams } from "react-router";
import styled from "styled-components";
import UserContext from "../context/UserContext";

export default function SessionInfos() {
  const { idMovie, idSession } = useParams();
  const {selectedSeats, setCpf, setName}=useContext(UserContext)
  const navigate = useNavigate();

  function moveToSucess(e) {
    e.preventDefault();
    if(!selectedSeats.length) alert("Selecione os assentos");
    else navigate(`/filme/${idMovie}/sessao/${idSession}/sucesso`);
  }

  return (
    <StyledForm onSubmit={moveToSucess}>
      <span>Nome do comprador:</span>
      <input
        pattern=".{3,50}"
        placeholder="Digite seu nome..."
        onChange={(i) => setName(i.target.value)}
        required
      />
      <span>CPF do comprador:</span>
      <input
        type="text" name="cpf"
        placeholder="Digite seu CPF..."
        pattern="\d{3}\.?\d{3}\.?\d{3}-?\d{2}"
        onChange={(e) => setCpf(e.target.value)}
        required
      />
      <button type="submit">Reservar Assento(s)</button>
    </StyledForm>
  );
}

const StyledForm = styled.form`
  width: 90%;
  height: 280px;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  align-items: center;

  & input {
    height: 41px;
    width: 100%;
  }

  & span {
    color: #293845;
    font-size: 18px;
  }

  & button {
    width: 225px;
    height: 42px;
    background-color: #e8833a;
    color: #ffffff;
    border-radius: 3px;
    font-size: 18px;
    margin: 37px 0 20px 0;
  }
`;
