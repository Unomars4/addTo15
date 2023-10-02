//Handles all the gameboard logic and functionality
const GameBoard = (() => {
    //3 numbers that add up to 15
    const groups = [
        "",
        "3 4 8",
        "1 5 9",
        "2 6 7",
        "1 6 8",
        "3 5 7",
        "2 4 9",
        "2 5 8",
        "4 5 6"
    ];

    //Tells you which numbers are in which groups(N + 1)
    const occupied = [
        [2, 4],
        [3, 6, 7],
        [1, 5],
        [1, 6, 8],
        [2, 5, 7, 8],
        [3, 4, 7],
        [3, 5],
        [1, 4, 7],
        [2, 6]
    ];

    const player = [], computer = [];
    const board = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    //influence ai decisions, check game won/lost
    const pgCount = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    const cpCount = [0, 0, 0, 0, 0, 0, 0, 0, 0];

    return {};
})();

export default GameBoard;
