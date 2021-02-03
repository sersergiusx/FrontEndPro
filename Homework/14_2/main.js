console.log("Homework 14.2");

/*
Реализовать калькулятор, в котором есть слайдер (`input type=”range”`) и поле ввода (`input type=”number”`).
Изменяя состояние `range` меняется состояние поля ввода `number`. И наоборот.
Реализовать блок-диаграмму, который в пикселях будет отображать значение range.
Например - range выбрали число 83, высота блока-диаграммы будет 83 пикселя.

![Alt Text](/src/images/img_3.png)

Красный блок - количество комиссии. Комиссия вычисляется по формуле:

    (range < 20) -> 2%
    (20 - 50)  -> 4%
    (50 - 75)  -> 6%
    (75 - 100)  -> 8%

Красный блок отображает количество комиссии. Например Значение выбора 100, комиссия будет 8%. Результирующая сумма: 108. Высота красного блока - 8px 
*/

window.addEventListener('load', function() {
    let range = document.querySelector('.range');
    let number = document.querySelector('.number');
    let green = document.querySelector('.green');
    let red = document.querySelector('.red');

    number.valueAsNumber = range.valueAsNumber;

    fGreen();

    range.addEventListener('input', fRange);
    number.addEventListener('input', fNumber);

    function fRange(event) {
        number.valueAsNumber = event.target.valueAsNumber;
        
        fGreen();
    };

    function fNumber(event) {
        let count = event.target.valueAsNumber;

        if (count >= 0 && count <= 100) {
            range.valueAsNumber = count;
        };

        fGreen();
    };

    function fGreen() {
        let count = range.valueAsNumber;

        green.style.height = count + 'px';

        if (count < 20) {
            red.style.height = count / 100 * 2 + 'px'; 
        } else if (count >= 20 && count <= 50) {
            red.style.height = count / 100 * 4 + 'px'; 
        } else if (count > 50 && count <= 75) {
            red.style.height = count / 100 * 6 + 'px'; 
        } else {
            red.style.height = count / 100 * 8 + 'px';
        }
    }
})