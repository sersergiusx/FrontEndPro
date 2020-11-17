console.log('Homewrok 3.1')
/*
Создать массивы А и В. Заполнить случайными числами.
Найди все элементы которые повторяются в массивах А и Б.
*/

const
A = [],
B = [],
n = 20;
A.length = n;
B.length = n;

for ( i=0; i<A.length; i++ ) {
    A[i] = Math.trunc(Math.random()*n);
}

for ( i=0; i<B.length; i++ ) {
    B[i] = Math.trunc(Math.random()*n);
}

console.log(A);
console.log(B);

for ( i=0; i<A.length; i++ ) {
    for ( j=0; j<B.length; j++) {
        if (A[i] == B[j]) {
            console.log('Одинаковый элемент ' + A[i] +  ' в массивах A:' + i + ' B:' + j);
        }
        continue;
    }
}