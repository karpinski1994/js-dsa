class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    if (!val) {
      throw new Error('When pushing you have to pass a value');
    }

    let newNode = new Node(val);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail = newNode;

      let currentNode = this.head;

      while (currentNode.next) {
        currentNode = currentNode.next;
      }

      currentNode.next = newNode;
    }

    this.length++;
  }
}

class Node {
  constructor(value) {
    this.val = value;
    this.next = null;
  }
}

const node = new Node(1);
const node2 = new Node(2);
const node3 = new Node(4);

const list = new LinkedList();

list.push(node);
list.push(node2);
list.push(node3);
list.push();
