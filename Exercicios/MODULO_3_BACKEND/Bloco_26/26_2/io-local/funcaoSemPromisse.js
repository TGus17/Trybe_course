const calculaDivisao = (num1, num2) => {
  if (num2 === 0) throw new Error("Não é possível realizar divisão por zero.");

  const resultado = num1 / num2;
  return resultado;
};

try {
  const response = calculaDivisao(2,1);
  console.log("Resulado: %d", response);
} catch (e) {
  console.log("Erro: %s", e.message);
}