console.log('Homework 11.1');

/*
Есть объект obj = { } Внутри него описываем методы copy, clear, doFunction.
Организовать создание методов так, что бы можно было вызывать любые комбинации obj.doFunction(sum, 2, 4).doFunction(mul, 6, 3).clear().

doFunction(func, x, y); получает параметрами 2 числа и функцию, которую нужно применить к x и y. Результат doFunction сохранять в свойство obj._result.
Метод clear() очищает значение - obj._result (устанавливает 0)
*/

let obj = {
    _result: 0,
    copy() {
        return {...this};
    },
    clear() {
        this._result = 0;
        return this;
    },
    doFunction(func, x, y) {
        if (typeof(func) == 'function') {
            this._result = func(x,y);
            return this;
        }
        return this;
    },
}

function sum(x, y) {
    return x + y;
}

function mul(x, y) {
    return x * y;
}

obj.doFunction(sum, 2, 4).doFunction(mul, 6, 3).clear();