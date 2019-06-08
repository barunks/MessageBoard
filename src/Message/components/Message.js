import React, { Component } from "react";
import { UpButton, DownButton, DelButton, DisplayComment, DisplayVote } from "../styles/MessageStyled";
import {DURATION} from "../../Util/constants/constants";

class Message extends Component {
  componentDidMount() {
    this.interval = setInterval(() => this.props.decrementScore(), parseInt(DURATION));
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  increment = () => this.props.incrementScore();
  decrement = () => this.props.decrementScore();
  remove = () => this.props.removeItem();

  render() {
    return (
      <DisplayComment>
        <h1>{this.props.title}</h1>
        <p>{this.props.comment}</p>
        <DelButton onClick={this.remove}>x</DelButton>
        <DisplayVote>
            <UpButton onClick={this.increment}>upvote</UpButton>
            <DownButton onClick={this.decrement}>downvote</DownButton>
            <DisplayVote>Scores: {this.props.score}</DisplayVote>
        </DisplayVote>
      </DisplayComment>
    );
  }
}

export default Message;
