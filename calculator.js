let calculator = class {
    constructor(num1, num2) {
        this.num1 = num1;
        this.num2 = num2;
    };
    add(num1, num2) {
        return num1 + num2;
    };

    subtract(num1, num2) {
        return num1 - num2;
    }

    multiply(num1, num2) {
        return num1 * num2;
    }

    divide(num1, num2) {
        return num1 / num2;
    }
}
const calculate = new calculator;
module.exports = calculator;