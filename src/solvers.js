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
  // console.log('n: ', n);
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

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  
  var board = new Board( {n:n});
  var solutionCount = 0;
  var _createBoardForSolutions = function(rounds, startingRow, board) {
    if (rounds !== 0 && startingRow === rounds) {
      console.log('when startingRow === rounds', rounds);
      solutionCount += 1;
      solution = board.rows();
      return;
    }
    for (var col = 0; col < rounds; col++) {
      console.log("toggle startingRow: ", startingRow, 'toggle col: ', col);
      board.togglePiece(startingRow, col);
      if (!board.hasAnyQueensConflicts()) {
        _createBoardForSolutions(rounds, startingRow + 1, board)
      }
      if (solutionCount > 0) {
        solution = board.rows();
        return;
      }
      board.togglePiece(startingRow, col);
    }
    
  };

  // if (n === 0) {
  //   console.log('n === 0');
  //   solution = [];
  // } else 
  if ( n === 2 || n === 3) {
    solution = board.rows();
    console.log('solution if empty board when n === 2 or n === 3: ', solution);
  } else {
    _createBoardForSolutions(n, 0, board);
    solution = board.rows()
  }
  console.log('returned board ', solution);
  return solution;
    
   

  // var solutionCount = 0;
  // var _createBoardForSolutions = function(rounds, startingRow, board) {
  //   var rounds = n;
  //   if (startingRow === 0) {
  //     board = new Board({n: rounds});
  //     console.log("Starting a new Board:", board.rows());
  //   }

  //   if (startingRow === rounds) {
  //     solutionCount+=1;
  //     console.log('starting row === rounds, returning board: ', board);
  //     return board;
  //   }

  //   for (var col = 0; col < rounds; col++) {
  //     //console.log ("Going to toggle for Row:", startingRow," and Column:", col);
  //     board.togglePiece(startingRow, col);
  //     if (!board.hasAnyQueensConflicts()) {
  //       //console.log("Going into recusrion with Rounds:, rounds
  //       board = _createBoardForSolutions(rounds,startingRow +1 , board );
  //       //  if (solutionCount>0) {
  //       //   console.log("Found solution. Returning board", board);
  //       //   return board;
  //       // } 
  //     }
  //     board.togglePiece(startingRow, col);
  //   }
  //   console.log("Returning board in case the solution is not found", board);
  //   return board;
  // }

  // var board = new Board({n: n});

  // _createBoardForSolutions(n, 0, board);
  // console.log('Single solution for ' + n + ' queens:', JSON.stringify(board));
  // //should it be (board.rows())??
  // console.log('board returned: ', board);
  // console.log('board.rows() returned: ', board.rows());
  // return board;
  // // }


};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  // var solutionCount = undefined; //fixme
  // console.log('n: ', n);
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
      if (!board.hasAnyQueensConflicts()) {
        //console.log("Going into recusrion with Rounds:, rounds
         _createBoardForSolutions(rounds,startingRow +1 , board );
      }
      board.togglePiece(startingRow, col);
    }
  }
  _createBoardForSolutions(rounds,0, board);

  // console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
