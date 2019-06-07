import React, { Component } from 'react';
import '../styles/MessageBoard.css';
import Message from '../../Message/components/Message.js';

class  MessageBoard extends Component{
    render() {
      return (
        <div className="container-board">
          {
            this.props.postList.map((item, index) => (
              <Message key = {index}
                  title = {item.title}
                  comment = {item.comment}
                  score = {item.score}
                  incrementScore = {() => this.props.updateScore(index, 1)}
                  decrementScore = {() => this.props.updateScore(index, -1)}
                  removeItem = {() => this.props.removeItem(index)}
              />
            ))
          }
        </div>
      )
    }
  }
  
export default MessageBoard;