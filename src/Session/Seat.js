import { useState } from 'react';
export default function Seat({name, isAvailable, idSeat, saveseat}){

    const [selected, setSelected]= useState("")
    
    function selecting(idSeat){
        if(selected === ""){
            setSelected("selected")
            saveseat(idSeat)
        }else{
            setSelected("");
        }
    }

    
    
    if(isAvailable){
        return(
            <div className={`available seat ${selected}`} onClick={() => selecting(idSeat)}>{name}</div>
        )
    }return(
        <div className={`unavailable seat`} onClick={() => alert("Assento Indisponivel")}>{name}</div>
    )

}