const randomNumber = Math.floor(Math.random() * 50) + 1;
        let attempts = 0;

        document.getElementById('guessButton').onclick = function() {
            const userGuess = parseInt(document.getElementById('guessInput').value);
            attempts++;

            if (userGuess < 1 || userGuess > 100) {
                document.getElementById('message').innerText = "Please enter a number between 1 and 50.";
            } else if (userGuess < randomNumber) {
                document.getElementById('message').innerText = "Too low! Try again.";
            } else if (userGuess > randomNumber) {
                document.getElementById('message').innerText = "Too high! Try again.";
            } else {
                document.getElementById('message').innerText = `Congratulations! You've guessed the number ${randomNumber} in ${attempts} attempts.`;
                document.getElementById('attempts').innerText = "";
                // Reset game after winning
                resetGame();
            }

            document.getElementById('attempts').innerText = `Attempts: ${attempts}`;
        };

        function resetGame() {
            attempts = 0;
            document.getElementById('guessInput').value = '';
            setTimeout(() => {
                document.getElementById('message').innerText = "";
                document.getElementById('attempts').innerText = "";
            }, 10000);
        }