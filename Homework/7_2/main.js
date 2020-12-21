console.log('Homework 7.2');

/*
Написать функцию итератор, при каждом последующем обращении будет возвращать next элемент. 

 var step = factory([2, 8, 9, 2, 4]); 

 step(); // 2
 step(); // 8
 step(); // 9
 ...

Адаптировать итератор из задания выше под такой функционал: step(callback);, где callback - функция с 1 аргументом.

 var step = factory([2, 8, 9, 2, 4]);

 step(sqr); // 4
 step(sqr); // 64
 step(sqr); // 81


 function sqr(x) {
     return x*x;
 }
*/

let count = 0;

function step(item) {
    return sqr(item[count++]);

    function sqr(x) {
        return x*x;
    }
}

let factory = [2, 8, 9, 2, 4]

console.log(step(factory));
console.log(step(factory));
console.log(step(factory));

