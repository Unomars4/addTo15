//Handles all user interactions of game
import Game from "./game";

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

    const init = () => {
        setUpBoard();
    }

    return {init};
})();

export default Ui;
