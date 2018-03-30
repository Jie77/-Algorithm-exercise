/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

function ListNode(val){
    this.val = val
    this.next = null
}
let arr = [1,1,2,3,4,5]
let p = head = new ListNode(arr.shift())
for(let i=0;i<arr.length;i++){
    p.next = new ListNode(arr[i])
    p = p.next
}

var deleteDuplicates = function(head) {
    var stack = []
    var t = head
    while(t){
        if(stack.length === 0){
            stack.push(t)
        }else if (stack[stack.length-1].val === t.val){
            stack[stack.length-1].next = t.next
        }else{
            stack.push(t)
        }
        t = t.next
    }
    return head
};

console.log(deleteDuplicates(head))