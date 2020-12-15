console.log('Homework 6.2');

/*
Написать функцию, которая примет как аргументы(параметры) два массива и сравнит суммы всех ЧИСЛОВЫХ элементов.
Тот массив, сумма которого большая - должен вернутся функцией.
*/

function f(Array1, Array2) {
    function sum(Array) {
        var sum = 0;

        for (var i=0; i<Array.length; i++) {
            if (typeof(Array[i]) == 'number') {
                sum += Array[i];
            }
        }
        return sum;
    }

    var sum1 = sum(Array1);
    var sum2 = sum(Array2);

    return (sum1 == sum2 || sum1 > sum2) ? Array1 : Array2;
}

var A = ['a','b','c',1,2,3,4,5];
var B = [2,4,6,8,'x','y','z'];

console.log(f(A,B));
