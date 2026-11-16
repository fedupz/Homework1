/* Игра «Угадай число» */

function guessNumber() {
    const secretNumber = Math.floor(Math.random() * 100) + 1;

    while (true) {
        let answer = prompt('Угадайте число от 1 до 100');

        if (answer === null) {
            break;
        }

        let number = Number(answer);

        if (isNaN(number) || number < 1 || number > 100 || number % 1 !== 0) {
            alert('Введите целое число от 1 до 100');
        } else if (number < secretNumber) {
            alert('Загаданное число больше');
        } else if (number > secretNumber) {
            alert('Загаданное число меньше');
        } else {
            alert('Поздравляем! Вы угадали число!');
            break;
        }
    }
}

/* Игра «Простая арифметика» */

function simpleMath() {
    let a = Math.floor(Math.random() * 10) + 1;
    let b = Math.floor(Math.random() * 10) + 1;

    const operations = ['+', '-', '*', '/'];
    const operation = operations[Math.floor(Math.random() * 4)];

    let correctAnswer;

    switch (operation) {
        case '+':
            correctAnswer = a + b;
            break;

        case '-':
            correctAnswer = a - b;
            break;

        case '*':
            correctAnswer = a * b;
            break;

        case '/':
            a = a * b;
            correctAnswer = a / b;
            break;
    }

    let answer = prompt(`Решите пример: ${a} ${operation} ${b}`);

    if (answer === null) {
        return;
    }

    if (answer.trim() !== '' && Number(answer) === correctAnswer) {
        alert('Верно!');
    } else {
        alert(`Неверно! Правильный ответ: ${correctAnswer}`);
    }
}

/* Игра «Переверни текст» */

function flipText() {
    let text = prompt('Введите текст');

    if (text === null) {
        return;
    }

    let reversedText = text.split('').reverse().join('');

    alert(reversedText);
}