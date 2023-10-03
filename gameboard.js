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
        [3, 4, 8],
        [3, 5],
        [1, 4, 7],
        [2, 6]
    ];

    const player = [], computer = [];
    const board = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    //influence ai decisions, check game won/lost
    const pgCount = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    const cpCount = [0, 0, 0, 0, 0, 0, 0, 0, 0];

    const getCpCount = () => cpCount;
    const getPgCount = () => pgCount;

    const updateNumbers = (person, n) => {
        if (person == "Player") {
            player.push(n);
        } else {
            computer.push(n);
        }
    };

    const updateBoard = (n) => {
        let index = board.indexOf(n);
        if (index > -1) {
            board.splice(index, 1);
        };
    }

    const updateCounts = (person, n) => {
        const holder = occupied[n - 1];
        for (let i = 0; i < holder.length; i++) {
            if (person == "Player") {
                pgCount[holder[i]]++;
            } else {
                cpCount[holder[i]]++;
            }
        }
    };

    const someoneHasWon = () => {
        const playersWon = pgCount.some(value => value >= 3);
        const computersWon = cpCount.some(value => value >= 3);
        return playersWon || computersWon;
    };

    return {updateNumbers, updateBoard, updateCounts, someoneHasWon, getCpCount, getPgCount};
})();

export default GameBoard;
