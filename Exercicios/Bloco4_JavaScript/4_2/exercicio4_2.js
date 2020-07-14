let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let sum = 0;
let media = 0;

for (let indice = 0; indice < numbers.length; indice += 1){
    sum = sum + numbers[indice];
}

media = sum / (numbers.length);
console.log("A média aritimética dos valores foi de: " + media);