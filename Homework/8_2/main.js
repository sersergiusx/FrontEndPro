console.log('Homework 8.2');

/*
Написать функцию assignObjects(obj1, obj2), которая принимает аргументами 2 объекта и возвращает новый,
который состоит из свойство обоих объектов (склеить). Если свойство повторяется, то взять значение второго объекта
assignObjects({ x: 10, y: 20 }, { z: 30 }) -> { x:10, y:20, z: 30 }
assignObjects({ x: 10 }, { x: 20, y: 30 }) - > { x:20, y: 30 }
*/

function assignObjects(obj1, obj2) {
    let newObject = {};

    function add(param) {
        let keys = Object.keys(param),
            values = Object.values(param);

        for (let i=0; i<keys.length; i++) {
            newObject[keys[i]] = values[i];
        }
    }

    add(obj1);
    add(obj2);

    return newObject;

    // return Object.assign(obj1, obj2);
}

console.log(assignObjects({ x: 10, y: { z: 20} }, { z: 30 }));
console.log(assignObjects({ x: 10 }, { x: 20, y: 30 }));