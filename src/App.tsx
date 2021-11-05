import{BrowserRouter, Route, Switch} from 'react-router-dom';

import { CadastroProd } from './pages/CadastroProd';
import { ConsultaEstoque } from './pages/ConsultaEstoque';
import {EntradaProd } from './pages/EntradaProd';
import {SaidaProd} from './pages/SaidaProd';
import { Home } from './pages/Home';
import {Menu} from './pages/menu';
import {CadastroUser} from './pages/CadastroUsuario';



function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/room/Menu" component={Menu} />
        <Route path="/room/CadastroProd" component={CadastroProd} />
        <Route path="/room/EntradaProd" component={EntradaProd} />
        <Route path="/room/SaidaProd" component={SaidaProd} />
        <Route path="/room/ConsultaEstoque" component={ConsultaEstoque} />
        <Route path="/room/CadastroUser" component={CadastroUser} />          
      </Switch>
    </BrowserRouter>
      
  );
}

export default App;
