//  SET
// GET
// REMOVE

class HashTable {
  constructor(size) {
    this.table = new Array(size);
    this.size = size;
  }

  // convert character to a hashed number
  hash(key) {
    let total = 0;
    for (let i = 0; i < key.length; i++) {
      total += key.charCodeAt(i);
    }
    return total % this.size;
  }

  set(key, value) {
    const index = this.hash(key);
    console.log("key", index, "value", value);
    this.table[index] = value;
  }

  get(key) {
    const index = this.hash(key);
    return this.table[index];
  }

  remove(key) {
    const index = this.hash(key);
    this.table[index] = undefined;
  }

  display() {
    for (let i = 0; i < this.table.length; i++) {
      if (this.table[i]) {
        console.log(i, this.table[i]);
      }
    }
  }
}

const hastTable = new HashTable(5);

hastTable.set("gio", 22);
hastTable.set("takole", 26);
hastTable.set("zaza", 55);
hastTable.set("tako", 52);

hastTable.display();
