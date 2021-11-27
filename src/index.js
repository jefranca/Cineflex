import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Outlet } from "react-router";
import App from "./App";
import Menu from "./components/Menu/Menu";
import Movie from "./components/Movie/Movie";
import Session from "./Session/Session";
import Sucess from "./Sucess/Sucess";
import SessionIndex from "./Session/SessionIndex";

render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />}>
                <Route index element={<Menu />}/>
                <Route path="filme/:idMovie/" element={<Outlet/>}>
                    <Route index element={<Movie />}/>
                    <Route path="sessao/:idSession" element={<Session/>}>
                        <Route index element={<SessionIndex/>}/>
                        <Route path="sucesso" element={<Sucess />}/>
                    </Route>
                </Route>
            </Route>
        </Routes>
    </BrowserRouter>
    , document.getElementById("root")
    );