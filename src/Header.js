import { Link } from "react-router-dom";
import styled from "styled-components";
export default function Header(){
    return(
        <StyledHeader>
            <Link to={"/"}><h4>CINEFLEX</h4></Link>
        </StyledHeader>
    )
}

const StyledHeader = styled.header`
    width: 100%;
    background-color:#C3CFD9;
    height:67px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 34px;
    color: #E8833A;
    position: fixed;
    top: 0px;
    left: 0px;
    z-index: 1;

    & a{
    color: inherit;
    text-decoration: inherit;
}
`;