import { Outlet } from "react-router";
import { useState } from "react/cjs/react.development";
import UserContext from "../context/UserContext";
export default function Session() {
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [name, setName] = useState("");
  const [cpf, setCpf] = useState("");
  const [movie, setMovie] = useState([]);
  const [day, setDay] = useState([]);
  const [time, setTime] = useState([]);

  return (
    <>
      <UserContext.Provider
        value={{
          selectedSeats,
          setSelectedSeats,
          name,
          setName,
          cpf,
          setCpf,
          movie,
          setMovie,
          day,
          setDay,
          time,
          setTime,
        }}
      >
        <Outlet />
      </UserContext.Provider>
    </>
  );
}
