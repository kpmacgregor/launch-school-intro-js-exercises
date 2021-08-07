function copyObject(obj, keys) {
  let entries = Object.entries(obj);
  if (keys && keys.length) {
    entries = entries.filter(entry => keys.includes(entry[0]));
  }
  return Object.fromEntries(entries);
}

let objToCopy = {
  foo: 1, 
  bar: 2, 
  qux: 3,
};

let newObj = copyObject(objToCopy);
console.log(newObj);

let newObj2 = copyObject(objToCopy, [ 'foo', 'qux']);
console.log(newObj2);

let newObj3 = copyObject(objToCopy, ['bar']);
console.log(newObj3);
