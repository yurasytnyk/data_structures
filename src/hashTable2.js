class HashTable {
    constructor(size) {
        this.table = Array(size);
    }

    hash(key) {
        let hash = 0;

        for (let i = 0; i < key.length; i++) {
            hash += key.charCodeAt(i);
        }

        return hash % this.table.length;
    }

    set(key, value) {
        const idx = this.hash(key);

        if (!this.table[idx]) {
            this.table[idx] = [];
            this.table[idx].push([key, value]);
        }

        return this.table;
    }

    get(key) {
        const idx = this.hash(key);

        if (this.table[idx]) return null;

        return this.table[idx].find(x => x === key)[1];
    }

    keys() {
        const keys = [];

        for (let i = 0; i < this.table.length; i++) {
            if (this.table[i] && this.table[i].length) {
                if (this.table[i].length > 1) {
                    for (let j = 0; j < this.table[i].length; i++) {
                        keys.push(this.table[i][j][0]);
                    }
                } else {
                    keys.push(this.table[i][0][0]);
                }
            }
        }

        return keys;
    }
}