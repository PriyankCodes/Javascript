const maxAttempts = 5;
let attempts = 0;

// Generate random target number between 1 to 10
const target = Math.floor(Math.random() * 10) + 1;
document.getElementById("target-number").textContent = target;

const container = document.getElementById('buttons-container');
const messageDiv = document.getElementById('message');
const attemptsDiv = document.getElementById('attempts-left');
attemptsDiv.textContent = `Attempts Left: ${maxAttempts - attempts}`;

// Shuffle numbers 1-10
const numbers = [...Array(10).keys()].map(n => n + 1);
const shuffledNumbers = numbers.sort(() => Math.random() - 0.5);

shuffledNumbers.forEach(num => {
    const btn = document.createElement('button');
    btn.dataset.value = num;  

    btn.onclick = function () {
        if (attempts >= maxAttempts || btn.disabled) return;

        btn.textContent = btn.dataset.value; 
        attempts++;

        if (parseInt(btn.dataset.value) === target) {
            btn.classList.add('green');
            messageDiv.textContent = "Congratulations! You found it!";
            disableAllButtons();
        } else {
            btn.classList.add('red');
            btn.disabled = true;
            if (attempts >= maxAttempts) {
                messageDiv.textContent = "Out of tries!";
                disableAllButtons();
            }
        }
        attemptsDiv.textContent = `Attempts Left: ${maxAttempts - attempts}`;
    };

    container.appendChild(btn);
});

function disableAllButtons() {
    const allButtons = document.querySelectorAll("button");
    allButtons.forEach(b => b.disabled = true);
}
