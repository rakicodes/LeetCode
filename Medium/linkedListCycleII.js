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
 const detectCycle = function(head) {
    if (!head) {
        return null;
    }
    
    let intersect = getIntersect(head);
    if (!intersect) {
        return null;
    }
    
    let p1 = head;
    let p2 = intersect;
    while (p1 !== p2) {
        p1 = p1.next;
        p2 = p2.next;
    }
    
    return p1;
};

const getIntersect = function(head) {
    let slow = head;
    let fast = head;
    
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
        
        if (slow===fast) {
            return slow
        }
    }
    
    return null;
}