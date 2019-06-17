import React, { useState } from "react";
import Board from "./components/Board";
import Game from "./styledComponents/styledGame";
import Title from "./styledComponents/styledTitle";
import { calculateWinner } from "./calculateWinner";
import Restart from "./styledComponents/styledReset"
import GameInfo from "./styledComponents/styledGameInfo"
function App() {
  const size = 9;
  const [squares, setSquares] = useState(Array(size).fill(null));
  const [isX, setTurnX] = useState(true);
  const isWin=calculateWinner(squares);
  let info;
  function handleClick(i) {
    if (squares[i] || isWin) {
      return;
    }
    const newSquares = squares;
    newSquares[i] = isX ? "X" : "O";
    setSquares(newSquares);
    setTurnX(prevTurn => !prevTurn);
  }
  function restartGame()
  {
    const cleanBoard=Array(size).fill(null);
    setSquares(cleanBoard);
    setTurnX(true);
  }
  if(isWin){
    info=`Winner is player ${isX ? "O" : "X"}`
  }
  else{
    info = "Next player: " + (isX ? "X" : "O");
  }
  return (
    <Game>
      <Title>TicTacToe</Title>
      <GameInfo>{info}</GameInfo>
      <Board squares={squares} onClick={i => handleClick(i)} />
      <Restart onClick={restartGame}>Restart</Restart>
    </Game>
  );
}

export default App;
