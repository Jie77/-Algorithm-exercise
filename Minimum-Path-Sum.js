/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
    var arr = []
    var m = grid.length
    var n = grid[0].length
    for(var i=0;i<m;i++){
        arr[i] = []
        if(i === 0){
            arr[i][0] = grid[i][0]
        }else{
            arr[i][0] = arr[i-1][0] + grid[i][0]
        }
    }
    for(var j=1;j<n;j++){
        arr[0][j] = arr[0][j-1] + grid[0][j]
    }
    for(var i=1;i<m;i++){
        for(var j=1;j<n;j++){
            arr[i][j] = Math.min(arr[i-1][j],arr[i][j-1]) + grid[i][j]
        }
    }
    return arr[m-1][n-1]
};