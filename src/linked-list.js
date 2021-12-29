class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this._size = 0;
    }

    get size() {
        return this._size;
    }

    prepend(value) {
        const node = new Node(value);
        node.next = this.head;
        this.head = node;
        this._size++;
    }

    append(value) {
        const node = new Node(value);
        let current = this.head;

        while (current.next !== null) {
            current = current.next;
        }

        current.next = node;
    }
}

const list = new LinkedList();
list.prepend(1);
list.append(4);
list.append(3);
console.log(list);