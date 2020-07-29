// ------------------------------------------
let str1 = 'qwe_asd zxc/////123 !@#';
let str2 = 'vbn fgh_rty 456 $%^';
let str3 = 'nm, jkl/uio //789_&*(';
let restrictedList = ['!', ' ', '_', '/'];

str1 = str1.split('');
str2 = str2.split('');
str3 = str3.split('');
console.log('Start1: ' + str1);
console.log('Start2: ' + str2);
console.log('Start3: ' + str3);
let clear1 = [];
let clear2 = [];
let clear3 = [];
let test = null;

for (let i=0; i<str1.length; i++) {
    for (let j=0; j<restrictedList.length; j++) {
        if (str1[i] === restrictedList[j]) {
            test = true;
            break;
        } test = false;
    }
    if (!test) {
        clear1.push(str1[i]);
    }
}

for (let i=0; i<str2.length; i++) {
    for (let j=0; j<restrictedList.length; j++) {
        if (str1[i] === restrictedList[j]) {
            test = true;
            break;
        } test = false;
    }
    if (!test) {
        clear2.push(str2[i]);
    }
}

for (let i=0; i<str3.length; i++) {
    for (let j=0; j<restrictedList.length; j++) {
        if (str3[i] === restrictedList[j]) {
            test = true;
            break;
        } test = false;
    }
    if (!test) {
        clear3.push(str3[i]);
    }
}

clear1 = clear1.join('');
clear2 = clear2.join('');
clear3 = clear3.join('');
console.log('End1: '+ clear1);
console.log('End2: '+ clear2);
console.log('End3: '+ clear3);