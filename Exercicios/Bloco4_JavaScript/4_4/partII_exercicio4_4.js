//1. Crie uma função que receba uma string e retorne true se for um palíndromo, ou false, se não for.



function verificaPalindromo (palavra) {
	let verifica = 0;
	if ((palavra.length % 2) === 0) {
		console.log(false);
	} else {
		for (let index = 0; index < palavra.length; index++) {
			if (palavra[index] === palavra[palavra.length - (index + 1)]) {
				verifica += 1;
			}
		}
		if (verifica == (palavra.length)) {
			console.log(true);
		} else {
			console.log(false);
		}	
	}
}

verificaPalindromo("gato");

