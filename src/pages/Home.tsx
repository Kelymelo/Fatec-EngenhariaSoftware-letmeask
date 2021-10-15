import{useHistory} from 'react-router-dom'

import illustrationImg from '../assets/images/illustration.svg';
import { Button } from '../components/Button';

import '../style/auth.scss';

export function Home(){
  const history = useHistory();

  function navigateToMenu(){
    history.push('/room/Menu');
  }

  return(
    <div id="page-auth">
      <aside>
        <img src={illustrationImg} alt="ilustração simbolizando informação" />
        <strong>Bem Vindo a SYS Construction</strong>
      </aside>
      <main>
        <br />
        <div className="main-content">
          <strong>Digite os dados de acesso</strong>
        </div>             

        <form>
          <div className="form-login">
            <input 
            type="email"
            name="email"
            placeholder="Digite o email"
            />          

            <input 
            type="password"
            name="password"
            placeholder="Digite a senha"
            />
          </div>

          <Button onClick={navigateToMenu} type="submit">Acessar</Button>
          
        </form>
      </main>
    </div>
  )
}