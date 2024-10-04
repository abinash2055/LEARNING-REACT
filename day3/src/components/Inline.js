import React from 'react'

const heading = {
    fontSize: '55px',
    color: 'blue'
}

function Inline() {
  return (
    <div>
      <h1 className='error'>Error from Inline Component</h1>
      <h1 style={heading}>Inline</h1>
    </div>
  )
}

export default Inline
