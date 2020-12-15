console.log('Homework 2.2')

/*
Вывести n чисел из ряда Фибоначчи, где n - вводится с клавиатуры
*/

let n = +prompt('Введите число Фибоначчи', 0);

let a = 0,
    b = 1,
    result = null;

for (let i = 1; i <= n; i++) {
    result = a + b;
    a = b;
    b = result;

    console.log(i + ' = ' + result);
}