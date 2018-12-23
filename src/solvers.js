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
  var rounds = n;
  console.log('rounds: ', rounds);
  var solutionCount =0;
  var _createBoardForSolutions = function(rounds, startingRow, board) {
    
    if (startingRow === 0) {
      board = new Board({n: rounds});
      if (n === 0) {
        return board.rows();
      }
      console.log("Starting a new Board:", board.rows());
    }

    if (startingRow === rounds) {
      solutionCount+=1;
      console.log('starting row === rounds, returning board: ', board);
      return board;
    }

    for (var col = 0; col < rounds; col++) {
      //console.log ("Going to toggle for Row:", startingRow," and Column:", col);
      board.togglePiece(startingRow, col);
      if (!board.hasAnyQueensConflicts()) {
        //console.log("Going into recusrion with Rounds:, rounds
        board = _createBoardForSolutions(rounds,startingRow +1 , board );
         if (solutionCount>0) {
          console.log("Found solution. Returning board", board);
          return board;
        } 
      }
      solution.togglePiece(startingRow, col);
    }
    console.log("Returning board in case the solution is not found", board);
    return board.rows();
  }
  var board = new Board({n: n});
  var solution = _createBoardForSolutions(n,0,board);


  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  //should it be (board.rows())??
  console.log('board returned: ', board);
  console.log('board.rows() returned: ', board.rows());
  return board.rows();


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
