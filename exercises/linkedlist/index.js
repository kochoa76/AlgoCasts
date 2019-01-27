// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {

  constructor(data, next = null){
    this.data = data;
    this.next = next
  }
}

class LinkedList {

  constructor() {
    this.head = null
  }

  // insert the first node or head node of linkedlist without replacing the possible current head node
  insertFirst(data){
    const node = new Node(data, this.head)
    this.head = node;
  }

  //return amount of nodes in linkedlist
  size() {
    let counter = 0;
    let node = this.head
    while(node) {
      counter++
      node = node.next
    }
    return counter
  }
  //return first node of linkedlist
  getFirst() {
    return this.head
  }

  //return last node of linkedlist
  getLast(){

  let node = this.head
  if (!node) {
    return null
  }

  while(node) {
    if (!node.next) {
      return node
    }

  return node = node.next
    }
  }

  //clear all nodes
  clear(){
    this.head = null
  }

  //remove only first node of linkedList
  removeFirst(){
    if (!this.head) {
      return;
    }

    this.head = this.head.next
  }
  //remove last node of the linkedlist
  removeLast(){

    if (!this.head) {
      return;
    }
    if (!this.head.next ) {
      return this.head === null;

    }
  }
}

module.exports = { Node, LinkedList };
