import {FormEvent,useState} from 'react'
import{useHistory} from 'react-router-dom'

import api from '../services/api'

import illustrationImg from '../assets/images/illustration.svg';
import { Button } from '../components/Button';

import '../style/admin.scss';

export function CadastroUser(){

  const [id, setId] = useState(null);
  const [nomeUser, setNomeUser] = useState('');
  const [logradouroUser, setLogradouroUser] = useState('');
  const [bairroUser, setBairroUser] = useState('');
  const [cidadeUser, setCidadeUser] = useState('');
  const [ufUser, setUfUser] = useState('');
  const [cepUser, setCepUser] = useState('');
  const [telefoneUser, setTelefoneUser] = useState('');
  const [loginUser, setLoginUser] = useState('');  
  const [passwordUser, setPasswordUser] = useState('');
  const [dataCadastroUser, setDataCadastroUser] = useState('');

  const acessToken = localStorage.getItem('token');

  const history = useHistory();

  async function cadastroUsuario(event: FormEvent) {
    event.preventDefault();

    const data = {
      nomeUser,
      logradouroUser,
      bairroUser,
      cidadeUser,
      ufUser,
      cepUser,
      telefoneUser,
      loginUser,
      passwordUser,
      dataCadastroUser,      
    }

    try {
      await api.post('api/book/v1', data,{
        headers:{
          Authorization: `Bearer ${acessToken}`
        }
      });
      history.push('/room/Menu');

    } catch (error) {
      alert('Erro ao cadastrar o usuário! Tente novamente!');
    }

  }

  function navigateToMenu(){
    history.push('/room/Menu');
  }

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
        

        <form onSubmit={cadastroUsuario}>          
          <div className ="form-group-user">
            <label className="cad-user" htmlFor="codeP">Nome completo</label>            
            <input 
            className ="box-user"
            type="text"
            placeholder="Digite o nome completo"
            value={nomeUser}
            onChange={event =>setNomeUser(event.target.value)}
            /> 

            <label className="cad-user" htmlFor="codeP">Endereço</label>            
            <input 
            className ="box-user"
            type="text"
            placeholder="Digite o endereço"
            value={logradouroUser}
            onChange={event => setLogradouroUser(event.target.value)}
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

          <div className="bot">
            <Button type="submit">Enviar</Button>            
            <Button onClick={navigateToMenu} type="submit">Menu</Button>         
          </div>        
          
        </form>
      </main>
    </div>
  )
}