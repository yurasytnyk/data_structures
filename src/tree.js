class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinaryTree {
    constructor() {
        this.root = null;
    }

    add(value) {
        if (!this.root) {
            this.root = new Node(value);
        } else {
            let node = this.root;
            let newNode = new Node(value);

            while (node) {
                if (value > node.value) {
                    if (!node.right) break;

                    node = node.right;
                } else {
                    if (!node.left) break;

                    node = node.left;
                }
            }

            if (value > node.value) {
                node.right = newNode;
            } else {
                node.left = newNode;
            }
        }
    }

    print(root = this.root) {
        if (!root) return true;
        
        console.log(root.value);
        this.print(root.left);
        this.print(root.right);
    }

    preOrder(node, callback) {
        if (!node) return;

        if (callback) {
            callback(node);
        }

        this.preOrder(node.left, callback);
        this.preOrder(node.right, callback);
    }

    inOrder(node, callback) {
        if (!node) return;

        this.inOrder(node.left, callback);

        if (callback) {
            callback(node);
        }

        this.inOrder(node.right, callback);
    }

    postOrder(node, callback) {
        if (!node) return;

        this.postOrder(node.left, callback);
        this.postOrder(node.right, callback);

        if (callback) {
            callback(node);
        }
    }

    traverseDFS(callback, method) {
        if (method === 'preOrder') {
            return this.preOrder(this.root, callback);
        }

        if (method === 'inOrder') {
            return this.inOrder(this.root, callback);
        }

        return this.postOrder(this.root, callback);
    }
}

const tree = new BinaryTree();
tree.add(5);
tree.add(2);
tree.add(6);
tree.add(2);
tree.add(1);
tree.traverseDFS((node) => {
    console.log(node.value);
}, 'postOrder');