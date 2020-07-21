//4. Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.


function verificaCaracteres (teste) {
	let palavra = '';
	let menor = 0;
	
	
	for (let index in teste){		
		if ((teste[index].length) > menor) {
			menor = teste[index].length;
			palavra = teste[index];
		} 
	}	
	return palavra;
}

