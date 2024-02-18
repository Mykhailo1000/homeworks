let result = 5 + 5 + '5';
console.log(result); 
console.log(typeof result);

let email = 'example@example.com';

let containsAtSymbol = email.includes('@');

let totalCharacters = email.length;

console.log(`Чи міститься символ @ в email: ${containsAtSymbol}`);
console.log(`Загальна кількість символів в email: ${totalCharacters}`);

let word1 = 'My';
let word2 = 'name';
let word3 = 'is';

let fullName = `${word1} ${word2} ${word3} Viktor`;

console.log(`Повне ім'я: ${fullName}`);

let userName = 'Олександро';
let payment = 300;

alert(`Дякуємо, ${userName}! До сплати ${payment} гривень`);
