//2. Crie uma função que receba um array de inteiros e retorne o índice do maior valor.


function verificaMaior (teste) {
	let menor = 0;
	let menorIndice = 1000;
	
	for (index in teste){		
		if ((teste[index]) < menor) {
			menor = teste[index];
			menorIndice = index;
		} 
	}	
	console.log(menorIndice);
}

verificaMaior([2, 4, 6, -7, 10, 0, -3]);

