let func = (str) => {
  sentence = 'Gustavo x demais';
  sentence = sentence.split(' ');
  let phrase = '';

  for (let index = 0; index < sentence.length; index += 1) {
    if (sentence[index] === 'x') {
      sentence[index] = str;
    }
  }

  for (let index = 0; index < sentence.length; index += 1) {
    phrase += `${sentence[index]} `;
  }

  return phrase;
}

