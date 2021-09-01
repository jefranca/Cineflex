import { Link } from "react-router-dom";

export default function Content(){
    return(
        <div class="content">
            <h1>Selecione o filme</h1>
            <div class="filmes">
                <Link to="/filme/"> <img src="/images/image 3.png" /></Link>
                <Link to="/filme/"> <img src="/images/image 3.png" /></Link>
                <Link to="/filme/"> <img src="/images/image 3.png" /></Link>
                <Link to="/filme/"> <img src="/images/image 3.png" /></Link>
            </div>
            
        </div>
    )
}