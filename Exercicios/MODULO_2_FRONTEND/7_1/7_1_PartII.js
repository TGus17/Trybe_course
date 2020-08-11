const botao = document.querySelector('#click-count');
const field = document.querySelector('#field');
let clickCount = 0;

let click = () => field.innerHTML = `You have click me ${clickCount} times`;
click();

botao.addEventListener('click', () => {
  clickCount += 1;
  field.innerHTML = `You have click me ${clickCount} times`;
})
