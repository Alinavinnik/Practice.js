//Напиши функцію, яка створює об'єкт з ім'ям і віком.
//Функція повинна приймати два аргументи: ім'я (рядок) і вік (число).
//Поверни цей об'єкт.

// function user(name, age) {
//   const obj = { name, age };
//   return obj;
// }
// console.log(user("Andriy", 20));

//Напиши функцію, яка приймає об'єкт і додає до нього нову властивість "address" (рядок).
//Поверни оновлений об'єкт.
// const user = { name: "Olga", age: 28, email: "olga@mail.com", isActive: true };
// function foo(users) {
//   users.address = "Shevchenka 5";
//   return users;
// }

// console.log(foo([user]));

//Напиши функцію, яка приймає об'єкт і новий вік.
//Функція повинна змінити значення властивості "age" в об'єкті на нове значення.
//Поверни оновлений об'єкт.

// function userAge(user, newAge) {
//   user.age = newAge;
//   return user;
// }

// const user = {
//   age: 18,
//   name: "Ann",
//   isOnline: true,
// };

// console.log(userAge(user, 25));

//Напиши функцію, яка приймає об'єкт і видаляє з нього властивість "age".
//Поверни оновлений об'єкт.
// function change(user) {
//   const { age, ...rest } = user;
//   return rest;
// }
// const user = {
//   age: 18,
//   name: "Ann",
//   isOnline: true,
// };
// console.log(change(user));

//Напиши функцію, яка приймає об'єкт і повертає значення властивості "name".

// function showName(user) {
//   return user.name;
// }

// const user = {
//   age: 18,
//   name: "Ann",
//   isOnline: true,
// };
// console.log(showName(user));

//Задача 1 (const + обчислювальна властивість)

// Створи об’єкт book так, щоб ключ задавався змінною propName:
// const propName = "title";
// Ключ об’єкта має братися зі змінної propName
// Значення — будь-яке, наприклад "Harry Potter"
// Виведи book.title в консоль

// const propName = "title";
// const book = {
//   [propName]: "Harry Potter",
//   author: "O.Genry",
// };

// Задача 2 (функція + обчислювальна властивість)
// Напиши функцію makeUser(key, value), яка:
// приймає два аргументи: key (рядок) і value
// повертає об’єкт, де ключ береться з key, а значення з value
// Приклад виклику:
// console.log(makeUser("age", 30)); // { age: 30 }
// console.log(makeUser("name", "Olga")); // { name: "Olga" }

// function makeUser(key, value) {
//   const obj = {
//     [key]: value,
//   };
//   return obj;
// }

// console.log(makeUser("age", 30)); // { age: 30 }
// console.log(makeUser("name", "Olga")); // { name: "Olga" }

//Створи об’єкт, де ключі беруться з keys, а значення з values
//Використовуй обчислювальні властивості і цикл
// const keys = ["name", "age", "isOnline"];
// const values = ["Olga", 28, true];
// const obj = {
//   [keys[0]]: values[0],
// };

// console.log(obj);
//Результат має бути:

// { name: "Olga", age: 28, isOnline: true }

//Напиши функцію, яка приймає об'єкт і повертає true,
// якщо властивість "address" існує в об'єкті, і false, якщо ні.

// function foo(user, findValue) {
//   const keyArr = Object.keys(user);
//   return keyArr.includes(findValue);
// }
// const user = {
//   address: "Shevchnka 10",
//   age: 18,
//   name: "Ann",
//   isOnline: true,
// };

// console.log(foo(user, "address"));

//Напиши функцію, яка приймає два об'єкти і об'єднує їх в один.
// Якщо у об'єктів є однакові властивості, значення другого об'єкта мають замінити значення першого.
// Поверни результат.

// const user = {
//   address: "Shevchnka 10",
//   age: 18,
//   name: "Ann",
//   isOnline: true,
// };
// const user2 = {
//   address: "Shevchnka 5",
//   age: 20,
//   nikename: "Petro",
//   isOnline: true,
// };
// function unaitedObj(user, user2) {
//   const result = { ...user, ...user2 };
//   return result;
// }
// console.log(unaitedObj(user, user2));

