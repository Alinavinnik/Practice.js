//
// }
// Напиши функцію calculateOddTotal(number), яка приймає ціле число number.
// Функція має повертати суму всіх непарних чисел від 1 до цього числа включно.
// Непарні числа — це ті, які не діляться на 2 без остачі.

// function calculateOddTotal(number) {
//   let sumNumbers = 0;
//   for (let i = 1; i <= number; i += 2) {
//     sumNumbers += i;
//   }
//   console.log(sumNumbers);
//   return sumNumbers;
// }

// calculateOddTotal(50);

// for (let i = 1; i <= 100; i++) {
//   console.log(i);
// }

// for (let i = 1; i <= 20; i++) {
//   if (i % 2 === 0) {
//     console.log(i);
//   }
// }

// let sum = 0;
// for (let i = 1; i <= 100; i++) {
//   sum += i;
// }
// console.log(sum);
// for (let i = 1; i <= 10; i++) {
//   console.log(`7*${i}= ${i * 7}`);
// }

// const fruits = ["apple", "banana", "cherry"];
// const resultComma = fruits.join(",");
// const resultSpase = fruits.join(" ");

// const sentence = "I love JavaScript";
// const result = sentence.split(" ");
// console.log(result);

// const numbers = [10, 20, 30, 40, 50];
// const index = numbers.indexOf(30);
// console.log(index);

// const colors = ["red", "green", "blue", "yellow", "purple"];
// const subset = colors.slice(1, 4);
// console.log(subset);

// const pets = ["dog", "cat"];
// const newPets = pets.push("hamster", "parrot");
// console.log(pets);

// const pets1 = ["dog", "cat"];
// const pets2 = ["parrot", "hamster"];
// const newPets1 = pets1.push("rabbit", "turtle");
// const subsetPets2 = pets2.slice(0, 1);
// const allPets = pets1.concat(subsetPets2);
// console.log(allPets);

// function makeSentence(arr) {
//   const sentence = arr.join(" ");
//   return sentence;
// }
// const words = ["Hello", "world", "from", "JavaScript"];
// console.log(makeSentence(words));

//Напиши функцію removeAnimal(arr, animalName), яка видаляє з масиву елемент з назвою animalName,
// якщо він там є, і повертає новий масив.
//Використовуй indexOf, slice і concat
// function array(arr, max) {
//   for (const item of arr) {
//     if (item < max) {
//       console.log(item);
//     }
//   }
// }

// const numbers = [87, 9, 13, 55, 89, 10];

// array(numbers, 50);

//Напиши функцію яка приймає масив та повертає суму всіх чисел у масиві.
// function foo(numbers) {
//   let sumUP = 0;
//   for (const number of numbers) {
//     sumUP += number;
//   }
//   console.log(sumUP);
// }
// const num = [87, 9, 13, 55, 89, 10];
// foo(num);

//Напиши функцію яка приймає масив та елемент для пошуку.
// Фукнція повинна порахувати скільки разів шуканий елемент зустрічається у масиві.
// function access(age, balance) {
//   if (age >= 18 && balance >= 100) {
//     console.log("Wellcome");
//   } else {
//     console.log("Goodbuy");
//   }
// }

// access(20, 150);
// access(16, 150);

// function buyItems(amount, price) {
//   console.log(amount * price <= 1000 ? "Ми це купуємо" : "Це занадто дорого");
// }

// buyItems(7, 50);
// buyItems(6, 200);

// function weather(temp) {
//   if (temp <= 0) {
//     return "Замерзає";
//   } else if (temp > 0 && temp < 25) {
//     return "Нормальна температура";
//   } else {
//     return "Спекотно";
//   }
// }
// console.log(weather(-3));
// console.log(weather(30));
// console.log(weather(17));

// function coupleNumber(number, divisor) {
//   return number % divisor === 0 ? "Ділиться" : "Не ділиться";
// }

// console.log(coupleNumber(6, 2));
// console.log(coupleNumber(7, 2));

// function takeUmbrella(isRaining, hasUmbrella) {
//   if (isRaining && hasUmbrella) {
//     return "Не змокнеш";
//   } else if (isRaining) {
//     return "Змокнеш";
//   } else {
//     return "Без дощу";
//   }
// }

// console.log(takeUmbrella(true, true));
// console.log(takeUmbrella(true, false));
// console.log(takeUmbrella(false, true));

// function userGrade(grade) {
//   if (grade >= 90) {
//     return "Відмінно";
//   } else if (grade >= 75 && grade <= 90) {
//     return "Добре";
//   } else if (grade >= 50 && grade <= 74) {
//     return "Задовільно";
//   } else {
//     return "Незадовільно";
//   }
// }

