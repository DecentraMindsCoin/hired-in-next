import React from 'react'
import { useState } from 'react'

const style = {
  wrapper: `w-full h-full mx-auto text-center bg-blue-500 py-10 space-y-5 font-mono text-xl`,
  heading: `font-bold uppercase underline text-xl py-5`,
  input: `border-2 border-black rounded-full w-3/4`,
  button: `border-2 border-black bg-gray-300 px-2 py-1 rounded-full`,
}

const DisableButton = () => {
  const [value, setValue] = useState('')

  return (
    <>
      <div className={style.wrapper}>
        <h3 className={style.heading}>Disable Button Challenge</h3>
        <input
          className={style.input}
          type="text"
          onChange={(e) => setValue(e.target.value)}
        />
        <button className={style.button} disabled={value.length < 1}>
          Submit
        </button>
      </div>
    </>
  )
}

export default DisableButton
