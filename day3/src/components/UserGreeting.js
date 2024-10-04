import React, { Component } from "react";

class UserGreeting extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: true,
    };
  }

  render() {
    // show data when loggedIn is true
   return this.state.isLoggedIn && <div>Welcome Day3 Coder</div>
  }
}
export default UserGreeting;


    // Ternary Operator render Method
//     return this.state.isLoggedIn ? (
//       <div>Welcome Day3 Coder</div>
//     ) : (
//       <div>Welcome Guest</div>
//     );
//   }
// }
// export default UserGreeting;

    // variable render Method
//     let message
//     if (this.state.isLoggedIn) {
//       message = <div>Welcome Day3 Coder</div>;
//     } else {
//       message = <div>Welcome Guest</div>;
//     }

//     return ( 
//       <div>
//         {message}
//       </div>
//     )
//   }
// export default UserGreeting

    // if-else render Method
    // if (this.state.isLoggedIn) {
    //   return <div>Welcome Day3 Coder</div>;
    // } else {
    //   return <div>Welcome Guest</div>;
    // }

    // return (
    //   <div>
    //     <div>Welcome Day3 Coder</div>
    //     <div>Welcome Guest</div>
    //   </div>
    // );
//   }
// }
// export default UserGreeting;