// console.log(userGrade(92));
// console.log(userGrade(75));
// console.log(userGrade(74));
// console.log(userGrade(40));

// function typeOfTheDay(dayOfWeek, isHoliday) {
//   if (dayOfWeek === "Saturday" || dayOfWeek === "Sunday" || isHoliday) {
//     return "Вихідний";
//   } else {
//     return "Робочий день";
//   }
// }

// console.log(typeOfTheDay("Mondey", false));
// console.log(typeOfTheDay("Mondey", true));

//Задача-8
// function typeOfTheYear(year) {
//   return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0
//     ? "Високосний рік"
//     : "Звичайний рік";
// }

// console.log(typeOfTheYear(364));
// console.log(typeOfTheYear(365));

// function guestList(hasInvitation, isFriend) {
//   return hasInvitation || isFriend ? "Ви запрошені" : "Вхід заборонено";
// }

// console.log(guestList(true, false));
// console.log(guestList(true, true));
// console.log(guestList(false, false));

// function userAge(age) {
//   if (age < 12) {
//     return "Дитина";
//   } else if (age >= 12 && age <= 18) {
//     return "Підліток";
//   } else if (age >= 18 && age <= 60) {
//     return "Дорослий";
//   } else {
//     return "Пенсіонер";
//   }
// }

// console.log(userAge(8));
// console.log(userAge(16));
// console.log(userAge(30));
// console.log(userAge(90));

// console.log(true && 3); //3

// console.log(false && 3); //f

// console.log(true && 4 && "kiwi"); //kiwi

// console.log(true && 0 && "kiwi"); //0

// console.log(true || 3); //true

// console.log(true || 3 || 4); //true

// console.log(true || false || 7); //true

// console.log(null || 2 || undefined); //2

// console.log((1 && null && 2) > 0); //f

// console.log(null || (2 && 3) || 4); //3

// console.log(1 && 5); //5
// console.log(5 && 1); //1
// console.log(0 && 2); //0
// console.log(2 && 0); //0
// console.log("" && "Mango"); //''
// console.log("Mango" && ""); //''
// console.log("Mango" && "Poly"); //'Poly'
// console.log("Poly" && "Mango"); //'Mango'

// console.log(true || false); //t
// console.log(false || true); //t
// console.log(true || true); //t
// console.log(3 || false); //3
// console.log(false || 3); //3
// console.log(3 || true); //3
// console.log(true || 3); //t

// console.log(!true); // f
// console.log(!false); //t
// console.log(!3); //f
// console.log(!"Mango"); //f
// console.log(!0); //t
// console.log(!""); //t

// console.log(true && false); //f
// console.log(false && true); //f
// console.log(true && true); //true
// console.log(false && false); //f

// console.log(true || false); //t
// console.log(false || true); //t
// console.log(true || true); //t
// console.log(false || false); //f

// console.log(!true); //f
// console.log(!false); //t
// console.log(!!true); //t
// console.log(!!false); //f

// console.log(1 === 1 && 2 === 2); //t
// console.log(1 === 2 && 2 === 2); //f
// console.log(1 === 1 || 2 === 2); //t
// console.log(1 === 2 || 2 === 2); //t

// console.log(1 > 2 && 2 < 3); //f
// console.log(1 < 2 && 2 < 3); //t
// console.log(1 > 2 || 2 < 3); //t
// console.log(1 < 2 || 2 < 3); //t

// console.log(0 && 3); //0
// console.log(3 && 0); //0
// console.log(0 || 3); //3
// console.log(3 || 0); //3

// console.log("" || "apple"); //a
// console.log("orange" || ""); //o
// console.log("" && "banana"); //''
// console.log("grape" && ""); //''

// console.log(0 || false); //f
// console.log(false || 0); //0
// console.log(1 && "cherry"); //c
// console.log("banana" && 1); //1
// console.log(null && "pear"); //n
// console.log("peach" && undefined); //u
// console.log(undefined || "plum"); //p
// console.log("melon" || null); //m
// console.log(undefined && false); //und
// console.log(true || "watermelon"); //t
// console.log("watermelon" || true); //w
// console.log(false && "pineapple"); //f
// console.log("pineapple" && false); //f
// console.log(NaN || "kiwi"); //k
// console.log("kiwi" || NaN); //k
// console.log(NaN && "mango"); //nan
// console.log("mango" && NaN); //n
// console.log(Infinity || "apricot"); //i
// console.log("apricot" || Infinity); //a
// console.log(Infinity && "blueberry"); //b
// console.log("blueberry" && Infinity); //i
// console.log(null || undefined); //un
