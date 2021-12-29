class Stack {
    constructor() {
        this.stack = [];
        this.count = 0;
    }

    push(value) {
        this.stack[this.count++] = value;
    }

    pop() {
        if (this.count === 0) return undefined;

        this.count--;
        const result = this.stack[this.count];
        delete this.stack[this.count];

        return result;
    }

    peak() {
        return this.stack[this.count - 1];
    }

    clear() {
        this.stack = [];
        this.count = 0;
    }

    size() {
        return this.count;
    }

    isEmpty() {
        return !this.count;
    }
}

function isPalindrom() {
    const word = 'racecar';
    const stack = new Stack();
    let rword = '';

    for (let i = 0; i < word.length; i++) {
        stack.push(word[i]);
    }

    while (stack.size() > 0) {
        rword += stack.pop();
    }

    if (word === rword) return true;

    return false;
}

console.log(isPalindrom());