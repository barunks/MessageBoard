import React, { Component } from "react";
import styled from "styled-components";
import "../styles/Message.css";

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
  right: 0;
  top: 0;
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
  margin-left: 10px;
`;

class Message extends Component {
  componentDidMount() {
    this.interval = setInterval(() => this.props.decrementScore(), 900000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  increment = () => this.props.incrementScore();
  decrement = () => this.props.decrementScore();
  remove = () => this.props.removeItem();

  render() {
    return (
      <div className="comment">
        <h1>{this.props.title}</h1>
        <p>{this.props.comment}</p>
        <DelButton onClick={this.remove}>x</DelButton>
        <div class="col" className="voting">
          <div className="vote-buttons">
            <UpButton onClick={this.increment}>upvote</UpButton>
            <DownButton onClick={this.decrement}>downvote</DownButton>
          </div>
          <div className="votes">Scores: {this.props.score}</div>
        </div>
      </div>
    );
  }
}

export default Message;
