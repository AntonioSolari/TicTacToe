import React, { useState } from "react";
import Board from "./components/Board";
import Game from "./styledComponents/styledGame";
import Title from "./styledComponents/styledTitle";
import { calculateWinner } from "./calculateWinner";
function App() {
  const size = 9;
  const [squares, setSquares] = useState(Array(size).fill(null));
  const [turnX, setTurnX] = useState(true);
  const isWin=calculateWinner(squares);
  function handleClick(i) {
    if (squares[i] || isWin) {
      return;
    }
    const newSquares = squares;
    newSquares[i] = turnX ? "X" : "O";
    setSquares(newSquares);
    setTurnX(prevTurn => !prevTurn);
  }
  return (
    <Game>
      <Title>TicTacToe</Title>
      <Board squares={squares} onClick={i => handleClick(i)} />
    </Game>
  );
}

export default App;
