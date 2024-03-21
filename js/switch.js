// switch
// part 1

function showMessage() {
    var selectElement = document.getElementById("beverage");
    var selectedValue = selectElement.value;
    var messageElement = document.getElementById("message");

    switch (selectedValue) {
        case "coffee":
            messageElement.textContent = "Ви обрали каву.";
            break;
        case "tea":
            messageElement.textContent = "Ви обрали чай.";
            break;
        case "juice":
            messageElement.textContent = "Ви обрали сік.";
            break;
        default:
            messageElement.textContent = "";
    }
}

// part 2

function checkDay() {
    var inputText = document.getElementById("dayInput").value.toLowerCase();
    var resultElement = document.getElementById("result");

    switch (inputText) {
        case "понеділок":
        case "вівторок":
        case "середа":
        case "четвер":
        case "п'ятниця":
            resultElement.textContent = "Це робочий день.";
            break;
        case "субота":
        case "неділя":
            resultElement.textContent = "Це вихідний день.";
            break;
        default:
            resultElement.textContent = "Введено некоректний день тижня.";
    }
}

// part 3

function checkSeason() {
    var month = parseInt(document.getElementById("monthInput").value);
    var season;

    switch (month) {
        case 12:
        case 1:
        case 2:
            season = "Зима";
            break;
        case 3:
        case 4:
        case 5:
            season = "Весна";
            break;
        case 6:
        case 7:
        case 8:
            season = "Літо";
            break;
        case 9:
        case 10:
        case 11:
            season = "Осінь";
            break;
        default:
            season = "Невірно введений місяць";
    }

    alert("Місяць " + month + " належить до пори року: " + season);
}

// part 4

function getDaysInMonth() {
    var month = parseInt(document.getElementById("monthInput").value);
    var days;

    switch (month) {
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            days = 31;
            break;
        case 4:
        case 6:
        case 9:
        case 11:
            days = 30;
            break;
        case 2:
            days = 28; // За умови, що це не високосний рік
            break;
        default:
            days = "Невірно введений місяць";
    }

    alert("У місяці " + month + " " + days + " днів");
}

// part 5

function checkColor() {
    var color = document.getElementById("colorInput").value.toLowerCase();
    var message;

    switch (color) {
        case "червоний":
            message = "Стоп";
            break;
        case "зелений":
            message = "Йти";
            break;
        case "жовтий":
            message = "Чекати";
            break;
        default:
            message = "Невідомий сигнал";
    }

    alert("Дія для кольору '" + color + "': " + message);
}

// part 6

function calculate() {
    var num1 = parseFloat(document.getElementById("number1").value);
    var num2 = parseFloat(document.getElementById("number2").value);
    var operation = document.getElementById("operation").value;
    var result;

    switch (operation) {
        case "+":
            result = num1 + num2;
            break;
        case "-":
            result = num1 - num2;
            break;
        case "*":
            result = num1 * num2;
            break;
        case "/":
            if (num2 !== 0) {
                result = num1 / num2;
            } else {
                alert("Попередження: Ділення на нуль!");
                return;
            }
            break;
        default:
            alert("Невідома операція");
            return;
    }

    alert("Результат: " + result);
}