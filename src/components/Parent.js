import React, { useState } from 'react'
import Child from '../components/Child'
function Parent() {
  const [word, setWord] = useState('Larry')
  const styles = {
    wrapper: `text-center w-full font-mono mx-auto  h-full py-7 bg-black bg-opacity-50 hover:bg-opacity-90 font-bold uppercase tracking-wider italic cursor-pointer space-y-5`,
  }
  return (
    <div className={styles.wrapper}>
      <h1 className="">{word}</h1>
      <Child changeWord={word => setWord(word)}/>
    </div>
  )
}

export default Parent
