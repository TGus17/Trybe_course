let longestWord = (frase) => {
  frase = frase.split(' ');
  let tamanho = 0;
  let bigWord = '';
  
  for (let index = 0; index < frase.length; index += 1) {
    if (frase[index].length > tamanho) {
      tamanho = frase[index].length;
      bigWord = frase[index]
    }
  }
  return bigWord;
}
