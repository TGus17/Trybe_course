function appendJoke(joke) {
  const text = document.querySelector('#jokeContainer');
  text.innerHTML = joke;
}

const fetchJoke = () => {
  const promise = new Promise((resolve, reject) => {
    let aleatNumber = [];
    for (let index = 0; index < 10; index += 1) {
      aleatNumber[index] = Math.floor(Math.random() * 50);
    }

    const sum = aleatNumber.map(element => element * element)
      .reduce((acc, current) => acc + current);

    if (sum < 8000) resolve(sum);
    reject(sum);
  })

  promise
    .then(success => {
      const array = [2, 3, 5, 10];
      return (array.map(element => success / element));
    })
    .catch(error => console.log('É mais de oito mil! Essa promise deve estar quebrada!'))
};

window.onload = () => fetchJoke();