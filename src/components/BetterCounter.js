import React from 'react'
import { useState, useEffect } from 'react'

const styles = {
  counter: ' bg-cyan-500 text-center h-56 flex relative',
  countVal: 'absolute top-1/3 w-full mx-auto text-4xl',
  buttons: 'flex justify-between w-full px-5 pt-40',
  incButton: 'text-white uppercase font-bold rounded-full px-5 my-3 border-4 border-white shadow-cyan-400 shadow-xl bg-black'
}
const tw = styles;



const BetterCounter = () => {
  const [count, setCount] = useState(0)
  const increment = () => {
    setCount(count + 1)
}
const [secondCount, setSecondCount] = useState(5);
useEffect(() => {
    setCount(count + 1)
}, [secondCount])
console.log(count)
  return (
    <div className={tw.counter}>
      <h1 className={tw.countVal}>{count} - {secondCount}</h1>
      <div className={tw.buttons}>
        {/* <button className={tw.incButton} onClick={increment}>increment</button>
        <button className={tw.incButton} onClick={() => setCount(count - 1)}>decrement</button> */}
        <button onClick={() => setSecondCount(secondCount + 1)}>Increment Second</button>
      </div>
    </div>
  )
}

export default BetterCounter
