import React, { Component } from "react";

// Props Component Method
// class Welcome extends Component {
//   render() {
//     return <h1>Welcome {this.props.name} a.k.a {this.props.heroName}</h1>;
//   }
// }

// For Destructing Props
// class Welcome extends Component {
//   render() {
//     const {name, heroName} = this.props
//     return (
//       <h1>
//         Welcome {name} a.k.a {heroName}
//       </h1>
//     );
//   }
// }
// export default Welcome

class Welcome extends Component {
  render() {
    const { name, heroName } = this.props;
    // const { state1, state2 } = this.state;
    return (
      <h1>
        Welcome {name} a.k.a {heroName}
      </h1>
    );
  }
}

export default Welcome
