// hw-4_1
// Створити розмітку з кнопкою та текстовим полем. За допомогою JavaScript отримати доступ до кнопки та текстового поля за їх ідентифікаторами та змінити текст на кнопці на значення текстового поля.

const textField = document.getElementById('textField');
const changeButton = document.getElementById('changeButton');

changeButton.addEventListener('click', function() {
    changeButton.textContent = textField.value;
});

// hw-4_2
// Створити розмітку з заголовком та зображенням. За допомогою JavaScript отримати доступ до зображення та змінити значення атрибута "src" на шлях до іншого зображення.

const image = document.getElementById('.image');

image.src = 'new_image.png';

// hw-4_3
// Створити розмітку з посиланням та зображенням. За допомогою JavaScript отримати доступ до посилання та змінити значення атрибута "href" на нову URL-адресу. Також отримати доступ до зображення та додати новий атрибут "alt" з описом зображення.

const link = document.getElementById('.link');
const image = document.getElementById('.image');

link.href = 'https://edu.goiteens.com/uk/learn/17134095/15266038/15266398/homework';

image.alt = 'image';

// hw-4_4
// Створити розмітку зі списком елементів. За допомогою JavaScript отримати доступ до першого елемента списку та змінити його вміст на новий текст.

const list = document.getElementById('.list');
const firstItem = list.firstElementChild;
        
firstItem.textContent = 'New Text';

