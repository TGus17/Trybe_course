function appendJoke(joke) {
  const text = document.querySelector('#jokeContainer');
  text.innerHTML = joke;
}

const fetchJoke = () => {
  const API_URL = 'https://icanhazdadjoke.com/';
  const myObject = {
    method: 'GET',
    headers: { 'Accept': 'application/json' }
  };      
  fetch(API_URL, myObject)
    .then(response => response.json())
    .then(data => appendJoke(data.joke));
};

window.onload = () => fetchJoke();