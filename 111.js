'use strict'

// ------------------------------------Сумма цифр числа

// let num = 62;
// let sum = 0;
// while (num) {
//   sum += num % 10;
//   num = Math.floor(num / 10)
// }
// console.log(sum)
//--------------------------------
// let num = 64;
// let str = String(num);
// console.log(+str[0] + +str[1])

// let a = '15.5px';
// let b = '15.25px';
// console.log(parseFloat(a) + parseFloat(b))

// Дана переменная со строкой 'abcde'. Обращаясь к отдельным символам этой строки запишите в новую переменную символы этой строки в обратном порядке, то есть 'edcba'.
// let str = 'asdfg';
// console.log(str[4] + str[3] + str[2] + str[1] + str[0])
// ---------------------------------

// ---------------------------------------Сложение чисел в строке
// let test = '12345';
// console.log(+test[0] + +test[1]);

// --------------------------------------------Вывод последней цифры числа
// let num = 1235642;
// let str = num % 10;
// console.log(str);
// --------------------------------------
// const num = 561;
// console.log(num.toString().split('').pop());
//----------------------------------------
// let arr = '1237';
// console.log(arr[arr.length - 1])

//-------------------------------------Последний эл-т массива
// let arr = [1, 2, 3, 4, 5];
// console.log(arr[arr.length - 1]);

//-----------------------------------Вывод значения по ключу с ОГРАНИЧЕНИЯМИ
// let obj = {
//   '1a': 1,
//   'b2': 2,
//   'c-c': 3,
//   'd 4': 4,
//   'e5': 5
// };
// console.log(obj['1a']);
// console.log(obj.b2);
// console.log(obj['c-c']);
// console.log(obj['d 4']);
// console.log(obj.e5);

//-------------------------------------Масиив ключей обьекта
// let obj = { x: 1, y: 2, z: 3 };
// console.log(Object.keys(obj))

//------------------------------------Ключ обьекта из переменной
// let obj = { x: 1, y: 2, z: 3 };
// let key = 'z';
// console.log(obj[key])
//----------------------------------
// let key = 'x'
// let obj = {
//   [key]: 1,
//   b: 2,
//   c: 3
// };
// console.log(obj[key])

// Пусть в переменной num хранится число. Если это число попадает в диапазон от 10 до 99, то найдите сумму цифр этого числа. Если полученная сумма меньше или равна 9, то выведите сообщение о том, что сумма цифр однозначна, в противном случае выведите сообщение о том, что сумма цифр двухзначн

// let num = 9;
// let str = String(num);
// let sum = +str[0] + +str[1];
// if (str.length <= 1) {
//   console.log('однозначн')
// } else if (sum <= 9) {
//   console.log('однозначное')
// } else {
//   console.log('больше двух')
// }
// ---------------------------------
// let num = 8;
// let str = String(num)
// if (num >= 10 && num <= 99) {
//   let sum = +str[0] + +str[1];
//   if (sum <= 9) {
//     console.log('однозначное');
//   } else {
//     console.log('двухзначное');
//   }
// }
//--------------------------------------
// let num = 65;
// let str = String(num);
// let sum = +str[0] + +str[1];
// if (str.length < 2){
//   console.log('не возможно сложить, одна цифра');
// } else if (str.length > 2){
//   console.log('не нужно складывать, нет такой задачи');
//   } else if(str.length === 2){
//    if (sum <= 9){
//      console.log('однозначное')
//    } else {
//     console.log('двухзначное');
//    }
//   console.log(sum)
// }


//---------------------------------------Тернарный оператор
// let num = -1;
// let res = num >= 0 ? '1' : '2';
// console.log(res);


// -------------------------------------Область видимости переменных в if-else
// let age = 19;
// let res;
// if (age >= 18) {
//   if (age <= 23) {
//     res = 'от 18 до 23';
//   } else {
//     res = 'больше 23';
//   }
// } else {
//   res = 'меньше 18';
// }
// console.log(res);


