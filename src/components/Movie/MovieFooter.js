import styled from "styled-components"

export default function MovieFooter({title, posterURL}){
    return(
        <StyledFooter>
            <button><img src={posterURL} alt={title} /></button>
            <h3>{title}</h3>
        </StyledFooter>
    )
}

const StyledFooter = styled.footer`
    position: fixed;
    bottom: 0px;
    left: 0px;
    background-color:#C3CFD9;
    height:67px;
    display: flex;
    width: 100%;
    height: 117px;
    align-items: center;
    z-index: 1;

    & img{
        height: 72px;
    }

    & button{
        margin: 0 20px 0 10px;
        box-sizing: border-box;
        padding: 6px;
        box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
    }
`;