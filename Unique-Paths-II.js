/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
    var m = obstacleGrid.length
    var n = obstacleGrid[0].length
    var res = []
    var flag = true
    for(var i=0;i<m;i++){
        res[i] = []
        if(obstacleGrid[i][0]!=1 && flag){
            res[i][0] = 1
        }else{
            res[i][0] = 0
            flag = false
        }
    }
    flag = true
    for(var j=0;j<n;j++){
        if(obstacleGrid[0][j]!=1 && flag){
            res[0][j] = 1
        }else{
            res[0][j] = 0
            flag = false
        }
    }
    for(var i=1;i<m;i++){
        for(var j=1;j<n;j++){
            if(obstacleGrid[i][j]!=1){
                res[i][j] = res[i-1][j] + res[i][j-1]
            }else{
                res[i][j] = 0
            }
        }
    }
    return res[m-1][n-1]
};

console.log(uniquePathsWithObstacles([[1,0]]))