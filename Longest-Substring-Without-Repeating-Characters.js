/*
Given a string, find the length of the longest substring without repeating characters.

Examples:

Given "abcabcbb", the answer is "abc", which the length is 3.

Given "bbbbb", the answer is "b", with the length of 1.

Given "pwwkew", the answer is "wke", with the length of 3. Note that the answer must be a substring, "pwke" is a subsequence and not a substring.
*/ 


var lengthOfLongestSubstring = function(s) {
    // const map = {};
    // var left = 0;
    
    // return s.split('').reduce((max, v, i) => {
    //     left = map[v] >= left ? map[v] + 1 : left;
    //     map[v] = i;
    //     return Math.max(max, i - left + 1);
    // }, 0);

    let res = {},
        start = 0,
        len = 0,
        newlen = 0
    for (let i=0; i<s.length; i++){
        if (s[i] in res){
            if (res[s[i]] >= start){
                newlen = i - start
                len = len>newlen ? len : newlen
                start = res[s[i]] + 1
            }
            res[s[i]] = i
        }else{
            res[s[i]] = i
        }
    }
    newlen = s.length - start
    len = len>newlen ? len : newlen
    return len
};

console.log(lengthOfLongestSubstring("abbacdef"))

