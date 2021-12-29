class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.top = null;
    }

    push(value) {
        const node = new Node(value);
        node.next = this.top;
        this.top = node;
    }

    pop() {
        let value = null;

        if (this.top) {
            value = this.top.value;
            this.top = this.top.next;
        }

        return value;
    }

    peak() {
        return this.top.value;
    }

    print() {
        let point = this.top;

        while(point) {
            console.log(point.value );
            point = point.next;
        }
    }

    clear() {
        this.top = null;
    }

    isEmpty() {
        return !this.top;
    }
}

const stack = new Stack();
stack.push(1);
stack.push(2);
console.log('Pop', stack.pop());
console.log('Peak', stack.peak());
console.log(stack);
