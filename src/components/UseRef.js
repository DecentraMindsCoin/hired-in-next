import React, { useState } from 'react'

const UseRef = () => {
  const styles = {
    wrapper: `text-center w-full font-mono mx-auto  h-full py-7 bg-black bg-opacity-50 hover:bg-opacity-90 font-bold uppercase tracking-wider italic cursor-pointer space-y-5`,
  }
  const [name, setName] = useState('')
  return (
    <div className={styles.wrapper}>
      <input onChange={(e) => setName(e.target.value)} />
      <div>My name is {name} </div>
    </div>
  )
}

export default UseRef
