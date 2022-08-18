const reverseString = (string) => {
    let splited = string.split('');
    let reversed = splited.reverse();
    return reversed.join('');
}

module.exports = reverseString;