//Handles the ai logic of the the game
import GameBoard from "./gameboard";

const Ai = (() => {

    const smartChoice = () => {
        const occupied = GameBoard.getOccupied();

        //If computer close to winning return the winner
        for (let i = 0; i < GameBoard.getBoard().length; i++) {
            const possible = GameBoard.getBoard()[i];
            for (let j = 0; j < occupied[possible - 1].length; j++) {
                if (GameBoard.getCpCount()[occupied[possible - 1][j]] == 2) {
                    return i;
                }
            }
        }
        //if player is about to win block him
        for (let i = 0; i < GameBoard.getBoard().length; i++) {
            let blocker = GameBoard.getBoard()[i];
            for (let j = 0; j < occupied[blocker - 1].length; j++) {
                if (GameBoard.getPgCount()[occupied[blocker - 1][j] == 2]) {
                    return i;
                }
            }
        }

        //Return best possible number
        for (let i = 0; i < GameBoard.getBoard().length; i++) {
            const possible = GameBoard.getBoard()[i];
            for (let j = 0; j < occupied[possible - 1].length; j++) {
                const whatgroup = occupied[possible - 1][j];
                if ((GameBoard.getCpCount()[whatgroup] == 1) && (GameBoard.getPgCount()[whatgroup] == 0)) {
                    return i;
                }
            }
        }

        //If 5 is still on board return index
        for (let i = 0; i < GameBoard.getBoard().length; i++) {
            if (GameBoard.getBoard()[i] == 5) {
                return i;
            }
        }

        //if number is even return it's index
        for (let i = 0; i < GameBoard.getBoard().length; i++) {
            if (GameBoard.getBoard()[i] % 2 == 0) {
                return i;
            }
        }

        //if all else fails return a random number on board
        return Math.floor(Math.random(0, GameBoard.getBoard().length));
    };

    const randomMoves = () => {
        const boardLen = GameBoard.getBoard().length;
        return Math.floor(Math.random() * boardLen);
    };

    return {smartChoice, randomMoves};
})();

export default Ai;
