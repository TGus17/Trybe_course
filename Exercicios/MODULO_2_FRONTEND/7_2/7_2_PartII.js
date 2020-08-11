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

lesson2.turno = "noite";

let l1 = {};
let l2 = {};
let l3 = {};
let allLessons = {};

l1.lesson1 = lesson1;
l2.lesson2 = lesson2;
l3.lesson3 = lesson3;

Object.assign(allLessons, l1, l2, l3);

const soma = (obj) => {
  return obj.lesson1.numeroEstudantes + obj.lesson2.numeroEstudantes + obj.lesson3.numeroEstudantes;
}

console.log(soma(allLessons))