import React, { Component } from "react";
import LifecycleB from "./LifecycleB";

class LifecycleC extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Hello Coder",
    };
    console.log("LifecycleC constructor");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("LifecycleC getDerivedStateFromProps");
    return null;
  }

  componentDidMount() {
    console.log("LifecycleC componentDidMount");
  }

  shouldComponentUpdate() {
    console.log("LifecycleC shouldComponentUpdate");
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("LifecycleC getSnapshotBeforeUpdate");
    return null
  }

  componentDidUpdate() {
    console.log("LifecycleC componentDidUpdate");
  }

  changeState = () => {
    this.state({
        name: 'Hello D from C'
    })
  }

  render() {
    console.log("LifecycleC render");
    return (
      <div>
        <div>This is Lifecycle C different methods.</div>
        <button onClick={this.changeState}>Change State</button>
        <LifecycleB />
      </div>
    );
  }
}

export default LifecycleC;
