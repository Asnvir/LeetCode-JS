/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function(s, t) {
    let sIndx = s.length - 1;
    let tIndx = t.length - 1;
    let sSkipCntr = 0;
    let tSkipCntr = 0;

    while (sIndx >= 0 || tIndx >= 0) {
      
      while (sIndx >= 0 && (s[sIndx] === '#' || sSkipCntr > 0)) {
        if (s[sIndx] === '#') {
          sSkipCntr++;
        } else {
          sSkipCntr--;
        }
        sIndx--;
      }

      while (tIndx >= 0 && (t[tIndx] === '#' || tSkipCntr > 0)) {
        if (t[tIndx] === '#') {
          tSkipCntr++;
        } else {
          tSkipCntr--;
        }
        tIndx--;
      }

      if (sIndx >= 0 && tIndx >= 0 && s[sIndx] != t[tIndx]) {
        return false;
      }

      if ((sIndx >= 0) != (tIndx >= 0)) {
        return false;
      }

      sIndx--;
      tIndx--;
    }

    return true;
  }
