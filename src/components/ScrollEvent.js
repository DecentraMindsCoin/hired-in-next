import React from 'react'
import { useState, useEffect } from 'react'

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
    <div>
      <p>You have moved {count} spots</p>
      <button onClick={() => setCount(count + 1)}>Move a spot</button>
    </div>
  )
}

export default ScrollEvent
