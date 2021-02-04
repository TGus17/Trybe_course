const calcularDivisao = (num1, num2) => {
  const promiseResult = new Promise((resolve, reject) => {
    if (num2 === 0) reject("Não pode dividir por zero.");

    const result = num1 / num2;
    resolve(result);
  });

  return promiseResult;
};

calcularDivisao(2, 0)
  .then((response) => console.log("Resultado: %d", response))
  .catch((err) => console.log("Erro: %s", err));
