const Math = require('../src/math');
const math = new Math();

test('adds 1 + 2 to equal 3', () => {
  expect(math.add(1, 2)).toBe(3);
});

test('subtracts 9 from 6 to equal -3', () => {
  expect(math.subtract(6, 9)).toBe(-3);
});