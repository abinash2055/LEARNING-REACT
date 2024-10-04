import React from "react";

// From JSX Method
    // const Hello = () => {
    //   return (
    //     <div className="dummyClass">
    //       <h1>Hello Coder from JSX</h1>
    //     </div>
    //   )
    // }
    // export default Hello



// Without JSX Method
    // Method One without h1 Tag and no id
        // const Hello = () =>  {
        //     return React.createElement('div', null, 'Hello Coder without using JSX')
        // }
        // export default Hello



// Method Two with h1 Tag and no id
    // const Hello = () => {
    // return React.createElement(
    //     "div",
    //     null,
    //     React.createElement("h1", null, "Hello Coder without using JSX")
    // );
    // };
    // export default Hello;



    // Method Two with h1 Tag and id
    const Hello = () => {
    return React.createElement(
        "div",
        { id: "hello", className: "dummyClass" },
        React.createElement("h1", null, "Hello Coder without using JSX")
        );
    };
    export default Hello;