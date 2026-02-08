// Клас TemperatureConverter: Напишіть клас TemperatureConverter, який буде мати методи для конвертації температур між градусами Цельсія та Фаренгейта.

// class TemperatureConverter {
//   convertToCelsius(temp) {
//     return ((temp - 32) * 5) / 9;
//   }
//   convertToFar(temp) {
//     return (temp * 9) / 5 + 32;
//   }
// }
// const coverter = new TemperatureConverter();

// console.log(Math.round(coverter.convertToCelsius(100)));
// console.log(coverter.convertToFar(100));

// Клас ShoppingCart: Реалізуйте клас Product для представлення товару з полями name, price та quantity. Потім створіть клас ShoppingCart, який зберігатиме список товарів та надавати методи для додавання товарів, підрахунку загальної вартості та виведення списку товарів.

class Product {
  constructor(arg) {
    this.name = arg.name;
    this.price = arg.price;
    this.quantity = arg.quantity;
  }
}

class ShoppingCart {
  itemList = [];
  addItem(item) {
    this.itemList.push(item);
  }
  totalPrice() {
    return this.itemList.reduce(
      (acc, item) => (acc += item.price * item.quantity),
      0
    );
  }
  showItemList() {
    return this.itemList;
  }
}
const prod = new Product({
  name: 'cucumber',
  price: 30,
  quantity: 2,
});
const prod2 = new Product({
  name: 'berry',
  price: 60,
  quantity: 3,
});
const card = new ShoppingCart();
card.addItem(prod);
console.log(card.showItemList());
console.log(card.totalPrice());
card.addItem(prod2);
console.log(card.totalPrice());
