class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.front = null;
        this.back = null;
    }

    isEmpty() {
        return !this.front;
    }

    enqueue(value) {
        // create a new node with value
        const node = new Node(value);
        // if queue is empty
        // point front and back to new node
        if (this.isEmpty()) {
            this.front = this.back = node;
        }
        // else the queue is not empty
        // push node to back of the queue
        // by pointing the last node to the newly created node
        this.back.next = node;
        // move back pointer to new node
        this.back = node;
    }

    dequeue() {
        // pointer to front of the queue
        let node = this.front;
        // if queue is not empty
        // move front to the next element
        if (!this.isEmpty()) {
           this.front = this.front.next; 
        }
        // check if front is null / past the end of the queue
        // set back to null
        if (!this.front) {
            this.back = null;
        }
        // print
        // return node at the front of the queue
        this.print();

        return node;
    }

    print() {
        if (this.isEmpty()) {
            console.log('Empty queue');
        }

        const tmpArr = [];
        let tmp = this.front;

        while(tmp) {
            tmpArr.push(tmp.value);
            tmp = tmp.next;
        }

        console.log(tmpArr.join(','));
    }
}

const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);

queue.dequeue();
queue.dequeue();
queue.dequeue();
console.log(queue.print());