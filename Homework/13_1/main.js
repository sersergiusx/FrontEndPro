console.log("Homework 13.1");

/*
Создать персонажа игры-платформера. При нажатии на пробел - прыжок вверх на h пикселей.
При нажатии на стрелки - передвижение персонажа на step пикселей в сторону (вверх, вниз, вправо, влево) // event.keyCode

Персонаж - это квадрат, имеющий размеры 100 на 100 пикселей.
Прыжок - это анимация движения объекта вверх на h пикселей и возврат в изначальное положение (до прыжка)

При нажатии на CTRL персонаж должен "присесть" (уменьшиться в размерах по высоте на 40%, по ширине - увеличится на 15%)

Дополнительно: при зажатом CTRL персонаж может продолжать двигатся в ЛЕВО и ПРАВО! (т.е. ВВЕРХ и ВНИЗ не работают, ПРОБЕЛ не работает)
*/

let div = document.querySelector('.div');
let step = 20;
let y = div.clientHeight;
let x = div.clientWidth;
let ctrlY = y - y / 100 * 40;
let ctrlX = x + x / 100 * 15;

window.addEventListener('load', function() {
    document.addEventListener('keydown', divMove);
    document.addEventListener('keyup', ctrl);
});

function divMove(event) {
    let preJump = Number(div.style.bottom.slice(0, -2));
    let preMove = Number(div.style.left.slice(0, -2));

    // if (event.keyCode === 32 && !event.repeat && !event.ctrlKey) {
    //     div.style.bottom = preJump + 100 + 'px';
    //     setTimeout(function() {
    //         div.style.bottom = preJump + 'px';
    //     }, 200);
    // } else if (event.keyCode === 38&& !event.ctrlKey) {
    //     div.style.bottom = preJump + step + 'px';
    // } else if (preJump > 0 && event.keyCode === 40 && !event.ctrlKey) {
    //     div.style.bottom = preJump - step + 'px';
    // } else if (preMove > 0 && event.keyCode === 37) {
    //     div.style.left = preMove - step + 'px';
    // } else if (event.keyCode === 39) {
    //     div.style.left = preMove + step + 'px';
    // } else if (event.keyCode === 17) {
    //     div.style.height = ctrlY + 'px';
    //     div.style.width = ctrlX + 'px';
    // }

    switch(true) {
        case event.keyCode === 32 && !event.repeat && !event.ctrlKey:
            div.style.bottom = preJump + 100 + 'px';
            setTimeout(function() {
                div.style.bottom = preJump + 'px';
            }, 100);
            break;
        case event.keyCode === 38 && !event.ctrlKey:
            div.style.bottom = preJump + step + 'px';
            break;
        case preJump > 0 && event.keyCode === 40 && !event.ctrlKey:
            div.style.bottom = preJump - step + 'px';
            break;
        case preMove > 0 && event.keyCode === 37:
            div.style.left = preMove - step + 'px';
            break;
        case event.keyCode === 39:
            div.style.left = preMove + step + 'px';
            break;
        case event.keyCode === 17:
            div.style.height = ctrlY + 'px';
            div.style.width = ctrlX + 'px';
            break;
        default:
            return;
    }
}

function ctrl(event) {
    if (event.keyCode === 17) {
        div.style.height = y + 'px';
        div.style.width = x + 'px';
    }
}