import React, { useState } from 'react'

const Palindrome = () => {
  const [success, setSuccess] = useState(false)
  const [fail, setFail] = useState(false)
  const styles = {
    container: 'w-full flex-row text-center space-y-5',
    heading: 'w-full text-3xl font-bold uppercase underline',
    input: 'w-full text-center ring-2 ring-black rounded-full outline-none',
    button: 'w-1/2 rounded-full px-3 border-2 border-black',
    interact: 'flex w-full',
    success: 'text-emerald-500',
    failure: 'text-amber-500',
  }
  const tw = styles
  let input
  let palindrome = []
  const handleInput = (e) => {
    input = e.target.value
    console.log(input)
  }

  const reverseWord = (value) => {
    for (let i = value.length - 1; i > -1; i--) {
      const elem = value[i]
      console.log(elem)
      palindrome.push(elem)
    }
  }
  const clearPalindrome = () => {
    palindrome = []
  }
  const concatWord = () => {
    palindrome = palindrome.join('')
    console.log(palindrome)
  }
  const confirmMatch = () => {
    if (input === palindrome) {
      setSuccess(true)
      return
    }
    setFail(true)
  }
  const resetPalindrome = () => {
      if (fail || success) {
          setFail(false)
          setSuccess(false)
      }
  }
  const checkPalindrome = (value) => {
      resetPalindrome()
    reverseWord(value)
    concatWord()
    confirmMatch()
    clearPalindrome()
  }
  return (
    <div className={tw.container}>
      <h1 className={tw.heading}>Palindrome Test</h1>
      <div className={tw.interact}>
        <input
          onChange={(e) => handleInput(e)}
          type="text"
          placeholder="test palindrone"
          className={tw.input}
        />
        <button onClick={() => checkPalindrome(input)} className={tw.button}>
          Submit
        </button>
      </div>
      {success && <div className={tw.success}>That a palindrome!</div>}
      {fail && <div className={tw.failure}>That a not palindrome!</div>}
    </div>
  )
}

export default Palindrome
