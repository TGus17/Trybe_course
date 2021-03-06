const state = document.querySelector('#state');
const states = ['Selecione seu estado', 'AC', 'AL', 'AM', 'AP', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MG', 'MS', 'MT', 'PA', 'PB', 'PE', 'PI', 'PR', 'RJ', 'RN', 'RO', 'RR', 'RS', 'SC', 'SE', 'SP', 'TO'];
let value = 1;
let arr = [];
let pos = '';
const date = document.querySelector('#date');
const form = document.querySelector('#form-curriculo');
const cut = document.querySelector('#interromper');
const data = document.querySelector('#show');
const name = document.querySelector('#name');
const email = document.querySelector('#email');
const cpf = document.querySelector('#cpf');
const option = document.querySelector('option');
const mostrar = document.querySelector('#show-datas');

function createListStates() {
  for (let index = 0; index < states.length; index += 1) {
    const option = document.createElement('option');
    option.value = value;
    option.innerHTML = states[index];
    state.appendChild(option);
    value += 1;
  }
}

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
    alert('Dia inválido');
  }
  if ((parseInt(arr[1]) < 0) || (parseInt(arr[1]) > 12)) {
    alert('Mes inválido');
  }
  if ((parseInt(arr[2]) < 0)) {
    alert('Ano inválido');
  }
}

function showData() {
  mostrar.innerHTML = 'Nome: ' + name.value + '\r\n' + 'Email: ' + email.value;
}

window.onload = function () {
  createListStates();

  form.addEventListener('submit', function () {
    verificaDate(event);
    showData();
    event.preventDefault();
  }
  );
}