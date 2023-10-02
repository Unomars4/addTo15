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
        console.log("create 9 elements")
    }

    const addToPlayer = () => {

    }

    const init = () => {
        setUpBoard();
        console.log("Setting up the board.");
    }

    return {init};
})();

export default Ui;
