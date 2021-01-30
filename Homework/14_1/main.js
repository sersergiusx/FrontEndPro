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
    let contextMenu = document.querySelector('.context-menu');
    let divHeight = div.clientHeight;
    let divWidth = div.clientWidth;
    let hWindows = window.innerHeight;
    let wWindows = window.innerWidth;
    let ctrl = false;
    let ctrlY = divHeight - divHeight / 100 * 40;
    let ctrlX = divWidth + divWidth / 100 * 15;
    let hJump = 100;
    let step = 20;
    let list = [
        {
            title: 'Jump',
            action: Jump,
            btn: 'Space',
        },
        {
            title: 'Remove',
            action: Remove,
            btn: 'Shift+R',
        },
        {
            title: 'Change Color',
            action: ChangeColor,
            btn: 'Shift+C',
        },
    ];

    document.addEventListener('keydown', divMove);
    document.addEventListener('contextmenu', fContextMenu);

    list.forEach(function (item) {
        let btn = document.createElement('button');

        btn.addEventListener('click', function() {
            item['action']();
        });
        btn.innerHTML = '<span>' + item['title'] + '</span><span>' + item['btn'] + '</span>';
        contextMenu.appendChild(btn);
    });

    function divMove(event) {
        let preJump = Number(div.style.bottom.slice(0, -2));
        let preMove = Number(div.style.left.slice(0, -2));
    
        switch(true) {
            case event.keyCode === 32 && !event.repeat && preJump + divHeight + hJump < hWindows:
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

    function fContextMenu(event) {
        event.preventDefault();

        let contextStyle = window.getComputedStyle(contextMenu);
        let hContextMenu = parseInt(contextStyle.getPropertyValue('height'));
        let wContextMenu = parseInt(contextStyle.getPropertyValue('width'));
        let clientY = event.clientY;
        let clientX = event.clientX;

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
    }

    function hideContextMenu() {
        contextMenu.classList.remove('show');
        document.removeEventListener('click', hideContextMenu);
    }

    function Jump() {
        let preJump = Number(document.querySelector('.div').style.bottom.slice(0, -2));
        if(!ctrl) {
            div.animate([
                { bottom: preJump + 'px', easing: 'ease-out' },
                { bottom: preJump + hJump + 'px', easing: 'ease-in' },
                { bottom: preJump + 'px', easing: 'ease-out' }],
            300);
        }
    }

    function ChangeColor() {
        let x = Math.floor(Math.random()*255);
        let y = Math.floor(Math.random()*255);
        let z = Math.floor(Math.random()*255);

        container.style.backgroundColor = 'rgb(' + x +',' + y +',' + z +')';
    }

    function Remove() {
        div.style.bottom = 0 + 'px';
        div.style.left = 0 + 'px';
    }
});