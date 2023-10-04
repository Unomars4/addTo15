//Handles all the game logic,turns, whether its over or not
import GameBoard from "./gameboard"

const Game = (() => {
    const players = ["Player", "Computer"]

    let activePlayer = players[0];

    const getActivePlayer = () => activePlayer;

    const getGameIsOver = () => GameBoard.playerWon() || GameBoard.computerWon();

    const getPlayerHasWon = () => GameBoard.playerWon();
    const getComputerHasWon = () => GameBoard.computerWon();

    const addToPlayer = (activePlayer, num) => {
        GameBoard.updateNumbers(activePlayer, num);
        GameBoard.updateBoard(num);
        GameBoard.updateCounts(activePlayer, num);
    }

    const switchActivePlayer = () => {
        activePlayer = activePlayer == players[0] ? players[1] : players[0];
    }

    return {getPlayerHasWon, getComputerHasWon, getActivePlayer, switchActivePlayer, getGameIsOver, addToPlayer};
})();

export default Game;
