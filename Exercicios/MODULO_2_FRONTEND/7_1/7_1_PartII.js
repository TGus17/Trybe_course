let fatorial = (number) => {
  let resp = 1;
  if (number < 0) {
    return ('Valor inválido para operação');
  } else if (number === 0) {
    return 1;
  }
  for (let index = 1; index <= number; index += 1) {
    resp *= index;
  }
  return resp;
}

console.log(fatorial(6));