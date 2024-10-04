import React, { Component } from 'react'

// Click Handler
class ClassClick extends Component {

  clickHandler() {
    console.log('Button Clicked')
  }

  render() {
    return (
      <div>
        <button onClick={this.clickHandler}>Click Me Ha Ha</button>
      </div>
    )
  }
}

export default ClassClick
