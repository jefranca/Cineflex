import Header from "../Header"
import "../css/sucess.css"
export default function Sucess(){
    return(
        <div>
            <Header />
            <div className="sucess-page">
                <h5>Pedido feito com sucesso!</h5>
                <div>
                    <h6>Filme e sessão</h6>
                    <p>Enola Holmes</p>
                    <p>24/06/2021 15:00</p>
                </div>
                <div>
                    <h6>Ingressos</h6>
                    <p>Assento 15</p>
                    <p>Assento 16</p>
                </div>
                <div>
                    <h6>Comprador</h6>
                    <p>Nome: FUlano</p>
                    <p>Cpf: 28147334384</p>
                </div>
                <button className="button">Voltar para Home</button>
            </div> 
        </div>
    )
}