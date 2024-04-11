
// cycle
// part 1

let i = 1;

while (i <= 10) {
    console.log(i);
    i++;
}

// part 2

for (let i = 2; i <= 20; i++) {
    if (i % 2 !== 0) {
        continue;
    }
    console.log(i);
}

// part 3

for (let i = 1; i <= 10; i++) {
    let result = 7 * i;
    console.log("7 * " + i + " = " + result);
}

// part 4

let numbers = [1, 2, 3, 4, 5];

let i1 = 0;

while (i1 < numbers.length) {
    console.log(numbers[i1]);
    i1++;
}

// part 5

let numbers1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i < numbers1.length; i++) {

    if (numbers1[i] !== 7) {
        console.log(numbers1[i]);
    } else {
        break;
    }
}

// part 6

let n = 10;

for (let i = 0; i < n; i++) {
    console.log(i);
    if (i >= n - 1) {
        break;
    }
}

// part 7

let i2 = 1;

while (i2 <= 20) {

    if (i2 % 3 === 0) {
        i2++;
        continue;
    }
    console.log(i2);
    i2++;
}
