let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let menor = 100;

for (let indice = 0; indice < numbers.length; indice += 1){
    if (numbers[indice] < menor) {
        menor = numbers[indice];
    }
}

console.log("O menor valor do array é: " + menor);