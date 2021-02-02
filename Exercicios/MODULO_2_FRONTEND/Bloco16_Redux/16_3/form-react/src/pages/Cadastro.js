import React, { Component } from 'react';
import { connect } from 'react-redux';
import saveUser from '../actions';
import { Link } from 'react-router-dom'

class Cadastro extends Component {
  constructor() {
    super();

    this.state = {
      name: '',
      email: '',
      tel: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(event) {
    const { target } = event;
    this.setState({
      [target.name]: target.value,
    });
  }

  handleClick() {
    const { addUser } = this.props;
    addUser(this.state)
    this.setState({
      name: '',
      email: '',
      tel: '',
    });
  }

  render() {

    return(
      <div>
        <input
          name='name'
          type='text'
          placeholder='Nome'
          required
          value={this.state.name}
          onChange={this.handleChange}
        />
        <input
          name='email'
          type='email'
          placeholder='E-mail'
          required
          value={this.state.email}
          onChange={this.handleChange}
        />
        <input
          name='tel'
          type='text'
          placeholder='(xx) xxxx-xxxx'
          required
          value={this.state.tel}
          onChange={this.handleChange}
        />
        <button
          type='button'
          onClick={this.handleClick}
        >
          Cadastrar
        </button>
        <Link to='/clientes-cadastrados'>Clientes Cadastrados</Link>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  addUser: (obj) => dispatch(saveUser(obj)),
});

export default connect(null, mapDispatchToProps)(Cadastro);