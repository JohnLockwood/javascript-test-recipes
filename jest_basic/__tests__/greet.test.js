const greet = require('../src/greet');

test("greeting the author's wife by name returns 'Hello, Jenniffer!'", () => {
  // Greet the author's wife
  expect(greet('Jenniffer')).toBe('Hello, Jenniffer!');
});

test('greeting with no name returns Hello, World!', () => {
  expect(greet()).toBe('Hello, World!');
});