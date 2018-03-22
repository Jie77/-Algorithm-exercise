/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
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

var removeNthFromEnd = function(head, n) {
    let fast = head,
        slow = head
    for(let i=0;i<n;i++){
        fast = fast.next
    }
    if(fast === null){
        return head.next
    }
    while(fast.next != null){
        fast = fast.next
        slow = slow.next
    }
    slow.next = slow.next.next
    return head
};

console.log(removeNthFromEnd(head,2))
