import{useHistory} from 'react-router-dom'

import illustrationImg from '../assets/images/illustration.svg';

import { Button } from '../components/Button';

import '../style/menu.scss';


export function Menu(){

  const history = useHistory();

  function navigateToCadastroProd(){
    history.push('/room/CadastroProd');
  }

  function navigateToEntradaSaidaProd(){
    history.push('/room/EntradaSaidaProd');
  }

  function navigateToConsultaEstoque(){
    history.push('/room/ConsultaEstoque');
  }

  function navigateToCadastroUsuario(){
    history.push('/room/CadastroUser');
  }

  function navigateToSair(){
    history.push('/');
  }

  return(
    <div id="page-auth">
      <aside>
        <img src={illustrationImg} alt="ilustração simbolizando informação" />
        <strong>SYS Construction</strong>
      </aside>
      <main>
      
        <div className="main-content-page">         
          <strong>          
            Menu
          </strong>
        </div>
       
      <div className="buttonMenu">               
        <Button onClick={navigateToCadastroProd} type="submit">Cadastro de Produtos</Button>
        <Button onClick={navigateToEntradaSaidaProd} type="submit">Entrada e Saída de Produtos</Button>
        <Button onClick = {navigateToConsultaEstoque} type="submit">Consulta Estoque</Button>
        <Button onClick = {navigateToCadastroUsuario} type="submit">Cadastro Usuário</Button>
        <Button onClick = {navigateToSair}type="submit">Sair</Button>        
      </div> 
               
        
      </main>
    </div>
  )
}