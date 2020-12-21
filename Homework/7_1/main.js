console.log('Homework 7.1');

/*
Создать функцию, которая исключает из строки все символы, которые мы передали вторым аргументом.
'func("hello world", ['l', 'd'])' вернет нам "heo wor"
*/

function fix(text, item) {
    let test;
    let result = '';

    for (let i=0; i<text.length; i++) {
        for (let j=0; j<item.length; j++) {
            if (text[i] === item[j]) {
                test = true;
                break;
            } else {
                test = false;
            }
        }
        if (!test) {
            result += text[i];
        }
    }
    return result;
}

console.log(fix('hello world', ['l', 'd']));