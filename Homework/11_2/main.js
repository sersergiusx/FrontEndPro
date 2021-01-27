console.log('Homework 11.2');

/*
Реализовать объект с методами m1(), m2(), m3(). Должна быть возможность выполнять подобный код:
 obj.m1().m2().m3();
 obj.m2().m1().m3();
 obj.m2().m1().m3().m1().m1();
*/

let obj = {
    _result: 0,
    m1() {
        this._result += 1;
        console.log(this._result);
        return this;
    },
    m2() {
        this._result += 2;
        console.log(this._result);
        return this;
    },
    m3() {
        this._result += 3;
        return this;
    },
    result() {
        console.log(this._result);
        return this;
    }
}

obj.m1().m2().m3().result();
