const { add, subtract, multiply, divide } = require('../src/calculator');
const fs = require('fs');
const path = require('path');

const results = [];

function test(name, fn) {
  try {
    fn();
    results.push(`Success: ${name}`);
  } catch (error) {
    results.push(`Failure: ${name} - ${error.message}`);
  }
}

test('add 1 + 2 = 3', () => {
  if (add(1, 2) !== 3) throw new Error('Failed');
});

test('subtract 5 - 3 = 2', () => {
  if (subtract(5, 3) !== 2) throw new Error('Failed');
});

test('multiply 2 * 4 = 8', () => {
  if (multiply(2, 4) !== 8) throw new Error('Failed');
});

test('divide 8 / 2 = 4', () => {
  if (divide(8, 2) !== 4) throw new Error('Failed');
});

test('divide by zero throws', () => {
  try {
    divide(1, 0);
  } catch {
    return;
  }
  throw new Error('Should throw');
});

fs.writeFileSync(path.join(__dirname, '../results/test-results.txt'), results.join('\n'));
