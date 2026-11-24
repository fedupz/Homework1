/* Задание 1 */

const title1 = document.querySelector('#task1 h1');
const button1 = document.querySelector('#task1 button');

button1.addEventListener('click', function() {
    if (title1.style.display === 'none') {
        title1.style.display = 'block';
        button1.textContent = 'Скрыть';
    } else {
        title1.style.display = 'none';
        button1.textContent = 'Показать';
    }
});


/* Задание 2 */

const paragraph2 = document.querySelector('#task2 p');
const button2 = document.querySelector('#task2 button');

button2.addEventListener('click', function() {
    paragraph2.style.color = 'blue';
});


/* Задание 3 */

const title3 = document.querySelector('#task3 h1');
const button3 = document.querySelector('#task3 button');

button3.addEventListener('click', function() {
    title3.textContent = 'Привет, мир!';
});


/* Задание 4 */

const descriptions4 = document.querySelectorAll('#task4 .description');

descriptions4.forEach(function(element) {
    element.textContent = 'Измененный текст';
});


/* Задание 5 */

const descriptions5 = document.querySelectorAll('#task5 p.description');

descriptions5.forEach(function(element) {
    element.textContent = 'Новый текст';
});


/* Задание 6 */

const button6 = document.querySelector('#task6 button');

button6.addEventListener('click', function() {
    const paragraph = document.createElement('p');
    paragraph.textContent = 'Новый абзац';
    document.body.appendChild(paragraph);
});


/* Задание 7 */

const button7 = document.querySelector('#task7 button');

button7.addEventListener('click', function() {
    const firstParagraph = document.querySelector('#task7 p.description');

    if (firstParagraph) {
        firstParagraph.remove();
    }
});