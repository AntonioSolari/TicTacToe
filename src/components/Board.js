import React from "react";
import Square from "./Square";
import StyledBoard from "../styledComponents/styledBoard";
function Board(props) {
  const boardSize = `${Math.sqrt(props.squares.length) * 50}px`;
  return (
    <StyledBoard size={boardSize}>
      {props.squares.map((square, index) => (
        <Square
          key={index}
          value={square}
          onClick={() => props.onClick(index)}
        />
      ))}
    </StyledBoard>
  );
}

export default Board;
