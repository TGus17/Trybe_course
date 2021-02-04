const promiseResult1 = (param1, param2) =>
  new Promise((resolve, reject) => {
    if ((typeof(param1) !== "number") || (typeof(param2) !== "number")) return reject("Algum parâmetro não foi numérico");

    const resultado = param1 + param2;
    return resolve(resultado);
  });

  const promiseResult2 = (param1, param2) =>
  new Promise((resolve, reject) => {
    if ((typeof(param1) !== "number") || (typeof(param2) !== "number")) return reject("Algum parâmetro não foi numérico");

    const resultado = param1 * param2;
    return resolve(resultado);
    // setTimeout(() => resolve(resultado), 2000);
  });

  const promiseResult3 = (param1, param2) =>
  new Promise((resolve, reject) => {
    if ((typeof(param1) !== "number") || (typeof(param2) !== "number")) return reject("Algum parâmetro não foi numérico");

    const resultado = param1 - param2;
    setTimeout(() => resolve(resultado), Math.random() * 2000);    
  });

  Promise.all([promiseResult1(1, 1), promiseResult2(2, 2), promiseResult3(3, 3)])
    .then((response) => console.log(response))
    .catch((error) => console.log(error));







// const param1 = 1;
// const param2 = "oi";
// const param3 = 3;


// new Promise((resolve, reject) => {
//   if ((typeof(param1) !== "number") || (typeof(param2) !== "number") || (typeof(param3) !== "number")) return reject("Algum parâmetro não foi numérico");

//   const resultado = param1 + param2;
//   return resolve(resultado);
// })
//   .then((response) => console.log(response))
//   .catch((e) => console.log(e));
