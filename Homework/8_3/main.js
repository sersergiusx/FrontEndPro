console.log('Homework 8.3');

/*
Адаптировать функцию `assignObjects()` - из #8_2 задания - под неопределенное количество объектов.
assignObjects(obj1, obj2, ....., objn);
*/

function assignObjects(...obj) {
    let newObject = {};
    let keys;

    for (let i=0; i<obj.length; i++) {
        keys = Object.keys(obj[i]);
        
        for (let j=0; j<keys.length; j++) {
            newObject[keys[j]] = obj[i][keys[j]];
        }
    }

    return newObject;
}

console.log(assignObjects({ x: 10, y:20, m: 10 }, { z: 30 }, { m: 80 }, { h: 10, j:20, l: 18}));

// -----------------------------------------------------

/*
Создать метод - функцию на которую будет передан параметр -  число (количество секунд)  - вернуть же необходимо 
XX часов XX минут XX секунд
а также верное склонение

К примеру:
SecToTime(3)
—
0 часов 0 минут 3 секунды


SecToTime(5)
—
0 часов 0 минут 5 секунд
*/

function secToTime(sec) {
    let h = Math.floor(sec / 3600);
    let m = Math.floor(sec % 3600 / 60);
    let s = Math.floor(sec % 3600 % 60);



    if (h % 10 == 1 && h != 11) {
        h += ' час';
    } else if (h % 10 > 1 && h % 10 < 5) {
        h += ' часа';
    } else {
        h += ' часов';
    }

    if (m % 10 == 1 && m != 11) {
        m += ' минута';
    } else if (m % 10 > 1 && m % 10 < 5) {
        m += ' минуты'
    } else {
        m += ' минут';
    }

    if (s % 10 == 1 && s != 11) {
        s += ' секунда';
    } else if (s % 10 > 1 && s % 10 < 5) {
        s += ' секунды'
    } else {
        s += ' секунд';
    }

    return h + ' ' + m + ' ' + s;
}

secToTime(11);