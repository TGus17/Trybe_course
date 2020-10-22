import React, { Component } from 'react'
import Pokemon from './Pokemon'
import pokemons from './Data'
import './Pokedex.css'

class Pokedex extends Component {
  render() {
    return (
      <div className='list'>
        <h1 className='title'>Pokedex</h1>
        {pokemons.map(pokemon => {
          return <Pokemon
            key={pokemon.id}
            name={pokemon.name} 
            type={pokemon.type} 
            image={pokemon.image} 
            avarageWeight={pokemon.averageWeight.value} 
            units={pokemon.averageWeight.measurementUnit}/>
        })}
      </div>
    )
  }
}

export default Pokedex