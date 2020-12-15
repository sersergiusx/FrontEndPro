console.log('Homework 6.3');

/*
Написать функцию `compress(list)`, которая сжимает серии массива, состоящего из единиц и нулей по следующему принципу:
например, массив [0,0,0,0,1,1,1,1,1,1,1,0,0,1,1,1,1,0,1] преобразуется в [4,7,2,4,1,1]
*/

function compress(list) {
    var newList = [];
    var value = 1;
    var before = list[0];

    for (var i=1; i<=list.length; i++) {
        var after = list[i];
        if (before == after) {
            value += 1;
        } else {
            newList.push(value);
            value = 1;
        }
        before = list[i];
    }
    return newList;
}

var list = [0,0,0,0,1,1,1,1,1,1,1,0,0,1,1,1,1,0,1];

console.log(compress(list));