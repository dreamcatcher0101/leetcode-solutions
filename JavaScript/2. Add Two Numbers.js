// Problem url: https://leetcode.com/problems/add-two-numbers/

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const addTwoNumbers = function (l1, l2) {
  let carry = 0;
  let sum = 0;
  let head = new ListNode(0);
  let now = head;
  let a = l1;
  let b = l2;
  while (a !== null || b !== null) {
    sum = (a ? a.val : 0) + (b ? b.val : 0) + carry;
    carry = Math.floor(sum / 10);
    now.next = new ListNode(sum % 10);
    now = now.next;
    a = a ? a.next : null;
    b = b ? b.next : null;
  }
  if (carry) now.next = new ListNode(carry);
  return head.next;
};

/**
 * Sample Input
 * [2,4,3]
 * [5,6,4]
 * Sample Output
 * [7,0,8]
 */

const getListNodeValues = (startNode) => {
  let result = [];
  let tempNode = startNode;
  while (tempNode) {
    result.push(tempNode.val);
    tempNode = tempNode.next;
  }
  return result;
};

let l1Head = new ListNode(2);
let next = l1Head;
next.next = new ListNode(4);
next = next.next;
next.next = new ListNode(3);
next = next.next;
getListNodeValues(l1Head);

let l2Head = new ListNode(5);
next = l2Head;
next.next = new ListNode(6);
next = next.next;
next.next = new ListNode(4);
next = next.next;
getListNodeValues(l2Head);

let resultHead = addTwoNumbers(l1Head, l2Head);
console.log(getListNodeValues(resultHead));
