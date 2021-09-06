import Header from "../Header"
import SessionMain from "./SessionMain"
export default function Session({savecpf, savename}){
    return(
        <div>
            <Header />
            <SessionMain savecpf={savecpf} savename={savename}/>
        </div>
    )
}