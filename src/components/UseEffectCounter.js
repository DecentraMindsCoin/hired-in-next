import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'


const styles = {
  wrapper: `relative mx-auto h-full  w-full space-y-5 bg-pink-400 text-center font-mono `,
  container: `absolute top-1/3 w-full`,
  heading: `underline text-xl font-bold uppercase`,
  button: `rounded-full border-2 px-4 py-1 my-5 hover:bg-white hover:text-black `,

}
const UseEffectCounter = () => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    document.title = `You clicked ${count} times`
  })
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <h1 className={styles.heading}>You Clicked {count} times</h1>
        <button
          className={styles.button}
          onClick={() => setCount(count + 1)}
        >
          Click Me{' '}
        </button>
      </div>
    </div>
  )
}

export default UseEffectCounter
