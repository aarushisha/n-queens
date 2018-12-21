/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other



window.findNRooksSolution = function(n) {
  var solution = new Board ({n: n});
  var rooks = 0;
  for (var row = 0; row < n; row++) {
    for (var column = 0; column < n; column++) {
      solution.togglePiece(row, column);
      rooks += 1;
        if (solution.hasAnyRooksConflicts()) {
          solution.togglePiece(row, column);
          rooks -= 1;
        }
        if (rooks === n) {
          // console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
          return solution.rows();
        }
      }
    }
  return undefined;
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  console.log('n: ', n);
  var solutionCount = 0;
  var rounds = 0;
  var board = new Board ({n:n});
  var createBoardForRooks = function(incompleteBoard, rounds) {
    console.log('incomplete board: ', incompleteBoard.rows());
    console.log('rounds: ', rounds);
    if (rounds === n) {
      solutionCount += 1;
      return;
    } else {       
        for (var col = 0; col < n; col++) {
          incompleteBoard.togglePiece(rounds, col);
          if (incompleteBoard.hasAnyRooksConflicts()) {
            incompleteBoard.togglePiece(rounds, col);
          } else {
            createBoardForRooks(incompleteBoard, rounds + 1);
          }
      }
    }
  }

  console.log("Starting new Board:", board);

  for (var i = 0; i < n; i++) {
    createBoardForRooks(board, rounds);
  }
  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);

  return solutionCount;
};

  

// var RockPaperScissors = function(rounds) {
//   var possibilities = ["rock", "paper", "scissors"];
//   var output = [];
//   var getAllPossibilities = function(partialSet, rounds) {
//     if (rounds === 0) {
//       if (! partialset.hasAnyRooksConflicts){
//       output.push(partialSet);}
//     } else {
//       for (var i = 0; i < possibilities.length; i++) {
//         getAllPossibilities(partialSet.concat(possibilities[i]), rounds - 1);
//       }
//     }
//   };
//   getAllPossibilities(new Board ({n:n}), rounds);
//   return output;
// }
  
//   var solutionCount = 0; //fixme
//   var totalRows =this.rows.length;
//   var totalCols =this.rows.length;

//   var createBoardForRooks = function(inCompleteBoard, r, c, numberofRoundLeft ) {
//     // if (inCompleteBoard.hasAnyRooksConflicts()) { 
//     //   //inCompleteBoard.togglePiece(r,c);  
//     //   return;
//     // }
//     // for (let row = r+1; row < this.rows.lenght; row ++) {
//     //   for (let col = 0; col < this.rows.lenght; col ++) {
//     //     inCompleteBoard.togglePiece(row,col);
//     //     createBoardForRooks (inCompleteBoard,row,col );
//     //     inCompleteBoard.togglePiece(row,col);
        
//     // }

//   }
// }
  // var numberofRoundLeft=totalRows;
  // for (let column =0; column < totalCount ; column++) {
  //   var inCompleteBoard = new Board({n:n});
  //   var startingRow = 0;
  //   inCompleteBoard.togglePiece(startingRow, column);
  //   createBoardForRooks(inCompleteBoard,row,column, numberofRoundLeft - 1);

  // }


// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var solution = undefined;

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
