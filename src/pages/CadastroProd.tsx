import { FormEvent, useState } from 'react'
import { useHistory } from 'react-router-dom'

import { api } from '../services/api2'

import illustrationImg from '../assets/images/illustration.svg'
import { Button } from '../components/Button'

import '../style/page.scss'

export function CadastroProd() {
  //const [id, setId] = useState(null);
  const [nomeProduto, setNomeProduto] = useState('')
  const [categoria, setCategoria] = useState('')
  const [date, setDate] = useState('')

  const acessToken = localStorage.getItem('senha')

  const history = useHistory()

  async function cadastroProduto(event: FormEvent) {
    event.preventDefault()

    const data = {
      nomeProduto,
      categoria,
      date
    }

    try {
      await api.post('/cadastroP', data, {
        headers: {
          Authorization: `Bearer ${acessToken}`
        }
      })
      history.push('/room/Menu')
    } catch (error) {
      alert('Erro ao cadastrar o produto! Tente novamente!')
    }
  }

  function navigateToMenu() {
    history.push('/room/Menu')
  }

  return (
    <div id="page-auth">
      <aside>
        <img src={illustrationImg} alt="ilustração simbolizando informação" />
        <strong>SYS Construction</strong>
      </aside>
      <main>
        <div className="main-content-page">
          <h1>
            <strong className="tema-1">Cadastro de Produtos</strong>
          </h1>
        </div>

        <form onSubmit={cadastroProduto}>
          <div className="form-group">
            <label className="cad" htmlFor="codeP">
              Nome Produto
            </label>
            <input
              className="box"
              type="text"
              placeholder="Digite o nome do produto"
              value={nomeProduto}
              onChange={event => setNomeProduto(event.target.value)}
            />

            <label className="cad" htmlFor="nameP">
              Categoria
            </label>
            <select
              name="categories"
              id="op"
              value={categoria}
              onChange={event => setCategoria(event.target.value)}
            >
              <option value="fenda">chaves de Fenda</option>
              <option value="philips">chaves philips</option>
              <option value="rosca">chaves rosca</option>
            </select>

            <label className="cad" htmlFor="dateCadastro">
              Data
            </label>
            <input
              className="box"
              type="date"
              value={date}
              onChange={event => setDate(event.target.value)}
            />
          </div>

          <div>
            <Button type="submit">Confirmar</Button>
            <Button type="submit">Cancelar</Button>
            <Button onClick={navigateToMenu} type="submit">
              Menu
            </Button>
          </div>
        </form>
      </main>
    </div>
  )
}
