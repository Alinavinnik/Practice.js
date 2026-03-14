// const str = 'JavaScript is awesome';
// console.log(str.length); // Виведи довжину рядка
// console.log(str.toLocaleUpperCase()); // Зроби всі літери великими
// console.log(str.includes('awesome')); // Перевір чи рядок містить "awesome"

// const text = 'Hello world';
// console.log(text.replace('world', 'JavaScript')); // Замінити "world" на "JavaScript"
// const arrStr = text.split(' '); // Розбити рядок на масив слів
// arrStr.join('-'); // З'єднати назад через -

// //Задача 3
// const email = '  user@gmail.com   ';
// const validEmail = email.trim(); // Прибрати пробіли
// console.log(validEmail.endsWith('gmail.com')); // Перевірити чи email закінчується на "gmail.com"

// //Задача 4
// const numbers = [1, 2, 3, 4, 5];
// // Додай число 6 в кінець
// // Видали перший елемент
// // Переверни масив
// const arr = array => {
//   array.push(6);
//   array.shift();
//   return array.reverse();
// };

// console.log(arr(numbers));

// //Задача 5
// const nums = [5, 10, 15, 20];

// const result = nums.map(num => num.length).fill(num => num > 10);
// console.log(result);

// // Збільшити кожне число на 2
// // Залишити тільки числа > 10
// //[12, 17, 22]

// //Задача 6
// const words = ['apple', 'banana', 'orange'];
// const amountOfWords = words.map(word => word.length);
// console.log(amountOfWords);

// // Отримати масив довжин слів
// // Результат:[5, 6, 6]

// //Задача 7
// const user = {
//   name: 'Alex',
//   age: 25,
//   city: 'Kyiv',
// };
// console.log(Object.keys(user)); // Вивести всі ключі
// console.log(Object.values(user)); // Вивести всі значення
// user.isAdmin = true;
// console.log(user); // Додати поле "isAdmin": true

// //Задача 8
// const product = {
//   name: 'Laptop',
//   price: 1000,
// };
// function changePrice(item) {
//   item.price += item.price * 1.2;
//   item.inStock = true;
//   return item;
// }
// console.log(changePrice(product));

// Збільшити ціну на 20%
// Додати поле "inStock": true

// const fetchUserFromServer = (username, onSuccess, onError) => {
//   console.log(`Fetching data for ${username}`);

//   setTimeout(() => {
//     // Change value of isSuccess variable to simulate request status
//     const isSuccess = false;

//     if (isSuccess) {
//       onSuccess('success value');
//     } else {
//       onError('error');
//     }
//   }, 2000);
// };

// fetchUserFromServer(
//   'Mango',
//   user => console.log(user),
//   error => console.error(error)
// );
// const users = {
//   user1: 'Ivan',
//   user2: 'Olga',
//   user3: 'Petro',
// };
// const userList = Object.values(users);

// const car = {
//   brand: 'Toyota',
//   model: 'Camry',
//   year: 2020,
// };

// const objKeys = Object.keys(car);

// const salaries = {
//   John: 500,
//   Ann: 700,
//   Mike: 600,
// };
// const arrSallaries = Object.values(salaries);
// let sumSallaries = 0;
// for (const salary of arrSallaries) {
//   sumSallaries += salary;
// }
// console.log(sumSallaries);

// // Повернути назву найдорожчого товару.
// const products = {
//   apple: 2,
//   banana: 1,
//   orange: 3,
//   mango: 5,
// };
// const sortedProducts = Object.keys(products).toSorted(
//   (a, b) => products[b] - products[a]
// );
// const res = products[0];
// // Повернути масив імен користувачів старших 18.  ["Petro","Olga"]
// const users2 = {
//   Ivan: 18,
//   Petro: 25,
//   Olga: 30,
//   Anna: 16,
// };
// const arrUsers = Object.keys(users2).filter(user => users2[user] > 18);
// console.log(arrUsers);

// // Відсортувати країни за населенням
// const population = {
//   Ukraine: 41,
//   Poland: 37,
//   Germany: 83,
//   France: 67,
// };
// const countryByPopulation = Object.keys(population).toSorted(
//   (a, b) => population[b] - population[a]
// );
// console.log(countryByPopulation);

// // Перевернути об’єкт (ключ ↔ значення)
// const roles = {
//   admin: 'Ivan',
//   editor: 'Olga',
//   user: 'Petro',
// };
// const swapped = Object.entries(roles).map(([key, value]) => [value, key]);

// // Створити об’єкт частоти.
// // {
// //   apple: 3,
// //   banana: 2,
// //   orange: 1
// // }
// const words = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];
// const objWords = {};
// for (let i = 0; i < words.length; i++) {
//   const word = words[i];
//   if (!objWords[word]) {
//     objWords[word] = 1;
//   } else {
//     objWords[word] += 1;
//   }
// }
// console.log(objWords);
