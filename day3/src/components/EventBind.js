// import React, { Component } from 'react'

// class EventBind extends Component {

//     constructor(props) {
//         super(props)
//         this.state = {
//             message: 'Hello Day3 Coder'
//         }
//         this.clickHandler = this.clickHandler.bind(this);
//     }

//     clickHandler() {
//         this.setState({
//             message: 'Goodbye Day3 Coder'
//         })
//         console.log(this);
//     }

//   render() {
//     return (
//       <div>
//         <div>{this.state.message}</div>
//         {/* <button onClick={this.clickHandler.bind(this)}>Click</button> */}
//         {/* <button onClick={() => this.clickHandler()}>Click</button>  */}
//         <button onClick={this.clickHandler}>Click</button> 
//       </div>
//     )
//   }
// }
// export default EventBind

import React, { Component } from 'react'

class EventBind extends Component {
      constructor(props) {
          super(props)
          this.state = {
              message: 'Hello Day3 Coder'
          }
      }

      clickHandler = () => {
          this.setState({
              message: 'Goodbye Day3 Coder'
          })
      }

  render() {
    return (
      <div>
        <div>{this.state.message}</div>
        <button onClick={this.clickHandler}>Click</button>
      </div>
    );
  }
}

export default EventBind

