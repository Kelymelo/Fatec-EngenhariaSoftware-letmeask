import{useHistory} from 'react-router-dom'

import illustrationImg from '../assets/images/illustration.svg';
import { Button } from '../components/Button';

import '../style/page.scss';

export function EntradaProd(){

  const history = useHistory();

  function navigateToMenu(){
    history.push('/room/Menu');
  }

  return(
    <div id="page-auth">
      <aside>
        <img src={illustrationImg} alt="ilustração simbolizando informação" />
        <strong>SYS Construction</strong>
      </aside>
      <main>
        <div className="main-content-page">
          <h1><strong className= "tema">Entrada de Produtos</strong></h1>
        </div>

        <br />

        <form>          
                              
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

            <label  className="cad" htmlFor="inventory">NF</label>
            <br />
            <input
            className ="box" 
            type="number"
            placeholder="digite o Nº da NF"
            
            />
            <br />

            <label className="cad" htmlFor="dateEntrada">Data</label>
            <br />
            <input
            className ="box" 
            type="date"
            id="DataEntrada"
            name="DataEntrada"            
            />

          </div>
                    
          <Button type="submit">Confirmar</Button>
          <Button type="submit">Cancelar</Button>
          <Button onClick={navigateToMenu} type="submit">Menu</Button>
                  
        </form>
      </main>
    </div>
  )
}