import React from 'react';
import './App.css';

const task = (value) => {
  value.map(item => {
    let listItem = document.createElement('li');
    listItem.innerHTML = item;
  });
}

let tasks = ['estudar', 'dormir', 'cochilar', 'ganhar dinheiro'];

function App() {
  
return (<ul>{ tasks.map(task => <li>{ task }</li>) }</ul>);
}

export default App;
