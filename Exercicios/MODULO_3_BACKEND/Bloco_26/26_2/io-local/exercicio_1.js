const { number } = require("prop-types");

const promiseResult = (param1, param2, param3) => {
  const result = new Promise((resolve, reject) => {
    if ((typeof(param1) !== number) || (typeof(param2) !== number) || (typeof(param3) !== number)) reject("Algum parâmetro não foi numérico");

    const resultado = param1 + param2;
    resolve(resultado);
  });

  return result;
}

promiseResult(1, 2, 3)
  .then(response => console.log(response))
  .catch(e => console.log(e));