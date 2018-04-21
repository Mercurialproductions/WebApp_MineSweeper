//generates the player board
//@param numberOfRows
//@param numberOfColumns: creates the board size

const generatePlayerBoard = function(numberOfRows,numberOfColumns) {
var board =[];

for(var i = 0; i < numberOfRows; i++ )   {

  var row = [];

  for(var j = 0; j < numberOfColumns; j++) {

    row.push(' ');

  }

  board.push(row);

}

return board;
}

// console.log(generatePlayerBoard(5,5));

//function that generates and places bombs on the Board
//@param numberOfRows
//@param numberOfColumns: creates the size of the Board
//@param numberOfBombs: specifies the total number of bombs to be placed

const generateBombBoard = function(numberOfRows,numberOfColumns,numberOfBombs) {

  var board =[];

  for(var i = 0; i < numberOfRows; i++ )   {

    var row = [];

    for(var j = 0; j < numberOfColumns; j++) {

      row.push(null);

    }

    board.push(row);

  }


var numberOfBombsPlaced;

for(numberOfBombsPlaced = 0;numberOfBombsPlaced < numberOfBombs;numberOfBombsPlaced++) {

var randomRowIndex = Math.floor(Math.random() * numberOfRows);
var randomColumnIndex = Math.floor(Math.random() * numberOfColumns);
board[randomRowIndex][randomColumnIndex] = 'B';
//need to add code that check if space allready has a bomb before placing it.
}

  return board;

}

// console.log(generateBombBoard(5,5,10));
//

const printBoard = function(board) {

console.log(board.map(row => row.join(' | ')).join('\n'));

return board;
}

const playerBoard = generatePlayerBoard(5,5);
const bombBoard = generateBombBoard(5,5,10);

console.log("Player Board ");
printBoard(playerBoard);

console.log("Bomb Board");
printBoard(bombBoard);

// console.log('Current Board:');
// console.log(board[0].join(" "));
// console.log(board[1].join(" "));
// console.log(board[2].join(" "));
// }
//
// var board = [
//   [' ','|',' ','|',' '],
//   [' ','|',' ','|',' '],
//   [' ','|',' ','|',' '],
// ];
//
// printBoard(board);
//
// board[0][2] = 1;
// board[2][4] = "B";
//
// printBoard(board);
