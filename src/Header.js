import { Link } from "react-router-dom";
export default function Header(){
    return(
        <header>
            <Link to={"/"}><h4>CINEFLEX</h4></Link>
        </header>
    )
}