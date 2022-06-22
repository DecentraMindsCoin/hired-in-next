import React, { useState } from 'react'

const UseRef = () => {
  const [name, setName] = useState('')
  return (
    <div>
      <input onChange={e => setName(e.target.value)}/>
      <div>My name is {name} </div>
    </div>
  )
}

export default UseRef
