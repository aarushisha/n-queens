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
  var rounds = n;
  // var columns = 0;
  var board = new Board ({n:n});

  var solutionCount = 0;
  
  var _createBoardForSolutions = function(rounds, startingRow, board) {
    if (startingRow === rounds) {
      solutionCount+=1;
      return ;
    }
    
    if (startingRow===0) {
      board = new Board({n: rounds});
      //console.log("Starting a new Board:", board);
    }
    for (var col = 0; col < rounds; col++) {
      //console.log ("Going to toggle for Row:", startingRow," and Column:", col);
      board.togglePiece(startingRow, col);
      if (!board.hasAnyRooksConflicts()) {
        //console.log("Going into recusrion with Rounds:, rounds
         _createBoardForSolutions(rounds,startingRow +1 , board );
      }
      board.togglePiece(startingRow, col);
    }
  }
  _createBoardForSolutions(rounds,0, board);
  //console.log("# Solution for N:", n ," is ", solutionCount);
  return solutionCount;
}

/*  var _createBoardForSolutions = function(functionForConflicts, rounds, startingRow, board) {
  let solutionCount =0;
  if (startingRow === rounds) {
    solutionCount+=1;
    // if (!board.hasAnyRooksConflicts()) {
      
    //   // console.log("Solution Board:", board.rows());
    //   // debugger;
      
    // }
    return solutionCount;
  }
  
  if (startingRow===0) {
    board = new Board({n: rounds});
    console.log("Starting a new Board:", board);
  }
  for (var col = 0; col < rounds; col++) {
    console.log ("Going to toggle for Row:", startingRow," and Column:", col);
    board.togglePiece(startingRow, col);
    if (!functionForConflicts.call(board)) {
      //console.log("Going into recusrion with Rounds:, rounds
      solutionCount += _createBoardForSolutions(functionForConflicts,rounds,startingRow +1 , board );
      }
    board.togglePiece(startingRow, col);
  }
    return solutionCount;
  }*/
  



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
