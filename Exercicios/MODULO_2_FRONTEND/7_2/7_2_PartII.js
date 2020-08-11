const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

const verifyPair = (obj, key, value) => {
  Object.keys(obj).includes(key);
  if (obj[key] === value) {
    return true
  }
  return false;
}

console.log(verifyPair(lesson3, 'carro', 'Maria Clara'));





// lesson2.turno = "noite";

// const position = (obj, pos) => {
//   if (pos === 0) {
//     return obj['materia'];
//   } else if (pos === 1) {
//     return obj['numeroEstudantes'];
//   } else if (pos === 2) {
//     return obj['professor'];
//   }
//   return obj['turno'];
  
// }

// console.log(position(lesson2, 2));