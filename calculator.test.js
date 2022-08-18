const Calculator = require('./calculator.js');
let calculate = new Calculator();

describe('check calculator', () => {
    test('Testing for sum', () => {
        expect(calculate.add(3, 5)).toBe(8);
        expect(calculate.add(-3, -5)).toBe(-8);
        expect(calculate.add(133, 155)).toBe(288);
    });

    test('Testing for difference', () => {
        expect(calculate.subtract(3, 5)).toBe(-2);
        expect(calculate.subtract(-3, -5)).toBe(2);
        expect(calculate.subtract(188, 155)).toBe(33);
    });

    test('Testing for product', () => {
        expect(calculate.multiply(3, 5)).toBe(15);
        expect(calculate.multiply(-3, -5)).toBe(15);
        expect(calculate.multiply(3, 133)).toBe(399);
    });

    test('Testing for quotient', () => {
        expect(calculate.divide(9, 3)).toBe(3);
        expect(calculate.divide(-15, -5)).toBe(3);
        expect(calculate.divide(699, 3)).toBe(233);
    });
})
