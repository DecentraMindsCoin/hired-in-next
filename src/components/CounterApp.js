import React from 'react'
import { useState } from 'react'

const CounterApp = () => {
  const [counter, setCounter] = useState(0)

  return (
    <div className="w-full h-full mx-auto text-center bg-red-500 py-10 text-xl font-mono space-y-5">
      <h1 className="uppercase underline font-bold ">Counter App</h1>
      <h2>Counter: {counter}</h2>
      <button onClick={() => setCounter(counter + 1)}>Increment</button>
      <button onClick={() => setCounter(counter - 1)}>Decrement</button>
    </div>
  )
}

export default CounterApp
 