const reverseString = require('./reverseString.js');

test('check for reversed string', () => {
    expect(reverseString('Hello').toBe('olleH'));
})