// Пусть в переменной num хранится число. Определите, четное число или нет. Число будет четным, если последний символ равен 0, 2, 4, 6 или 8, и нечетным в противном случае.
// let num = 255;
// let res = String(num);

// if (res[res.length - 1] % 2 == 0) {
//   console.log('Четное')
// } else console.log('Не четное')


//For OF выводит ЗНАЧЕНИЕ!!!

// let arr1 = [1, 2, 3, 4, 5];
// for (let elem of arr1) {
//   console.log(elem);
// }
// let arr = ['a', 'b', 'c', 'd', 'e'];
// for (let elem of arr) {
//   console.log(elem);
// }


//For IN выводит ИНДЕКС Ключ!!!

// let arr1 = { a: 1, b: 2, c: 3, d: 4, e: 5 };
// for (let elem in arr1) {
//   console.log(elem);
// }
// let arr = { 1: 'a', 2: 'b', 3: 'c', 4: 'd', 5: 'e' };
// for (let elem in arr) {
//   console.log(elem);
// }


// WHILE

// let i = 1;
// while (i <= 5) {
//   console.log(i);
//   i++;
// }
// //-------------------------
// let num = 500;
// while (num > 10) {
//   num = num / 2;
// }
// console.log(num);
// //---------------------------
// let q = 5;
// while (q <= 1000) {
//   console.log(q);
//   q *= 3;
// }


// FOR
//--------------------------------------------- Вывод эл-в в обратном порядке
// let arr = ['a', 'b', 'c', 'd', 'e'];           
// for (let i = arr.length-1; i >= 0 ;  i--) {
//   console.log(arr[i]);
// }
//------------------------------------------------
// let arr = ['a', 'b', 'c', 'd', 'e'];
// for (let i = 0; i < arr.length; i++) {
// 	console.log(arr[i]);
// }

