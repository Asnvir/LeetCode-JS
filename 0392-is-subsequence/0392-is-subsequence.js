/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(sub, s) {
    if(sub.length ===0) return true;

    let subIndx = 0;

    for (let sIndx=0; sIndx < s.length; sIndx++ ){
        if(subIndx < sub.length && s[sIndx] === sub[subIndx]){
            subIndx++;
        }

        if( subIndx === sub.length) return true;
    }

    return false;
};