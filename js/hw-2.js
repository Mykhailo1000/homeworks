
let celsiusTemperature = 25;
let fahrenheitTemperature = (celsiusTemperature * 9/5) + 32;
console.log(`Температура за Цельсієм: ${celsiusTemperature}°C`);
console.log(`Температура за Фаренгейтом: ${fahrenheitTemperature}°F`);

let daysInMonth = 31;
let hoursInMonth = daysInMonth * 24;
let minutesInMonth = hoursInMonth * 60;
console.log(`Кількість годин у місяці: ${hoursInMonth} год.`);
console.log(`Кількість хвилин у місяці: ${minutesInMonth} хв.`);

let healthLevel = 80;
let energyLevel = 75;
healthLevel -= 20;
energyLevel -= 10;
console.log(`Рівень здоров'я гравця: ${healthLevel}`);
console.log(`Рівень енергії гравця: ${energyLevel}`);

let purchaseAmount = 500;
let discountedAmount = purchaseAmount * 0.9;
console.log(`Сума покупки зі знижкою: ${discountedAmount}`);

let floatingNumber = 7.89;
console.log(`Округлене число: ${Math.floor(floatingNumber)}`);

let floatString = "3.14";
let parsedFloat = parseFloat(floatString);
console.log(`Число з рядка: ${parsedFloat}`);


let intString = "42";
let parsedInt = parseInt(intString);
console.log(`Ціле число з рядка: ${parsedInt}`);

let number = 64;
let squareRoot = Math.sqrt(number);
console.log(`Квадратний корінь числа: ${squareRoot}`);

let integerValue = 10;
let stringNumber = "20";
let parsedIntegerFromString = parseInt(stringNumber);
console.log(`Ціле число з рядка: ${parsedIntegerFromString}`);
let integerToString = integerValue.toString();
console.log(`Рядок з цілого числа: ${integerToString}`);