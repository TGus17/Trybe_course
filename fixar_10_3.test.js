let randomNumber = () => Math.floor(Math.random() * 100);

let isDivisible = (number) => (randomNumber() % number) === 0;

test('randomNumber', () => {
  randomNumber = jest.fn();
  isDivisible(2);
  expect(randomNumber).toHaveBeenCalled();
});

test('Saída será true', () => {
  randomNumber = jest.fn().mockReturnValue(40);
  expect(isDivisible(2)).toBeTruthy();
});

test('Valores esperados em sequência', () => {
  randomNumber = jest
    .fn()
    .mockReturnValueOnce(20)
    .mockReturnValueOnce(30)
    .mockReturnValue(50);

  expect(isDivisible(10)).toBeTruthy();
  expect(isDivisible(3)).toBeTruthy();
  expect(isDivisible(9)).toBeFalsy();
  expect(isDivisible(5)).toBeTruthy();
})