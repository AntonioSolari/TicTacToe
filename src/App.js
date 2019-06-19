import React, { useState } from "react";
import Board from "./components/Board";
import Game from "./styledComponents/styledGame";
import Title from "./styledComponents/styledTitle";
import { calculateWinner } from "./calculateWinner";
import Restart from "./styledComponents/styledReset";
import GameInfo from "./styledComponents/styledGameInfo";
function App() {
  const size = 25;
  const [squares, setSquares] = useState(Array(size).fill(null));
  const [isX, setTurnX] = useState(true);
  const [winRoundX, setWinRoundX] = useState(0);
  const [winRoundO, setWinRoundO] = useState(0);
  const [tiedRounds, setTiedRounds] = useState(0);
  const isWin = calculateWinner(squares);
  let displayRestart = "none";
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
  function restartGame() {
    const cleanBoard = Array(size).fill(null);
    setSquares(cleanBoard);
    setTurnX(true);
    if (isX) {
      setWinRoundO(prevState => ++prevState);
    } else if (squares.every(Boolean)) {
      setTiedRounds(prevState => ++prevState);
    } else {
      setWinRoundX(prevState => ++prevState);
    }
    displayRestart = "none";
  }

  if (isWin) {
    info = `Winner is player ${isX ? "O" : "X"}!!!`;
    displayRestart = "block";
  } else if (squares.every(Boolean)) {
    info = `It's a tie`;
    displayRestart = "block";
  } else {
    info = "Next player: " + (isX ? "X" : "O");
  }
  return (
    <Game>
      <Title>TicTacToe</Title>
      <GameInfo>
        <p>{info}</p>
        <p>
          Current result:
          <br /> X = {winRoundX}
          <br />O = {winRoundO}
          <br />
          Tied rounds: {tiedRounds}
        </p>
      </GameInfo>
      <Board squares={squares} onClick={i => handleClick(i)} />
      <Restart display={displayRestart} onClick={restartGame}>
        Restart
      </Restart>
    </Game>
  );
}

export default App;
