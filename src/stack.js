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

//console.log(isPalindrom());

function checkParentacies() {
    const str = '{}';
    const stack = new Stack();

    for (let i = 0; i < str.length; i++) {
        const char = stack[stack.size() - 1];
        
        if (str[i] === '{' || str[i] === '[' || str[i] === '(') {
            stack.push(str[i]);
        } else if ( (str[i] === ')' && char === '(') || 
                    (str[i] === '}' && char === '{') || 
                    (str[i] === ']' && char === '[') ) 
        {
            stack.pop();
        } else {
            return false;
        }
    }

    return stack.size() ? false : true;
}

// console.log(checkParentacies());