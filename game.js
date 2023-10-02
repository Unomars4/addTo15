//Handles all the game logic,turns, whether its over or not
import GameBoard from "./gameboard"

const Game = (() => {
    const players = ["Player", "Computer"]
    let activePlayer = players[0], gameIsOver = false;

    const getActivePlayer = () => activePlayer;
    const getGameIsOver = () => gameIsOver;

    const addToPlayer = (activePlayer, num) => {
        GameBoard.updateNumbers(activePlayer, num);
        GameBoard.updateBoard(n);
    }
    const endGame = () => gameIsOver = true;
    const switchActivePlayer = () => {
        activePlayer = activePlayer == players[0] ? players[1] : players[0];
    }

    return {getActivePlayer, switchActivePlayer, endGame, getGameIsOver};
})();

export default Game;
