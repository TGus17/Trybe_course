//Bônus: (Difícil) Faça um programa que receba uma string em algarismos romanos e retorne o número que a string representa.

function transfRomanos(str) {
	let valores = [];
	let soma = 0;

	let romanos = {
		I: 1,
		IV: 4,
		V: 5,
		IX: 9,
		X: 10,
		XL: 40,
		L: 50,
		XC: 90,
		C: 100,
		CD: 400,
		D: 500,
		CM: 900,
		M: 1000
	}
	for (let i = 0; i < str.length; i += 1) {
		for (let index in romanos) {
			if (str[i] == [index]) {
				valores[i] = romanos[index];
			}
		}
	}
	if (valores.length == 1) {
		soma += valores[0];
		return soma;
	}
	else if (valores.length == 2) {
		if (valores[0] >= valores[1]) {
			soma = valores[0] + valores[1];
			return soma;
		}
		soma = valores[1] - valores[0];
		return soma;
	}
else {
	for (let j = 0; j < (valores.length - 1); j += 1) {
		if (Math.abs(valores[j]) < Math.abs(valores[j + 1])) {
			valores[j] = valores[j] * (-1);
		}
	}
	for (let index = 0; index < valores.length; index += 1) {
		soma += valores[index];
	}
	return soma;
}
}
