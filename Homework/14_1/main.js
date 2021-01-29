console.log("Homework 14.1");

/*
Реализовать контекстное (event = contextmenu) меню. Список хранить в памяти. // Почитать про event.preventDefault()

Хранить в списке action - название функции которая будет выполнятся при нажатии на пункт меню.

Применить меню к домашке с лекции #13_1 (персонаж). Создать actions: Jump, Remove, ChangeColor

Меню должно всегда открыватся в окне, не создавая скрола.
*/

window.addEventListener('load', function() {
    let div = document.querySelector('.div');
    let container = document.querySelector('.container');
    let hJump = 100;
    let step = 20;
    let divHeight = div.clientHeight;
    let divWidth = div.clientWidth;
    let ctrlY = divHeight - divHeight / 100 * 40;
    let ctrlX = divWidth + divWidth / 100 * 15;
    let ctrl = false;
    let jump = false;
    let hWindows = window.innerHeight;
    let wWindows = window.innerWidth;

    document.addEventListener('keydown', divMove);

    function divMove(event) {
        let preJump = Number(div.style.bottom.slice(0, -2));
        let preMove = Number(div.style.left.slice(0, -2));

        // slow motion

        // let contextStyle = window.getComputedStyle(div);
        // let preJump = parseInt(contextStyle.getPropertyValue('bottom'));
        // let preMove = parseInt(contextStyle.getPropertyValue('left'));
    
        switch(true) {
            case event.keyCode === 32 && !event.repeat && !ctrl && !jump && preJump + divHeight + hJump < hWindows:

                // jump with variable on load and divMove

                // jump = true;
                // div.style.bottom = preJump + hJump + 'px';
                // setTimeout(function() {
                //     div.style.bottom = preJump + 'px';
                // }, 200);
                // setTimeout(function() {
                //     jump = false;
                // }, 300);

                Jump();
                break;
            case event.keyCode === 38 && !ctrl && preJump + divHeight + step <= hWindows:
                div.style.bottom = preJump + step + 'px';
                break;
            case event.keyCode === 40 && preJump > 0 && !ctrl:
                div.style.bottom = preJump - step + 'px';
                break;
            case event.keyCode === 37 && preMove > 0:
                div.style.left = preMove - step + 'px';
                break;
            case event.keyCode === 39 && preMove + divWidth + step <= wWindows:
                div.style.left = preMove + step + 'px';
                break;
            case event.keyCode === 17 && !event.repeat:
                if (!ctrl) {
                    ctrl = true;
                    div.style.height = ctrlY + 'px';
                    div.style.width = ctrlX + 'px';
                } else {
                    ctrl = false;
                    div.style.height = divHeight + 'px';
                    div.style.width = divWidth + 'px';
                }
                break;
            case event.keyCode === 67 && event.shiftKey:
                ChangeColor();
                break;
            case event.keyCode === 82 && event.shiftKey:
                Remove();
                break;
            default:
                return;
        }
    }

    // context menu

    let contextMenu = document.querySelector('.context-menu');

    let list = [
        {
            title: 'Jump',
            action: 'Jump',
            btn: 'Space',
        },
        {
            title: 'Remove',
            action: 'Remove',
            btn: 'Shift+R',
        },
        {
            title: 'Change Color',
            action: 'ChangeColor',
            btn: 'Shift+C',
        },
    ];

    list.forEach(function (item) {
        contextMenu.innerHTML += '<button tabindex="-1" onclick=' + item['action'] + '()><span>' + item['title'] + '</span><span>' + item['btn'] + '</span></button>';
    });

    document.addEventListener('contextmenu', function(event) {
        let contextStyle = window.getComputedStyle(contextMenu);
        let hContextMenu = parseInt(contextStyle.getPropertyValue('height'));
        let wContextMenu = parseInt(contextStyle.getPropertyValue('width'));
        let clientY = event.clientY;
        let clientX = event.clientX;

        event.preventDefault();

        if (clientX >= wWindows - wContextMenu) {
            clientX -= wContextMenu;
        };

        if (clientY >= hWindows - hContextMenu) {
            clientY -= hContextMenu;
        };

        contextMenu.classList.add('show');
        contextMenu.style.top = clientY + 'px';
        contextMenu.style.left = clientX + 'px';

        document.addEventListener('click', hideContextMenu);
    });

    function hideContextMenu(event) {
        contextMenu.classList.remove('show');
        document.removeEventListener('click', hideContextMenu);
    }

    // with variable on load

    // function ChangeColor() {
    //     let x = Math.floor(Math.random()*254);
    //     let y = Math.floor(Math.random()*254);
    //     let z = Math.floor(Math.random()*254);

    //     container.style.backgroundColor = 'rgb(' + x +',' + y +',' + z +')';
    // }

    // function Remove() {
    //     div.style.bottom = 0 + 'px';
    //     div.style.left = 0 + 'px';
    // }
});

function ChangeColor() {
    let x = Math.floor(Math.random()*254);
    let y = Math.floor(Math.random()*254);
    let z = Math.floor(Math.random()*254);

    document.querySelector('.container').style.backgroundColor = 'rgb(' + x +',' + y +',' + z +')';
}

function Remove() {
    document.querySelector('.div').style.bottom = 0 + 'px';
    document.querySelector('.div').style.left = 0 + 'px';
}

let jump = false;

function Jump() {
    if(!jump) {
        jump = true;
        let preJump = Number(document.querySelector('.div').style.bottom.slice(0, -2))
        document.querySelector('.div').style.bottom = preJump + 100 + 'px';
        setTimeout(function() {
            document.querySelector('.div').style.bottom = preJump + 'px';
        }, 200);
        setTimeout(function() {
            jump = false;
        }, 300);
    }
}