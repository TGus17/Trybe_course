import React from 'react';
import './App.css';
import pokemons from './data';
import Pokedex from './Pokedex';
import { BrowserRouter, Route } from 'react-router-dom';
import Pokemon from './Pokemon';

function App() {
  return (
    <div className="App">
      <h1> Pokedex </h1>
      <BrowserRouter>
        <Route path="/" render={() => <Pokedex pokemons={pokemons} /> } />
        <Route path="/pokemon/:id" render={() => <Pokemon /> } />
      </BrowserRouter>
    </div>
  );
}

export default App;