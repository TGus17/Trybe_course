import React, { Component } from 'react'
import './Pokemon.css'

class Pokemon extends Component {
  render() {
    const { name, type, image, avarageWeight, units } = this.props;
    return (
      <div className='pokemon'>
        <p>Nome: {name}</p>
        <p>Tipo: {type}</p>
        <p>Peso médio: {avarageWeight}{units}</p>
        <img src={image} />
      </div>
    )
  }
}

// Pokemon.propTypes = {
//   name: PropTypes.string,

// }

export default Pokemon