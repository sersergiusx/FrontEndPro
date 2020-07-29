let a = prompt('Введите 1-е число:', 0);
let b = prompt('Введите 2-е число:', 0);
let c = prompt('Введите 3-е число:', 0);

let result = (parseInt(a) + parseInt(b) + parseInt(c));

document.write('Сумма чисел: ' + result + '\n');

if (a % 2 == 0) {
    document.write('1-е число ' + a + ', чётное' + '\n');
}

if (b % 2 == 0) {
    document.write('2-е число ' + b + ', чётное' + '\n');
}

if (c % 2 == 0) {
    document.write('3-е число ' + c + ', чётное' + '\n');
}