import './App.css';
import Home from './pages/Home';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './pages/Login';
import ClientesCadastrados from './pages/ClientesCadastrados';
import Cadastro from './pages/Cadastro';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path='/login' component={ Login } />
          <Route path='/clientes-cadastrados' component={ ClientesCadastrados } />
          <Route path='/cadastro' component={ Cadastro } />
          <Route path='/' component={ Home } />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
