//Handles the ai logic of the the game
import GameBoard from "./gameboard";

const Ai = (() => {


    const smartChoice = () => {

    };

    const randomMoves = () => {
        const boardLen = GameBoard.getBoard().length;
        return Math.floor(Math.random() * boardLen);
    };

    return {smartChoice, randomMoves};
})();

export default Ai;
