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
        if (this.root) {
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
}

const tree = new BinaryTree();
tree.add(5);
tree.add(2);
tree.add(6);
tree.add(2);
tree.add(1);
tree.print();