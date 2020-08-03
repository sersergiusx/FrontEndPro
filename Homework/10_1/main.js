console.log('Homework 10.1');

const root = document.getElementById('root');

let obj = {
    x: 10,
    y: 20,
    renderObject: function () {
        const keys = Object.keys(this).filter(el => typeof this[el] != 'function');

        let result = [];
        for (let key of keys) {
            result.push(`${key}: ${this[key]}`);
        }

        root.innerHTML = result.join(', ');
    }
};

obj.renderObject();