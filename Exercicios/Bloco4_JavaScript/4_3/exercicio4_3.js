//4. Depois, faça uma pirâmide com n asteriscos de base:

let n = 7;
let linha;
let coluna;
let metPiramide = ((n + 1) / 2);
let linhaInteira = "";
let simbolo = "*";
let outuput = "";
let input = " ";

for (linha = 0; linha < (metPiramide - 1); linha += 1) {
	for (coluna = 1; coluna <= n; coluna += 1) {
		if ((coluna < (metPiramide - linha)) || (coluna > (metPiramide + linha))) {
			outuput += input;
		} else {
			outuput += simbolo;
		}
	}
	console.log(outuput);
	outuput = "";
}

for (index = 0; index < n; index += 1){
	linhaInteira += simbolo;
}

console.log(linhaInteira);
