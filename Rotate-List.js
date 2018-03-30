/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */

function ListNode(val){
    this.val = val
    this.next = null
}
let arr = [1,2,3,4,5]
let p = head = new ListNode(arr.shift())
for(let i=0;i<arr.length;i++){
    p.next = new ListNode(arr[i])
    p = p.next
}

var rotateRight = function(head, k) {
    if(head === null){
        return null
    }
    var len = 0
    var t = head
    while(t!=null){
        len++
        t = t.next
    }
    k = k%len
    var slow = head
    var fast = head
    for(var i=0;i<k;i++){
        if(fast){
            fast = fast.next
        }
    }
    if(!fast){
        return head
    }
    while(fast.next){
        slow = slow.next
        fast = fast.next
    }
    fast.next = head
    newhead = slow.next
    slow.next = null
};

console.log(rotateRight(head,2))