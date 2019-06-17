import React from "react";
import Square from "./Square";
import StyledBoard from "../styledComponents/styledBoard";
function Board(props) {
  return (
    <StyledBoard>
      {props.squares.map(() => (
        <Square />
      ))}
    </StyledBoard>
  );
}

export default Board;
