import React from 'react'
import { useState, useEffect } from 'react'

const styles = {
  wrapper: `text-center w-full font-mono mx-auto  h-full py-7 bg-white font-bold uppercase tracking-wider italic cursor-pointer space-y-5 border-2 border-black`,

  container: ` w-full flex-row space-x-3`,

  button: `rounded-full border-2 px-2  py-1`,

  input: `border-2 outline-none px-5 rounded-xl border-2 border-black`,
}
const ScrollEvent = () => {
  const [count, setCount] = useState(0)

  const handleScroll = () => {
    setCount(count + scrollY)
  }
  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  })
  return (
    <div className={styles.wrapper}>
      <p>You have moved {count} spots</p>
      <button onClick={() => setCount(count + 1)}>Move a spot</button>
    </div>
  )
}

export default ScrollEvent
