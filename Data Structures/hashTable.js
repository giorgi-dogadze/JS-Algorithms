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
    // this.table[index] = value;
    let bucket = this.table[index];
    if (!bucket) {
      this.table[index] = [[key, value]];
    } else {
      let itemWithSameKey = bucket.find((item) => item[0] === key);
      if (itemWithSameKey) {
        itemWithSameKey[1] = value;
      } else {
        bucket.push([key, value]);
      }
    }
  }

  get(key) {
    const index = this.hash(key);
    let bucket = this.table[index];
    if (bucket) {
      let itemWithSameKey = bucket.find((item) => item[0] === key);
      if (itemWithSameKey) {
        return itemWithSameKey[1];
      }
    }

    return undefined;
  }

  remove(key) {
    const index = this.hash(key);
    // this.table[index] = undefined;
    let bucket = this.table[index];

    if (bucket) {
      let itemWithSameKey = bucket.find((item) => item[0] === key);
      if (itemWithSameKey) {
        bucket.splice(bucket.indexOf(itemWithSameKey), 1);
      }
      return undefined;
    }
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
hastTable.set("tako", 26);
hastTable.set("zaza", 55);
hastTable.set("xato", 52);
hastTable.set("taxo", 52);

hastTable.set("gio", 20);
console.log("xato", hastTable.get("xato"));
hastTable.display();
console.log("------");
hastTable.remove("taxo");
hastTable.display();
