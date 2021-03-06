/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
    var reg = new RegExp(p),
        res = s.match(reg)
    return res ? res[0] === s : false
};
console.log(isMatch("aa","a")) 
console.log(isMatch("aa","aa")) 
console.log(isMatch("aaa","aa")) 
console.log(isMatch("aa", "a*")) 
console.log(isMatch("aa", ".*")) 
console.log(isMatch("ab", ".*")) 
console.log(isMatch("aab", "c*a*b")) 