//add feature of display previous guesses
let numbers = [12, 45, 78, 23, 56, 89, 34, 67, 90, 11];
let randomNumber = numbers[Math.floor(Math.random() * numbers.length)];

let guessInput = document.querySelector('.guessInput');
let guessButton = document.querySelector('.submitGuess');
let resultDisplay = document.querySelector('.resultMessage');

let attemptsCount = document.querySelector('.attemptsCount');
let attempts = 3;

let previousGuesses = [];

guessButton.addEventListener('click', function () {
    let userGuess = parseInt(guessInput.value);
    attempts--;
    attemptsCount.textContent = 3 - attempts;

    previousGuesses.push(userGuess);
    document.querySelector('.previousGuess').textContent = 'Previous guesses: ' + previousGuesses.join(', ');

    if (attempts > 0) {
        if (userGuess === randomNumber) {
            resultDisplay.textContent = 'Congratulations! You guessed the number!';
        } else if (userGuess < randomNumber) {
            resultDisplay.textContent = 'Too low! Try again.';
        } else if (userGuess > randomNumber) {
            resultDisplay.textContent = 'Too high! Try again.';
        }
    } else {
        resultDisplay.textContent = `Sorry, you've used all your attempts. The number was ${randomNumber}.`;
    }

    guessInput.value = '';
});
