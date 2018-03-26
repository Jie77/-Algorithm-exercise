/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function(s) {
    var res = [],
        maxLen = 0,
        start = 0
    for(var i=0;i<s.length;i++){
        if(s[i] === "("){
            res.push(i)
        }else{//s[i] === ")"
            if(res.length === 0){
                start = i+1
            }else{
                res.pop()
                if(res.length === 0){
                    maxLen = Math.max(maxLen,i-start+1)
                }else{
                    maxLen = Math.max(maxLen,i-res[res.length-1])
                }
            }
        }
    }
    return maxLen
};

console.log(longestValidParentheses("()())(()()))"))