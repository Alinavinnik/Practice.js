//Отримання замовлення (перевірка на наявність)
//збір замовлення
//пакування
// передача кур'єру

const menu = {
  availableDishes: ['suhi', 'borsh', 'pizza', 'salad', 'burger'],
  availableDrink: ['cola', 'fanta', 'pepsi'],
};

function fulfieldOrder(dishes, drink, production) {
  const unabailableDish = dishes.filter(
    dish => !menu.availableDishes.includes(dish)
  );
  const unabailableDrink = drink.filter(
    drink => !menu.availableDrink.includes(drink)
  );
  setTimeout(() => {
    if (unabailableDish.length) {
      console.log(
        `Sorry this ${unabailableDish.join(' ,')} is not available.Plese choose another one!`
      );
      return;
    } else if (unabailableDrink.length) {
      console.log(
        `Sorry this ${unabailableDrink.join(' ,')} is not available.Plese choose another one!`
      );
      return;
    }
    console.log(`Thank you for the order!`);
    production();
  }, 1000);
}

function production() {
  setTimeout(() => console.log('The order is assembled! '), 2000);

  setTimeout(() => console.log('The order is ready! '), 1000);
  setTimeout(
    () => console.log('An courier picked your order!Please wait for call'),
    1000
  );
}

fulfieldOrder(['pizza', 'burger', 'pasta'], ['cola'], production);
