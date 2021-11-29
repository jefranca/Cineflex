import { useState } from "react";
export default function Seat({
  name,
  isAvailable,
  idSeat,
  setSelectedSeats,
  selectedSeats,
}) {
  const [selected, setSelected] = useState("");

  function selecting(idSeat) {
    if (selected === "") {
      setSelected("selected");
      setSelectedSeats([...selectedSeats, idSeat]);
    } else {
      setSelected("");
      let index = selectedSeats.indexOf(idSeat);
      if (index > -1) {
        selectedSeats.splice(index, 1);
      }
    }
  }

  if (isAvailable) {
    return (
      <div
        className={`available seat ${selected}`}
        onClick={() => selecting(idSeat)}
      >
        {name}
      </div>
    );
  }
  return (
    <div
      className={`unavailable seat`}
      onClick={() => alert("Assento Indisponivel")}
    >
      {name}
    </div>
  );
}
