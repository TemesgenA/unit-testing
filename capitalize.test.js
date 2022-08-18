const capitalize = require('./capitalize.js')

test('testing for upper case', () => {
    expect(capitalize('hello')).toBe('Hello');
});
