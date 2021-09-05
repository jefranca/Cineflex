import { useState } from 'react';
export default function Seat({name, isAvailable}){

    const [selected, setSelected]= useState("")

    function selecting(){
        if(selected === ""){
            setSelected("selected")
        }else{
            setSelected("");
        }
    }
    
    if(isAvailable){
        return(
            <div className={`available seat ${selected}`} onClick={selecting}>{name}</div>
        )
    }return(
        <div className={`unavailable seat`} >{name}</div>
    )

}