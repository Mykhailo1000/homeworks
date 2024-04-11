// masivs
// part 1

let numbersArray = [5, 8, 12];
numbersArray[1] = 10;
console.log(numbersArray);

// part 2

let stringsArray = ["one", "two", "three"];
stringsArray.push("four");
console.log(stringsArray); 

// part 3

function sumArray(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return sum;
}

console.log(sumArray(numbersArray));

// part 4

let numbersArray2 = [3, 7, 9, 2, 6];
for (let i = 0; i < numbersArray2.length; i++) {
    console.log(numbersArray2[i]);
}

// part 5

let stringsArray2 = ["apple", "banana", "orange", "grape", "watermelon"];
for (let i = 0; i < stringsArray2.length; i++) {
    if (stringsArray2[i].length > 5) {
        console.log(stringsArray2[i]);
    }
}

// part 6

let numbersArray3 = [15, 27, 10, 8, 36, 42, 19, 5, 33, 12];
let maxNumber = Math.max(...numbersArray3);
console.log(maxNumber);

// part 7

for (let i = 0; i < numbersArray3.length; i++) {
    if (numbersArray3[i] % 2 === 0) {
        console.log(numbersArray3[i]);
    }
}
