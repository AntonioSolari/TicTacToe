import React,{useState} from "react";
import Board from "./components/Board";
import Title from "./components/Title";
import Game from "./components/Game";
import Square from "./components/Square";

function App() {
    const arrayBoard=Array(9).fill(null)
  return (
    <Game>
      <Title>TicTacToe</Title>
      <Board>
           {arrayBoard.map(()=> <Square></Square>)}
      </Board>
    </Game>
  );
}

export default App;
