import React from "react";


// react without changing Value
// const Greet = (props) => {
//     console.log(props);
//     return (
//       <div>
//         <h1>
//           Hello {props.name} commonly called {props.heroName}
//         </h1>
//         {props.children}
//       </div>
//     );
// }

// export default Greet


// For Destructing props
const Greet = props => {
  const {name, heroName} = props
  return (
    <div>
      <h1>
        Hello {name} commonly called {heroName}
      </h1>
    </div>
  );
}
export default Greet
