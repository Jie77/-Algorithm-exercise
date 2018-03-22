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
var head = new ListNode(1)
var second = new ListNode(2)
var third = new ListNode(3)
var forth  = new ListNode(4)
var fifth = new ListNode(5)
head.next  = second
second.next = third
third.next = forth
forth.next = fifth


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
