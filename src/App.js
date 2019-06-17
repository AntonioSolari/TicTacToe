import React, { useState } from "react";
import Board from "./components/Board";
import Game from "./styledComponents/styledGame";
import Title from "./styledComponents/styledTitle";
function App() {
  const [squares, setSquares] = useState(Array(9).fill(null));

  return (
    <Game>
      <Title>TicTacToe</Title>
      <Board squares={squares} />
    </Game>
  );
}

export default App;
