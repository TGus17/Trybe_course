let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let impar = 0;

for (let indice = 0; indice < numbers.length; indice += 1){
    if ((numbers[indice] % 2) != 0) {
        impar += 1;
    }
}

if (impar === 0) {
    console.log("Nenhum valor ímpar encontrado.");
} else {
    console.log("Quantidade de números ímpares no array: " + impar);
}