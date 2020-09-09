// 2. Com a mesma função do exercício anterior, utilizando o mock, crie uma nova implementação, que deve receber dois parâmetros e retornar a divisão do primeiro pelo segundo. Essa implementação deve ocorrer uma única vez. Faça os testes necessários.

let randomNumber = require('./10_3_1.test');

test('mockando resultado', () => {
  randomNumber = jest.fn().mockImplementationOnce((x,y) => x / y);
  expect(randomNumber(4,4)).toBe(1);
  expect(randomNumber).toHaveBeenCalled();
  expect(randomNumber).toHaveBeenCalledTimes(1);
  expect(randomNumber()).toBe(undefined);
})

