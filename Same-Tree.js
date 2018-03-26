
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
    var res1 = resArr(p)
    var res2 = resArr(q)
    return res1.toString() === res2.toString()
    
};

function resArr(p){
    var res = [],
        s = []
    s.push(p)
    while(s.length > 0){
        p = s.shift()
        res.push(p.val)
        if(p.left != null){
            s.push(p.left)
        }
        if(p.right != null){
            s.push(p.right)
        }
    }
    return res
}