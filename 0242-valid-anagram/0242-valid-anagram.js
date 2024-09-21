/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    const sortedOriginalString = [...s].sort().join('');
    const sortedAnagramString = [...t].sort().join('');

    return sortedOriginalString===sortedAnagramString;
};