// const lesson1 = {
//   materia: 'Matemática',
//   numeroEstudantes: 20,
//   professor: 'Maria Clara',
//   turno: 'manhã',
// };

// const lesson2 = {
//   materia: 'História',
//   numeroEstudantes: 20,
//   professor: 'Carlos',
// };

// const lesson3 = {
//   materia: 'Matemática',
//   numeroEstudantes: 10,
//   professor: 'Maria Clara',
//   turno: 'noite',
// };

// const alunosMatematicaEmCadaObject = (obj) => {
//   if (obj.materia === 'Matemática') {
//     return obj.numeroEstudantes;
//   }
//   return 0;  
// }

// const totalAlunosMatematica = () => {
// const alunosLesson1 = alunosMatematicaEmCadaObject(lesson1);
// const alunosLesson2 = alunosMatematicaEmCadaObject(lesson2);
// const alunosLesson3 = alunosMatematicaEmCadaObject(lesson3);
// return alunosLesson1 + alunosLesson2 + alunosLesson3;
// }

// console.log(totalAlunosMatematica());

const allLessons = {
  lesson1:
   { materia: 'Matemática',
     numeroEstudantes: 20,
     professor: 'Maria Clara',
     turno: 'manhã' },
  lesson2:
   { materia: 'História',
     numeroEstudantes: 20,
     professor: 'Carlos',
     turno: 'noite' },
  lesson3:
   { materia: 'Matemática',
     numeroEstudantes: 10,
     professor: 'Maria Clara',
     turno: 'noite' }
};

const lessons = (obj) => {
  return Object.keys(obj)
}

console.log(lessons(allLessons));

const createReport = (obj) => {
  const array = lessons(obj);

  console.log(array[0].materia)
}

createReport(allLessons);

// const createReport = (obj, teacher) => {
//   let aulas = [];
//   let estudantes = 0;
//   // const array = Object.values(obj);

//   for (index in obj) {
//     console.log(index);
//     // if (obj.index.professor === teacher) {
//     //   aulas.push(obj.index.materia);
//     //   estudantes += obj.index.numeroEstudantes;
//     // }
//   }
//   return {
//     professor: teacher,
//     aulas: aulas,
//     numeroEstudantes: estudantes
//   }
// }

// createReport(allLessons, 'Maria Clara');
