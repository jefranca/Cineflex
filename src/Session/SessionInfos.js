import styled from "styled-components";

export default function SessionInfos({ setCpf, setName }) {
  return (
    <StyledForm>
      <span>Nome do comprador:</span>
      <input
        placeholder="Digite seu nome..."
        onChange={(i) => setName(i.target.value)}
      ></input>
      <span>CPF do comprador:</span>
      <input
        placeholder="Digite seu CPF..."
        onChange={(e) => setCpf(e.target.value)}
      ></input>
    </StyledForm>
  );
}

const StyledForm = styled.form`
  width: 90%;
  height: 180px;
  display: flex;
  justify-content: space-around;
  flex-direction: column;

  & input {
    height: 41px;
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
    margin: 57px 0 30px 0;
  }
`;
