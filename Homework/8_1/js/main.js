console.log('Homework 8.1');

/*
Написать функцию getMaxs(args), где args - любое количество массивов.
Функция должна вернуть максимумы всех переданных массивов в виде строки, через разделитель `,`
*/

let args = [
    [1,2,3],
    [4,5,6],
    ['x','y','z'],
    [7,8,9],
    ['a','b','c']
];

let Arr = [];

function getMaxs(args, Arr) {
    for (let i = 0; i <= args.lenght; i++) {
        for (let j=0; j <= args[i].lenght; j++) {
            if (args[i][j] == 'number') {
                Arr.push(args[i][j]);
            }
        }
    }
}

console.log(Arr);

result = getMaxs(args);

console.log(result);