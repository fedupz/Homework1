function rockPaperScissors() {
    const options = ['камень', 'ножницы', 'бумага'];

    let userChoice = prompt('Выберите: камень, ножницы или бумага');

    if (userChoice === null) {
        return;
    }

    userChoice = userChoice.toLowerCase().trim();

    if (!options.includes(userChoice)) {
        alert('Вы ввели неправильное значение');
        return;
    }

    const computerChoice = options[Math.floor(Math.random() * options.length)];

    let result;

    if (userChoice === computerChoice) {
        result = 'Ничья!';
    } else if (
        (userChoice === 'камень' && computerChoice === 'ножницы') ||
        (userChoice === 'ножницы' && computerChoice === 'бумага') ||
        (userChoice === 'бумага' && computerChoice === 'камень')
    ) {
        result = 'Вы победили!';
    } else {
        result = 'Вы проиграли!';
    }

    alert(`Ваш выбор: ${userChoice}\nВыбор компьютера: ${computerChoice}\n${result}`);
}