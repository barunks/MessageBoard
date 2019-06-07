import React, { Component } from "react";
import MessageBoard from "./MessageBoard/components/MessageBoard.js";
import SimpleStorage from "react-simple-storage";
import image from "./Util/images/SocialMessage.jpg";
import {MAXNUM} from "./Util/constants/constants";
import "./App.css";


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      text: "",
      items: []
    };
  }
  handleValueChange(event) {
    this.setState({ text: event.target.value });
  }

  handleUserNameChange(event) {
    this.setState({ username: event.target.value });
  }

  addItem() {
    let itemsCopy = this.state.items.slice();
    let nameString = this.state.username.substring(0, 20);
    let textString = this.state.text;
    let formatString = textString.split(/[\r\n]/g);
    if (
      !nameString.trim() ||
      nameString.length === 0 ||
      textString.length === 0 ||
      !textString.trim()
    ) {
      console.log(
        "Either Name of Comment Box Input is Empty or not correct! Kindly Input Again..."
      );
      this.setState({ items: itemsCopy, username: "", text: "" });
      return;
    }
    itemsCopy.push({ title: nameString, comment: formatString, score: 0 });
    itemsCopy.sort((a, b) => {
      return b.score - a.score;
    });
    
    if (itemsCopy.length > MAXNUM)
      itemsCopy.splice(MAXNUM, itemsCopy.length - MAXNUM);
    this.setState({ items: itemsCopy, username: "", text: "" });
  }

  updateScore(index, val) {
    let itemsCopy = this.state.items.slice();
    itemsCopy[index].score += val;
    itemsCopy.sort((a, b) => {
      return b.score - a.score;
    });
    this.setState({ items: itemsCopy });
  }

  removeItem(index) {
    var itemsCopy = this.state.items.slice();
    itemsCopy.splice(index, 1);
    itemsCopy.sort((a, b) => {
      return b.score - a.score;
    });
    this.setState({ items: itemsCopy });
  }

  render() {
    return (
      <div className="App">
        <SimpleStorage parent={this} />
        <article className="post">
          <h1>Social Messaging Board</h1>
          <img className="App-img"
            alt="Social Message World"
            title="Social Message Board"
            width="560"
            height="315"
            src={image}
          />
          <p>Free up your mind and add your opinion!!</p>
        </article>
        <section className="comments-form">
          <label>Name:</label>
          <input
            value={this.state.username}
            onChange={this.handleUserNameChange.bind(this)}
          />
          <label>Comment:</label>
          <textarea
            value={this.state.text}
            onChange={this.handleValueChange.bind(this)}
          />
          <button onClick={() => this.addItem()}>Speak Your Mind</button>
        </section>
        <MessageBoard
          postList={this.state.items}
          updateScore={this.updateScore.bind(this)}
          removeItem={this.removeItem.bind(this)}
        />
      </div>
    );
  }
}

export default App;
