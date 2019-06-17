import React from "react";
import Square from "./Square";
import StyledBoard from "../styledComponents/styledBoard";
function Board(props) {
  return (
    <StyledBoard>
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
