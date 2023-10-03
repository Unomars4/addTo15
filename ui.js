import Game from "./game";
import Ai from "./ai";

const Ui = (() => {

    const setUpBoard = () => {
        const board = document.querySelector(".boardOptions");
        for (let i = 1; i < 10; i++) {
            const element = document.createElement("span");
            element.classList.add("number");
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
        const options = document.querySelectorAll(".number");
        let index = Ai.randomMoves();
        console.log("Computer chose index:", index);
        let chosenElement = Array.from(options)[index];
        const activePlayer = Game.getActivePlayer();
        if (!Game.getGameIsOver()) {
            chosenElement.removeEventListener("click", addToPlayer);
            const num = Number(chosenElement.dataset.n);
            Game.addToPlayer(activePlayer, num);
            takeNumberFromBoard(activePlayer, chosenElement);
            Game.switchActivePlayer();
        }
    };

    const init = () => {
        setUpBoard();
    }

    return {init};
})();

export default Ui;
