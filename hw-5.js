/* Задание 1 */

const arr1 = [1, 5, 4, 10, 0, 3];

for (let i = 0; i < arr1.length; i++) {
    console.log(arr1[i]);

    if (arr1[i] === 10) {
        break;
    }
}


/* Задание 2 */

const arr2 = [1, 5, 4, 10, 0, 3];

console.log(arr2.indexOf(4));


/* Задание 3 */

const arr3 = [1, 3, 5, 10, 20];

console.log(arr3.join(' '));


/* Задание 4 */

const arr4 = [];

for (let i = 0; i < 3; i++) {
    const innerArr = [];

    for (let j = 0; j < 3; j++) {
        innerArr.push(1);
    }

    arr4.push(innerArr);
}

console.log(arr4);


/* Задание 5 */

const arr5 = [1, 1, 1];

arr5.push(2, 2, 2);

console.log(arr5);

/* Задание 6 */

const arr6 = [9, 8, 7, 'a', 6, 5];

arr6.sort();
arr6.pop();

console.log(arr6);


/* Задание 7 */

const arr7 = [9, 8, 7, 6, 5];

let userNumber = Number(prompt('Угадайте число'));

if (arr7.includes(userNumber)) {
    alert('Угадал');
} else {
    alert('Не угадал');
}


/* Задание 8 */

let str = 'abcdef';

console.log(str.split('').reverse().join(''));


/* Задание 9 */

const arr9 = [[1, 2, 3], [4, 5, 6]];
const newArr9 = [];

for (let i = 0; i < arr9.length; i++) {
    for (let j = 0; j < arr9[i].length; j++) {
        newArr9.push(arr9[i][j]);
    }
}

console.log(newArr9);


/* Задание 10 */

const arr10 = [2, 5, 8, 3, 7];

for (let i = 0; i < arr10.length - 1; i++) {
    console.log(arr10[i] + arr10[i + 1]);
}

/* Задание 11 */

function getSquares(numbers) {
    return numbers.map(number => number ** 2);
}

console.log(getSquares([1, 2, 3, 4, 5]));


/* Задание 12 */

function getWordLengths(words) {
    return words.map(word => word.length);
}

console.log(getWordLengths(['Привет', 'Мир', 'JavaScript']));


/* Задание 13 */

function getNegativeNumbers(numbers) {
    return numbers.filter(number => number < 0);
}

console.log(getNegativeNumbers([-5, 3, -2, 8, 0, -7]));


/* Задание 14 */

const arr14 = [];

for (let i = 0; i < 10; i++) {
    arr14.push(Math.floor(Math.random() * 11));
}

const evenNumbers = arr14.filter(number => number % 2 === 0);

console.log(arr14);
console.log(evenNumbers);


/* Задание 15 */

const arr15 = [];

for (let i = 0; i < 6; i++) {
    arr15.push(Math.floor(Math.random() * 10) + 1);
}

const sum = arr15.reduce((total, number) => total + number, 0);
const average = sum / arr15.length;

console.log(arr15);
console.log(average);