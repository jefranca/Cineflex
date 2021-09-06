import { useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Menu from "./Menu/Menu";
import Movie from "./Movie/Movie";
import Session from "./Session/Session";
import Sucess from "./Sucess/Sucess";
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
        <BrowserRouter>
            <Switch>
                <Route path="/" exact>
                    <Menu />
                </Route>
                <Route path="/filme/:idMovie" exact>
                    <Movie />
                </Route>
                <Route path="/filme/:idMovie/sessao/:idSession" exact>
                    <Session savecpf={savecpf} savename={savename} saveseat={saveseat} saveseats={saveseats}/>
                </Route>
                <Route path="/filme/:idMovie/sessao/:idSession/sucesso" exact>
                    <Sucess cpf={cpf} name={name} selectedSeat={selectedSeat}/>
                </Route>
            </Switch>
            
        </BrowserRouter>
    )
}