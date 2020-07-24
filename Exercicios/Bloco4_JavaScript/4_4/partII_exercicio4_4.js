//5. Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.


function verificaInteiro(teste) {
	let repetido = 1;
	let inteiro = 0;
	let maior = 0;
	for (let i = 0; i < teste.length; i += 1) {
		for (let j = 0; j < teste.length; j += 1) {
			if (teste[i] === teste[j]) {
				repetido += 1;
			}
		}
		if (repetido > maior) {
			maior = repetido;
			inteiro = teste[i];
			repetido = 1;
		} else {
			repetido = 1;
		}
	}
	return inteiro;
}