let n = 8;
let entradaLinha;
let entradaColuna;
let comecoColuna = n;
let simbolo = "*";
let inicioLinha = "";

for (entradaLinha = 0; entradaLinha < n; entradaLinha += 1) {
	for (entradaColuna = 1; entradaColuna <= n; entradaColuna += 1) {
		if (entradaColuna < comecoColuna) {
			inicioLinha += " ";
		} else {
			inicioLinha += simbolo;
		}
	}
	console.log(inicioLinha);
	inicioLinha = "";
	comecoColuna -= 1;
}

