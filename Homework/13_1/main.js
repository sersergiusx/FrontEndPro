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

window.addEventListener('load', function() {
    document.addEventListener('keydown', divJump);
    document.addEventListener('keydown', divMoveUp);
    document.addEventListener('keydown', divMoveDown);
    document.addEventListener('keydown', divMoveLeft);
    document.addEventListener('keydown', divMoveRight);
    document.addEventListener('keydown', divCtrl);
});

function divJump(event) {
    let y = Number(div.style.bottom.slice(0, -2));
    console.log(event);
    if (event.keyCode === 32 && !event.repeat && !event.ctrlKey) {
        div.style.bottom = y + 100 + 'px';
        setTimeout(function() {
            div.style.bottom = y + 'px';
        }, 200);
    }
}

function divMoveUp(event) {
    let y = Number(div.style.bottom.slice(0, -2));

    if (event.keyCode === 38 && !event.repeat && !event.ctrlKey) {
        div.style.bottom = y + step + 'px';
    }
}

function divMoveDown(event) {
    let y = Number(div.style.bottom.slice(0, -2));

    if (y == 0) {
        return;
    } else if (event.keyCode === 40 && !event.repeat && !event.ctrlKey) {
        div.style.bottom = y - step + 'px';
    }
}

function divMoveLeft(event) {
    let x = Number(div.style.left.slice(0, -2));

    if (x == 0) {
        return;
    } else if (event.keyCode === 37 && !event.repeat) {
        div.style.left = x - step + 'px';
    }
}

function divMoveRight(event) {
    let x = Number(div.style.left.slice(0, -2));
    
    if (event.keyCode === 39 && !event.repeat) {
        div.style.left = x + step + 'px';
    }
}

function divCtrl(event) {
    let y = div.clientHeight;
    let resY = y / 100 * 40;
    let x = div.clientWidth;
    let resX = x / 100 * 15;
    
    if (event.keyCode === 17 && !event.repeat) {
        div.style.height = y - resY + 'px';
        div.style.width = x + resX + 'px';
        setTimeout(function() {
            div.style.height = y + 'px';
            div.style.width = x + 'px';
        }, 200);
    }
}