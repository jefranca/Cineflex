import Header from "../Header";

export default function SessionInfos({savecpf, savename}){
    return(
        <div className="type-info">
            <span>Nome do comprador:</span>
            <input placeholder="Digite seu nome..." onChange={i => savename(i.target.value)}></input>
            <span>CPF do comprador:</span>
            <input placeholder="Digite seu CPF..." onChange={e => savecpf(e.target.value)}></input>
            
        </div>
    )
}