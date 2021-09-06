import Header from "../Header";

export default function SessionInfos(){
    return(
        <div className="type-info">
            <span>Nome do comprador:</span>
            <input placeholder="Digite seu nome..."></input>
            <span>CPF do comprador:</span>
            <input placeholder="Digite seu CPF..."></input>
            
        </div>
    )
}