// Напиши функцію, яка створює об'єкт з трьома властивостями: ім'ям, віком і адресою.
// Якщо ім'я та вік не передані, встанови їх значення за замовчуванням ("Unknown", 0 відповідно).
// Поверни об'єкт.

// function unknown(address, age = 0, name = "Unknown") {
//   return {
//     address,
//     age,
//     name,
//   };
// }

// console.log(unknown("Shevchnka 10"));

// Напиши функцію, яка приймає об'єкт та нові значення для імені та віку.
// Функція повинна змінити обидві властивості в об'єкті. Поверни оновлений об'єкт.
// const user = {
//   address: "Shevchnka 10",
//   age: 18,
//   name: "Ann",
//   isOnline: true,
// };

// function createNewData(user, newName, newAge) {
//   const keys = Object.keys(user);
//   if (keys.includes("name") && keys.includes("age")) {
//     user.name = newName;
//     user.age = newAge;
//   }
//   return user;
// }

// console.log(createNewData(user, "Kate", 25));

// // Напиши функцію, яка приймає об'єкт та нову властивість "email" (якщо її немає).
// // Якщо в об'єкті вже є "email", нічого не роби.
// // Поверни оновлений об'єкт.
// function userInfo(user, email) {
//   if (user.email === undefined) {
//     user.email = email;
//   }
//   return user;
// }

// const user = {
//   address: "Shevchnka 10",
//   age: 18,
//   name: "Ann",
//   isOnline: true,
// };
// console.log(userInfo(user, "alina@gmail.com"));

// Напиши функцію, яка приймає об'єкт і змінює тип значення властивості "age" з числа на рядок.
// Поверни оновлений об'єкт.

// function changeAge(user) {
//   user.age = String(user.age);
//   return user;
// }

// const user = {
//   address: "Shevchnka 10",
//   age: 18,
//   name: "Ann",
//   isOnline: true,
// };

// console.log(changeAge(user, 15));

// //Напиши функцію, яка приймає об'єкт і змінює значення властивості "address",
// // але тільки якщо ця властивість вже існує.
// // Якщо її немає, поверни об'єкт без змін.

// const user = {
//   address: "Shevchnka 10",
//   age: 18,
//   name: "Ann",
//   isOnline: true,
// };
// function foo(user, address) {
//   const userKeys = Object.keys(user);
//   if (userKeys.includes("address")) {
//     user.address = address;
//   }
//   return user;
// }

// console.log(foo(user, "Samiyla 9"));

// // Напиши функцію, яка приймає об'єкт користувача з властивостями name та сity.
// //  Та повертає рядок "User {імя користувача} from {місто користувача}!"

// const user = {
//   address: {
//     street: "Shevchnka 10",
//     city: "Kharkiv",
//   },
//   age: 18,
//   name: "Ann",
//   isOnline: true,
// };
// function userInfo(user) {
//   return `User ${user.name} from ${user.address.city}`;
// }
// console.log(userInfo(user));

// Напиши функцію, яка приймає масив з ключами і значеннями
// (наприклад, [["name", "John"], ["age", 25], ["address", "123 Street"]]) і створює об'єкт з цих пар.
//  Поверни об'єкт.
// const arrays = [
//   ["name", "John"],
//   ["age", 25],
//   ["address", "123 Street"],
// ];
// function createObj(arrays) {
//   let result = {};
//   for (let i = 0; i < arrays.length; i++) {
//     const key = arrays[i][0];
//     const value = arrays[i][1];
//     result[key] = value;
//   }
//   return result;
// }
// console.log(createObj(arrays));

