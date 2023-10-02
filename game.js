//Handles all the game logic,turns, whether its over or not
import GameBoard from "./gameboard"

const Game = (() => {
    const players = ["Player", "Computer"]
    const activePlayer = players[0];

    const switchActivePlayer = () => {
        return activePlayer == players[0] ? players[1] : players[0];
    }
    return {};
})();

export default Game;
