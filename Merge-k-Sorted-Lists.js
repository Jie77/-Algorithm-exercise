/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */

var mergeKLists = function(lists) {
    let temp = []
    while(lists.length>=2){
        temp = []
        for(var i=0;i<lists.length-1;i+=2){
            temp.push(merge(lists[i],lists[i+1]))
        }
        if(i === lists.length-1){
            temp.push(lists[i])
        }
        lists = temp
    }
    return lists[0] || []
};

function merge(list1,list2){
    let node = head = new ListNode()
    while(list1 && list2){
        if (list1.val < list2.val){
            node.next = list1
            list1 = list1.next
        }else{
            node.next = list2
            list2 = list2.next
        }
        node = node.next
    }
    node.next = list1 ? list1 : list2
    return head.next
}
console.log(mergeKLists(lists))