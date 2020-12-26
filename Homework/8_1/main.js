console.log('Homework 8.1');

/*
Написать функцию getMaxs(args), где args - любое количество массивов.
Функция должна вернуть максимумы всех переданных массивов в виде строки, через разделитель `,`
*/

let newArray = [
    [1,2,3,7,5,6],
    [6,7,13,9,11,12],
    [22,33,77,55,66],
    [111,555,333,444],
]

function getMaxs(args) {
    let result = [];

    for (let i=0; i<args.length; i++) {
        let count = 0;
        for (let j=0; j<args[i].length; j++) {
            if (typeof args[i][j] == 'number' && args[i][j] > count) {
                count = args[i][j];
            }
        }
        result.push(count);
    }

    return result.join(',');
}

console.log(getMaxs(newArray));

// --------------------------------------------

// let newArray = [
//     [1,2,3,7,5,6],
//     [6,7,13,9,11,12],
//     [22,33,77,55,66],
//     [111,555,333,444],
// ]

// function getMaxs(args) {
//     let result = [];

//     for (let i=0; i<args.length; i++) {
//         result.push(Math.max(...args[i]));
//     }

//     return result.join(',');
// }

// console.log(getMaxs(newArray));