// part 1
function checkFields() {
    var field1Value = document.getElementById("field1").value;
    var field2Value = document.getElementById("field2").value;

    if (field1Value && field2Value) {
        alert("Обидва поля заповнені");
    } else {
        alert("Не всі поля заповнені");
    }
}

// part 2

function checkSum() {
    var number1 = parseFloat(document.getElementById("number1").value);
    var number2 = parseFloat(document.getElementById("number2").value);

    var sum = number1 + number2;

    if (sum > 10) {
        alert("Сума більша за 10");
    } else {
        alert("Сума менша або дорівнює 10");
    }
}

// part 3

function checkText() {
    var inputText = document.getElementById("textInput").value;

    if (inputText.includes("JavaScript")) {
        alert("Текст містить слово JavaScript");
    } else {
        alert("Текст не містить слово JavaScript");
    }
}

// part 4 

function checkNumber() {
    var number = document.getElementById("numberInput").value;

    if (number > 10 && number < 20) {
        alert("Число входить в діапазон від 10 до 20");
    } else {
        alert("Число не входить в діапазон від 10 до 20");
    }
}

// part 5

function validateForm() {
    var name = document.getElementById("nameInput").value;
    var email = document.getElementById("emailInput").value;
    var password = document.getElementById("passwordInput").value;

    if (name.length < 3 || !email.includes("@") || email.indexOf(".") === -1 || password.length < 6) {
        alert("Будь ласка, перевірте правильність введених даних.");
        return false;
    } else {
        // Перенаправлення на іншу сторінку
        window.location.href = "success.html";
    }
}