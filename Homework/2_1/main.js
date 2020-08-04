console.log('Homework 2.1');

/*
Проверить число на простоту. Число вводить с клавиатуры.
Также вывести в консоль все простые числа от 1 до 1000
*/

let num = +prompt('Проверка на простое число', 0);
let number = true;

if (num < 2 || num == 4) {
    number = false;
} else {
    for (let i = 2; i < num / 2; i++) {
        if (num % i === 0) {
            number = false;
            break;
        }
    }
}

if (number) {
    console.log(num + ', простое число');
} else {
    console.log(num + ', составное число');
}

let x = 1000;
let result = [];

isPrime:
for (let i = 2; i <= x; i++) {
    for (let j = 2; j < i; j++) {
        if (i % j == 0) {
            continue isPrime;
        }
    }

    result.push(i);
}

result = result.join(', ');
console.log('Простые числа: ' + result);