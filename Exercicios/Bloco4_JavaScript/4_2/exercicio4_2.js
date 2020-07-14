let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let sum = 0;

for (let indice = 0; indice < numbers.length; indice += 1){
    sum = sum + numbers[indice];
}

console.log("A soma dos valores foi de: " + sum);