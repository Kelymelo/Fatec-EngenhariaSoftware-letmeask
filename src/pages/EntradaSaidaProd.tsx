import illustrationImg from '../assets/images/illustration.svg';
import { Button } from '../components/Button';

import '../style/page.scss';

export function EntradaSaidaProd(){
  return(
    <div id="page-auth">
      <aside>
        <img src={illustrationImg} alt="ilustração simbolizando informação" />
        <strong>SYS Construction</strong>
      </aside>
      <main>
        <div className="main-content-page">
          <h1><strong className= "tema">Entrada e Saída</strong></h1>
        </div>

        <br />

        <form>
          <div className ="form-group">            
            <input 
              className="radio"
              id="radio1"
              type="RADIO"
              name="EntradaSaida"
              value="Entrada"
            />
            <label className="titulo" htmlFor="radio1">Entrada</label>            
                               
            <input
              className="radio"
              id="radio2" 
              type="RADIO"
              name="EntradaSaida"
              value="Saida"
            />
            <label className="titulo" htmlFor="radio2">Saida</label>             
          </div>

          <br />
                    
          <div className ="form-group">
            <label className="cad" htmlFor="codeP">Código Produto</label>
            <br />
            <input 
            className ="box"
            type="text"
            placeholder="Digite o código do produto"
            />
            <br />

            <label className="cad" htmlFor="nameP">Produto</label>                
            <input
            className ="box" 
            type="text"
            placeholder="Nome Produto"
            disabled
            />
            <br />

            <label className="cad" htmlFor="quantity">Quantidade</label>
            <br />
            <input
            className ="box" 
            type="text"
            placeholder="Digite a quantidade"
            />
            <br />

            <label className="cad" htmlFor="inventory">Estoque</label>
            <br />
            <input
            className ="box" 
            type="text"
            placeholder="Estoque"
            disabled
            />
            <br />

            <label  className="cad" htmlFor="inventory">NF</label>
            <br />
            <input
            className ="box" 
            type="number"
            placeholder="digite o Nº da NF"
            
            />
            <br />

            <label className="cad" htmlFor="dateEorS">Data</label>
            <br />
            <input
            className ="box" 
            type="date"
            id="DataEntradaSaida"
            name="DataEntradaSaida"            
            />

          </div>
                    
          <Button type="submit">Confirmar</Button>
          <Button type="submit">Cancelar</Button>
                  
        </form>
      </main>
    </div>
  )
}