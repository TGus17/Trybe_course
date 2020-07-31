window.onload = function() {
	let corpo = document.querySelector("body");
	let textos = document.querySelectorAll("p");

	localStorage.setItem('bgC', 'white');
	localStorage.setItem('corT', 'blue');
	localStorage.setItem('tamF', '20px');
	localStorage.setItem('espL', '2em');
	localStorage.setItem('tipoF', 'sans-serif');

	corpo.style.background = localStorage.getItem('bgC');
	for (let index = 0; index < textos.length; index += 1) {
		textos[index].style.color = localStorage.getItem('corT');
		textos[index].style.font-size = localStorage.getItem('tamF');
		textos[index].style.line-height = localStorage.getItem('espL');
		textos[inde].style.font-family = localStorage.getItem('tipoF');
	}
}