
'use strict'


//                      dom_1

// part_1
// Створити розмітку з кнопкою та текстовим полем. За допомогою JavaScript отримати доступ до кнопки та текстового поля за їх ідентифікаторами та змінити текст на кнопці на значення текстового поля.

const textField = document.getElementById('textField');
const changeButton = document.getElementById('changeButton');

changeButton.addEventListener('click', function() {
    changeButton.textContent = textField.value;
});

// part_2
// Створити розмітку з заголовком та зображенням. За допомогою JavaScript отримати доступ до зображення та змінити значення атрибута "src" на шлях до іншого зображення.

const image = document.getElementById('.image');

image.src = 'new_image.png';

// part_3
// Створити розмітку з посиланням та зображенням. За допомогою JavaScript отримати доступ до посилання та змінити значення атрибута "href" на нову URL-адресу. Також отримати доступ до зображення та додати новий атрибут "alt" з описом зображення.

const link = document.getElementById('.link');
const image = document.getElementById('.image');

link.href = 'https://edu.goiteens.com/uk/learn/17134095/15266038/15266398/homework';

image.alt = 'image';

// part_4
// Створити розмітку зі списком елементів. За допомогою JavaScript отримати доступ до першого елемента списку та змінити його вміст на новий текст.

const list = document.getElementById('.list');
const firstItem = list.firstElementChild;
        
firstItem.textContent = 'New Text';

//                   dom_2

// part_1 
// Порахує і виведе в консоль кількість категорій в ul#categories, тобто елементів li.item. Вийде 'У списку 3 категорії.'.
// Для кожного елемента li.item в списку ul#categories, знайде і виведе в консоль текст заголовка елемента (тега h2) і кількість елементів в категорії (всіх вкладених в нього елементів li).

const categoriesList = document.getElementById('categories');
    const categories = categoriesList.querySelectorAll('ul');

    console.log(`У списку ${categories.length} категорії.`);

    categories.forEach(category => {
        const categoryName = category.previousElementSibling.textContent;
        const itemsCount = category.querySelectorAll('li').length;
        console.log(`Категорія: ${categoryName.trim()}`);
        console.log(`Кількість елементів: ${itemsCount}`);
    });


// part_2
// Напиши скрипт, який для кожного елемента масиву ingredients створить окремий li, після чого вставить всі li за одну операцію в список ul.ingredients. Для створення DOM-вузлів використовуй document.createElement().

const ingredients = [
    'Картопля',
    'Гриби',
    'Часник',
    'Помідори',
    'Зелень',
    'Приправи',
];

const ingredientsList = document.getElementById('ingredients');

ingredients.forEach(ingredient => {
    const listItem = document.createElement('li');
    listItem.textContent = ingredient;
    ingredientsList.appendChild(listItem);
});

// part 3
// Використовуй масив об'єктів images для створення тегів img вкладених в li. Для створення розмітки використовуй шаблонні рядки і insertAdjacentHTML().

const images = [
    {
        url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        alt: 'White and Black Long Fur Cat',
    },
    {
        url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
    },
    {
        url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        alt: 'Group of Horses Running',
    },
];

const gallery = document.getElementById('gallery');
images.forEach(image => {
    const li = document.createElement('li');
    const img = document.createElement('img');
    img.src = image.url;
    img.alt = image.alt;
    img.style.maxWidth = '100%';
    img.style.height = 'auto';
    li.appendChild(img);
    gallery.appendChild(li);
});

// part_4
// Лічильник складається зі спана і кнопок, які повинні збільшувати і зменшувати значення лічильника на 1.

const counterValue = document.getElementById('value');
const incrementBtn = document.querySelector('button[data-action="increment"]');
const decrementBtn = document.querySelector('button[data-action="decrement"]');

let value = 0;

const increment = () => {
  value += 1;
  counterValue.textContent = value;
};

const decrement = () => {
  value -= 1;
  counterValue.textContent = value;
};

incrementBtn.addEventListener('click', increment);
decrementBtn.addEventListener('click', decrement);
