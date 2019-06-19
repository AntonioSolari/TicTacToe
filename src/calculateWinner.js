export function calculateWinner(squares) {
  let winningCombinations = [];
  let winningRow = [];
  let winningColumns = [];
  let winningDiagonalA = [];
  let winningDiagonalB = [];
  const squaresLength = Math.sqrt(squares.length);
  for (let i = 0; i < squaresLength; i++) {
    winningRow = [];
    for (let j = 0; j < squaresLength; j++) {
      winningRow.push(i * squaresLength + j);
    }
    if (i < squaresLength) {
      winningDiagonalA.push(winningRow[i]);
      winningDiagonalB.push(winningRow[winningRow.length - 1 - i]);
    }
    winningCombinations.push(winningRow);
  }
  for (let i = 0; i < squaresLength; i++) {
    let winningColumn = winningCombinations.map(combination => combination[i]);
    winningColumns.push(winningColumn);
  }
  winningCombinations.push(...winningColumns);
  winningCombinations.push(winningDiagonalA);
  winningCombinations.push(winningDiagonalB);
  for (let i = 0; i < winningCombinations.length; i++) {
    if (squares[winningCombinations[i][0]]) {
      for (let j = 0; j < squaresLength - 1; j++) {
        if (
          squares[winningCombinations[i][j]] ===
          squares[winningCombinations[i][j + 1]]
        ) {
          if (j === squaresLength - 2) {
            return true;
          }
        } else {
          break;
        }
      }
    }
  }
  return null;
}
