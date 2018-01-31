/*
Given a string s, find the longest palindromic substring in s. You may assume that the maximum length of s is 1000.

Example:

Input: "babad"

Output: "bab"

Note: "aba" is also a valid answer.
 

Example:

Input: "cbbd"

Output: "bb"
*/

var longestPalindrome = function(s) {
    s = '#' + s.split('').join('#') + '#'
    let sLen = s.length
    let RL = new Array(sLen).fill(0)
    let pos = 0,
        maxRight = 0, 
        maxLenString = '',
        maxLen = 0
    
    for (let i=0; i<sLen; i++){
        if (i < maxRight){
            RL[i] = Math.min(RL[2*pos - i], maxRight-i)
        }else{
            RL[i] = 1
        }
        while (i-RL[i]>=0 && RL[i]+i<sLen && s[i+RL[i]]==s[i-RL[i]]){
            RL[i] += 1
        }
        if (RL[i]+i-1 > maxRight){
            pos = i
            maxRight = i + RL[i] - 1
        }
        if (maxLen < RL[i]){
            maxLen = RL[i]
            maxLenString = s.slice(pos-(maxRight-pos), maxRight+1)
        }
    }
    return maxLenString.split('#').join('')
};

console.log(longestPalindrome("cbbd"))