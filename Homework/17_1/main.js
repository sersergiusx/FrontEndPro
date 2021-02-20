console.log('homework 17.1');

/*
Создать функцию countSallary, которая принимает как аргумент объект типа company.
Подсчитать сумму всех значений поля salary.
В поле объекта может находится либо массив, либо другой объект.
В массиве может находится объект с обязательным свойством salary.
*/

const company = {
    sales: [
        { name: 'John', salary: 1000 },
        { name: 'Alice', salary: 600 }
    ],
    development: {
        sites: [
            { name: 'Peter', salary: 2000 },
            { name: 'Alex', salary: 1800 }
        ],
        internals: [
            { name: 'Jack', salary: 1300 }
        ]
    } 
};

let result = 0;

countSallary(company);

function countSallary(obj) {
    let count = 0,
        values = Object.values(obj);
    
    for (let key in values) {
        let keys = values[key];

        if (Array.isArray(keys)) {
            for (let item in keys) {
                console.log(keys[item]);
                count += keys[item].salary
            }
        } else {
            countSallary(keys)
        }
    }

    console.log(result += count);
}