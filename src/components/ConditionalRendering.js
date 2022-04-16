import React from 'react'
import DataBinding from '../components/DataBinding'
import TestImage from "../components/TestImage"
import { useState } from 'react'

const ConditionalRendering = () => {
  const [isToggled, setIsToggled] = useState(false)

  return (
    <div>
     
      <button onClick={() => setIsToggled(!isToggled)}>Toggle</button>
      { isToggled && <TestImage /> }
      {/* { isToggled ? <DataBinding /> : <p>The value is false</p> } */}
    </div>
  )
}

export default ConditionalRendering
