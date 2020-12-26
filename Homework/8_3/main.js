console.log('Homework 8.3');

/*
Адаптировать функцию `assignObjects()` - из #8_2 задания - под неопределенное количество объектов.
assignObjects(obj1, obj2, ....., objn);
*/

function assignObjects(...obj) {
    let newObject = {};

    for (let i=0; i<obj.length; i++) {
        let keys = Object.keys(obj[i]),
            values = Object.values(obj[i]);

        for (let i=0; i<keys.length; i++) {
            newObject[keys[i]] = values[i];
        }
    }

    return newObject;
}

console.log(assignObjects({ x: 10, y:20, m: {u: 20 }}, { z: 30 }, { m: 80 }, { h: 10, j:20, l: { u: 20 }}));