// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

////////////////
// Solution 1 //
////////////////

// function reverse(str) {
//     let arr = str.split('');
//     arr.reverse();
//     return arr.join('');
// }

// concise syntax
// function reverse(str) {
//     return str.split('').reverse().join('');
// }

////////////////
// Solution 2 //
////////////////
// function reverse(str) {
//     let newStr = [];
//     let arr = str.split('');
//     for (i = 0; i < str.length; i ++) {
//         newStr.unshift(str[i]);
//     }
//     return newStr.join('');
// }

////////////////
// Solution 3 //
////////////////
// function reverse(str) {
//     let reversed = '';
//     for (let character of str) {
//         reversed = character + reversed;
//     }
//     return reversed;
// }

////////////////
// Solution 4 //
////////////////
function reverse(str) {
    return str.split('').reduce((rev, char) => char + rev, '');
}

module.exports = reverse;
