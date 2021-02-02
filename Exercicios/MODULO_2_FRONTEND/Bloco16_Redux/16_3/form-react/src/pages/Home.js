import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Home extends Component {
  render() {
    return (
      <div>
        <h1>Efetue o login para acessar os cadastros</h1>
        <Link to='/login'>Página de Login</Link>
      </div>
    );
  }
}

export default Home;