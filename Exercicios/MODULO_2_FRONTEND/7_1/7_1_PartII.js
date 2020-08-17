const skills = ['HTML', 'Javascript', 'CSS', 'Bash', 'Shellscript'];

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


let func2 = (func) => {
  let skills2 = skills.sort();
  let resp = `
${func}

Minhas cinco habilidades são:`
  console.log(resp);
  for (let i = 0; i < skills2.length; i += 1) {
    console.log(skills2[i]);
  }
}


func2(func('gostosão'));
