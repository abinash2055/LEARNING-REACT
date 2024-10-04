import React from 'react'

// Click Handler
function FunctionClick() {
    function clickHandler() {
        console.log('Button Clicked');
    }

  return (
    <div>
      <button onClick={clickHandler}>Click Me</button>
    </div>
  )
}

export default FunctionClick
