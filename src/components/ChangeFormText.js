import React from 'react'
import { useState } from 'react'


const styles = {
  wrapper: `w-full text-center space-y-5 py-10 bg-yellow-500 font-mono`,
  heading: `font-bold text-xl uppercase`,
  formContainer: `bg-purple-100 mx-5 rounded-full border-2 border-black`,
  container: `py-5`,
  label: `italic text-black`,
  inputContainer: `py-5`,
  input: ``,
}

const ChangeFormText = () => {
  const [input, setValue] = useState('')
  const [name, setName] = useState('Larry')

  const handleInput = (event) => {
    setValue(event.target.value);
  }
  const updateName = (event) => {
    event.preventDefault()
    setName(input)
    setValue('')
  }

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.heading}>Hello {`"${name}"`} </h1>
      <form className={styles.form}>
        <div className={styles.container}>
          <label className={styles.label} >Update Name Feild</label>
          <div className={styles.inputContainer}>
            <input
              type="text"
              value={input}
              name="name-1"
              onChange={handleInput}
              className={styles.input}
            />
          </div>
        </div>
        <div >
          <div >
            <button onClick={updateName} >
              Save
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default ChangeFormText
