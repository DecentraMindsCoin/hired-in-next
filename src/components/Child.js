import React from 'react'
import {useState} from 'react'
function Child(props) {

  return (
    <div>
      <h1>Child</h1>
      <button onClick={() => props.changeWord('Edward')} className='hover:cursor-pointer'>Click Me</button>
    </div>
  )
}

export default Child
