let map = new Map();

map.set("name", "John");

let keys = Array.from(map.keys());

// Error: keys.push no es una función
keys.push("more");
