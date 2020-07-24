//7. Crie uma função que receba uma string word e outra string ending. Verifique se a string ending é o final da string word. Considere que a string ending sempre será menor que a string word.


function verificaFimPalavra(word, ending) {
	let repetido = 0;
	for (let index = 1; index <= ending.length; index += 1) {
		if (word[word.length - index] === ending[ending.length - index]) {
			repetido += 1;
		}
	}
	if (repetido === ending.length) {
		return true;
	}
	return false;
}
