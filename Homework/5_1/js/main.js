let obj1 = {
  a: 1,
  b: 2,
  c: 'd',
  l: [2, 3]
}

let obj2 = {
  z: 5,
  y: 6,
  x: 'y',
  m: [1, 2]
}

let arr1 = [];
let arr2 = [];

for (let key in obj1) {
  if (Array.isArray(obj1[key])) {
    arr1.push(obj1[key]);
  }
}

for (let key in obj2) {
  if (Array.isArray(obj2[key])) {
    arr2.push(obj2[key]);
  }
}

let resultArray = arr1.concat(arr2);

console.log(resultArray);