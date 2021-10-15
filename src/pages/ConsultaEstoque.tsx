import illustrationImg from '../assets/images/illustration.svg';
import { Button } from '../components/Button';

import '../style/page.scss';

export function ConsultaEstoque(){
  return(
    <div id="page-auth">
      <aside>
        <img src={illustrationImg} alt="ilustração simbolizando informação" />
        <strong>SYS Construction</strong>
      </aside>
      <main>
        <div className="main-content-page">
          <h1><strong className= "tema">Consulta Estoque</strong></h1>
        </div>

        <br />
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
          </div>

          <div className ="form-group">
            <label className="cad" htmlFor="nameP">Produto</label>                
            <input
            className ="box" 
            type="text"
            placeholder="Nome Produto"
            disabled
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

          </div>
                    
          <Button type="submit">Consultar</Button>
          <Button type="submit">Nova consulta</Button>
          <Button type="submit">Sair</Button>
                  
        </form>
      </main>
    </div>
  )
}