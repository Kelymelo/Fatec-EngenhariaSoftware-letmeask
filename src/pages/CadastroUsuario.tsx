import { FormEvent, useState } from 'react'
import { useHistory } from 'react-router-dom'

import { api } from '../services/api2'

import illustrationImg from '../assets/images/illustration.svg'
import { Button } from '../components/Button'

import '../style/admin.scss'

export function CadastroUser() {
  //const [id, setId] = useState(null);
  const [nome, setNome] = useState('')
  const [endereco, setEndereco] = useState('')
  const [bairro, setBairro] = useState('')
  const [cidade, setCidade] = useState('')
  const [estado, setEstado] = useState('')
  const [cep, setCep] = useState('')
  const [telefone, setTelefone] = useState('')
  const [login, setLogin] = useState('')
  const [password, setPassword] = useState('')
  const [dataCadastro, setDataCadastro] = useState('')

  const acessToken = localStorage.getItem('senha')

  const history = useHistory()

  async function cadastroUsuario(event: FormEvent) {
    event.preventDefault()

    const data = {
      nome,
      endereco,
      bairro,
      cidade,
      estado,
      cep,
      telefone,
      login,
      password,
      dataCadastro
    }

    try {
      await api.post('/clientes', data, {
        headers: {
          Authorization: `Bearer ${acessToken}`
        }
      })
      history.push('/room/Menu')
    } catch (error) {
      alert('Erro ao cadastrar o usuário! Tente novamente!')
    }
  }

  function navigateToMenu() {
    history.push('/room/Menu')
  }

  return (
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
          <div className="form-group-user">
            <label className="cad-user" htmlFor="codeP">
              Nome completo
            </label>
            <input
              className="box-user"
              type="text"
              placeholder="Digite o nome completo"
              value={nome}
              onChange={event => setNome(event.target.value)}
            />

            <label className="cad-user" htmlFor="codeP">
              Endereço
            </label>
            <input
              className="box-user"
              type="text"
              placeholder="Digite o endereço"
              value={endereco}
              onChange={event => setEndereco(event.target.value)}
            />

            <label className="cad-user" htmlFor="codeP">
              Bairro
            </label>
            <input
              className="box-user"
              type="text"
              placeholder="Digite o bairro"
              value={bairro}
              onChange={event => setBairro(event.target.value)}
            />

            <label className="cad-user" htmlFor="codeP">
              Cidade
            </label>
            <input
              className="box-user"
              type="text"
              placeholder="Digite o cidade"
              value={cidade}
              onChange={event => setCidade(event.target.value)}
            />

            <label className="cad-user" htmlFor="codeP">
              Estado
            </label>
            <input
              className="box-user"
              type="text"
              placeholder="Digite o estado"
              value={estado}
              onChange={event => setEstado(event.target.value)}
            />

            <label className="cad-user" htmlFor="codeP">
              CEP
            </label>
            <input
              className="box-user"
              type="text"
              placeholder="Digite o CEP"
              value={cep}
              onChange={event => setCep(event.target.value)}
            />

            <label className="cad-user" htmlFor="codeP">
              Telefone
            </label>
            <input
              className="box-user"
              type="text"
              placeholder="Digite o telefone"
              value={telefone}
              onChange={event => setTelefone(event.target.value)}
            />

            <label className="cad-user" htmlFor="codeP">
              Usuário
            </label>
            <input
              className="box-user"
              type="text"
              placeholder="Digite o usuário"
              value={login}
              onChange={event => setLogin(event.target.value)}
            />

            <label className="cad-user" htmlFor="codeP">
              Senha
            </label>
            <input
              className="box-user"
              type="password"
              placeholder="Digite a senha"
              value={password}
              onChange={event => setPassword(event.target.value)}
            />

            <label className="cad-user" htmlFor="dateCadastro">
              Data
            </label>
            <input
              className="box-user"
              type="date"
              value={dataCadastro}
              onChange={event => setDataCadastro(event.target.value)}
            />
          </div>

          <div className="bot">
            <Button type="submit">Enviar</Button>
            <Button onClick={navigateToMenu} type="submit">
              Menu
            </Button>
          </div>
        </form>
      </main>
    </div>
  )
}
