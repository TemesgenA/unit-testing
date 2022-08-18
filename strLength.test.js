let stringLength = require('./strLength.js');

test('counts the number of characters in a string', () => {
    expect(stringLength('hello')).toBe(5);
}
);
