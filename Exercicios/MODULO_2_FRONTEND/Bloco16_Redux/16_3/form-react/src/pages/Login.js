import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import { createMemoryHistory } from 'history';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      senha: '',
    };
    this.handleClick = this.handleClick.bind(this);
  };

  handleClick() {
    const { senha, email } = this.state;
    // const { pathname } = createMemoryHistory();
    if(email === 'gustavo' && senha === 'guga') {
      createMemoryHistory().location.pathname = '/cadastro';
      console.log(createMemoryHistory().location);
    }
    return(
      <div>Email ou Login não encontrados.</div>
    )
  }

  render() {
    // const { email, senha } = this.state;

    return (
      <div>
        <input
          type='email'
          name='email'
          required
          placeholder='E-mail'
          onChange={ (e) => this.setState({ email: e.target.value }) }
        />
        <input
          type='password'
          name='senha'
          required
          placeholder='Senha'
          onChange={ (e) => this.setState({ senha: e.target.value }) }
        />          
        <button
        type='button'
        onClick={ () => this.handleClick() }
        >
          Efetuar Login
        </button>
      </div>
    );
  }
}

export default Login;