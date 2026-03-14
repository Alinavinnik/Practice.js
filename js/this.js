// //Задача 1
// const user = {
//   name: 'Anna',
//   sayName() {
//     console.log(this.name);
//   },
// };

// user.sayName(); // Anna

// const fn = user.sayName;
// fn(); // undefined  якщо strict,бо фун-я передається посиланням

// //Задача 2
// const user1 = {
//   name: 'Tom',
//   say() {
//     console.log(this.name);
//   },
// };

// setTimeout(user1.say, 1000); //undefined  якщо strict,бо фун-я передається посиланням

// //Задача 3
// const obj = {
//   name: 'Kate',
//   say: () => {
//     console.log(this.name);
//   },
// };

// obj.say(); //undefined бо в стрілковій фукції не має власного  this і бере його з лексичного оточення
// //Задача 4
// const user3 = {
//   name: 'John',

//   say() {
//     const inner = () => {
//       console.log(this.name);
//     };

//     inner();
//   },
// };

// user3.say(); //John ,бо стрілочна фунція взяла контекст об'єкту user3

//Задача 5
// function say() {
//   console.log(this.name);
// }

// const user1 = { name: 'Tom' };
// const user2 = { name: 'Bob' };

// say.call(user1); //Tom
// say.call(user2); //Bob

// //Задача 6
// const user = {
//   name: 'Anna',
//   say() {
//     console.log(this.name);
//   },
// };

// const fn = user.say.bind(user);

// fn(); //Anna

// //Задача 7
// const obj = {
//   name: 'Outer',

//   inner: {
//     name: 'Inner',

//     say() {
//       console.log(this.name);
//     },
//   },
// };

// obj.inner.say(); // Inner але тут поясни

// //Задача 8
// const obj = {
//   name: 'Tom',

//   say() {
//     function inner() {
//       console.log(this.name);
//     }

//     inner();
//   },
// };

// obj.say(); // undefined бо в inner() викликається без об'єкту

//Задача 9
// const obj = {
//   name: 'Alex',

//   say() {
//     console.log(this.name);
//   },
// };

// obj.say(); // Alex
// (obj.say = obj.say)();
