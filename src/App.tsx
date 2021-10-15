import{BrowserRouter, Route} from 'react-router-dom';

import { CadastroProd } from './pages/CadastroProd';
import { ConsultaEstoque } from './pages/ConsultaEstoque';
import { EntradaSaidaProd } from './pages/EntradaSaidaProd';
import { Home } from './pages/Home';
import {Menu} from './pages/menu';
import {CadastroUser} from './pages/CadastroUsuario';



function App() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Home} />
      <Route path="/room/Menu" component={Menu} />
      <Route path="/room/CadastroProd" component={CadastroProd} />
      <Route path="/room/EntradaSaidaProd" component={EntradaSaidaProd} />
      <Route path="/room/ConsultaEstoque" component={ConsultaEstoque} />
      <Route path="/room/CadastroUser" component={CadastroUser} />          
    </BrowserRouter>
      
  );
}

export default App;
