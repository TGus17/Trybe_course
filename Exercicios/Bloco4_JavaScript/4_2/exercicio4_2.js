let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let maior = 0;

for (let indice = 0; indice < numbers.length; indice += 1){
    if (numbers[indice] > maior) {
        maior = numbers[indice];
    }
}

console.log("Maior valor contido no array é: " + maior);