import illustrationImg from '../assets/images/illustration.svg';
import { Button } from '../components/Button';

import '../style/page.scss';

export function CadastroProd(){
  return(
    <div id="page-auth">
      <aside>
        <img src={illustrationImg} alt="ilustração simbolizando informação" />
        <strong>SYS Construction</strong>
      </aside>
      <main>
        <div className="main-content-page">
          <h1><strong className= "tema-1">Cadastro de Produtos</strong></h1>
        </div>        

        <form>          
          <div className ="form-group">
            <label className="cad" htmlFor="codeP">Nome Produto</label>            
            <input 
            className ="box"
            type="text"
            placeholder="Digite o nome do produto"
            />   

          
            <label className="cad" htmlFor="nameP">Categoria</label>                   
            <select name="categories" id="op">
              <option value="fenda">chaves de Fenda</option>
              <option value="philips">chaves philips</option>
              <option value="rosca">chaves rosca</option>
            </select>                  
          
            <label className="cad" htmlFor="dateCadastro">Data</label>
            <input
            className ="box" 
            type="date"
            />
            
          </div>

          <div>
            <Button type="submit">Confirmar</Button>
            <Button type="submit">Cancelar</Button>
          </div>
          
        
          
        </form>
      </main>
    </div>
  )
}