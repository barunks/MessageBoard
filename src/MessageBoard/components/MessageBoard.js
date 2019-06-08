import React, { Component } from 'react';

import Message from '../../Message/components/Message.js';
import { ContainerBoard } from '../styles/MessageBoardStyled';

class  MessageBoard extends Component{
    render() {
      return (
        <ContainerBoard>
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
        </ContainerBoard>
      )
    }
  }
  
export default MessageBoard;