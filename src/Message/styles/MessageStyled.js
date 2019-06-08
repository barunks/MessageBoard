import styled from "styled-components";

const UpButton = styled.button`
  background-color: #073525;
  padding: 0.25em 1em;
  border: border: 1px solid #073525;
  border-radius: 3px;
  margin-right: 10px;
`;

const DownButton = styled.button`
  background-color: #ff0026;
  border: 1px solid #ff0026;
  padding: 0.25em 1em;
  border-radius: 3px;
`;

const DelButton = styled.button`
  float: right;
  height: 10px;
  padding: 0 5px;
  text-align: center;
  line-height: 8px;
  white-space: nowrap;
  border-radius: 2px;
  background-color: #331550;
  border: 1px solid #331550;
  cursor: pointer;
  box-sizing: border-box;
`;

const DisplayComment = styled.div`
  padding-top: 5px;
  padding-bottom: 5px;
  border-bottom: 1px dashed #7d91cf;
`;

const DisplayVote = styled.div`
  background-color: ${props => [props.bgcolor]};
  display: flex;
  justify-content: space-between;
  align-content: center;
  margin: auto;
`;

export { UpButton, DownButton, DelButton, DisplayComment, DisplayVote };