// Условия IF в циклах
//---------------------------- Вывод четных эл-в
// let arr = [1, 2, 3, 4, 5];
// for (let elem of arr) {
//   if (elem % 2 == 0)                       
//     console.log(elem);
// }
//-------------------------- Вывод эл-в в диапазоне
// let arr1 = [2, 5, 9, 15, 1, 4];
// for (let elem of arr1) {
//   if (elem >= 3 && elem <= 15)
//     console.log(elem)
// }
//-------------------------- Значения свойств обьекта (вывод четных)
// let obj = { a: 1, b: 2, c: 3, d: 4, e: 5 }; 
// for (let key in obj) {
//   if (obj[key] % 2 == 0)
//     console.log(obj[key]);
// }
//--------------------------- сумма эл-в массива
// let arr = [2, 5, 9, 3, 1, 4];                   
// let res = 0;
// for (let elem of arr) {
// 	res += elem;
// }
// console.log(res);
//
// 24
//---------------------------- сумма квадратов эл-в, в массиве
// let arr = [2, 5, 9, 3, 1, 4];                   
// let res = 0;
// for (let elem of arr) {
//   res += elem**2;
// }
// console.log(res);
//
// 136
//----------------------------- строка цифр
// let str = '';
// for (let i = 1; i <= 5; i++) {
// 	str += i;
// }
// console.log(str);                                 
//------------------------------- вывод первой цифры числа
// for (let i = 10; i <= 100; i++) {
// 	let str = String(i);                           
// 		console.log(str[0]);
// 	}
//---------------------------------- сумма первых двух цифр числа
// for (let i = 10; i <= 100; i++) {
//   let str = String(i);                              
//     console.log(+str[0] + +str[1]);
//   }
//--------------------------------- прерывание цикла BREAK
// let arr = [1, 2, 3, 0, 4, 5];
// for (let elem of arr) {
//   if (elem == 0) {
//     console.log('есть');
//     break;                                          
//   }
// }
//
// есть
//--------------------------- сумма эл-в массива до отрицательного
// let arr = [1, 2, 3, 0, -4, 5];
// let res=0;
// for (let elem of arr) {
//   if (elem <0 ) {
//     break;                                          
//   }
//   console.log(res += elem);
// }
// 1 3 6 6
//------------------------------ индекс эл-та в массиве
// let arr = [1, 2, 0, 3, -4, 3];
// for (let elem of arr) {
//   if (elem === 3) {
//     console.log(arr.indexOf(elem))                     
//     break
//   }
// }
// 
// 3
//------------------------------ количество итераций до искомого результата
// let counter = 0;
// for (let i = 1; i <= 10; i++) {                          
//   if (counter <= 10)
//     console.log(counter += i)
// }
// 1 3 6 10 15
//---------------------------------- Возведение в степень четных и не четных чисел
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// for (let elem of arr) {
// 	let result;
// 	if (elem % 2 == 0) {                                       //если делится на 2 то **2, если на 3 то**3 и CONTINUE
// 		result = elem **2;
// 	} else if (elem % 3 == 0) {
// 		result = elem **3;
// 	} else {
// 		continue;                             // перейдем на новую итерацию цикла
// 	}
// 	console.log(result);                    // выполнится, если делится на 2 или 3
// }
// 
// 4 27 16 36 64 729
//--------------------------- вывести 11 12 13 21 22 23....
// let str='';
// for ( let i =11; i<=33; i+=10){
//   for (let j =0; j<=2; j++){                   
//     const num = i + j;
//     console.log(num + ' ')
//   }
// }
//
// 11 12 13 21 22 23 31 32 33 
//--------------------------вывести 11 12 13 21 22 23.... через STRING
// let str = '';                                    
// for (let i = 1; i <= 3; i++) {
//   for (let j = 1; j <= 3; j++) {
//     console.log(i.toString() + j.toString() + ' ')
//   }
// }
//
// 11 12 13 21 22 23 31 32 33 
//--------------------------- заполение массива PUSH в цикле
// let arr = [];
// for (let i = 1; i <= 5; i++) {                      
// 	arr.push(i);
// }
// console.log(arr);
// //
// [ 1, 2, 3, 4, 5 ]
// ------------------------------ Новый массив с положительными значениями
// let arr = [1, 5, 8, 6, 3, -4, 1, -9, 5, -3];
// let res = [];
// for (let i = 0; i < arr.length; i++) {              
//   if (i > 0) {
//     res.push(i)
//   }
// }
// console.log(res);
//
// [1, 2, 3, 4, 5, 6, 7, 8, 9]
//------------------------------- изменение эл-в массива в цикле
// let arr = [1,5,8,3,4,5,7]
// for(let i =0; i< arr.length; i++){                    
//   arr[i] += 10
// }
// console.log(arr)
// 
// [ 11, 15, 18, 13, 14, 15, 17]
//-------------------------------- Заполнение объектов через цикл
// let keys = ['a', 'b', 'c', 'd', 'e'];
// let values = [1, 2, 3, 4, 5];                            
// let obj = {};
// for (let i = 0; i <= 4; i++) {
// 	obj[keys[i]] = values[i];
// }
// console.log(obj);
//
// { a: 1, b: 2, c: 3, d: 4, e: 5 }
//------------------------- заполнение обьекта из другого обьекта
// let obj = { a: 1, b: 2, c: 3, d: 4, e: 5 };
// let res = {};
//  for (let key in obj) {                                   
//   if (obj[key] % 2 == 0) {
//     res[key] = obj[key];
//   }
// }
// console.log(res);
//
// { b: 2, d: 4 }
//--------------------------------- изменение ключей на значения и наоборот
// let obj = {a: 1, b: 2, c: 3, d: 4, e: 5};
// let res = {};
//  for (let key in obj) {                                   
//   res[obj[key]] = key;
// }
// console.log(res);
//
// { '1': 'a', '2': 'b', '3': 'c', '4': 'd', '5': 'e' }
//---------------------------------- ФЛАГ, проверка наличия/отсутствия эл-та
// let arr = ['a', 'b', 'f', 'd', 'e'];
// let flag;
// for (let elem of arr) {
//   if (elem === 'c') {
//     flag = true;                                             
//     break
//   }
// }
// if (flag === true) {
//   console.log('yes');
// } else
//   console.log('no');
//
// no
//--------------------------------- Количество одинаковых эл-в в массиве
// let arr = ['a', 'b', 'c', 'a', 'a', 'b'];
// let counter = 0;
// for (let elem of arr) {                                     
// 	if (elem == 'a') {
// 		counter++;
// 	}
// }
// console.log(counter);
//
// 3
//---------------------------------- Количество разных повторяющихся эл-в в массиве
// let arr = [1, 2, 3, 2, 4, 3, 5, 6, 3, 2, 3];
// let counter = 0;
// let counter1 = 0;
// for (let elem of arr) {                                    
//   if (elem == 3) {
//     counter++;
//   }
//   if (elem == 2) {
//     counter1++
//   }
// }
// console.log(`${counter}\n${counter1}`);
//
// 4 3
//------------------------------------ Объект с количеством элементов в массиве
// let arr = ['a', 'b', 'c', 'a', 'a', 'b', 'h', 'h'];
// let count = {};
// for (let elem of arr) {
// 	if (count[elem] === undefined) {                  
// 		count[elem] = 1;                              //если если такого элемента в count нет, то ему присвоить значение 1
// 	} else {
// 		count[elem]++;
// 	}
// }
// console.log(count);
//
// { a: 3, b: 2, c: 1, h: 2 }
//----------------------------------- сумма текущего, следующего и предыдущего эл-та
// let arr = [1, 3, 4, 5, 9, 7]
// for (let i = 1; i < arr.length - 1; i++) {            
//   console.log(arr[i + 1] + arr[i - 1] + arr[i])
// }
// 
// 8 12 18 21
//-------------------------------- сумма эл-в по первой цифре числа в массиве
// let arr = [10, 20, 30, 40, 21, 32, 51];
// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
//   if (String(arr[i])[0] == 2 || String(arr[i])[0] == 1) {       
//     sum += arr[i]
//     console.log(sum)
//   }
// }
// //
// 10 30 51
//---------------------------- Сумма эл-в по первой цифре чисел в обьекте
// let obj = {a: 10, b: 20, c: 30, d: 40, e: 50};
// let sum = 0;
// for (let elem in obj) {
//     if (String(obj[elem])[0] === '1' || String(obj[elem])[0] === '2') {
//         sum += +obj[elem];
//     }
// }
// console.log(sum); 
//
// 50
// //---------------------------------
// let arr = ['21', '32', '34', '43', '45', '54', '55'];
// let sum = 0;
// for (let elem of arr) {
// 	if (+elem[0] === +elem[1] + 1) {
// 		sum += +elem;
// 	}
// }
// console.log(sum);
// //
// 150
//----------------------------------//возведение в квадрат каждого эл-та
// let arr = [1, 2, 3, 4, 5];
// let res = [];
// for (let elem of arr) {
//   res.push(arr[elem - 1] ** 2);                   
// }
// console.log(res);
// //
// [ 1, 4, 9, 16, 25 ]
//--------------------------------//НАЛИЧИЕ оппределенного числа в массиве
// let arr = [51, 2, 8, 62, 35, 1, 7, 4];
// let res;
// for (let elem of arr) {
//   if (elem === 33) {                                  
//     res = '+++';
//     break
//   } else {
//     res = '---';
//   }
// }
// console.log(res);
// //
// ---
//--------------------------------------------------ФАКТОРИАЛ!!!
// function factorial (n){
//   if (n===0){
//     return 1
//   }else{
//     return n* factorial(n-1)
//   }
// }
// let m = factorial(7)
// console.log(m)
// //
// 5040
//--------------------------------------------Сумма четных чисел
// let res = [10, -9, 8, -7, 6, -5, 4, -3, 2, 1];
// let sum = 0;
// for (let elem of res) {
//   if (elem > 0) {
//     sum += elem
//   }
// }
// console.log(sum)
// //
// 31
//-------------------------------------------//Вывод числа по первой цифре
// let arr = [10, 20, 40, 50, 635, 3000];
// for (let elem of arr) {
//   if (String(elem)[0] == 2 || String(elem)[0] == 4 || String(elem)[0] == 6) {     //перевод числа в строку
//     console.log(elem)
//   }
// }
// // 
// 20 40 635
//--------------------------------Найдите сумму ключей этого объекта и поделите ее на сумму значений.
// let obj = { 1: 6, 2: 7, 3: 8, 4: 9, 5: 10 };
// let val = 0;
// let keys = 0;
// for (let key in obj) {
//   val += obj[key];
//   keys += +(key);
// }
// console.log(val);
// console.log(keys);
// console.log(keys / val);
// //
// 40 15 0.375
//----------------------------------Запишите ключи этого объекта в один массив, а значения - в другой.
// let obj = { 'a': 1, 'b': 2, 'c': 3, 'd': 4, 'e': 5 };
// let arrKey = [];
// let arrVal = [];
// for (let key in obj) {
//   arrKey.push(key)
//   arrVal.push(obj[key])
// }
// console.log(arrKey)
// console.log(arrVal)
// //
// [ 'a', 'b', 'c', 'd', 'e' ]
// [ 1, 2, 3, 4, 5 ]
//----------------------------------
// let obj = { 'a': 1, 'b': 2, 'c': 3, 'd': 4, 'e': 5 };
// let arr1= Object.keys(obj)
// let arr2= Object.values(obj)
// console.log(arr1)
// console.log(arr2)
// //
// [ 'a', 'b', 'c', 'd', 'e' ]
// [ 1, 2, 3, 4, 5 ]
//----------------------------------Запишите в новый массив элементы, значение которых начинается с цифры 1 или цифры 2.
// let obj = {
//   1: 125, 2: 225, 3: 128, 4: 356, 5: 145, 6: 281, 7: 452,
// };
// let arr = [];
// for (let key in obj) {
//   if (String(obj[key])[0] == 1 || String(obj[key])[0] == 2) {
//     arr.push(obj[key])
//   }
// }
// console.log(arr)
// //
// [ 125, 225, 128, 145, 281 ]
//------------------------------Создать массив {1: 'a', 2: 'b', 3: 'c', 4: 'd', 5: 'e'}; из обьекта
// let arr = ['a', 'b', 'c', 'd', 'e'];
// let arr1 = [1, 2, 3, 4, 5]
// let obj = {};
// for (let i = 0; i < arr.length; i++) {
//   obj[+arr1[i]] = arr[i]
// }
// console.log(obj)
// //
// { '1': 'a', '2': 'b', '3': 'c', '4': 'd', '5': 'e' }
//-----------------------------
// let arr = ['a', 'b', 'c', 'd', 'e']; 
// let obj = {}; 
// let i = 1; 
// for (let elem of arr) { 
//   obj[i] = elem; 
//   i++
// }console.log(obj)
// //
// { '1': 'a', '2': 'b', '3': 'c', '4': 'd', '5': 'e' }
//------------------------------Создать {'a': 1, 'b': 2, 'c': 3, 'd': 4, 'e': 5}; массив из обьекта
// let arr = ['a', 'b', 'c', 'd', 'e'];
// let arr1 = [1, 2, 3, 4, 5]
// let obj = {};
// for (let i = 0; i < arr.length; i++) {
//   obj[arr[i]] = arr1[i]
// }
// console.log(obj)
// //
// { a: 1, b: 2, c: 3, d: 4, e: 5 }
//-------------------------------Обращаясь к каждому элементу массива найдите сумму всех его элементов.
// let arr = [[1, 2], [3, 4], [5, 6]];
// let sum = 0;
// arr = arr.flat(Infinity)          //Метод FLAT поднимает подмассивы на нужный уровень
// for (let i = 0; i < arr.length; i++) {
//   sum += arr[i];
// }
// console.log(sum)
// //
// 21
//------------------------------
// let arr = [[1, 2], [3, 4], [5, 6]];
//   console.log(arr[0][0] + arr[0][1] + arr[1][0] + arr[1][1] + arr[2][0] + arr[2][1])
// //
// 55
// //---------------------------------------------Вручную, без цикла, найдите сумму элементов этого массива.
// let arr = [[1, 2, 3,[4, 5,[6, 7]]],[8,[9, 10]]
// ]
// console.log(arr[0][0] + arr[0][1] + arr[0][2] + arr[0][3][0]+ arr[0][3][1]+ arr[0][3][2][0]+arr[0][3][2][1]+arr[1][0]+arr[1][1][0]+arr[1][1][1])
// //
// 55
//------------------------------------Сумма эл-в вложенных массивов
// let arr = [[1, 2, 3], [4, 5], [6]];
// let sum = 0;
// for (let subArr of arr) {
//   for (let elem of subArr) {
//     console.log(sum += elem);
//   }
// }
// //
// 21
//------------------------------Сумма эл-в вложенных массивов
// let arr = [[[1, 2], [3, 4]], [[5, 6], [7, 8]]];
// let sum = 0;
// for (let firstSubArr of arr) {
//   for (let secondSubArr of firstSubArr) {
//     for (let elem of secondSubArr){
//       console.log(sum += elem);
//     }
//   }
// }
// //
// 36
//
//-------------------------------Сумма эл-в вложенных массивов через обычный цикл FOR
// let arr = [[[1, 2], [3, 4]], [[5, 6], [7, 8]]];
// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
//   for (let j = 0; j < arr[i].length; j++) {
//     for (let k = 0; k < arr[i][j].length; k++) {
//       sum += arr[i][j][k]
//     }
//   }
//   console.log(sum);
// }
// 
// 36
//-------------------------------Заполнение двумерного массива
// let arr = [];
// for (let i = 0; i < 3; i++) {
// 	arr[i] = [];                       // создаем подмассив

