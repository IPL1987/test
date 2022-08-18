'use strict'

// Сумма цифр числа

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

// Сложение чисел в строке

// let test = '12345';
// console.log(+test[0] + +test[1]);

// Вывод последней цифры числа
// let num = 1235642;
// let str = num % 10;
// console.log(str);
// --------------------------------------
// const num = 561;
// console.log(num.toString().split('').pop());
//----------------------------------------
// let arr = '1237';
// console.log(arr[arr.length - 1])

//Последний эл-т массива
// let arr = [1, 2, 3, 4, 5];
// console.log(arr[arr.length - 1]);

//Вывод значения по ключу с ОГРАНИЧЕНИЯМИ
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

//Масиив ключей обьекта
// let obj = { x: 1, y: 2, z: 3 };
// console.log(Object.keys(obj))

//Ключ обьекта из переменной
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
//-----------------------------------------
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


//Тернарный оператор
// let num = -1;
// let res = num >= 0 ? '1' : '2';
// console.log(res);


// Область видимости переменных в if-else
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
let num = 347;
let res = String(num);
console.log(+res[0] + +res[1] + +res[2])