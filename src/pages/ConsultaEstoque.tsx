import {useState,FormEvent} from 'react';
import{useHistory} from 'react-router-dom'
import {api} from '../services/api2';

import illustrationImg from '../assets/images/illustration.svg';
import { Button } from '../components/Button';

import '../style/page.scss';

export function ConsultaEstoque(){

  const[codProduto, setCodProduto] = useState("");
  const[nomeProduto, setNomeProduto] = useState("");
  const[estoque, setEstoque] = useState("");
  
  const acessToken = localStorage.getItem('token');

  const history = useHistory();

  async function consultaEstoque(event: FormEvent) {
    event.preventDefault();

      const data = {
        codProduto,
        nomeProduto,
        estoque,
      };

      try {
        await api.post('/consulta', data,{
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
          <h1><strong className= "tema">Consulta Estoque</strong></h1>
        </div>             

        <form onSubmit ={consultaEstoque} >                                     
          <div className ="form-group">
            <label className="cad" htmlFor="codeP">Código Produto</label>
            <br />
            <input 
            className ="box"
            type="text"
            placeholder="Digite o código do produto"
            value = {codProduto}
            onChange={event => setCodProduto(event.target.value)}            
            
            />
            <br />
          </div>

          <div className ="form-group">
            <label className="cad" htmlFor="nameP">Produto</label>                
            <input
            className ="box" 
            type="text"
            placeholder="Nome Produto"
            value = {nomeProduto}
            onChange={event => setNomeProduto(event.target.value)}
            />
            <br />

            <label className="cad" htmlFor="inventory">Estoque</label>
            <br />
            <input
            className ="box" 
            type="text"
            placeholder="Estoque"
            value = {estoque}
            onChange={event => setEstoque(event.target.value)}
            />
            <br />

          </div>
                    
          <Button type="submit">Consultar</Button>
          <Button type="submit">Nova consulta</Button>
          <Button onClick={navigateToMenu} type="submit">Menu</Button>
                  
        </form>
      </main>
    </div>
  )
}