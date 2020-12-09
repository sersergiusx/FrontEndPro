console.log('Homework 4.1');

/*
Одним if заполнить зону с картинки hw_1.png
*/

let n = 20;
let m = 20;

let A = new Array(n);

for (i=0; i<A.length; i++) {
    A[i] = new Array(m);

    for (j=0; j<A[i].length; j++) {
        if (i > j && i + j < n) {
            A[i][j] = ' 1 ';
        } else {
            A[i][j] = ' 0 ';
        }
        document.write(A[i][j]);
    }
    document.write('<br />');
}