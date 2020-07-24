//6. Crie uma função que receba um número inteiro N e retorne o somatório de todos os números de 1 até N.


function somatorio(num) {
	let soma = 0;
	for (let i = 0; i <= num; i += 1) {
		soma += i;
	}
	return soma;
}

console.log(somatorio(5));