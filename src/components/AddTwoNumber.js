import React from 'react'
import { useState } from 'react'

const styles = {
  wrapper: `w-full text-center mx-auto text-xl font-mono flex-row bg-green-500 py-10 space-y-5`,
  heading: `font-bold uppercase underline`,
  input: `text-center`,
  button: `rounded-full border-2 px-6 py-3 font-bold uppercase hover:bg-white hover:text-black `,
}
const AddTwoNumber = () => {
  const [number1, setNumber1] = useState()
  const [number2, setNumber2] = useState()
  const [total, setTotal] = useState()

  const calculateTotal = () => {
    setTotal(number1 + number2)
  }

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.heading}>Add two numbers</h1>

      <input
        placeholder="First Number"
        type="number"
        value={number1}
        onChange={(e) => setNumber1(+e.target.value)}
      />
      <input
        className={styles.input}
        placeholder="Second Number"
        type="number"
        value={number2}
        onChange={(e) => setNumber2(+e.target.value)}
      />

      <button className={styles.button} onClick={calculateTotal}>
        Add Two Numbers Together
      </button>
      <p>Total: {total || ''} </p>
    </div>
  )
}

export default AddTwoNumber
