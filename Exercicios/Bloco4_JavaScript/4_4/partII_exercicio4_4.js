//2. Crie uma função que receba um array de inteiros e retorne o índice do maior valor.


function verificaMaior (teste) {
	let maior = 0;
	let maiorIndice = 0;
	
	for (index in teste){		
		if ((teste[index]) > maior) {
			maior = teste[index];
			maiorIndice = index;
		} 
	}	
	console.log(maiorIndice);
}

