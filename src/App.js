import React, { useState } from "react";
import Board from "./components/Board";
import Game from "./styledComponents/styledGame";
import Title from "./styledComponents/styledTitle";
function App() {
  const size = 9;
  const [squares, setSquares] = useState(Array(size).fill(null));
  const [turnX, setTurnX] = useState(true);
  function handleClick(i) {
    if (squares[i]) {
      return;
    }
    const newSquares = squares;
    console.log(newSquares);
    newSquares[i] = turnX ? "X" : "O";
    setSquares(newSquares);
    setTurnX(prevTurn => !prevTurn);
    console.log(turnX);
  }
  return (
    <Game>
      <Title>TicTacToe</Title>
      <Board squares={squares} onClick={i => handleClick(i)} />
    </Game>
  );
}

export default App;
