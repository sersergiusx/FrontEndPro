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
    for (let i=0; i<obj1[key].length; i++) {
      arr1.push(obj1[key][i]);
    }
  }
}

for (let key in obj2) {
  if (Array.isArray(obj2[key])) {
    for (let i=0; i<obj2[key].length; i++) {
      arr2.push(obj2[key][i]);
    }
  }
}

let allArray = arr1.concat(arr2);
let result = 0;

for (let i=0; i<allArray.length; i++) {
  if (typeof(allArray[i]) == 'number') {
    result += allArray[i];
  }
}

console.log(result);