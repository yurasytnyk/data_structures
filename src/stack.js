class Stack {
    constructor() {
        this.items = [];
        this.count = 0;
    }

    push(element) {
        this.items[this.count] = element;
        this.count += 1;

        return this.count - 1;
    }

    pop() {
        if (this.count === 0) return undefined;
        let deleteItem = this.items[this.count - 1];
        this.count -= 1;

        return deleteItem;
    }

    peak() {
        return this.items[this.count - 1];
    }

    isEmpty() {
        return this.count === 0;
    }
    
    size() {
        return this.count;
    }

    print() {
        this.items.forEach((item, i) => console.log(`${item} has index ${i}`));
    }

    clear() {
        this.items = [];
        this.count = 0;

        return this.items;
    }
}

const stack = new Stack();

stack.push(100);
stack.push(200);
stack.push(300);
stack.clear();
console.log(stack);
// console.log(stack.size());
// console.log(stack.peak());
// stack.pop();
// stack.pop();
// stack.pop();
// console.log(stack.isEmpty());