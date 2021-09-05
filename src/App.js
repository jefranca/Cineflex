import { BrowserRouter, Switch, Route } from "react-router-dom";
import Menu from "./Menu/Menu";
import Movie from "./Movie/Movie";
import Session from "./Session/Session";
import Sucess from "./Sucess/Sucess";
export default function App(){
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
                    <Session />
                </Route>
                <Route path="/filme/sessao/sucesso" exact>
                    <Sucess />
                </Route>
            </Switch>
            
        </BrowserRouter>
    )
}