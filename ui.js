import Game from "./game";
import Ai from "./ai";

const Ui = (() => {

    const setUpBoard = () => {
        const board = document.querySelector(".boardOptions");
        for (let i = 1; i < 10; i++) {
            const element = document.createElement("span");
            element.classList.add("number", "selectable");
            element.addEventListener("click", addToPlayer);
            element.textContent = i.toString();
            element.dataset.n = i;
            board.appendChild(element);
        };
    }

    const addToPlayer = () => {
        const activePlayer = Game.getActivePlayer();
        if (!Game.getGameIsOver()) {
            event.target.removeEventListener("click", addToPlayer);
            const num = Number(event.target.dataset.n);
            Game.addToPlayer(activePlayer, num);
            takeNumberFromBoard(activePlayer, event.target);
            Game.switchActivePlayer();
            updateStatus();
            setTimeout(computerMove, 2000);
        }
    }

    const takeNumberFromBoard = (player, el) => {
        const removedEl = document.querySelector(".boardOptions").removeChild(el);
        if (player == "Player") {
            document.querySelector(".playerPicks").appendChild(removedEl);
        } else {
            document.querySelector(".aiPicks").appendChild(removedEl);
        }
    };

    const computerMove = () => {
        const options = document.querySelectorAll(".selectable");
        let index = Ai.smartChoice();
        let chosenElement = Array.from(options)[index];
        console.log("Computer chose index", index, "Which is element", chosenElement.dataset.n);
        const activePlayer = Game.getActivePlayer();
        if (!Game.getGameIsOver()) {
            chosenElement.removeEventListener("click", addToPlayer);
            chosenElement.classList.remove("selectable");
            const num = Number(chosenElement.dataset.n);
            Game.addToPlayer(activePlayer, num);
            takeNumberFromBoard(activePlayer, chosenElement);
            Game.switchActivePlayer();
            updateStatus();
        }
    };

    const updateStatus = () => {
        const statusLine = document.querySelector(".status");

        if (Game.getGameIsOver() && Game.getPlayerHasWon()) {
            statusLine.textContent = "Status: You win";
        } else if (Game.getGameIsOver() && Game.getComputerHasWon()) {
            statusLine.textContent = "Status: You Lose";
        } else if (Game.getActivePlayer() == "Player" && !Game.getGameIsOver()) {
            statusLine.textContent = "Status: Your turn";
        } else if (Game.getActivePlayer() == "Computer" && !Game.getGameIsOver()) {
            statusLine.textContent = "Status: Computers turn";
        } else {
            statusLine.textContent = "Status: It's a draw";
        }
    }

    const init = () => {
        setUpBoard();
        updateStatus();
    }

    return {init};
})();

export default Ui;
