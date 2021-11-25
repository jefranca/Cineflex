import { useState } from "react";
import { Outlet } from "react-router";
import Header from "./Header";
export default function App(){
    const [cpf, setCpf]=useState("")
    const [name, setName]=useState("")

    return(
        <>
            <Header/>
            <Outlet/>
        </>
    )
}