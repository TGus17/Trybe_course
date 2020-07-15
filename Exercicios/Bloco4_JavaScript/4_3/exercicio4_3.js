let n = 9;


if (n === 0) {
	console.log("Valor indefinido")
} else {
	for (indice = 0; indice < n; indice += 1){
		let quadrado = "*";
		for (let index = 1; index < n; index += 1) {
		quadrado += "*";
		}
		console.log(quadrado);
	}
}