// 	for (let j = 0; j < 3; j++) {
// 		arr[i].push(j + 1);             // заполняем подмассив числами
// 	}
// }
// console.log(arr);
//
// [ [ 1, 2, 3 ], [ 1, 2, 3 ], [ 1, 2, 3 ] ]
//------------------------------
// let arr = [];
// for (let o = 0; o < 3; o++) {
//   arr[o] = [];
//   for (let i = 0; i <= 2; i++) {
//     arr[o][i] = [];
//     for (let j = 0; j < 5; j++) {
//       arr[o][i].push(j+1)
//     }
//   }
// }
// console.log(arr)
//
// [
//   [ [ 1, 2, 3, 4, 5 ], [ 1, 2, 3, 4, 5 ], [ 1, 2, 3, 4, 5 ] ],
//   [ [ 1, 2, 3, 4, 5 ], [ 1, 2, 3, 4, 5 ], [ 1, 2, 3, 4, 5 ] ],
//   [ [ 1, 2, 3, 4, 5 ], [ 1, 2, 3, 4, 5 ], [ 1, 2, 3, 4, 5 ] ]
// ]
//-----------------------------Заолнение массивов числами по-порядку
//
// let arr = [];
// let k = 1;
// for (let i = 0; i < 3; i++) {
//   arr[i] = [];
//   for (let j = 1; j <= 5; j++) {
//     arr[i].push(k);
//     k++
//   }
// }
// console.log(arr);
//
// [ [ 1, 2, 3, 4, 5 ], [ 6, 7, 8, 9, 10 ], [ 11, 12, 13, 14, 15 ] ]
//------------------------------сокращенны й вид
// let arr = [];
// for (let i = 0, k =1; i < 3; i++) {
//   arr[i] = [];
//   for (let j = 0; j < 5; j++) {
//     arr[i].push(k++);
//   }
// }
// console.log(arr);

