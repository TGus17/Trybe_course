window.onload = function () {
  const state = document.querySelector('#state');
  const states = ['Selecione seu estado', 'AC', 'AL', 'AM', 'AP', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MG', 'MS', 'MT', 'PA', 'PB', 'PE', 'PI', 'PR', 'RJ', 'RN', 'RO', 'RR', 'RS', 'SC', 'SE', 'SP', 'TO'];  
  let value = 1;
  let arr = [];
  let pos = '';
  const date = document.querySelector('#date');
  const form = document.querySelector('#form-curriculo');

  function createListStates() {
    for (let index = 0; index < states.length; index += 1) {
      const option = document.createElement('option');
      option.value = value;
      option.innerHTML = states[index];
      state.appendChild(option);
      value += 1;
    }
  }
  createListStates();

  function spliDate(number) {
    for (let index = 0; index < number.length; index += 1) {
      if (number[index] === '/') {
        arr.push(pos);
        pos = '';
      } else {
        pos += number[index];
      }
    }
    arr.push(pos);
    return arr;
  }

  function verificaDate(number) {
    number = date.value;
    spliDate(number);
    if ((parseInt(arr[0]) < 0) || (parseInt(arr[0]) > 31)) {
      // number.preventDefault();
      alert('Dia inválido');
    }
    if ((parseInt(arr[1]) < 0) || (parseInt(arr[1]) > 12)) {
      // number.preventDefault();
      alert('Mes inválido');
    }
    if ((parseInt(arr[2]) < 0)) {
      // number.preventDefault();
      alert('Ano inválido');
    }
  }

form.addEventListener('submit', verificaDate);
}
