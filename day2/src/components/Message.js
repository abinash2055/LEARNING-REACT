import React, { Component } from "react";

// Using State Component Method
class Message extends Component {
  constructor() {
    super();
    this.state = {
      message: "Welcome Visitors",
    };
  }

  // Method to handle the button click
  changeMessage = () => {
    this.setState({
      message: "Thank you for subscribing!",
    });
  };

  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        <button onClick={this.changeMessage}>Subscribe</button>
      </div>
    );
  }
}

export default Message;
