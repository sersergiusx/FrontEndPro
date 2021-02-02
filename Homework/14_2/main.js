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
    let result = range.valueAsNumber;

    number.valueAsNumber = range.valueAsNumber;

    fGreen();

    range.addEventListener('input', fRange);
    number.addEventListener('input', fNumber);

    function fRange(event) {
        result = event.target.valueAsNumber;
        number.valueAsNumber = result;
        fGreen();
    };

    function fNumber(event) {
        let count = event.target.valueAsNumber;

        if (count >= 0 && count <= 100) {
            result = event.target.valueAsNumber;
            range.valueAsNumber = result;
        };
        
        fGreen();
    };

    function fGreen() {
        green.style.height = result + 'px';

        if (result < 20) {
            red.style.height = result / 100 * 2 + 'px'; 
        } else if (result >= 20 && result <= 50) {
            red.style.height = result / 100 * 4 + 'px'; 
        } else if (result > 50 && result <= 75) {
            red.style.height = result / 100 * 6 + 'px'; 
        } else {
            red.style.height = result / 100 * 8 + 'px';
        }
    }
})