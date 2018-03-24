/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    var res = []
    for(var i=0;i<m;i++){
        res[i] = []
        res[i][0] = 1
    }
    for(var j=0;j<n;j++){
        res[0][j] = 1
    }
    for(var i=1;i<m;i++){
        for(var j=1;j<n;j++){
            res[i][j] = res[i-1][j] + res[i][j-1]
        }
    }
    return res[m-1][n-1]
};