// Générer un nombre aléatoire entre 1 et 100 Math.floor(Math.random() * 100) + 1
// Générer un nombre aléatoire entre 1 et 100
const randomNumber = 73;
let attempts = 0;
const maxAttempts = 4; // Nombre maximum de tentatives

document.getElementById('guessButton').addEventListener('click', function() {
    const guessInput = document.getElementById('guessInput');
    const message = document.getElementById('message');
    const userGuess = parseInt(guessInput.value);

    if (isNaN(userGuess) || userGuess < 1 || userGuess > 101) {
        message.textContent = "Veuillez entrer un nombre valide entre 1 et 101.";
        return;
    }

    attempts++;

    if (attempts >= maxAttempts) {
        message.textContent = `Perdu ! Le nombre à deviner était ${randomNumber}.`;
        message.style.color = "red";
        guessInput.disabled = true;
        this.disabled = true;
        return;
    }

    if (userGuess < randomNumber) {
        message.textContent = `Trop petit ! Essaie encore. Tentatives restantes : ${maxAttempts - attempts}`;
    } else if (userGuess > randomNumber) {
        message.textContent = `Trop grand ! Essaie encore. Tentatives restantes : ${maxAttempts - attempts}`;
    } else {
        message.textContent = `Bravo ! Tu as trouvé le nombre en ${attempts} tentatives. DEEPTECH vous félicite !`;
        message.style.color = "green";
        guessInput.disabled = true;
        this.disabled = true;
    }

    guessInput.value = '';
    guessInput.focus();
});