let object = {
  key1: "value1",
  key2: "value2",
  key3: "value3",
};

//returns all the keys
let keys = Object.keys(object);
console.log(keys);

//returns an array with all the values of an object
let values = Object.values(object);
console.log(values);

//returns an array with elements as arrays with key value paris
let entries = Object.entries(object);
console.log(entries);

//property - returns true if it has a key and false if the key is not there
let property = object.hasOwnProperty("key2");
console.log(property);

//assing - adds new key and value paris to the object
let newObject = Object.assign({}, object, { newKey: "newValue" });
console.log(newObject);
