let obj1 = { // Создаем 1 обьект
    a: 1,
    b: 2,
    c: 'd',
    l: [2, 3]
  }

  let obj2 = { // Создаем 2 обьект
    z: 5,
    y: 6,
    x: 'y',
    m: [1, 2]
  }

  let count = 0;

  obj1 = Object.values(obj1); // Возвращает массив пар ключ: значение
  obj2 = Object.values(obj2); // Возвращает массив пар ключ: значение

  let newObj1 = obj1.filter(el => Array.isArray(el)); // Проходим по каждому елементу массива, если поле-массив то записываем в новый массив

  let newObj2 = obj2.filter(el => Array.isArray(el)); // Проходим по каждому елементу массива, если поле-массив то записываем в новый массив

  obj1 = newObj1.flat(); // Выводим на один уровень
  obj2 = newObj2.flat(); // Выводим на один уровень

  let allArrays = obj1.concat(obj2); // Делаем конкатенацию

  console.log('Look at allArrays ' + allArrays); // Выводит в консоль

  for (let i=0; i<allArrays.length; i++) { // Цикл перебора массива
    if ( typeof allArrays[i] === 'number') {
      count += allArrays[i]; // Сумируем только числовые значения
    }
  }

  console.log('count: ' + count); // Выводим результат в системное окно