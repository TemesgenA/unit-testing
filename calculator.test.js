const calculate = require('./calculator.js');


describe('check calculator', () => {
    test('Testing for sum', () => {
        expect(calculate.add(3, 5)).toBe(8);
        expect(calculate.add(-3, -5)).toBe(-8);
    });
})