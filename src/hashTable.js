const hash = (key, size) => {
    let hashedKey = 0;
    
    for (let i = 0; i < key.length; i++) {
        hashedKey += key.charCodeAt(i);
    }

    return hashedKey % size;
}

class HashTable {
    constructor() {
        this.size = 20;
        this.table = Array(this.size);

        for (let i = 0; i < this.table.length; i++) {
            this.table[i] = new Map();
        }
    }

    insert(key, value) {
        const idx = hash(key, this.size);
        this.table[idx].set(key, value);
    }

    remove(key) {
        const idx = hash(key, this.size);
        const deleted = this.table[idx].get(key);
        this.table[idx].delete(key);

        return deleted; 
    }

    search(key) {
        const idx = hash(key, this.size);
        return this.table[idx].get(key);
    }
}

const hashTable = new HashTable();

hashTable.insert('lina', 'jupiter');
hashTable.insert('serena', 'mars');
hashTable.insert('amy', 'mercury');
hashTable.insert('lany', 'luna');
hashTable.insert('june', 'capital');
hashTable.insert('spd', 'ukraine');
console.log(hashTable);