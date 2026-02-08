//Напиши функцію, яка приймає масив та виводить кожен елемент масиву у консоль.

// function foo(numbers) {
//   for (const number of numbers) {
//     console.log(number);
//   }
// }
// const num = [87, 9, 13, 55, 89, 10];
// foo(num);

//Напиши функцію, яка приймає масив та виводить кожен парний елемент масиву у консоль.
// function animals(pets) {
//   for (let i = 0; i < pets.length; i++) {
//     if (i % 2 === 0) {
//       console.log(pets[i]);
//     }
//   }
// }

// const anim = ["cat", "tiger", "lion", "dog", "dolphin", "horse", "elephant"];
// animals(anim);

// //Напиши функцію, яка приймає масив чисел та виводить лише парні числа у консоль.

// function foo1(numbers) {
//   for (const number of numbers) {
//     if (number % 2 === 0) {
//       console.log(number);
//     }
//   }
// }
// const numb = [87, 10, 13, 55, 90, 10];
// foo1(numb);

// //Напиши функцію, яка приймає два параметри (arr, max).
// // Де arr - це масив чисел. Потрібно вивести лише ті елементи масиву які більші за max.

// function moreThen(arr, max) {
//   for (const item of arr) {
//     if (item > max) {
//       console.log(item);
//     }
//   }
// }
// const number = [87, 10, 13, 55, 90, 10];
// moreThen(number, 40);

//Напиши функцію яка приймає масив та повертає суму всіх чисел у масиві

// function sum(sumItems) {
//   let totalPrice = 0;
//   for (const sumItem of sumItems) {
//     totalPrice += sumItem;
//   }
//   return totalPrice;
// }

// const item = [10, 16, 36, 99, 58];
// console.log(sum(item));

//Напиши функцію яка приймає масив та елемент для пошуку.
// Фукнція повинна порахувати скільки разів шуканий елемент зустрічається у масиві.

// function message(arr, wordToFind) {
//   let amoundOfwords = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === wordToFind) {
//       amoundOfwords += 1;
//     }
//   }
//   return amoundOfwords;
// }

// const numbers = [25, 16, 3, 95, 3, 97, 33, 3, 20];
// console.log(message(numbers, 3));

// //Напиши функцію яка приймає масив чисел.
// // Функція повинна видалити усі негативні(відємні числа) з масиву та повернути новий масив.

// function foo(numbers) {
//   let validNum = [];
//   for (const number of numbers) {
//     if (number >= 0) {
//       validNum.push(number);
//     }
//   }
//   return validNum;
// }
// const num = [-25, 16, -3, 95, 3, 97, -33, 3, -20, 0];
// console.log(foo(num));

//Напиши функцію яка приймає масив рядочків.
// Потрібно змінити кожен елемент масиву наступним чином -
// якщо довжина рядочку менша за 6 до привести рядок до нижнього регістру,
//  в іншому випадку привести до верхнього регістру.

// Напиши функцію, яка приймає масив рядочків.
//Функція повинна змінити кожен елемент масиву так:
//якщо рядок починається з букви a або A, привести його до верхнього регістру
//в іншому випадку привести рядок до нижнього регістру
//Функція має повернути новий масив зі зміненими рядками.
// function foo4(words) {
//   for (let i = 0; i < words.length; i++) {
//     const firstLetter = words[i].slice(0, 1);
//     const validLetter = firstLetter.toLowerCase();
//     if (validLetter.startsWith("a")) {
//       words[i] = words[i].toUpperCase();
//     } else {
//       words[i] = words[i].toLowerCase();
//     }
//   }
//   return words;
// }

// const words = ["apple", "Sun", "airplane", "Dog", "Art"];
// console.log(foo4(words));

//Напиши функцію, яка приймає масив чисел і повертає новий масив, що містить лише непарні числа.

// function foo5(numbers) {
//   const oddNum = [];
//   for (const number of numbers) {
//     if (number % 2 !== 0) {
//       oddNum.push(number);
//     }
//   }
//   return oddNum;
// }
// const num = [-25, 16, -3, 95, 3, 97, -33, 3, -20, 0];
// console.log(foo5(num));

//Напиши функцію, яка приймає масив чисел і повертає новий масив, де кожне число помножене на індекс, за яким воно знаходиться в масиві.

// function foo6(num) {
//   const newArr = [];
//   for (let i = 0; i < num.length; i++) {
//     newArr.push(num[i] * i);
//   }
//   return newArr;
// }

// const num = [25, 16, 3, 95, 3, 97, 33, 3, -20, 0];
// console.log(foo6(num));

//Напиши функцію, яка приймає масив чисел і повертає новий масив, що містить лише числа, які діляться на 3.

// function foo7(numbers) {
//   const array = [];
//   for (const number of numbers) {
//     if (number % 3 === 0) {
//       array.push(number);
//     }
//   }
//   return array;
// }

// const num = [25, 16, 3, 95, 3, 97, 33, 3, -20, 0];
// console.log(foo7(num));

//Напиши функцію, яка приймає два масиви чисел (arr1 і arr2)
//та повертає новий масив, що містить тільки ті числа з arr1, яких НЕМАЄ в arr2.
// function twoarr(arr1, arr2) {
//   const uncommonNumb = [];
//   for (const number of arr1) {
//     if (!arr2.includes(number)) {
//       uncommonNumb.push(number);
//     }
//   }
//   return uncommonNumb;
// }

// const arr1 = [5, 10, 15, 20, 25, 30];
// const arr2 = [10, 30, 40];
// console.log(twoarr(arr1, arr2));

