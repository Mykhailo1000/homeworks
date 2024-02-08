let age = 25;
console.log("13" + age);



let name = "Mykhailo";
console.log("Mykhailo" + name);



let isStudent = true;
console.log("Чи я студент? " + isStudent);



let myString = "Прагніть не до успіху, а до цінностей, які він дає";
console.log("Моя улюблена цитата: " + myString);



let myNumber = 42;
myNumber += 10;
console.log("42" + myNumber);



let myNull = null;
console.log("null" + myNull);



let userName = prompt("Будь ласка введіть своє ім'я:");
alert("Привіт, " + userName + "!");


if (confirm("Ви впевнені, що хочете продовжити?")) {
  alert("Дякую за підтвердження!");
} else {
  alert("Дію відмінено!");
}




alert("Увага! Дія, яку ви збираєтеся виконати, є небезпечною!");
if (confirm("Ви впевнені, що хочете продовжити?")) {
  alert("Дякую за підтвердження!");
} else {
  alert("Дію відмінено!");
}

