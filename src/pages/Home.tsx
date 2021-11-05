import {FormEvent,useState} from 'react';
import{useHistory} from 'react-router-dom';
import api from '../services/api';

import illustrationImg from '../assets/images/illustration.svg';
import { Button } from '../components/Button';

import '../style/auth.scss';

export function Home(){

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  
  const history = useHistory();

  async function login(event: FormEvent) {
    event.preventDefault();

      const data = {
        username,
        password,
      };

      try {
        const response = await api.post('auth/signin',data);
        
       /*localStorage.setItem('user', username); 
       localStorage.setItem('token', response.data.token);*/

        history.push('/room/Menu');
        
      } catch (error) {
        alert('Login invalido! Tente novamente!');
      }
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

        <form onSubmit={login}>
          <div className="form-login">
            <input 
            type="email"
            name="email"
            placeholder="Digite o email"
            value={username}
            onChange={event => setUsername(event.target.value)}
            />          

            <input 
            type="password"
            name="password"
            placeholder="Digite a senha"
            value={password}
            onChange={event => setPassword(event.target.value)}
            />
          </div>

          <Button type="submit">Acessar</Button>
          
        </form>
      </main>
    </div>
  )
}