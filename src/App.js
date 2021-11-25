import { useState } from "react";
import { Outlet } from "react-router";
import Header from "./Header";
export default function App(){
    const [cpf, setCpf]=useState("")
    const [name, setName]=useState("")
    const [selectedSeat, setSelectedSeat]= useState([])
    function savecpf(e){
        setCpf(e)
    }
    function savename(i){
        setName(i)
    }
    function saveseat(x){
        selectedSeat.push(x)
    }
    function saveseats(){
        setSelectedSeat(selectedSeat)
        console.log(selectedSeat)
    }
    

    return(
        <>
            <Header/>
            <Outlet/>
        </>
    )
}