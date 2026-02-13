// Тема: ВЛАСТИВОСТІ (properties)
// Завдання 1. textContent
// HTML:
// <p id="info">Старий текст</p
// Завдання:
// Знайди елемент p
// Заміни текст на:
// 👉 "Новий текст через властивість"

// const text = document.getElementById('info');
// text.textContent = 'Новий текст через властивість';

// Завдання 3. style
// HTML:
// <p id="colorText">Текст</p>
// Завдання:
// Зміни через JS:
// колір тексту → red
// розмір шрифту → 18px
// (через element.style)

// const elem = document.getElementById('colorText');
// elem.style.color = 'red';
// elem.style.fontSize = '18px';

// 🟢 Тема: АТРИБУТИ (attributes)
// Завдання 4. getAttribute
// HTML:
// <a id="link" href="https://google.com">Посилання</a>
// Завдання:
// Отримай значення атрибута href
// Виведи його в console.log

// const link = document.getElementById('link');
// console.log(link.getAttribute('href'));

// Завдання 5. setAttribute
// HTML:
// <img id="photo" src="cat.jpg">
// Завдання:
// Зміни src на dog.jpg
// Додай атрибут alt зі значенням "Собака"

// const imgElem = document.getElementById('photo');
// imgElem.src = 'dog.jpg';
// imgElem.alt ='Собака';

// // Завдання 6. removeAttribute
// // HTML:
// // <input id="input" disabled>
// // Завдання:
// // Знайди input
// // Забери атрибут disabled
// // 👉 поле має стати активним

// const input = document.getElementById('input');
// input.removeAttribute('disabled');
