alert('Расчет объема цилиндра (V = πR²H)');

let S = prompt('Площадь основания (S):', 0);
let R = prompt('Радиус (R):', 0);
let H = prompt('Высота (H):', 0);

let V = Math.PI * Math.pow(R, 2) * H;

document.write('************** \n\n');
document.write('Обьем цилиндра с площадью основы <b>S</b> = ' + S + ', радиусом <b>R</b> = ' + R +' и высотой <b>H</b> = ' + H);
document.write('\n\n ------------------- \n\n');
document.write('<b>V</b> = ' + V);
document.write('\n\n ------------------- \n\n');
document.write('end.')