// // Напиши функцію, яка приймає масив об'єктів і змінює в кожному з них властивість "age",
// // збільшуючи її на 1. Поверни оновлений масив об'єктів.
// const array = [
//   {
//     name: "Andriy",
//     age: 32,
//     address: {
//       street: "Samiyla 5",
//       city: "Kiev",
//     },
//   },
//   {
//     name: "Alina",
//     age: 30,
//     address: {
//       street: "Franka 8",
//       city: "Kiev",
//     },
//   },
// ];
// function foo(array) {
//   for (const item of array) {
//     item.age = item.age + 1;
//   }
//   return array;
// }

// console.log(foo(array));

//Створіть об'єкт contactBook, який зберігатиме список контактів та надаватиме методи для додавання,
//  видалення та пошуку контактів.

// const contactBook = {
//   contacts: {
//     Petro: 3802547698,
//     Kate: 380996874582,
//     Andriy: 380632140214,
//   },
//   addContact(name, phone) {
//     this.contacts[name] = phone;
//     return this.contacts;
//   },
//   deleteContact(name) {
//     delete this.contacts[name];
//     return this.contacts;
//   },
//   findContact(name) {
//     return this.contacts[name] ?? "Contact not found";
//   },
// };
// console.log(contactBook.addContact("Kseniya", 380502431008));

//Створіть об'єкт rectangle, який представлятиме прямокутник з методами для обчислення його площі та периметра.
// Об'єкт повинен приймати довжини двох сторін під час створення.
// const rectangle = {
//   heigth: 20,
//   width: 30,
//   area() {
//     return this.heigth * this.width;
//   },
//   perimeter() {
//     return 2 * (this.height + this.width);
//   },
// };
// console.log(rectangle.area());
// console.log(rectangle.perimeter());

// Створи об'єкт із властивостями firstName (рядок), lastName (рядок) та age (число). Додай метод getFullName, який повертає повне ім'я у форматі: [firstName] [lastName]. Також додай метод incrementAge, який збільшує вік на 1.
// const user = {
//   firstName: "Paolo",
//   lastName: "Vilian",
//   age: 32,
//   getFullName() {
//     return `${this.firstName} ${this.lastName}`;
//   },
//   incrementAge() {
//     this.age += 1;
//   },
// };
// console.log(user.getFullName());
// console.log(user.age);
// user.incrementAge();
// console.log(user.age);

// Створи об'єкт із властивостями name (рядок), position (рядок) та salary (число). Додай метод getInfo, який повертає рядок у форматі: [name] працює на позиції [position] із зарплатою [salary].

// const employee = {
//   userName: "Dana",
//   position: "Designer",
//   salary: 20,
//   getInfo() {
//     return `${this.userName} працює на позиції ${this.position} із зарплатою ${this.salary}`;
//   },
// };

// console.log(employee.getInfo());

// /Створи об'єкт із властивостями countryName (рядок), capital (рядок) та population (число). Додай метод getDetails, який повертає рядок у форматі: Країна: [countryName], столиця: [capital], населення: [population].

// const placeInfo = {
//   countryName: "Ukraine",
//   capital: "Kiev",
//   population: 20000,
//   getDetails() {
//     return `Країна: ${this.countryName}, столиця: ${this.capital}, населення: ${this.population}`;
//   },
// };
// console.log(placeInfo.getDetails());

// Створи об'єкт із властивостями itemName (рядок), quantity (число) та pricePerItem (число). Додай метод calculateTotalPrice, який повертає загальну вартість, множачи quantity на pricePerItem.
// const buyItems = {
//   itemName: "Shoes",
//   quantity: 2,
//   pricePerItem: 800,
//   calculateTotalPrice() {
//     return this.quantity * this.pricePerItem;
//   },
// };
// console.log(buyItems.calculateTotalPrice());

// Створи об'єкт із властивостями email (рядок) та password (рядок). Додай метод checkLogin, який приймає два аргументи (email і password) і повертає true, якщо вони збігаються зі значеннями об'єкта.

// const userInfo = {
//   email: "vitalik@gmail.com",
//   password: "iJHGtvs6",
//   checkLogin(email, password) {
//     return email === this.email && password === this.password;
//   },
// };
// console.log(userInfo.checkLogin("vitalik@gmail.com", "iJHGtvs6"));

