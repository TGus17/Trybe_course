let num1 = 6;
let num2 = 20;
let num3 = 30;

isOdd = false;

if ((num1 % 2 != 0) || (num2 % 2 != 0) || (num3 % 2 != 0)){
  isOdd = true;
} else {
  isOdd = false;
}

console.log(isOdd);