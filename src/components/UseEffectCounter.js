import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const UseEffectCounter = () => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    document.title = `You clicked ${count} times`
  })
  return (
    <div className="relative mx-auto h-full  w-full space-y-5 bg-pink-400 text-center font-mono ">
      <div className="absolute top-1/3 w-full">
        <h1 className="underline text-xl font-bold uppercase">You Clicked {count} times</h1>
        <button
          className="rounded-full border-2 px-4 py-1 my-5 hover:bg-white hover:text-black "
          onClick={() => setCount(count + 1)}
        >
          Click Me{' '}
        </button>
      </div>
    </div>
  )
}

export default UseEffectCounter
