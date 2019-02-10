// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  constructor(data, next=null){
    this.data = data
    this.next = next
  }

}

class LinkedList {
  constructor(){
    this.head = null
  }


  insertFirst(data) {
    this.head = new Node(data, this.head)
  }

  size() {
    let counter = 0;
    let node = this.head

    while (node) {
      counter++
      node = node.next
    }

    return counter

  }

  getFirst() {

    if (!this.head) {
      return null
    }

    return this.head
  }

  getLast() {

    if (!this.head) {
      return this.head
    }

    let node = this.head

    while(node) {
      if (!node.next){
        return node
      }
      node = node.next
    }
  }

  clear() {
    if (!this.head){
      this.head = null
    }

    this.head = null
  }

  removeFirst() {
    if (!this.head) {
      this.head = null
    }
    this.head = this.head.next

  }
  // **** REDO
  removeLast() {

    if (!this.head) {
      return;
    }

    if (!this.head.next ) {
      this.head = null
      return;
    }

      let previous = this.head
      let node = this.head.next

      while (node.next) {
        previous = node
        node = node.next
      }

      previous.next = null
    }

  insertLast(data) {

    let lastNode = this.getLast()

    if (lastNode) {
      lastNode.next = new Node(data)
    } else {
      this.head = new Node(data)
    }

}


  getAt(index){

    let counter = 0;
    let node = this.head

    while (node) {
      if (counter === index) {
        return node
      }
      counter++
      node = node.next
    }

    return null

  }
//REDO *******
  removeAt(index) {

    if (!this.head) {
      return;
    }

    if (index === 0) {
      this.head = this.head.next
      return;
    }

    let previous = this.getAt(index -1);
    // if index out of bounds, !previous !previous.next fixes this
    if (!previous || !previous.next) {
      return;
    }

    previous.next = previous.next.next

  }

  insertAt(data, index) {

    if (!this.head) {
      this.head = new Node(data)
      return;
    }

    if (index === 0) {
      this.head = new Node(data, this.head)
      return;
    }

    let previous = this.getAt(index -1) || this.getLast()
    let newNode = new Node(data, previous.next)
    previous.next = newNode
  }

  forEach(fn) {


    let node = this.head
    let counter = 0;
    while( node) {
      fn(node, counter)
      node = node.next
      counter++
    }
  }

}

module.exports = { Node, LinkedList };
