import {FormEvent,useState} from 'react'
import{useHistory} from 'react-router-dom'

import api from '../services/api'

import illustrationImg from '../assets/images/illustration.svg';
import { Button } from '../components/Button';

import '../style/page.scss';

export function CadastroProd(){

  const [id, setId] = useState(null);
  const [nomeProd, setNomeProd] = useState('');
  const [categoriaProd, setCategoriaProd] = useState('');
  const [dataCadastro, setDataCadastro] = useState('');

  const acessToken = localStorage.getItem('token');

  const history = useHistory();

  async function cadastroProduto(event:FormEvent) {
    event.preventDefault();

    const data ={
      nomeProd,
      categoriaProd,
      dataCadastro,
    }

    try {
      await api.post('api/book/v1', data,{
        headers:{
          Authorization: `Bearer ${acessToken}`
        }
      });
      history.push('/room/Menu');

    } catch (error) {
      alert('Erro ao cadastrar o produto! Tente novamente!');
    }

  }

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
          <h1><strong className= "tema-1">Cadastro de Produtos</strong></h1>
        </div>        

        <form onSubmit={cadastroProduto}>          
          <div className ="form-group">
            <label className="cad" htmlFor="codeP">Nome Produto</label>            
            <input 
            className ="box"
            type="text"
            placeholder="Digite o nome do produto"
            value={nomeProd}
            onChange={event => setNomeProd(event.target.value)}
            /> 
          
            <label className="cad" htmlFor="nameP">Categoria</label>                   
            <select 
            name="categories" 
            id="op" 
            value={categoriaProd} 
            onChange={event => setCategoriaProd(event.target.value)}>
              <option value="fenda">chaves de Fenda</option>
              <option value="philips">chaves philips</option>
              <option value="rosca">chaves rosca</option>
            </select>                  
          
            <label className="cad" htmlFor="dateCadastro">Data</label>
            <input
            className ="box" 
            type="date"
            value ={dataCadastro}
            onChange={event => setDataCadastro(event.target.value)}
            />
            
          </div>

          <div>
            <Button type="submit">Confirmar</Button>
            <Button type="submit">Cancelar</Button>
            <Button onClick={navigateToMenu} type="submit">Menu</Button>
          </div>
          
        
          
        </form>
      </main>
    </div>
  )
}