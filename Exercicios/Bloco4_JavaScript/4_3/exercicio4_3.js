//6. Faça um programa que diz se um número definido numa variável é primo ou não.

let n = 11;
let nPrimo = 0;

for (index = 2; index < n; index +=1) {
	if ((n % index) === 0) {
		nPrimo += 1;
	}
}

if (nPrimo != 0) {
	console.log("O número " + n + " não é primo!");
} else {
	console.log("O número " + n + " é primo!")
}