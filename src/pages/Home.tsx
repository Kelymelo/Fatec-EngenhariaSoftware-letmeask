import React,{FormEvent,useState} from 'react';
import{useHistory} from 'react-router-dom';
import {api} from '../services/api2';

import illustrationImg from '../assets/images/illustration.svg';
import { Button } from '../components/Button';

import '../style/auth.scss';

export function Home(){

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  
  const history = useHistory();

  async function login(event: FormEvent) {
    event.preventDefault();

      const data = {
        email,
        senha,
      };

      try {
        const response:any = await api.post('/login',data);
        
        localStorage.setItem('email', email); 
        localStorage.setItem('acessToken', response.data.senha);

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
            value={email}
            onChange={event => setEmail(event.target.value)}
            />          

            <input 
            type="password"
            name="senha"
            placeholder="Digite a senha"
            value={senha}
            onChange={event => setSenha(event.target.value)}
            />
          </div>

          <Button type="submit">Acessar</Button>
          
        </form>
      </main>
    </div>
  )
}