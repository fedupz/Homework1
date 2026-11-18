/* Задание 1 */

let text = 'js';

console.log(text.toUpperCase());


/* Задание 2 */

function searchStrings(arr, str) {
    return arr.filter(word =>
        word.toLowerCase().startsWith(str.toLowerCase())
    );
}

console.log(searchStrings(['Кошка', 'Кит', 'Собака', 'коала'], 'КО'));


/* Задание 3 */

let number = 32.58884;

console.log(Math.floor(number));
console.log(Math.ceil(number));
console.log(Math.round(number));


/* Задание 4 */

console.log(Math.min(52, 53, 49, 77, 21, 32));
console.log(Math.max(52, 53, 49, 77, 21, 32));


/* Задание 5 */

function printRandomNumber() {
    console.log(Math.floor(Math.random() * 10) + 1);
}

printRandomNumber();

/* Задание 6 */

function getRandomArray(n) {
    const arr = [];

    for (let i = 0; i < Math.floor(n / 2); i++) {
        arr.push(Math.floor(Math.random() * (n + 1)));
    }

    return arr;
}

console.log(getRandomArray(10));


/* Задание 7 */

function getRandomNumber(a, b) {
    const min = Math.min(a, b);
    const max = Math.max(a, b);

    return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(getRandomNumber(5, 15));


/* Задание 8 */

console.log(new Date());


/* Задание 9 */

let currentDate = new Date();
let futureDate = new Date(currentDate);

futureDate.setDate(futureDate.getDate() + 73);

console.log(futureDate);

/* Задание 10 */

function formatDate(date) {
    const months = [
        'января', 'февраля', 'марта', 'апреля',
        'мая', 'июня', 'июля', 'августа',
        'сентября', 'октября', 'ноября', 'декабря'
    ];

    const days = [
        'воскресенье', 'понедельник', 'вторник',
        'среда', 'четверг', 'пятница', 'суббота'
    ];

    let dateString = `Дата: ${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()} — это ${days[date.getDay()]}.`;

    let timeString = `Время: ${date.toLocaleTimeString('ru-RU')}`;

    return `${dateString}\n${timeString}`;
}

console.log(formatDate(new Date()));