// [ [ 1, 2, 3, 4, 5 ], [ 6, 7, 8, 9, 10 ], [ 11, 12, 13, 14, 15 ] ]
//------------------------------
// let arr = [];
// for (let i = 0, k = 1; i < 4; i++) {
//   arr[i] = [];
//   for (let j = 1; j <= 2; j++) {
//     arr[i].push(k++)
//   }
// }
// console.log(arr)
//
// [ [ 1, 2 ], [ 3, 4 ], [ 5, 6 ], [ 7, 8 ] ]
//------------------------------Содзание трезмерного массива
// let arr = [];
// for (let i = 0, k = 1; i < 1; i++) {
//   arr[i] = [];
//   for (let f = 0; f <= 3; f++) {
//     arr[i][f] = [];
//     for (let j = 1; j <= 2; j++) {
//       arr[i][f].push(k++)
//     }
//   }
// }
// console.log(arr)
//
//[ [ [ 1, 2 ], [ 3, 4 ], [ 5, 6 ], [ 7, 8 ] ] ]
//---------------------------Сумма эл-в двухмерного массива
// let sum =0;
// let obj = {
//   key1: {key1: 1,key2: 2,key3: 3,},
//   key2: {key1: 4,key2: 5,key3: 6,},
//   key3: {key1: 7,key2: 8,key3: 9,},
// }
// for (let elem in obj) {
//   sum += obj.key1[elem]+ obj.key2[elem]+ obj.key3[elem]
//   console.log(sum)
// }
//----------------------------Сумма эл-в трехмерного обьекта
// let obj = {
// 	1: {  1: {	1: 111,	2: 112,	3: 113,
// 		    },
// 		    2: { 1: 121, 2: 122, 3: 123,
// 		    },
// 	},
// 	2: {  1: { 1: 211, 2: 212, 3: 213,
// 		    },
// 		    2: { 1: 221, 2: 222, 3: 223,
// 		    },
// 	},
// 	3: {  1: { 1: 311, 2: 312, 3: 313,
// 		    },
// 		    2: { 1: 321, 2: 322, 3: 323,
// 		    },
// 	},
// }
// let sum=0;
// for (let key in obj) {
// 	let subObj = obj[key];
// 	for (let subKey in subObj) {
//     let subObjTwo = subObj[subKey]
//     for( let subKeyTwo in subObjTwo){
//       console.log(sum += subObjTwo[subKeyTwo])
//     }
// 	}
// }
//
// 3906
//-----------------------------------Вывод всех эл-в массива в обьекте
// let data = {
//   1: [ 'data11', 'data12', 'data13',],
//   2: [ 'data21', 'data22', 'data23',],
//   3: [ 'data31', 'data32', 'data33',],
//   4: [ 'data41', 'data42', 'data43',],
// };
// for (let count in data) {
//   for(let item of data[count]){
//     console.log(item)
//   }
// }
//
// data11....
//
//---------------------------------Вывод в строку вложенных эл-в через циклы
// let data = [
// 	{
// 		1: [  'data111',  'data112',  'data113',],
// 		2: [	'data121',	'data122',	'data123',],
// 	},
// 	{
// 		1: [	'data211',	'data212',	'data213',],
// 		2: [	'data221',	'data222',	'data223',],
// 	},
// 	{
// 		1: [	'data411',	'data412',	'data413',],
// 		2: [	'data421',	'data422',	'data423',],
// 	},
// ];
// for (let objects of data) {
// 	for (let subArrays in objects) {
// 		for (let items of objects[subArrays]) {
// 			console.log(items)
// 		}
// 	}
// }
//
// data111...
//
//----------------------------------Выведите на экран сумму зарплат тех работников, возраст которых равен или более 30 лет.
// let employees = [
// 	{ name: 'name1', salary: 300, age: 28,
// 	},
// 	{ name: 'name2', salary: 400, age: 29,
// 	},
// 	{ name: 'name3', salary: 500, age: 30,
// 	},
// 	{ name: 'name4', salary: 600, age: 31,
// 	},
// 	{ name: 'name5', salary: 700, age: 32,
// 	},
// ];
// let sum = 0;
// for (let elem of employees) {
// 	if (elem.age >= 30 ? sum += elem.salary : 0) {
// 		console.log(sum)
// 	}
// }
//
// 1800
//
//--------------------------------Добавление обьекта в массив обьектов
// let employees = [
// 	{	name: 'name1',	salary: 300,	age: 28,},
// 	{	name: 'name2',	salary: 400,	age: 29,},
// 	{	name: 'name3',	salary: 500,	age: 30,},
// ];
// employees.push({ name: 'name4', salary: 350, age: 26, })
// console.log(employees)
//
//------------------------------ Добавление элементов в многомерные объекты
// let affairs = {
// 	'2019-12-28': ['data11', 'data12', 'data13'],
// 	'2019-12-29': ['data21', 'data22', 'data23'],
// 	'2019-12-30': ['data31', 'data32', 'data33'],
// }
// affairs['2019-12-29'].push('data99')
// affairs['2019-12-30'].push('data88', 'data77')
// console.log(affairs)
//
//-------------------------------- Добавление элементов в многомерные объекты
// let students = {
// 	'group1': {
// 		'subgroup11': ['student111', 'student112', 'student113'],
// 		'subgroup12': ['student121', 'student122', 'student123'],
// 	},
// 	'group2': {
// 		'subgroup21': ['student211', 'student212', 'student213'],
// 		'subgroup22': ['student221', 'student222', 'student223'],
// 	},
// 	'group3': {
// 		'subgroup31': ['student311', 'student312', 'student313'],
// 		'subgroup32': ['student321', 'student322', 'student323'],
// 	},
// };
// students.group4 = {}  //создание новой группы
// students.group4.subgroup99 = []   //создание новой пдгруппы
// students.group4.subgroup99.push('student99', 'stodent999')
// students.group1.subgroup00 = []   //создание новой пдгруппы
// students.group1.subgroup00.push('stodent007')
// students.group1.subgroup11.push('student000')  //добавление эл-в в подгруппу
// console.log(students)
//
//---------------------------- Квадратный корень из суммы кубов элементов массива
// let arr = [4, 2, 5, 19, 13, 0, 10]
// let sum = 0;
// for(let elem of arr){
// 	console.log(sum += Math.pow(elem, 3))  // 10253
// }
// console.log(Math.sqrt(sum).toFixed(1))  //101,3
//
//---------------------------- Максимальное значение массива
// let arr = [1, 5, 10, 34, 100];
// let max = Math.max.apply(null, arr);
// console.log(max);
//
//100
//------------------------------- Случайное число от 10 до 100
// function getRandomInt(min, max) {
//   return Math.floor(Math.random() * (max - min) + min);
// }
// console.log(getRandomInt(10, 20));
//
//------------------------------- Заполнение массива рандомными числами
// let arr = [];
// for (let i = 0; i <= 9; i++) {
//   arr = Math.floor(Math.random() * 10)
// }
// console.log(arr);
//
//------------------------------ Модуль разности чисел
// let a = -7;
// let b = -2;
// console.log(Math.abs(a-b))
//
//------------------------------
// let str = 'я учу javascript!';
// console.log(str.slice(5,7))

let str = 'dsdjavascript.html'; 
console.log(str.endsWith(".html") ? "Дa" : "Нет");

