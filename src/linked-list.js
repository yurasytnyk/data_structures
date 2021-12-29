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
        this._size++;
    }

    insert(index, value) {
        if (index < 0 || index > this.size) return;
        
        const node = new Node(value);
        let current = this.head;

        if (index === 0) {
            node.next = this.head;
            this.head = node;
        }

        for (let i = 0; i < index - 1; i++) {
            current = current.next;
        }

        if (this.size === index) {
            current.next = node;
        } else {
            node.next = current.next;
            current.next = node;
        }

        this._size++;
    }

    *[Symbol.iterator]() {
        let current = this.head;

        while (current) {
            yield current.value;
            current = current.next;
        }
    }

    print() {
        return [...this];
    }
}

const list = new LinkedList();
list.prepend(1);
list.append(4);
list.append(3);
list.insert(3, 5);
console.log(list.print());