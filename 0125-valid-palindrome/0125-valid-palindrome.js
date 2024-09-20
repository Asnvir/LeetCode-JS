/**
 * @param {string} s
 * @return {boolean}
 */
const isLetter = (char) => {
    const code = char.charCodeAt(0);
    return (code >= 48 && code <= 57) || (code >= 65 && code <= 90) || (code >= 97 && code <= 122);
}

var isPalindrome = function(s) {
    const letters = [...s].filter(char => isLetter(char)).map(letter => letter.toLowerCase());

    let left = 0;
    let right = letters.length - 1;

    while (left < right) {
        if (letters[left] !== letters[right]) {
            return false;
        }
        left++;
        right--;
    }

    return true;
};