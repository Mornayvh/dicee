document.addEventListener("DOMContentLoaded", () => {
    const heading = document.querySelector(".heading");
    const refreshButton = document.querySelector(".play-button");
    const player1Img = document.querySelector(".img1");
    const player2Img = document.querySelector(".img2");

    function rollDie() {
        return Math.floor(Math.random() * 6) + 1;
    }

    function rollDice() {
        const player1Dice = rollDie();
        const player2Dice = rollDie();

        player1Img.setAttribute("src", `./images/dice${player1Dice}.png`);
        player2Img.setAttribute("src", `./images/dice${player2Dice}.png`);

        if (player1Dice > player2Dice) {
            heading.textContent = "Player 1 Wins";
        }

        else if (player1Dice < player2Dice) {
            heading.textContent = "Player 2 Wins";
        }

        else {
            heading.textContent = "It's a Draw";
        }
    }

    rollDice();

    refreshButton.addEventListener("click", () => {
        rollDice();

        refreshButton.classList.add("animate-play-button");
        
        setTimeout(() => {
            refreshButton.classList.remove("animate-play-button");
        }, 100);
    })
});