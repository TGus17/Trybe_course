import React, { Component } from 'react';
import { connect } from 'react-redux';

class ClientesCadastrados extends Component {
  constructor() {
    super();
    this.handleReducer = this.handleReducer.bind(this);
  }

  handleReducer() {
    const { savedUsers } = this.props;
    if(savedUsers.length === 0) {
      return (
        <div>Nenhum Cliente Cadastrado.</div>
      );
    }
    return(
      <div>
        {savedUsers.map(user => {
        return (
          <div>
            <h3>{user.name}</h3>
            <h4>{user.email}</h4>
            <h5>{user.tel}</h5>
          </div>
        )}
      )}
      </div>
    )
  }
  
  render() {
    return (
      <div>
        {this.handleReducer()}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  savedUsers: state.cadastroReducer.user,
});

export default connect(mapStateToProps)(ClientesCadastrados);