console.log('Homework 10.2');

const data = {
    addRecord: function (...objects) {
        for (let o of objects) {
            for (let key of Object.keys(o)) {
                this[key] = o[key];
            }
        }
    },
    p: 600,
    str: 'hello',
    y: -50
}

data.addRecord({x: 10}, {y: 20}, {z: 30, x: 50});

console.log(data);