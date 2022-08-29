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

// let arr = ['a', 'b', 'c', 'd', 'e'];           //в обратном порядке
// for (let i = arr.length-1; i >= 0 ;  i--) {
//   console.log(arr[i]);
// }
//------------------------------------------------
// let arr = ['a', 'b', 'c', 'd', 'e'];	
// for (let i = 0; i < arr.length; i++) {
// 	console.log(arr[i]);
// }


// Условия IF в циклах

// let arr = [1, 2, 3, 4, 5];
// for (let elem of arr) {
//   if (elem % 2 == 0)                       //если четные
//     console.log(elem);
// }
//--------------------------
// let arr1 = [2, 5, 9, 15, 1, 4];
// for (let elem of arr1) {
//   if (elem >= 3 && elem <= 15)
//     console.log(elem)
// }
//--------------------------
// let obj = { a: 1, b: 2, c: 3, d: 4, e: 5 }; //Значения свойств обьекта
// for (let key in obj) {
//   if (obj[key] % 2 == 0)
//     console.log(obj[key]);
// }
//---------------------------
// let arr = [2, 5, 9, 3, 1, 4];                   //сумма эл-в массива
// let res = 0;
// for (let elem of arr) {
// 	res += elem;
// }
// console.log(res);
//----------------------------
// let arr = [2, 5, 9, 3, 1, 4];                   //сумма квадратов эл-в, в массиве
// let res = 0;
// for (let elem of arr) {
//   res += elem**2;
// }
// console.log(res);
//-----------------------------
// let str = '';
// for (let i = 1; i <= 5; i++) {
// 	str += i;
// }
// console.log(str);                                 //строка цифр
//-------------------------------
// for (let i = 10; i <= 100; i++) {
// 	let str = String(i);                            // вывод первой цифры числа
// 		console.log(str[0]);
// 	}
//----------------------------------
// for (let i = 10; i <= 100; i++) {
//   let str = String(i);                              // сумма первых двух цифр числа
//     console.log(+str[0] + str[1]);
//   }
//---------------------------------
// let arr = [1, 2, 3, 0, 4, 5];
// for (let elem of arr) {
//   if (elem == 0) {
//     console.log('есть');
//     break;                                          // прерывание цикла BREAK
//   }
// }
//---------------------------
// let arr = [1, 2, 3, 0, -4, 5];
// let res=0;
// for (let elem of arr) {
//   if (elem <0 ) {
//     break;                                          // сумма эл-в массива до отрицательного
//   }
//   console.log(res += elem);
// }
//------------------------------
// let arr = [1, 2, 0, 3, -4, 3];
// for (let elem of arr) {
//   if (elem === 3) {
//     console.log(arr.indexOf(elem))                     //индекс эл-та в массиве
//     break
//   }
// }
//------------------------------
// let counter = 0;
// for (let i = 1; i <= 100; i++) {                          //количество итераций до искомого результата
//   if (counter <= 100)
//     console.log(counter += i)
// }
//----------------------------------
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// for (let elem of arr) {
// 	let result;
// 	if (elem % 2 == 0) {                                       //если делится на 2 то **2, если на 3 то**3 и CONTINUE
// 		result = elem **2;
// 	} else if (elem % 3 == 0) {
// 		result = elem **3;
// 	} else {
// 		continue; // перейдем на новую итерацию цикла
// 	}
// 	console.log(result); // выполнится, если делится на 2 или 3
// }
//---------------------------
// let str='';
// for ( let i =11; i<=33; i+=10){
//   for (let j =0; j<=2; j++){                    //вывести 11 12 13 21 22 23....  
//     const num = i + j;
//     console.log(num + ' ')
//   }
// }
// let str = '';                                    //вывести 11 12 13 21 22 23.... через STRING
// for (let i = 1; i <= 3; i++) {
//   for (let j = 1; j <= 3; j++) {
//     document.write(i.toString() + j.toString() + ' ')
//   }
// }
//---------------------------
// let arr = [];
// for (let i = 1; i <= 5; i++) {                      //заполение массива PUSH в цикле
// 	arr.push(i);
// }
// console.log(arr); 
// ------------------------------
// let arr = [1, 5, 8, 6, 3, -4, 1, -9, 5, -3];
// let res = [];
// for (let i = 0; i < arr.length; i++) {              //Новый массив с положительными значениями
//   if (i > 0) {
//     res.push(i)
//     console.log(res);
//   }
// }
//-------------------------------
// let arr = [1,5,8,3,4,5,7]
// for(let i =0; i< arr.length; i++){                    //изменение эл-в массива в цикле
//   arr[i] += 10
// }
// console.log(arr)
//--------------------------------
// let keys = ['a', 'b', 'c', 'd', 'e'];
// let values = [1, 2, 3, 4, 5];                             //Заполнение объектов через цикл
// let obj = {};
// for (let i = 0; i <= 4; i++) {
// 	obj[keys[i]] = values[i];
// }
// console.log(obj);
//-------------------------
// let obj = { a: 1, b: 2, c: 3, d: 4, e: 5 };
// let res = {};
//  for (let key in obj) {                                   //заполнение обьекта из другого обьекта 
//   if (obj[key] % 2 == 0) { 
//     res[key] = obj[key]; 
//   } 
// } 
// console.log(res); 
//---------------------------------
// let obj = {a: 1, b: 2, c: 3, d: 4, e: 5};
// let res = {};
//  for (let key in obj) {                                   //изменение ключей на значения и наоборот 
//   res[obj[key]] = key; 
// } 
// console.log(res);
//----------------------------------
// let arr = ['a', 'b', 'f', 'd', 'e'];
// let flag;
// for (let elem of arr) {
//   if (elem === 'c') {
//     flag = true;                                             //ФЛАГ, проверка наличия/отсутствия эл-та
//     break
//   }
// }
// if (flag === true) {
//   console.log('yes');
// } else
//   console.log('no');
//---------------------------------
// let arr = ['a', 'b', 'c', 'a', 'a', 'b'];
// let counter = 0;
// for (let elem of arr) {                                     //Количество одинаковых эл-в в массиве
// 	if (elem == 'a') {
// 		counter++;
// 	}
// }
// console.log(counter);
//----------------------------------
// let arr = [1, 2, 3, 2, 4, 3, 5, 6, 3, 2, 3];
// let counter = 0;
// let counter1 = 0;
// for (let elem of arr) {                                    //Количество разных повторяющихся эл-в в массиве
//   if (elem == 3) {
//     counter++;
//   }
//   if (elem == 2) {
//     counter1++
//   }
// }
// console.log(`${counter}\n${counter1}`);
//------------------------------------
// let arr = ['a', 'b', 'c', 'a', 'a', 'b', 'h', 'h'];
// let count = {};
// for (let elem of arr) {
// 	if (count[elem] === undefined) {                  //Объект с количеством элементов в массиве
// 		count[elem] = 1;                              //если если такого элемента в count нет, то ему присвоить значение 1
// 	} else {
// 		count[elem]++;
// 	}
// }
// console.log(count);
//-----------------------------------
// let arr = [1, 3, 4, 5, 9, 7]
// for (let i = 1; i < arr.length - 1; i++) {            //сумма текущего, следующего и предыдущего эл-та
//   console.log(arr[i + 1] + arr[i - 1] + arr[i])
// }
//--------------------------------
// let arr = [10, 20, 30, 40, 21, 32, 51];
// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] >= 20 && arr[i] <= 30) {                     // сумма эл-в первая цифра которого находится в диапазоне
//     sum += arr[i]
//     console.log(sum)
//   }
// }
//----------------------------
// let obj = { a: 10, b: 20, c: 30, d: 40, e: 50 };
// let sum = 0;
// for (let elem in obj) {
//   if (obj[elem] == '10' || obj[elem] == '40') {
//     sum += obj[elem];
//   }
// }
// console.log(sum);
// //---------------------------------
// let arr = ['21', '32', '34', '43', '45', '54', '55'];
// let sum = 0;
// for (let elem of arr) {
// 	if (+elem[0] === +elem[1] + 1) {
// 		sum += +elem;
// 	}
// }
// console.log(sum);
//----------------------------------
// let arr = [1, 2, 3, 4, 5];
// let res = [];
// for (let elem of arr) {
//   res.push(arr[elem - 1] ** 2);                   //возведение в квадрат каждого эл-та
// }
// console.log(res);
//--------------------------------
// let arr = [51, 2, 8, 62, 35, 1, 7, 4];
// let res;
// for (let elem of arr) {
//   if (elem === 33) {                                  //НАЛИЧИЕ оппределенного числа в массиве
//     res = '+++';
//     break
//   } else {
//     res = '---';
//   }
// }
// console.log(res);
//--------------------------------------------------ФАКТОЛИАЛ!!!!!!!!!!
// function factorial (n){
//   if (n===0){
//     return 1
//   }else{
//     return n* factorial(n-1)  
//   }
// }
// let m = factorial(7)
// console.log(m)
//--------------------------------------------Сумма четных чисел
// let res = [10, -9, 8, -7, 6, -5, 4, -3, 2, 1];
// let sum = 0;
// for (let elem of res) {
//   if (elem < 0) {
//     sum += elem
//   }
// }
// console.log(sum)
//-------------------------------------------//Вывод числа по первой цифре
// let arr = [10, 20, 40, 50, 635, 3000];
// for (let elem of arr) {
//   if (String(elem)[0] == 2 || String(elem)[0] == 4 || String(elem)[0] == 6) {     //перевод числа в строку
//     console.log(elem)
//   }
// }