//Напиши функцію яка приймає масив та знаходить мінімальний елемент.
// function foo(num) {
//   let minNum = num[0];
//   for (let i = 0; i < num.length; i++) {
//     if (num[i] < minNum) {
//       minNum = num[i];
//     }
//   }
//   return minNum;
// }

// const num = [25, 16, 3, 95, 3, 97, 33, 3, -20, 0];
// console.log(foo(num));

//Напиши функцію яка приймає масив та знаходить максимальний елемент.
// function foo(numbers) {
//   let max = numbers[0];
//   for (const number of numbers) {
//     if (number > max) {
//       max = number;
//     }
//   }
//   return max;
// }
// const num = [25, 16, 3, 95, 3, 97, 33, 3, -20, 0];
// console.log(foo(num));

//Напиши функцію яка приймає масив та повертає масив лише з тих елементів які більші за середнє значення всіх елементів масиву.

// function foo(numbers) {
//   let sumNum = 0;
//   for (const number of numbers) {
//     sumNum += number;
//   }
//   const result = [];
//   const averageNum = sumNum / numbers.length;
//   for (const number of numbers) {
//     if (number > averageNum) {
//       result.push(number);
//     }
//   }
//   return result;
// }
// const num = [25, 16, 3, 95, 3, 97, 33, 3, 20, 0];
// console.log(foo(num));

//Напиши функцію яка приймає масив та повертає масив лише з тих елементів які більші за власний індекс.

// function foon(num) {
//   const result = [];
//   for (let i = 0; i < num.length; i++) {
//     if (num[i] > i) {
//       result.push(num[i]);
//     }
//   }
//   return result;
// }

// const num = [25, 16, 3, 95, 3, 97, 33, 3, 20, 0];
// console.log(foon(num));

//Напишіть функці яка приймає масив чисел. Функція повинна занйти мінімальний елемент та видалити його з масиву.
// function foon(numbers) {
//   let minElem = numbers[0];
//   for (let i = 0; i < numbers.length; i++) {
//     if (minElem > numbers[i]) {
//       minElem = numbers[i];
//     }
//   }
//   const indexMinElem = numbers.indexOf(minElem);
//   numbers.splice(indexMinElem, 1);
//   return numbers;
// }

// const num = [25, 16, 3, 95, 34, 97, 33, 32, 20];
// console.log(foon(num));

//Напиши функцію яка приймає два параметри start та end.
// Функія повина повернути масив де будуть числа з діапазону але лише ті у яких не має цифри 5.
//  К прикладу числа (51, 25, 15,256) не підходять бо містять символ "5" у собі.

// function foon(start, end) {
//   let array = [];
//   for (let i = start; i < end; i++) {
//     if (!String(i).includes(5)) {
//       array.push(i);
//     }
//   }
//   return array;
// }

// console.log(foon(4, 30));

//Напиши функцію, яка приймає массив чисел і повертає новий масив,
// де всі парні числа переміщені в початок, а всі непарні - в кінець.
// function foo7(numbers) {
//   const evenNum = [];
//   const oddNum = [];
//   for (const number of numbers) {
//     if (number % 2 === 0) {
//       evenNum.push(number);
//     } else {
//       oddNum.push(number);
//     }
//   }
//   const result = evenNum.concat(oddNum);
//   return result;
// }

// const num = [25, 16, 3, 95, 34, 97, 33, 32, 20];
// console.log(foo7(num));

//Напиши функцію, яка приймає массив чисел і повертає новий массив, де кожен елемент є сумою усіх попередніх елементів.
// function foo(num) {
//   let result = [];
//   let sumNum = 0;
//   for (let i = 0; i < num.length; i++) {
//     sumNum += num[i];
//     result.push(sumNum);
//   }
//   return result;
// }

// const num = [2, 3, 4, 5, 7, 3, 2, 6];
// console.log(foo(num));

//Напиши функцію, яка приймає массив чисел і повертає новий массив, що містить лише унікальні числа.
// function foo(numbers) {
//   const resultArr = [];
//   for (const number of numbers) {
//     if (!resultArr.includes(number)) {
//       resultArr.push(number);
//     }
//   }
//   return resultArr;
// }

// const num = [2, 3, 4, 4, 7, 3, 2, 6];
// console.log(foo(num));

//Напиши функцію, яка приймає два масиви і повертає об'єднаний массив без дублювання елементів.
// function foo(arr1, arr2) {
//   const commonArr = arr1.concat(arr2);
//   const result = [];
//   for (const item of commonArr) {
//     if (!result.includes(item)) {
//       result.push(item);
//     }
//   }
//   return result;
// }

// const arr1 = [2, 3, 4, 4, 7, 3, 2, 6];
// const arr2 = [2, 33, 4, 15, 7, 30, 2, 6];
// console.log(foo(arr1, arr2));

//Напиши функцію, яка приймає массив чисел і повертає новий массив, де кожен елемент є середньоарифметичним всіх сусідніх елементів.

// function foo(arr2) {
//   const result = [];
//   for (let i = 1; i < arr2.length - 1; i++) {
//     const everageNumb = (arr2[i] + arr2[i - 1] + arr2[i + 1]) / 3;
//     result.push(Number(everageNumb.toFixed(1)));
//   }
//   return result;
// }
// const arr2 = [2, 33, 4, 15, 7, 30, 2, 6];
// console.log(foo(arr2));

// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];
// function getValuesForKey(key) {
//   const arr = [];
//   for (const product of products) {
//     if (product[key] !== undefined) {
//       arr.push(product[key]);
//     }
//   }
//   return arr;
// }
// const key = "quantity";
// console.log(getValuesForKey("name"));
