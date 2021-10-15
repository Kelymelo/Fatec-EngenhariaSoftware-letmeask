import illustrationImg from '../assets/images/illustration.svg';
import { Button } from '../components/Button';

import '../style/admin.scss';

export function CadastroUser(){
  return(
    <div id="page-auth-user">
      <aside>
        <img src={illustrationImg} alt="ilustração simbolizando informação" />
        <strong>SYS Construction</strong>
      </aside>
      <main>
        <div className="main-content-page-user">
          <strong>Cadastro de Usuários</strong>
        </div>

        <br />
        <br />
        <br />

        <form>          
          <div className ="form-group-user">
            <label className="cad-user" htmlFor="codeP">Nome completo</label>            
            <input 
            className ="box-user"
            type="text"
            placeholder="Digite o nome completo"
            /> 

            <label className="cad-user" htmlFor="codeP">Endereço</label>            
            <input 
            className ="box-user"
            type="text"
            placeholder="Digite o endereço"
            />

            <label className="cad-user" htmlFor="codeP">Bairro</label>            
            <input 
            className ="box-user"
            type="text"
            placeholder="Digite o bairro"
            /> 

            <label className="cad-user" htmlFor="codeP">Cidade</label>            
            <input 
            className ="box-user"
            type="text"
            placeholder="Digite o cidade"
            />

             <label className="cad-user" htmlFor="codeP">Estado</label>            
            <input 
            className ="box-user"
            type="text"
            placeholder="Digite o estado"
            />

             <label className="cad-user" htmlFor="codeP">CEP</label>            
            <input 
            className ="box-user"
            type="text"
            placeholder="Digite o CEP"
            />

             <label className="cad-user" htmlFor="codeP">Telefone</label>            
            <input 
            className ="box-user"
            type="text"
            placeholder="Digite o telefone"
            />

             <label className="cad-user" htmlFor="codeP">Usuário</label>            
            <input 
            className ="box-user"
            type="text"
            placeholder="Digite o usuário"
            />

             <label className="cad-user" htmlFor="codeP">Senha</label>            
            <input 
            className ="box-user"
            type="password"
            placeholder="Digite a senha"
            />                        
          
            <label className="cad-user" htmlFor="dateCadastro">Data</label>
            <input
            className ="box-user" 
            type="date"
            />
            
          </div>

          <div>
            <Button type="submit">Enviar</Button>         
          </div>        
          
        </form>
      </main>
    </div>
  )
}