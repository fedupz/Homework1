 /* Задание 1 */

function minNumber(a, b) {
    if (a < b) {
        return a;
    } else {
        return b;
    }
}

console.log(minNumber(8, 4));
console.log(minNumber(6, 6));


/* Задание 2 */

function checkEven(n) {
    if (n % 2 === 0) {
        return 'Число четное';
    } else {
        return 'Число нечетное';
    }
}

console.log(checkEven(4));
console.log(checkEven(7));


/* Задание 3 */

function printSquare(n) {
    console.log(n * n);
}

function returnSquare(n) {
    return n * n;
}

printSquare(5);
console.log(returnSquare(5));


/* Задание 4 */

function correctAge() {
    let age = prompt('Сколько вам лет?');

    if (age === null || age === '' || isNaN(age) || Number(age) < 0) {
        return 'Вы ввели неправильное значение';
    } else if (Number(age) <= 12) {
        return 'Привет, друг!';
    } else {
        return 'Добро пожаловать!';
    }
}

alert(correctAge());


/* Задание 5 */

function multiplyNumbers(a, b) {
    if (isNaN(a) || isNaN(b) || a === '' || b === '') {
        return 'Одно или оба значения не являются числом';
    }

    return Number(a) * Number(b);
}

console.log(multiplyNumbers(5, 4));
console.log(multiplyNumbers('Привет', 4));


/* Задание 6 */

function cubeNumber(n = prompt('Введите число')) {
    if (n === null || n === '' || isNaN(n)) {
        return 'Переданный параметр не является числом';
    }

    n = Number(n);

    return `${n} в кубе равняется ${n ** 3}`;
}

alert(cubeNumber());

for (let i = 0; i <= 10; i++) {
    console.log(cubeNumber(i));
}


/* Задание 7 */

const circle1 = {
    radius: 5,

    getArea: function() {
        return Math.PI * this.radius ** 2;
    },

    getPerimeter: function() {
        return 2 * Math.PI * this.radius;
    }
};

const circle2 = {
    radius: 10,

    getArea: function() {
        return Math.PI * this.radius ** 2;
    },

    getPerimeter: function() {
        return 2 * Math.PI * this.radius;
    }
};

console.log(circle1.getArea());
console.log(circle1.getPerimeter());

console.log(circle2.getArea());
console.log(circle2.getPerimeter());