// Створи об'єкт із властивостями temperature (число) та unit (рядок, що приймає значення "C" або "F"). Додай метод convertToCelsius, який переводить температуру з Фаренгейта в Цельсій, якщо unit дорівнює "F", та метод convertToFahrenheit, який робить зворотнє перетворення.
// const temp = {
//   temperature: 25,
//   unit: "C",

//   convertToCelsius() {
//     if (this.unit === "F") {
//       this.temperature = ((this.temperature - 32) * 5) / 9;
//       this.unit = "C";
//     }
//   },

//   convertToFahrenheit() {
//     if (this.unit === "C") {
//       this.temperature = (this.temperature * 9) / 5 + 32;
//       this.unit = "F";
//     }
//   },
// };

// temp.convertToFahrenheit();
// console.log(temp);

// temp.convertToCelsius();
// console.log(temp);

// Створи об'єкт із властивостями vehicleType (рядок), fuelType (рядок) та fuelEfficiency (число). Додай метод calculateRange, який приймає кількість пального (число) і повертає відстань, яку можна подолати.
// const typeTransport = {
//   vehicleType: "moto",
//   fuelType: "gas",
//   fuelEfficiency: 6,
//   calculateRange(amountOfFuel) {
//     return this.fuelEfficiency * amountOfFuel;
//   },
// };
// console.log(typeTransport.calculateRange(20));

// Створи об'єкт із властивостями studentName (рядок), grade (число) та subject (рядок). Додай метод upgradeGrade, який збільшує значення grade на 1, та метод getReport, який повертає рядок у форматі: [studentName] має оцінку [grade] з предмету [subject].

// const students = {
//   studentName: "Petro",
//   grade: 75,
//   subject: "Math",
//   upgradeGrade() {
//     this.grade += 1;
//   },
//   getReport() {
//     return `${this.studentName} має оцінку ${this.grade} з предмету ${this.subject}`;
//   },
// };
// console.log(students.grade);
// students.upgradeGrade();
// console.log(students.grade);
// console.log(students.getReport());

// 11. Завдання:
// Створи об'єкт із властивостями movieTitle (рядок), director (рядок) та duration (число, у хвилинах). Додай метод getMovieInfo, який повертає опис фільму у форматі: [movieTitle], режисер [director], тривалість [duration] хв.
// const infoMovie = {
//   movieTitle: "Shrek",
//   director: "Tomas Wilson",
//   duration: 120,
//   getMovieInfo() {
//     return `${this.movieTitle}, режисер ${this.director}, тривалість ${this.duration} хв.`;
//   },
// };
// console.log(infoMovie.getMovieInfo());

// 12. Завдання:
// Створи об'єкт із властивостями username (рядок), isOnline (булеве значення). Додай метод toggleStatus, який змінює значення isOnline на протилежне.

// const userStatus = {
//   username: "Alisa",
//   isOnline: false,
//   toggleStatus() {
//     this.isOnline = !this.isOnline;
//   },
// };
// console.log(userStatus.isOnline);
// userStatus.toggleStatus();
// console.log(userStatus.isOnline);

// 13. Завдання:
// Створи об'єкт із властивостями day (число), month (число) та year (число). Додай метод formatDate, який повертає рядок у форматі: DD/MM/YYYY.

// const createNewData = {
//   day: 25,
//   month: 7,
//   year: 2026,
//   formatDate() {
//     return `${this.day}/${this.month}/${this.year}`;
//   },
// };

// console.log(createNewData.formatDate());

// 14. Завдання:
// Створи об'єкт із властивостями colorName (рядок) та isPrimary (булеве значення). Додай метод checkPrimary, який повертає true, якщо colorName є одним із базових кольорів: "red", "blue", "yellow".

// const colorType = {
//   colorName: "green",
//   isPrimary: true,
//   checkPrimary() {
//     switch (this.colorName.toLowerCase()) {
//       case "red":
//       case "blue":
//       case "yellow":
//         return true;
//       default:
//         return false;
//     }
//   },
// };
