import {useState,FormEvent} from 'react';
import{useHistory} from 'react-router-dom'
import {api} from '../services/api2';

import illustrationImg from '../assets/images/illustration.svg';
import { Button } from '../components/Button';

import '../style/page.scss';

export function EntradaProd(){

  const[codProduto, setCodProduto] = useState("");
  const[nomeProduto, setNomeProduto] = useState("");
  const[quantidade, setQuantidade] = useState("");
  const[nota, setNota] = useState("");
  const[dataE, setDataE] = useState("");

  const acessToken = localStorage.getItem('token');

  const history = useHistory();

  async function entradaEstoque(event: FormEvent) {
    event.preventDefault();

      const data = {
        codProduto,
        nomeProduto,
        quantidade,
        nota,
        dataE,
      };

      try {
        await api.post('/consulta/entrada', data,{
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
          <h1><strong className= "tema">Entrada de Produtos</strong></h1>
        </div>

        <br />

        <form onSubmit = {entradaEstoque}>          
                              
          <div className ="form-group">
            <label className="cad" htmlFor="codeP">Código Produto</label>
            <br />
            <input 
            className ="box"
            type="text"
            placeholder="Digite o código do produto"
            value={codProduto}
            onChange={event => setCodProduto(event.target.value)}
            />
            <br />

            <label className="cad" htmlFor="nameP">Produto</label>                
            <input
            className ="box" 
            type="text"
            placeholder="Nome Produto"
            value={nomeProduto}
            onChange={event => setNomeProduto(event.target.value)}
            />
            <br />

            <label className="cad" htmlFor="quantity">Quantidade</label>
            <br />
            <input
            className ="box" 
            type="text"
            placeholder="Digite a quantidade"
            value={quantidade}
            onChange={event => setQuantidade(event.target.value)}
            />
            <br />            

            <label  className="cad" htmlFor="inventory">NF</label>
            <br />
            <input
            className ="box" 
            type="number"
            placeholder="digite o Nº da NF"
            value={nota}
            onChange={event => setNota(event.target.value)}
            
            />
            <br />

            <label className="cad" htmlFor="dateEntrada">Data</label>
            <br />
            <input
            className ="box" 
            type="date"
            id="DataEntrada"
            value={dataE}
            onChange={event => setDataE(event.target.value)}           
            />

          </div>
                    
          <Button type="submit">Confirmar</Button>
          <Button type="submit">Cancelar</Button>
          <Button onClick={navigateToMenu} type="submit">Menu</Button>
                  
        </form>
      </main>
    </div>
  )
}