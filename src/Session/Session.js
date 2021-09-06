import Header from "../Header"
import SessionMain from "./SessionMain"
export default function Session({savecpf, savename, saveseat, saveseats }){
    return(
        <div>
            <Header />
            <SessionMain savecpf={savecpf} savename={savename} saveseat={saveseat} saveseats={saveseats}/>
        </div>
    )
}