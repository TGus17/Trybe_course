let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let novo = [];

for (let i = 0; i < (numbers.length - 1); i += 1) {
	novo[i] = numbers[i]*numbers[i+1];
}
novo.push(numbers[(numbers.length-1)] * 2);

console.log(novo);