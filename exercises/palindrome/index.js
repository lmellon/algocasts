// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false


// function palindrome(str) {
//     let reversed = '';
//     for (let character in str) {
//         reversed = character + reversed;
//     }
//     if (reversed === str) {
//         return true;
//     } else {
//         return false;
//     }
// };

// function palindrome(str) {
//     let arr = str.split('');
//     arr.reverse();
//     let reversed = arr.join('');
//     if (reversed === str) {
//         return true;
//     } else {
//         return false;
//     }
// };

// // MORE COMPACT syntax
// function palindrome(str) {
//     const reversed = str.split('').reverse().join('');
//     return reversed === str;
// }

// USING AN ARRAY HELPER FUNCTION "EVERY"
// this is a solution that does extra comparisons
//
function palindrome(str) {
    // turn string into array so we can use the every helper method
    // .every() takes two parameters.  the first one is a function that takes the element of the function as its first parameter, and the second parameter is the index of the element.
    return str.split('').every( (char, i) => {
        // return comparison of current element (char) against its mirror element at the opposite end of the array.
        // -i increments for each loop
        // -1 accounts for the overall length and the 0 inded of JS arrays
        return char === str[str.length - i - 1];
    });
}


module.exports = palindrome;
