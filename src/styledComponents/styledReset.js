import styled from "styled-components";

export default styled.button`
  width: 120px;
  height: 30px;
  border: solid 1px black;
  border-radius:3px;
  display: inline-block;
  box-sizing: border-box;
  margin-top:15px;
  display:${props=>props.display};
`;
