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

const alunosMatematicaEmCadaObject = (obj) => {
  if (obj.materia === 'Matemática') {
    return obj.numeroEstudantes;
  }
  return 0;  
}

const totalAlunosMatematica = () => {
const alunosLesson1 = alunosMatematicaEmCadaObject(lesson1);
const alunosLesson2 = alunosMatematicaEmCadaObject(lesson2);
const alunosLesson3 = alunosMatematicaEmCadaObject(lesson3);
return alunosLesson1 + alunosLesson2 + alunosLesson3;
}

console.log(totalAlunosMatematica());
